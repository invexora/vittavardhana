import React from 'react';

const NetworkWidget = () => {
  return (
    <div className="widget-container">
      <div className="widget-grid-bg"></div>
      
      <div className="widget-header">
        <div className="widget-title">Holistic Advisory</div>
        <div className="widget-metric-blue">360° View</div>
      </div>
      
      <div className="network-chart-area">
        <svg viewBox="0 0 200 120" className="network-svg">
          {/* Lines */}
          <line x1="100" y1="60" x2="40" y2="30" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
          <line x1="100" y1="60" x2="160" y2="30" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
          <line x1="100" y1="60" x2="40" y2="90" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
          <line x1="100" y1="60" x2="160" y2="90" stroke="#0ea5e9" strokeWidth="2" className="active-link" />
          
          {/* Outer Nodes */}
          <circle cx="40" cy="30" r="16" fill="#1a1a1a" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
          <circle cx="160" cy="30" r="16" fill="#1a1a1a" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
          <circle cx="40" cy="90" r="16" fill="#1a1a1a" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
          <circle cx="160" cy="90" r="16" fill="#0ea5e9" opacity="0.2" className="pulse-node" />
          <circle cx="160" cy="90" r="6" fill="#0ea5e9" />
          
          {/* Center Node */}
          <circle cx="100" cy="60" r="22" fill="#111" stroke="#0ea5e9" strokeWidth="2" />
          <circle cx="100" cy="60" r="8" fill="#0ea5e9" />
          
          {/* Icons/Dots inside outer nodes */}
          <circle cx="40" cy="30" r="3" fill="#666" />
          <circle cx="160" cy="30" r="3" fill="#666" />
          <circle cx="40" cy="90" r="3" fill="#666" />
        </svg>
      </div>
    </div>
  );
};

export default NetworkWidget;
