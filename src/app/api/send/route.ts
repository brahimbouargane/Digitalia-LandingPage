import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD, // Changed from EMAIL_PASSWORD to match env naming
  },
  tls: {
    rejectUnauthorized: false, // This helps if you have SSL certificate issues
  },
  debug: true, // This will help see detailed errors in console
});

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    // Verify SMTP connection
    await transporter.verify();

    const mailOptions = {
      from: email, // Changed to use authenticated email
      to: process.env.SMTP_USER,
      subject: subject,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          <div style="margin: 20px 0; padding: 20px; background-color: #f5f5f5; border-radius: 5px;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <div style="margin-top: 20px;">
              <p><strong>Message:</strong></p>
              <p style="white-space: pre-wrap;">${message}</p>
            </div>
          </div>
          <div style="margin-top: 20px; color: #666; font-size: 12px;">
            <p>This email was sent from the Digital 6 Solution contact form.</p>
          </div>
        </div>
      `,
      replyTo: email,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Message sent: %s", info.messageId);

    return NextResponse.json(
      { message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Failed to send email",
      },
      { status: 500 }
    );
  }
}
