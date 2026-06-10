import React from 'react';

const FunnelWidget = () => {
  return (
    <div className="widget-container">
      <div className="widget-grid-bg"></div>
      
      <div className="widget-header">
        <div className="widget-title">Deal Pipeline</div>
        <div className="widget-metric-blue">Top 1%</div>
      </div>
      
      <div className="funnel-chart-area">
        <div className="funnel-layer layer-1">
          <span>Sourcing</span>
          <span className="funnel-val">1000+</span>
        </div>
        <div className="funnel-layer layer-2">
          <span>Due Diligence</span>
          <span className="funnel-val">250</span>
        </div>
        <div className="funnel-layer layer-3">
          <span>IC Review</span>
          <span className="funnel-val">45</span>
        </div>
        <div className="funnel-layer layer-4 layer-active">
          <span>Invested</span>
          <span className="funnel-val">8</span>
        </div>
      </div>
    </div>
  );
};

export default FunnelWidget;
