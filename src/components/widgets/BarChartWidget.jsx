import React from 'react';

const BarChartWidget = () => {
  const data = [30, 45, 35, 60, 45, 80, 65, 100];
  
  return (
    <div className="widget-container">
      <div className="widget-grid-bg"></div>
      
      {/* Header */}
      <div className="widget-header">
        <div className="widget-title">SIP Compounding</div>
        <div className="widget-metric">+14.2%</div>
      </div>
      
      {/* Chart */}
      <div className="bar-chart-area">
        {data.map((val, i) => (
          <div key={i} className="bar-wrapper">
            <div 
              className={`bar ${i === data.length - 1 ? 'bar-active' : 'bar-muted'}`} 
              style={{ height: `${val}%` }}
            >
              {i === data.length - 1 && <div className="bar-glow"></div>}
            </div>
          </div>
        ))}
      </div>
      
      {/* X Axis */}
      <div className="widget-axis">
        <span>Y1</span>
        <span>Y3</span>
        <span>Y5</span>
        <span>Y10</span>
      </div>
    </div>
  );
};

export default BarChartWidget;
