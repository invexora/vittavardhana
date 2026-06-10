import React from 'react';

const PieChartWidget = () => {
  return (
    <div className="widget-container">
      <div className="widget-grid-bg"></div>
      
      {/* Header */}
      <div className="widget-header">
        <div className="widget-title">Asset Allocation</div>
        <div className="widget-subtitle">Optimal Mix</div>
      </div>
      
      {/* Chart */}
      <div className="pie-chart-area">
        <div className="pie-chart-outer">
          <div className="pie-chart-inner">
            <div className="pie-metric">60%</div>
            <div className="pie-label">Debt</div>
          </div>
        </div>
        
        {/* Legend */}
        <div className="pie-legend">
          <div className="legend-item"><span className="dot dot-active"></span> Fixed Inc.</div>
          <div className="legend-item"><span className="dot dot-muted"></span> Gold/Real Est.</div>
        </div>
      </div>
    </div>
  );
};

export default PieChartWidget;
