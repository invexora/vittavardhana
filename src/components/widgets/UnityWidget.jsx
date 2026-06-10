import React from 'react';

const UnityWidget = () => {
  return (
    <div style={{ width: '100%', height: '80px', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <svg viewBox="0 0 100 100" style={{ width: '80px', height: '80px', overflow: 'visible' }}>
        {/* Connection Paths */}
        <path d="M50 50 L20 20" stroke="var(--color-subtle)" strokeWidth="2" />
        <path d="M50 50 L80 20" stroke="var(--color-subtle)" strokeWidth="2" />
        <path d="M50 50 L20 80" stroke="var(--color-subtle)" strokeWidth="2" />
        <path d="M50 50 L80 80" stroke="var(--color-subtle)" strokeWidth="2" />
        <path d="M50 50 L10 50" stroke="var(--color-subtle)" strokeWidth="2" />
        <path d="M50 50 L90 50" stroke="var(--color-subtle)" strokeWidth="2" />

        {/* Animated Glowing Pulses along paths (simulated with dashed strokes) */}
        <path d="M20 20 L50 50 L80 80" stroke="var(--color-gold)" strokeWidth="2" strokeDasharray="10 40" strokeLinecap="round" className="pulse-circle" style={{ animationDuration: '3s' }} />
        <path d="M80 20 L50 50 L20 80" stroke="var(--color-primary)" strokeWidth="2" strokeDasharray="10 40" strokeLinecap="round" className="pulse-circle" style={{ animationDuration: '3s', animationDelay: '1.5s' }} />

        {/* Outer Nodes */}
        <circle cx="20" cy="20" r="4" fill="var(--color-gold)" />
        <circle cx="80" cy="20" r="4" fill="var(--color-primary)" />
        <circle cx="20" cy="80" r="4" fill="var(--color-primary)" />
        <circle cx="80" cy="80" r="4" fill="var(--color-gold)" />
        <circle cx="10" cy="50" r="3" fill="var(--color-muted)" />
        <circle cx="90" cy="50" r="3" fill="var(--color-muted)" />

        {/* Central Core */}
        <circle cx="50" cy="50" r="12" fill="var(--color-surface-2)" stroke="var(--color-ink)" strokeWidth="2" />
        <circle cx="50" cy="50" r="6" fill="#fff" style={{ filter: 'drop-shadow(0 0 8px #fff)' }} />
      </svg>
    </div>
  );
};

export default UnityWidget;
