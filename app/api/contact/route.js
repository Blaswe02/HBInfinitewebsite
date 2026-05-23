export async function POST(req) {
  const { Resend } = await import('resend');
  const resend = new Resend(process.env.RESEND_API_KEY);

  const { naam, email, school, bericht } = await req.json();

  if (!naam || !email || !bericht) {
    return Response.json({ error: 'Vul alle velden in' }, { status: 400 });
  }

  try {
    const { error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['ethelmer@gmail.com', 'dblasweiler@gmail.com'],
      subject: `Contactformulier HB Infinite - ${naam}`,
      html: `<h2>Nieuw bericht via website</h2>
      <p><b>Naam:</b> ${naam}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>School:</b> ${school || '–'}</p>
      <p><b>Bericht:</b> ${bericht}</p>`,
    });

    if (error) {
      console.error('Resend error:', JSON.stringify(error));
      return Response.json({ error: error.message, detail: error }, { status: 500 });
    }

    return Response.json({ success: true });
  } catch (err) {
    console.error('Catch error:', err?.message, err);
    return Response.json({ error: err?.message || 'Verzenden mislukt' }, { status: 500 });
  }
}
