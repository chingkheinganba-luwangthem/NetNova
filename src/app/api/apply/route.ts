import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const name = formData.get("name") as string | null;
    const email = formData.get("email") as string | null;
    const phone = formData.get("phone") as string | null;
    const role = formData.get("role") as string | null;
    const gender = formData.get("gender") as string | null;
    const message = formData.get("message") as string | null;
    const resume = formData.get("resume") as File | null;

    // 1. Validation
    if (
      !name?.trim() ||
      !email?.trim() ||
      !phone?.trim() ||
      !role?.trim() ||
      !gender?.trim() ||
      !resume
    ) {
      return NextResponse.json(
        { success: false, message: "Missing required fields or resume" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json(
        { success: false, message: "Invalid email format" },
        { status: 400 }
      );
    }

    // Convert File to Buffer
    const arrayBuffer = await resume.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // 2. Configure Nodemailer
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true, // Use SSL for port 465
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // 3. Compose the HTML email
    const mailOptions = {
      from: `"${name.trim()}" <${process.env.SMTP_USER}>`,
      replyTo: email.trim(),
      to: process.env.SMTP_USER,
      subject: `NetNova Job Application: ${role.trim()}`,
      html: `
        <h2>New Job Application</h2>
        
        <p><strong>Name:</strong> ${name.trim()}</p>
        <p><strong>Email:</strong> ${email.trim()}</p>
        <p><strong>Phone:</strong> ${phone.trim()}</p>
        <p><strong>Role:</strong> ${role.trim()}</p>
        <p><strong>Gender:</strong> ${gender.trim()}</p>
        
        <p><strong>Message:</strong></p>
        <blockquote style="border-left: 4px solid #ccc; padding-left: 10px;">
          ${message?.trim().replace(/\n/g, "<br>") || "N/A"}
        </blockquote>
        
        <br>
        <p><em>Submitted on: ${new Date().toLocaleString()}</em></p>
      `,
      attachments: [
        {
          filename: resume.name,
          content: buffer,
        },
      ],
    };

    // 4. Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: "Application sent successfully" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error sending application email:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send application. Please try again later." },
      { status: 500 }
    );
  }
}
