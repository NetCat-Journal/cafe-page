import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {


    const resend = new Resend(process.env.RESEND_API_KEY);

    try {
        const { name, email, message, phone } = await request.json();
        if (!name || !email || !message) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }
        const { data, error } = await resend.emails.send({
            from: 'Quadra Café Website <onboarding@resend.dev>',
            to: 'magdab.78b@gmail.com',
            subject: `New Contact Form: ${name}`,
            html: `
              <h2>New Contact Form Submission</h2>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
              <p><strong>Message:</strong></p>
              <p>${message}</p>
              `
        });
        console.log('data ', data, error);
        if (error) {
            return NextResponse.json({ error }, { status: 500 });
        }
        console.log('Email sent successfully:', data);
        return NextResponse.json({ success: true, data: data });

    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}