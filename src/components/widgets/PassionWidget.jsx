import React from 'react';

const PassionWidget = () => {
  return (
    <div style={{ width: '100%', height: '80px', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <svg viewBox="0 0 100 100" style={{ width: '80px', height: '80px', overflow: 'visible' }}>
        {/* Expanding outer wave */}
        <circle cx="50" cy="50" r="10" fill="none" stroke="var(--color-primary)" strokeWidth="1" className="pulse-circle" style={{ animationDuration: '3s' }} />
        {/* Inner wave */}
        <circle cx="50" cy="50" r="10" fill="none" stroke="var(--color-primary)" strokeWidth="2" className="pulse-circle" style={{ animationDelay: '1.5s', animationDuration: '3s' }} />
        {/* Core Heartbeat/Dot */}
        <circle cx="50" cy="50" r="8" fill="var(--color-primary)" style={{ filter: 'drop-shadow(0 0 8px var(--color-primary))' }} />
      </svg>
    </div>
  );
};

export default PassionWidget;
