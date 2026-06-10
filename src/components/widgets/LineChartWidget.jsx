import React from 'react';

const LineChartWidget = () => {
  return (
    <div className="widget-container">
      <div className="widget-grid-bg"></div>
      
      <div className="widget-header">
        <div className="widget-title">Market Alpha</div>
        <div className="widget-metric-blue">Outperforming</div>
      </div>
      
      <div className="line-chart-area">
        {/* SVG Line Chart for exact precision */}
        <svg viewBox="0 0 200 100" className="line-svg">
          {/* Market Benchmark Line */}
          <path 
            d="M 0 80 Q 40 75, 80 60 T 160 40 T 200 35" 
            fill="none" 
            stroke="rgba(255,255,255,0.2)" 
            strokeWidth="2" 
          />
          {/* Portfolio Performance Line */}
          <path 
            d="M 0 80 Q 30 70, 70 40 T 130 20 T 200 5" 
            fill="none" 
            stroke="#0ea5e9" 
            strokeWidth="3" 
            className="neon-line"
          />
          
          {/* Data Points */}
          <circle cx="70" cy="40" r="4" fill="#111" stroke="#0ea5e9" strokeWidth="2" />
          <circle cx="130" cy="20" r="4" fill="#111" stroke="#0ea5e9" strokeWidth="2" />
          <circle cx="200" cy="5" r="4" fill="#0ea5e9" />
          
          {/* Pulse effect on last point */}
          <circle cx="200" cy="5" r="10" fill="#0ea5e9" opacity="0.3" className="pulse-circle" />
        </svg>
      </div>
    </div>
  );
};

export default LineChartWidget;
