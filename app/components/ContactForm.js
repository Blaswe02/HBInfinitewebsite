'use client';
 
import { useState } from 'react';
 
export default function ContactForm() {
  const [naam, setNaam] = useState('');
  const [email, setEmail] = useState('');
  const [school, setSchool] = useState('');
  const [bericht, setBericht] = useState('');
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
 
  async function verzenden() {
    if (!naam || !email || !bericht) {
      setStatus('leeg');
      return;
    }
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ naam, email, school, bericht }),
      });
      if (res.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  }
 
  if (status === 'success') {
    return (
      <div style={{
        textAlign: 'center',
        padding: '40px',
        color: '#b4ff00',
        fontSize: '1.2rem'
      }}>
        ✓ Bericht verzonden! We nemen zo snel mogelijk contact met je op.
      </div>
    );
  }
 
  return (
    <div className="contact-form">
      <div className="form-row">
        <input
          type="text"
          placeholder="Naam"
          value={naam}
          onChange={(e) => setNaam(e.target.value)}
        />
        <input
          type="email"
          placeholder="E-mailadres"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <input
        type="text"
        placeholder="School / instelling"
        value={school}
        onChange={(e) => setSchool(e.target.value)}
      />
      <textarea
        placeholder="Uw bericht of vraag"
        value={bericht}
        onChange={(e) => setBericht(e.target.value)}
      />
      {status === 'leeg' && (
        <p style={{ color: '#ff6666', fontSize: '0.85rem', margin: '4px 0' }}>
          Vul naam, e-mailadres en bericht in.
        </p>
      )}
      {status === 'error' && (
        <p style={{ color: '#ff6666', fontSize: '0.85rem', margin: '4px 0' }}>
          Er ging iets fout. Probeer het opnieuw.
        </p>
      )}
      <button
        onClick={verzenden}
        disabled={status === 'loading'}
        className="btn-primary"
        style={{ alignSelf: 'flex-start', cursor: status === 'loading' ? 'not-allowed' : 'pointer' }}
      >
        {status === 'loading' ? 'Verzenden...' : 'Verzenden →'}
      </button>
    </div>
  );
}
 
