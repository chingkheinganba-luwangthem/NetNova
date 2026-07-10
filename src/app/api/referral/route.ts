import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      sourceName,
      sourceEmail,
      sourcePhone,
      targetName,
      targetEmail,
      targetPhone,
      referralOptIn
    } = body;

    // 1. Validation and spam prevention
    if (
      !sourceName?.trim() ||
      !sourceEmail?.trim() ||
      !sourcePhone?.trim() ||
      !targetName?.trim() ||
      !targetEmail?.trim() ||
      !targetPhone?.trim()
    ) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(sourceEmail.trim()) || !emailRegex.test(targetEmail.trim())) {
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
      from: `"${sourceName.trim()}" <${process.env.SMTP_USER}>`,
      replyTo: sourceEmail.trim(),
      to: process.env.SMTP_USER,
      subject: `NetNova Referral: ${targetName.trim()}`,
      html: `
        <h2>New Candidate Referral</h2>
        
        <h3>Referrer Information (Reference Source)</h3>
        <p><strong>Name:</strong> ${sourceName.trim()}</p>
        <p><strong>Email:</strong> ${sourceEmail.trim()}</p>
        <p><strong>Phone:</strong> ${sourcePhone.trim()}</p>
        <p><strong>Opt-in to SMS:</strong> ${referralOptIn ? "Yes" : "No"}</p>

        <hr />
        
        <h3>Referred Candidate (Talent Destination)</h3>
        <p><strong>Name:</strong> ${targetName.trim()}</p>
        <p><strong>Email:</strong> ${targetEmail.trim()}</p>
        <p><strong>Phone:</strong> ${targetPhone.trim()}</p>

        <br>
        <p><em>Submitted on: ${new Date().toLocaleString()}</em></p>
      `,
    };

    // 4. Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: "Referral sent successfully" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error sending referral email:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send referral. Please try again later." },
      { status: 500 }
    );
  }
}
