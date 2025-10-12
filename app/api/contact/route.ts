import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validate incoming data
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Log the message (in production, you would send an actual email here)
    console.log('Contact Form Submission:', {
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString(),
    });

    /*
     * TO INTEGRATE EMAIL SERVICE (e.g., Resend):
     * 
     * 1. Install: npm install resend
     * 
     * 2. Add to .env.local:
     *    RESEND_API_KEY=your_api_key_here
     * 
     * 3. Use this code:
     * 
     * import { Resend } from 'resend';
     * const resend = new Resend(process.env.RESEND_API_KEY);
     * 
     * await resend.emails.send({
     *   from: 'SkyGlider <onboarding@resend.dev>',
     *   to: 'hello@theskyglider.com',
     *   subject: `Contact Form: ${subject}`,
     *   html: `
     *     <h2>New Contact Form Submission</h2>
     *     <p><strong>From:</strong> ${name} (${email})</p>
     *     <p><strong>Subject:</strong> ${subject}</p>
     *     <p><strong>Message:</strong></p>
     *     <p>${message}</p>
     *   `,
     * });
     * 
     * For other services like SendGrid, Mailgun, or Nodemailer,
     * follow their respective documentation.
     */

    return NextResponse.json(
      {
        success: true,
        message: 'Message received successfully',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}


