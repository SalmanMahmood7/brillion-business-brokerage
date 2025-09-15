import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { name, email, phone, company, interest, message } = await request.json();

    // Validate required fields
    if (!name || !email || !message || !interest) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create email transporter
    const transporter = nodemailer.createTransporter({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email content
    const emailContent = `
      New Contact Form Submission
      
      Name: ${name}
      Email: ${email}
      Phone: ${phone || 'Not provided'}
      Company: ${company || 'Not provided'}
      Interest: ${interest}
      
      Message:
      ${message}
      
      ---
      Sent from Aldrin Business website contact form
    `;

    // Send email
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: 'info@aldrinbusiness.com',
      subject: `New Contact Form Submission - ${interest}`,
      text: emailContent,
      html: emailContent.replace(/\n/g, '<br>'),
    });

    // Send auto-reply to user
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: email,
      subject: 'Thank you for contacting Aldrin Business',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">Thank you for contacting Aldrin Business!</h2>
          
          <p>Dear ${name},</p>
          
          <p>Thank you for reaching out to us. We've received your inquiry about <strong>${interest}</strong> and will get back to you within 24 hours.</p>
          
          <p>In the meantime, feel free to explore our website or give us a call at <strong>(416) 333-7999</strong> if you have any urgent questions.</p>
          
          <p>Best regards,<br>
          The Aldrin Business Team</p>
          
          <hr style="border: 1px solid #e5e7eb; margin: 20px 0;">
          
          <div style="background-color: #f3f4f6; padding: 15px; border-radius: 8px;">
            <h3 style="margin: 0; color: #374151;">Your Message:</h3>
            <p style="margin: 10px 0 0 0; color: #6b7280;">${message}</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}