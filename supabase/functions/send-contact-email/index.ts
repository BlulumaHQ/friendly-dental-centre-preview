import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors';

interface ContactPayload {
  firstName?: string;
  lastName?: string;
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
  websiteUrl?: string;
}

const escapeHtml = (s: string) =>
  s.replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY');
    if (!RESEND_API_KEY) {
      return new Response(
        JSON.stringify({ success: false, error: 'Email service not configured' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } },
      );
    }

    const body = (await req.json()) as ContactPayload;
    const firstName = (body.firstName ?? '').toString().trim().slice(0, 100);
    const lastName = (body.lastName ?? '').toString().trim().slice(0, 100);
    const fullName = (body.name ?? `${firstName} ${lastName}`).trim() || 'Not provided';
    const email = (body.email ?? '').toString().trim().slice(0, 255);
    const phone = (body.phone ?? '').toString().trim().slice(0, 50) || 'Not provided';
    const service = (body.service ?? '').toString().trim().slice(0, 200) || 'Not specified';
    const message = (body.message ?? '').toString().trim().slice(0, 5000) || 'No message';
    const websiteUrl = (body.websiteUrl ?? '').toString().trim().slice(0, 500) || 'https://friendlydental.ca';

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return new Response(
        JSON.stringify({ success: false, error: 'A valid email is required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } },
      );
    }
    if (!fullName || fullName === 'Not provided') {
      return new Response(
        JSON.stringify({ success: false, error: 'Name is required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } },
      );
    }

    const timestamp = new Date().toLocaleString('en-CA', {
      timeZone: 'America/Vancouver',
      dateStyle: 'full',
      timeStyle: 'long',
    });

    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1a1a1a;">
        <div style="background: #336799; color: #fff; padding: 20px 24px; border-radius: 8px 8px 0 0;">
          <h1 style="margin: 0; font-size: 20px;">New Website Inquiry</h1>
          <p style="margin: 4px 0 0; font-size: 14px; opacity: 0.9;">Friendly Dental Centre</p>
        </div>
        <div style="border: 1px solid #e5e7eb; border-top: 0; padding: 24px; border-radius: 0 0 8px 8px; background: #ffffff;">
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr><td style="padding: 8px 0; color: #6b7280; width: 140px;">Name</td><td style="padding: 8px 0; font-weight: 600;">${escapeHtml(fullName)}</td></tr>
            <tr><td style="padding: 8px 0; color: #6b7280;">Email</td><td style="padding: 8px 0;"><a href="mailto:${escapeHtml(email)}" style="color: #336799;">${escapeHtml(email)}</a></td></tr>
            <tr><td style="padding: 8px 0; color: #6b7280;">Phone</td><td style="padding: 8px 0;">${escapeHtml(phone)}</td></tr>
            <tr><td style="padding: 8px 0; color: #6b7280;">Service</td><td style="padding: 8px 0;">${escapeHtml(service)}</td></tr>
            <tr><td style="padding: 8px 0; color: #6b7280; vertical-align: top;">Message</td><td style="padding: 8px 0; white-space: pre-wrap;">${escapeHtml(message)}</td></tr>
            <tr><td colspan="2" style="padding: 16px 0 0;"><hr style="border:0;border-top:1px solid #e5e7eb;"/></td></tr>
            <tr><td style="padding: 8px 0; color: #6b7280;">Website</td><td style="padding: 8px 0;"><a href="${escapeHtml(websiteUrl)}" style="color: #336799;">${escapeHtml(websiteUrl)}</a></td></tr>
            <tr><td style="padding: 8px 0; color: #6b7280;">Submitted</td><td style="padding: 8px 0;">${escapeHtml(timestamp)}</td></tr>
          </table>
        </div>
      </div>
    `;

    const text = [
      'New Website Inquiry - Friendly Dental',
      '',
      `Name: ${fullName}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Service: ${service}`,
      `Message: ${message}`,
      '',
      `Website: ${websiteUrl}`,
      `Submitted: ${timestamp}`,
    ].join('\n');

    const resendRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'Friendly Dental Website <info@friendlydental.ca>',
        to: ['info@friendlydental.ca'],
        cc: ['sony@bluluma.com'],
        reply_to: email,
        subject: 'New Website Inquiry - Friendly Dental',
        html,
        text,
      }),
    });

    const resendData = await resendRes.json().catch(() => ({}));

    if (!resendRes.ok) {
      console.error('Resend error:', resendRes.status, resendData);
      return new Response(
        JSON.stringify({ success: false, error: 'Failed to send email', details: resendData }),
        { status: 502, headers: { ...corsHeaders, 'Content-Type': 'application/json' } },
      );
    }

    return new Response(
      JSON.stringify({ success: true, id: resendData?.id ?? null }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } },
    );
  } catch (err) {
    console.error('send-contact-email error:', err);
    return new Response(
      JSON.stringify({ success: false, error: 'Unexpected server error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } },
    );
  }
});
