import React from 'react';

const ExcellenceWidget = () => {
  return (
    <div style={{ width: '100%', height: '80px', position: 'relative', display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
      <svg viewBox="0 0 120 80" style={{ width: '120px', height: '80px', overflow: 'visible' }}>
        <defs>
          <linearGradient id="excelGrad" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0.4" />
          </linearGradient>
        </defs>
        {/* Mountain/Peak Area */}
        <path d="M10 70 L40 40 L60 50 L100 10 L110 70 Z" fill="url(#excelGrad)" />
        {/* Trending Neon Line */}
        <path d="M10 70 L40 40 L60 50 L100 10" fill="none" stroke="var(--color-primary)" strokeWidth="3" style={{ filter: 'drop-shadow(0 0 6px var(--color-primary))' }} />
        {/* Peak Indicator */}
        <circle cx="100" cy="10" r="4" fill="#fff" style={{ filter: 'drop-shadow(0 0 8px #fff)' }} />
        <circle cx="100" cy="10" r="10" fill="none" stroke="var(--color-primary)" strokeWidth="1" className="pulse-circle" style={{ animationDuration: '2s' }} />
      </svg>
    </div>
  );
};

export default ExcellenceWidget;
