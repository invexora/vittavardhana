import React from 'react';

const DisciplineWidget = () => {
  return (
    <div style={{ width: '100%', height: '80px', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <svg viewBox="0 0 100 80" style={{ width: '100px', height: '80px', overflow: 'visible' }}>
        {/* Radar/Dial Background */}
        <path d="M 10 70 A 40 40 0 0 1 90 70" fill="none" stroke="var(--color-surface-3)" strokeWidth="8" strokeLinecap="round" />
        
        {/* Safe Zone (Gold/Primary mix) */}
        <path d="M 30 40 A 40 40 0 0 1 70 40" fill="none" stroke="var(--color-gold)" strokeWidth="8" strokeLinecap="round" opacity="0.4" />
        
        {/* Dial Needle */}
        <line x1="50" y1="70" x2="65" y2="35" stroke="#fff" strokeWidth="3" strokeLinecap="round" style={{ filter: 'drop-shadow(0 0 4px #fff)', transformOrigin: '50px 70px', transform: 'rotate(-15deg)' }} />
        
        {/* Center Pivot */}
        <circle cx="50" cy="70" r="5" fill="#fff" />
        <circle cx="50" cy="70" r="2" fill="var(--color-primary)" />
        
        {/* Grid lines indicating control */}
        <line x1="10" y1="75" x2="90" y2="75" stroke="var(--color-muted)" strokeWidth="1" strokeDasharray="2 4" />
        <line x1="50" y1="20" x2="50" y2="30" stroke="var(--color-muted)" strokeWidth="1" />
      </svg>
    </div>
  );
};

export default DisciplineWidget;
