import Image from 'next/image';
import ContactForm from './components/ContactForm';

export default function Home() {
  return (
    <>
      <nav>
        <div className="nav-logo">HB∞</div>
        <ul className="nav-links">
          <li><a href="#diensten">Diensten</a></li>
          <li><a href="#over">Over ons</a></li>
          <li><a href="#faq">FAQ</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <section className="hero">
        <div className="logo-container">
          <Image
            src="/hbinfinite.png"
            alt="HB Infinite Logo"
            width={260}
            height={260}
            className="logo-img"
            priority
          />
        </div>
        <p className="hero-eyebrow">AI voor het onderwijs</p>
        <h1 className="hero-title">
          Wij creëren <span>makers</span>,<br />geen volgers
        </h1>
        <p className="hero-sub">
          Praktische AI-sessies voor scholen die niet willen afwachten, maar richting willen geven.
        </p>
        <div className="hero-btns">
          <a href="#diensten" className="btn-primary">Bekijk diensten</a>
          <a href="#contact" className="btn-secondary">Plan kennismaking</a>
        </div>
      </section>

      <div className="stats-bar">
        <div className="stat"><div className="stat-num">25+</div><div className="stat-label">Scholen</div></div>
        <div className="stat"><div className="stat-num">4</div><div className="stat-label">Diensten</div></div>
        <div className="stat"><div className="stat-num">100%</div><div className="stat-label">Praktisch</div></div>
        <div className="stat"><div className="stat-num">VO+MBO</div><div className="stat-label">Niveau</div></div>
      </div>

      <section className="section" id="diensten">
        <p className="section-label">Wat wij doen</p>
        <h2 className="section-title">Onze diensten</h2>
        <div className="cards">
          <div className="card">
            <div className="card-icon">💡</div>
            <div className="card-title">AI Inspiratiesessie</div>
            <p className="card-text">Energieke sessie voor docenten en schoolleiders. Live demo&apos;s, kansen én risico&apos;s helder uitgelegd.</p>
            <div className="card-price">In overleg</div>
          </div>
          <div className="card">
            <div className="card-icon">📋</div>
            <div className="card-title">AI Beleidssessie</div>
            <p className="card-text">Werksessie voor schoolleiding of MT. AVG, AI Act en pedagogische dilemma&apos;s bij elkaar.</p>
            <div className="card-price">In overleg</div>
          </div>
          <div className="card">
            <div className="card-icon">📚</div>
            <div className="card-title">Lesmateriaal op Maat</div>
            <p className="card-text">Opdrachten en werkvormen rondom AI, burgerschap en mediawijsheid — op maat voor jouw school.</p>
            <div className="card-price">In overleg</div>
          </div>
          <div className="card">
            <div className="card-icon">🎯</div>
            <div className="card-title">AI Starttraject</div>
            <p className="card-text">Inspiratiesessie + Beleidssessie gecombineerd. Één duidelijke lijn voor team én MT.</p>
            <div className="card-price">In overleg</div>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-inner">
          <p className="section-label" style={{ textAlign: 'center' }}>Neem contact op</p>
          <h2 className="section-title" style={{ fontSize: '1.7rem', textAlign: 'center' }}>
            Klaar om te starten?
          </h2>
          <ContactForm />
        </div>
      </section>

      <footer>
        <div className="footer-brand">HB INFINITE</div>
        <div className="footer-copy">© 2026 HB Infinite. Alle rechten voorbehouden.</div>
      </footer>
    </>
  );
}
