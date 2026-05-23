import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// Per IP: max 10 requests per uur
const LIMIT = 10;
const WINDOW_MS = 60 * 60 * 1000; // 1 uur
const ipMap = new Map();

function getRateLimit(ip) {
  const now = Date.now();
  const entry = ipMap.get(ip);

  if (!entry || now > entry.resetAt) {
    ipMap.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return { allowed: true, remaining: LIMIT - 1 };
  }

  if (entry.count >= LIMIT) {
    return { allowed: false, remaining: 0 };
  }

  entry.count++;
  return { allowed: true, remaining: LIMIT - entry.count };
}

export async function POST(req) {
  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
    req.headers.get('x-real-ip') ||
    'unknown';

  const { allowed, remaining } = getRateLimit(ip);

  if (!allowed) {
    return Response.json(
      { error: 'Te veel verzoeken. Probeer het later opnieuw.' },
      {
        status: 429,
        headers: { 'Retry-After': '3600' },
      }
    );
  }

  const { naam, email, school, bericht } = await req.json();

  if (!naam || !email || !bericht) {
    return Response.json({ error: 'Vul alle velden in' }, { status: 400 });
  }

  await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: ['ethelmer@gmail.com', 'dblasweiler@gmail.com'],
    subject: `Contactformulier HB Infinite - ${naam}`,
    html: `<h2>Nieuw bericht via website</h2>
    <p><b>Naam:</b> ${naam}</p>
    <p><b>Email:</b> ${email}</p>
    <p><b>School:</b> ${school}</p>
    <p><b>Bericht:</b> ${bericht}</p>`,
  });

  return Response.json({ success: true }, {
    headers: { 'X-RateLimit-Remaining': String(remaining) },
  });
}
