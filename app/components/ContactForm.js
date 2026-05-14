'use client';
import { useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({ naam: '', email: '', school: '', bericht: '' });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
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
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <input
          type="text"
          name="naam"
          placeholder="Naam"
          value={form.naam}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="E-mailadres"
          value={form.email}
          onChange={handleChange}
          required
        />
      </div>
      <input
        type="text"
        name="school"
        placeholder="School / instelling"
        value={form.school}
        onChange={handleChange}
      />
      <textarea
        name="bericht"
        placeholder="Uw bericht of vraag"
        value={form.bericht}
        onChange={handleChange}
        required
      />
      {status && status !== 'success' && <div className="error-msg">{status}</div>}
      <button
        type="submit"
        className="btn-primary"
        style={{ alignSelf: 'flex-start' }}
        disabled={loading}
      >
        {loading ? 'Verzenden...' : 'Verzenden →'}
      </button>
    </form>
  );
}
