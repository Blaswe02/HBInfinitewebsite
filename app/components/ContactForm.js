'use client';
import { useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({ naam: '', email: '', school: '', bericht: '' });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const verzenden = async () => {
    if (!form.naam || !form.email || !form.bericht) {
      setStatus('Vul alle verplichte velden in.');
      return;
    }
    setLoading(true);
    setStatus(null);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ naam: '', email: '', school: '', bericht: '' });
      } else {
        const data = await res.json();
        setStatus(data.error || 'Er is iets misgegaan');
      }
    } catch {
      setStatus('Er is iets misgegaan. Probeer het opnieuw.');
    }
    setLoading(false);
  };

  if (status === 'success') {
    return (
      <div className="success-msg">
        ✓ Bericht verzonden! We nemen zo snel mogelijk contact met je op.
      </div>
    );
  }

  return (
    <div className="contact-form">
      <div className="form-row">
        <input type="text" name="naam" placeholder="Naam"
          value={form.naam} onChange={handleChange} />
        <input type="email" name="email" placeholder="E-mailadres"
          value={form.email} onChange={handleChange} />
      </div>
      <input type="text" name="school" placeholder="School / instelling"
        value={form.school} onChange={handleChange} />
      <textarea name="bericht" placeholder="Uw bericht of vraag"
        value={form.bericht} onChange={handleChange} />
      {status && status !== 'success' && (
        <div className="error-msg">{status}</div>
      )}
      <button
        onClick={verzenden}
        className="btn-primary"
        style={{ alignSelf: 'flex-start', cursor: 'pointer' }}
        disabled={loading}
      >
        {loading ? 'Verzenden...' : 'Verzenden →'}
      </button>
    </div>
  );
}
