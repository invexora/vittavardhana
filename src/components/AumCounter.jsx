import { useState, useEffect, useRef } from 'react';

/**
 * AumCounter — Animated counter for Assets Under Management.
 * Can be used standalone or within the Home page hero.
 */
const AumCounter = ({ target = 100, suffix = 'Crores+', label = 'Assets Under Advisory (AUM)' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    let startTimestamp = null;
    const duration = 2500;
    const easeOutExpo = (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(easeOutExpo(progress) * target));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [target]);

  return (
    <div className="flex flex-col items-center" ref={ref} style={{ padding: '20px 0' }}>
      <div className="flex items-center gap-sm" style={{ alignItems: 'baseline' }}>
        <span
          className="text-gradient-crimson"
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '5rem',
            fontWeight: 400,
            lineHeight: 1,
            letterSpacing: '-2px',
            filter: 'drop-shadow(0 0 15px rgba(211, 47, 47, 0.5))',
          }}
        >
          {count}
        </span>
        <span
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '2.2rem',
            fontWeight: 400,
            color: 'var(--color-primary)',
          }}
        >
          {suffix}
        </span>
      </div>
      <span
        className="text-muted"
        style={{
          marginTop: '12px',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          fontSize: '0.8rem',
        }}
      >
        {label}
      </span>
    </div>
  );
};

export default AumCounter;
