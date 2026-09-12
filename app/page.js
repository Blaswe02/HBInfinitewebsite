import ContactForm from './components/ContactForm';
import HeroArt, { HeroParticles } from './components/HeroArt';

const ICON = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.4,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  width: 30,
  height: 30,
  viewBox: '0 0 24 24',
  'aria-hidden': true,
};

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
        <div className="aurora aurora-a" aria-hidden="true" />
        <div className="aurora aurora-b" aria-hidden="true" />
        <div className="beam" aria-hidden="true" />

        <div className="hero-waves" aria-hidden="true">
          <svg width="620" height="1760" viewBox="0 0 620 1760" preserveAspectRatio="none">
            <defs>
              <linearGradient id="heroWave" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#040810" stopOpacity="0" />
                <stop offset="60%" stopColor="#a24bff" stopOpacity="0.38" />
                <stop offset="100%" stopColor="#2b6dff" stopOpacity="0.5" />
              </linearGradient>
            </defs>
            <path
              d="M620,0 C480,110 560,220 620,330 C680,440 480,550 620,660 C760,770 560,880 620,880 C480,990 560,1100 620,1210 C680,1320 480,1430 620,1540 C760,1650 560,1760 620,1760 L620,1760 L620,0 Z"
              fill="url(#heroWave)"
            />
          </svg>
        </div>

        <HeroParticles />

        <div className="hero-grid">
          <div className="hero-copy">
            <div className="hero-eyebrow-row">
              <span className="hero-rule" />
              <span className="hero-eyebrow">AI voor het onderwijs</span>
            </div>

            <h1 className="hero-title">
              AI die in de<br />
              <span>klas landt</span>.
            </h1>

            <p className="hero-sub">
              Geen toekomstpraat, maar werkvormen die maandag werken. Voor scholen die richting
              willen geven in plaats van afwachten.
            </p>

            <div className="hero-btns">
              <a href="#contact" className="btn-primary">Plan kennismaking</a>
              <a href="#diensten" className="btn-link">Bekijk diensten</a>
            </div>

            <div className="hero-stats">
              <div className="hero-stat"><div className="hero-stat-num">25+</div><div className="hero-stat-label">Scholen</div></div>
              <div className="hero-stat"><div className="hero-stat-num">VO+MBO</div><div className="hero-stat-label">Niveau</div></div>
              <div className="hero-stat"><div className="hero-stat-num">100%</div><div className="hero-stat-label">Praktisch</div></div>
            </div>
          </div>

          <HeroArt />
        </div>
      </section>

      <div className="stats-bar">
        <div className="stat"><div className="stat-num">25+</div><div className="stat-label">Scholen</div></div>
        <div className="stat"><div className="stat-num">4</div><div className="stat-label">Diensten</div></div>
        <div className="stat"><div className="stat-num">100%</div><div className="stat-label">Praktisch</div></div>
        <div className="stat"><div className="stat-num">VO+MBO</div><div className="stat-label">Niveau</div></div>
      </div>

      <section className="section" id="diensten">
        <div className="section-glow" aria-hidden="true" />
        <p className="section-label">Wat wij doen</p>
        <h2 className="section-title">Onze diensten</h2>
        <div className="cards">
          <div className="card card-violet">
            <div className="card-icon">
              <svg {...ICON}>
                <path d="M9 18h6" />
                <path d="M10 21h4" />
                <path d="M12 3a6 6 0 0 0-3.6 10.8c.5.4.8 1 .9 1.6h5.4c.1-.6.4-1.2.9-1.6A6 6 0 0 0 12 3z" />
              </svg>
            </div>
            <div className="card-title">AI Inspiratiesessie</div>
            <p className="card-text">Energieke sessie voor docenten en schoolleiders. Live demo&apos;s, kansen én risico&apos;s helder uitgelegd.</p>
            <div className="card-price">In overleg</div>
          </div>

          <div className="card card-blue">
            <div className="card-icon">
              <svg {...ICON}>
                <path d="M12 3l7 3v5.5c0 4-3 7.6-7 8.5-4-.9-7-4.5-7-8.5V6l7-3z" />
                <path d="M9.5 11.8l1.8 1.8 3.4-3.6" />
              </svg>
            </div>
            <div className="card-title">AI Beleidssessie</div>
            <p className="card-text">Werksessie voor schoolleiding of MT. AVG, AI Act en pedagogische dilemma&apos;s bij elkaar.</p>
            <div className="card-price">In overleg</div>
          </div>

          <div className="card card-cyan">
            <div className="card-icon">
              <svg {...ICON}>
                <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H12v16H6.5A2.5 2.5 0 0 0 4 21.5V5.5z" />
                <path d="M20 5.5A2.5 2.5 0 0 0 17.5 3H12v16h5.5a2.5 2.5 0 0 1 2.5 2.5V5.5z" />
              </svg>
            </div>
            <div className="card-title">Lesmateriaal op Maat</div>
            <p className="card-text">Opdrachten en werkvormen rondom AI, burgerschap en mediawijsheid — op maat voor jouw school.</p>
            <div className="card-price">In overleg</div>
          </div>

          <div className="card card-green">
            <div className="card-icon">
              <svg {...ICON}>
                <circle cx="12" cy="12" r="8.5" />
                <circle cx="12" cy="12" r="4.5" />
                <circle cx="12" cy="12" r="1" />
              </svg>
            </div>
            <div className="card-title">AI Starttraject</div>
            <p className="card-text">Inspiratiesessie + Beleidssessie gecombineerd. Één duidelijke lijn voor team én MT.</p>
            <div className="card-price">In overleg</div>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-wave" aria-hidden="true">
          <svg width="2880" height="140" viewBox="0 0 2880 140" preserveAspectRatio="none">
            <defs>
              <linearGradient id="contactWave" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#a24bff" stopOpacity="0.5" />
                <stop offset="50%" stopColor="#2b6dff" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#a24bff" stopOpacity="0.5" />
              </linearGradient>
            </defs>
            <path
              d="M0,70 C240,28 480,112 720,70 C960,28 1200,112 1440,70 C1680,28 1920,112 2160,70 C2400,28 2640,112 2880,70 L2880,0 L0,0 Z"
              fill="url(#contactWave)"
            />
          </svg>
        </div>
        <div className="contact-inner">
          <p className="section-label" style={{ textAlign: 'center' }}>Neem contact op</p>
          <h2 className="section-title" style={{ fontSize: '1.7rem', textAlign: 'center' }}>Klaar om te starten?</h2>
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
