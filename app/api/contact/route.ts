import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase'; // Adjust path if you use a different alias, normally @/lib/firebase works

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    // 1. Validate the input
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // 2. Save to Firebase Firestore
    await db.collection('messages').add({
      name,
      email,
      subject,
      message,
      createdAt: new Date().toISOString(),
      status: 'unread',
    });

    // 3. TODO: Send email using Resend
    // Later when you setup Resend, uncomment and implement the following:
    /*
    import { Resend } from 'resend';
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>', // Update with your verified domain later
      to: ['hello@madrascollective.in'],
      subject: `New Message: ${subject}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    });
    */

    return NextResponse.json(
      { success: true, message: 'Message sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error handling contact form:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
