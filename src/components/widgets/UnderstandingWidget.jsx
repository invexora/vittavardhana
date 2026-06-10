import React from 'react';

const UnderstandingWidget = () => {
  return (
    <div style={{ width: '100%', height: '80px', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <svg viewBox="0 0 120 80" style={{ width: '120px', height: '80px', overflow: 'visible' }}>
        <defs>
          <linearGradient id="understandGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--color-primary)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
          <linearGradient id="understandGrad2" x1="100%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="var(--color-gold)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
        {/* Left Circle */}
        <circle cx="45" cy="40" r="30" fill="url(#understandGrad1)" opacity="0.6" style={{ mixBlendMode: 'screen', filter: 'drop-shadow(0 0 5px rgba(211,47,47,0.3))' }} />
        {/* Right Circle */}
        <circle cx="75" cy="40" r="30" fill="url(#understandGrad2)" opacity="0.6" style={{ mixBlendMode: 'screen', filter: 'drop-shadow(0 0 5px rgba(197,168,128,0.3))' }} />
        {/* Overlap point */}
        <path d="M60 20 Q70 40 60 60 Q50 40 60 20" fill="rgba(255,255,255,0.8)" opacity="0.8" style={{ filter: 'drop-shadow(0 0 8px #fff)' }} />
      </svg>
    </div>
  );
};

export default UnderstandingWidget;
