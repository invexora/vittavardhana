import React from 'react';

const DataGridWidget = () => {
  return (
    <div className="widget-container">
      <div className="widget-grid-bg"></div>
      
      <div className="widget-header">
        <div className="widget-title">Restructuring</div>
        <div className="widget-metric">+ Alpha</div>
      </div>
      
      <div className="grid-table-area">
        <div className="grid-row grid-header">
          <span>Asset</span>
          <span>Target</span>
          <span>Current</span>
        </div>
        <div className="grid-row">
          <span>Equities</span>
          <span>50%</span>
          <span className="cell-warning">65%</span>
        </div>
        <div className="grid-row">
          <span>Debt</span>
          <span>40%</span>
          <span className="cell-danger">25%</span>
        </div>
        <div className="grid-row grid-row-active">
          <span>Alts</span>
          <span>10%</span>
          <span className="cell-success">10%</span>
        </div>
      </div>
    </div>
  );
};

export default DataGridWidget;
