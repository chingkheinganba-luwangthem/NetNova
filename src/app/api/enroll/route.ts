import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      fullName,
      email,
      phone,
      targetRole,
      plan,
      message,
    } = body;

    // 1. Validation and spam prevention
    if (
      !fullName?.trim() ||
      !email?.trim() ||
      !phone?.trim() ||
      !plan?.trim()
    ) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
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
      from: `"${fullName.trim()}" <${process.env.SMTP_USER}>`,
      replyTo: email.trim(),
      to: "info@netnova-technologies.com",
      subject: `NetNova Alliance Hub Enrollment: ${fullName.trim()}`,
      html: `
        <h2>New Alliance Hub Enrollment</h2>
        
        <p><strong>Name:</strong> ${fullName.trim()}</p>
        <p><strong>Email:</strong> ${email.trim()}</p>
        <p><strong>Phone:</strong> ${phone.trim()}</p>
        <p><strong>Target Role (US Market):</strong> ${targetRole?.trim() || "N/A"}</p>
        <p><strong>Selected Plan:</strong> ${plan.trim()}</p>
        
        <p><strong>Additional Info / Message:</strong></p>
        <blockquote style="border-left: 4px solid #ccc; padding-left: 10px;">
          ${(message || "").trim().replace(/\n/g, "<br>") || "N/A"}
        </blockquote>
        
        <br>
        <p><em>Submitted on: ${new Date().toLocaleString()}</em></p>
      `,
    };

    // 4. Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: "Enrollment sent successfully" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error sending enrollment email:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send enrollment. Please try again later." },
      { status: 500 }
    );
  }
}
