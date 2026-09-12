const WINDOW_MS = 60 * 60 * 1000; // 1 uur
const MAX_PER_WINDOW = 5;

const LIMITS = { naam: 100, email: 254, school: 200, bericht: 5000 };

// Verzendt vanaf het eigen, in Resend geverifieerde domein.
const AFZENDER = process.env.CONTACT_FROM || 'HB Infinite <contact@hbinfinite.nl>';
const ONTVANGER = process.env.CONTACT_TO || 'info@hbinfinite.nl';

// Best-effort geheugenteller per instantie. Zie SECURITY.md voor de beperking.
const hits = new Map();

function clientIp(req) {
  const fwd = req.headers.get('x-forwarded-for');
  if (fwd) return fwd.split(',')[0].trim();
  return req.headers.get('x-real-ip') || 'onbekend';
}

function rateLimit(ip) {
  const now = Date.now();

  for (const [key, entry] of hits) {
    if (now - entry.start > WINDOW_MS) hits.delete(key);
  }

  const entry = hits.get(ip);
  if (!entry) {
    hits.set(ip, { start: now, count: 1 });
    return { allowed: true };
  }
  if (entry.count >= MAX_PER_WINDOW) {
    return { allowed: false, retryAfter: Math.ceil((entry.start + WINDOW_MS - now) / 1000) };
  }
  entry.count += 1;
  return { allowed: true };
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (c) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  })[c]);
}

function isEmail(value) {
  return typeof value === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);
}

export async function POST(req) {
  const ip = clientIp(req);
  const limit = rateLimit(ip);
  if (!limit.allowed) {
    return Response.json(
      { error: 'Te veel berichten verstuurd. Probeer het later opnieuw.' },
      { status: 429, headers: { 'Retry-After': String(limit.retryAfter) } }
    );
  }

  let body;
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: 'Ongeldige aanvraag' }, { status: 400 });
  }

  const { naam, email, school, bericht, website } = body || {};

  // Honeypot: alleen bots vullen dit onzichtbare veld in.
  if (typeof website === 'string' && website.trim() !== '') {
    return Response.json({ success: true });
  }

  if (!naam || !email || !bericht) {
    return Response.json({ error: 'Vul alle velden in' }, { status: 400 });
  }

  for (const [veld, max] of Object.entries(LIMITS)) {
    const waarde = body[veld];
    if (waarde != null && (typeof waarde !== 'string' || waarde.length > max)) {
      return Response.json({ error: 'Een van de velden is te lang' }, { status: 400 });
    }
  }

  if (!isEmail(email)) {
    return Response.json({ error: 'Vul een geldig e-mailadres in' }, { status: 400 });
  }

  try {
    const { Resend } = await import('resend');
    const resend = new Resend(process.env.RESEND_API_KEY);

    const { error } = await resend.emails.send({
      from: AFZENDER,
      replyTo: email,
      to: [ONTVANGER],
      subject: `Contactformulier HB Infinite - ${escapeHtml(naam)}`,
      html: `<h2>Nieuw bericht via website</h2>
      <p><b>Naam:</b> ${escapeHtml(naam)}</p>
      <p><b>Email:</b> ${escapeHtml(email)}</p>
      <p><b>School:</b> ${school ? escapeHtml(school) : '–'}</p>
      <p><b>Bericht:</b> ${escapeHtml(bericht)}</p>`,
    });

    if (error) {
      console.error('Resend error:', JSON.stringify(error));
      return Response.json({ error: 'Verzenden mislukt' }, { status: 500 });
    }

    return Response.json({ success: true });
  } catch (err) {
    console.error('Catch error:', err?.message, err);
    return Response.json({ error: 'Verzenden mislukt' }, { status: 500 });
  }
}
