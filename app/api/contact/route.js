import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const { naam, email, school, bericht } = await req.json();

  if (!naam || !email || !bericht) {
    return Response.json({ error: 'Vul alle velden in' }, { status: 400 });
  }

  await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'ethelmer@gmail.com',
    subject: `Contactformulier HB Infinite - ${naam}`,
    html: `<h2>Nieuw bericht via website</h2>
    <p><b>Naam:</b> ${naam}</p>
    <p><b>Email:</b> ${email}</p>
    <p><b>School:</b> ${school}</p>
    <p><b>Bericht:</b> ${bericht}</p>`,
  });

  return Response.json({ success: true });
}
