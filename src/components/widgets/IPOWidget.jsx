import React from 'react';

const IPOWidget = () => {
  // Upward trending candlesticks data
  const candles = [
    { x: 10, o: 85, c: 75, h: 70, l: 95 },
    { x: 20, o: 75, c: 80, h: 70, l: 85 },
    { x: 30, o: 80, c: 60, h: 55, l: 90 },
    { x: 40, o: 65, c: 50, h: 45, l: 70 },
    { x: 50, o: 55, c: 65, h: 50, l: 75 },
    { x: 60, o: 60, c: 45, h: 40, l: 70 },
    { x: 70, o: 45, c: 30, h: 25, l: 55 },
    { x: 80, o: 30, c: 35, h: 25, l: 45 },
    { x: 90, o: 35, c: 45, h: 25, l: 50 },
    { x: 100, o: 40, c: 20, h: 15, l: 50 },
    { x: 110, o: 25, c: 15, h: 10, l: 35 },
    { x: 120, o: 15, c: 25, h: 10, l: 30 },
    { x: 130, o: 20, c: 10, h: 5,  l: 25 },
    { x: 140, o: 15, c: 30, h: 5,  l: 35 },
    { x: 150, o: 25, c: 10, h: 5,  l: 35 },
    { x: 160, o: 15, c: 5,  h: 0,  l: 20 },
    { x: 170, o: 10, c: 15, h: 5,  l: 25 },
    { x: 180, o: 15, c: 2,  h: -5, l: 20 },
    { x: 190, o: 5,  c: -5, h: -10,l: 10 },
  ];

  return (
    <div className="widget-container" style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
      <div className="widget-grid-bg"></div>
      
      {/* Background SVG for Candles */}
      <svg viewBox="0 0 200 100" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.7, zIndex: 1 }}>
        {candles.map((c, i) => {
          const isGreen = c.c < c.o; // SVG y goes down, so smaller y = higher value
          const color = isGreen ? '#10b981' : '#ef4444';
          
          const wickY1 = c.h;
          const wickY2 = c.l;
          
          const bodyY = Math.min(c.o, c.c);
          const bodyHeight = Math.abs(c.o - c.c);
          
          return (
            <g key={i} style={{ animation: `pulse 2s infinite alternate`, animationDelay: `${i * 0.1}s` }}>
              <line x1={c.x} y1={wickY1} x2={c.x} y2={wickY2} stroke={color} strokeWidth="1" />
              <rect x={c.x - 2.5} y={bodyY} width="5" height={Math.max(bodyHeight, 1)} fill={color} rx="1" />
            </g>
          );
        })}
      </svg>
      
      {/* Overlay Text exactly as requested */}
      <div style={{ position: 'relative', zIndex: 10 }}>
        <h1 style={{ 
          fontSize: '4.5rem', 
          fontFamily: 'var(--font-heading)', 
          fontWeight: 900, 
          margin: 0, 
          lineHeight: 1,
          color: '#ffffff',
          textShadow: '0px 10px 30px rgba(0,0,0,0.9), 0px 5px 0px #0c3a7c, 0px 8px 15px rgba(12, 58, 124, 0.6)',
          letterSpacing: '2px',
          transform: 'translateY(-5px)', // Small tweak to center it visually
        }}>
          IPO
        </h1>
      </div>
    </div>
  );
};

export default IPOWidget;
