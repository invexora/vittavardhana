import React from 'react';

const IntegrityWidget = () => {
  return (
    <div style={{ width: '100%', height: '80px', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <svg viewBox="0 0 100 100" style={{ width: '80px', height: '80px', overflow: 'visible' }}>
        {/* Balanced Hexagon Base */}
        <polygon points="50,10 90,30 90,70 50,90 10,70 10,30" fill="none" stroke="var(--color-subtle)" strokeWidth="2" />
        <polygon points="50,18 82,35 82,65 50,82 18,65 18,35" fill="rgba(255,255,255,0.02)" stroke="var(--color-muted)" strokeWidth="1" strokeDasharray="4 4" />
        
        {/* Central Perfect Balance */}
        <line x1="50" y1="20" x2="50" y2="80" stroke="var(--color-primary)" strokeWidth="3" style={{ filter: 'drop-shadow(0 0 4px var(--color-primary))' }} />
        <circle cx="50" cy="50" r="6" fill="var(--color-gold)" style={{ filter: 'drop-shadow(0 0 6px var(--color-gold))' }} />
        <line x1="25" y1="50" x2="75" y2="50" stroke="var(--color-gold)" strokeWidth="2" />
      </svg>
    </div>
  );
};

export default IntegrityWidget;
