import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import validator from 'validator'

export async function POST(req: Request) {
  try {
    const { email, message } = await req.json();

    if (!email || !message) {
      return NextResponse.json({ error: 'Email and message are required.' }, { status: 400 });
    }

    const cleanEmail = validator.normalizeEmail(email);
    const cleanMessage = validator.escape(message.trim()); // Prevents basic HTML/script injection

if (!validator.isEmail(cleanEmail || '')) {
  return NextResponse.json({ error: 'Invalid email format.' }, { status: 400 });
}

    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: 'Francis Contact Form <raureti.fwe@gmail.com>',
      to: 'raureti.fwe@gmail.com',
      subject: 'New Contact Form Submission',
      text: `From: ${cleanEmail}\n\nMessage: ${cleanMessage}`,
    });

    return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Internal Server Error. Check logs for details.' }, { status: 500 });
  }
}