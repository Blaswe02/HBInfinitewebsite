import Image from 'next/image';
import { ORBS, PARTICLES } from '../heroData';

const TINTS = ['var(--violet)', 'var(--blue)', 'var(--cyan)'];

export default function HeroArt() {
  return (
    <div className="hero-art">
      <div className="logo-stage">
        <Image
          src="/hb-logo.png"
          alt="HB Infinite"
          width={640}
          height={640}
          className="logo-img"
          priority
        />
        {ORBS.map((o, i) => (
          <span
            key={i}
            className="orb-track"
            style={{ animationName: o.track, animationDuration: `${o.dur}s`, animationDelay: `${o.delay}s` }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={o.src}
              alt=""
              aria-hidden="true"
              className="orb-dot"
              style={{
                left: `${o.left}%`,
                top: `${o.top}%`,
                width: `${o.w}%`,
                filter: `drop-shadow(0 0 ${o.glow}px rgba(${o.rgb},0.85))`,
                animationDuration: `${o.pulseDur}s`,
                animationDelay: `${o.pulseDelay}s`,
              }}
            />
          </span>
        ))}
      </div>
    </div>
  );
}

export function HeroParticles() {
  return (
    <div className="particles" aria-hidden="true">
      {PARTICLES.map((p, i) => (
        <span
          key={i}
          className="particle"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            background: TINTS[p.tint],
            opacity: p.opacity,
            boxShadow: `0 0 ${Math.round(p.size * 3)}px ${TINTS[p.tint]}`,
            animationDuration: `${p.dur}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
