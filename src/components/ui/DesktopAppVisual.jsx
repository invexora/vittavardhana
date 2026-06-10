import React from 'react';
import PieChartWidget from '../widgets/PieChartWidget';
import DataGridWidget from '../widgets/DataGridWidget';

const DesktopAppVisual = () => {
  return (
    <div className="desktop-app-mockup" style={{
      width: '100%',
      maxWidth: '800px',
      margin: '0 auto',
      position: 'relative',
      zIndex: 10
    }}>
      {/* Laptop Frame */}
      <div style={{
        background: '#1a1a1a',
        borderRadius: '16px 16px 0 0',
        padding: '12px 12px 0 12px',
        boxShadow: '0 25px 50px -12px rgba(0,0,0,0.7)',
        position: 'relative',
        border: '2px solid #333',
        borderBottom: 'none'
      }}>
        {/* Screen */}
        <div style={{
          background: '#050505',
          borderRadius: '8px 8px 0 0',
          height: '400px',
          overflow: 'hidden',
          display: 'flex',
          border: '1px solid #000'
        }}>
          {/* Sidebar */}
          <div style={{
            width: '64px',
            background: 'rgba(255,255,255,0.02)',
            borderRight: '1px solid rgba(255,255,255,0.05)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '20px 0',
            gap: '20px'
          }}>
            <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: '#0ea5e9' }}></div>
            <div style={{ width: '24px', height: '24px', borderRadius: '4px', background: 'rgba(255,255,255,0.1)' }}></div>
            <div style={{ width: '24px', height: '24px', borderRadius: '4px', background: 'rgba(255,255,255,0.1)' }}></div>
            <div style={{ width: '24px', height: '24px', borderRadius: '4px', background: 'rgba(255,255,255,0.1)' }}></div>
          </div>

          {/* Main Content Area */}
          <div style={{ flexGrow: 1, padding: '24px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '24px' }}>
            
            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ color: '#888', fontSize: '0.8rem' }}>Welcome back, Alex!</div>
                <div style={{ color: '#fff', fontSize: '1.4rem', fontWeight: 500 }}>Universal KPI</div>
              </div>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <div style={{ width: '200px', height: '36px', borderRadius: '18px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}></div>
                <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'linear-gradient(135deg, #0ea5e9, #3b82f6)' }}></div>
              </div>
            </div>

            {/* Top Stats Row */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
              {[
                { label: 'Investment Value', value: '₹24Cr' },
                { label: 'Total Payouts', value: '₹16Cr' },
                { label: 'Total Withdrawals', value: '₹3Cr' },
                { label: 'Investment Strategy', value: '6' }
              ].map((stat, i) => (
                <div key={i} style={{ 
                  background: 'rgba(255,255,255,0.02)', 
                  border: '1px solid rgba(255,255,255,0.05)',
                  borderRadius: '12px',
                  padding: '16px'
                }}>
                  <div style={{ color: '#888', fontSize: '0.75rem', marginBottom: '8px' }}>{stat.label}</div>
                  <div style={{ color: '#fff', fontSize: '1.5rem', fontWeight: 300 }}>{stat.value}</div>
                </div>
              ))}
            </div>

            {/* Bottom Widgets Row */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '16px', flexGrow: 1 }}>
              <div style={{ transform: 'scale(0.9)', transformOrigin: 'top left', width: '111%', height: '111%' }}>
                <PieChartWidget />
              </div>
              <div style={{ transform: 'scale(0.9)', transformOrigin: 'top left', width: '111%', height: '111%' }}>
                <DataGridWidget />
              </div>
            </div>

          </div>
        </div>
      </div>
      
      {/* Laptop Base */}
      <div style={{
        background: 'linear-gradient(to bottom, #2a2a2a, #111)',
        height: '24px',
        borderRadius: '0 0 16px 16px',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        border: '1px solid #444',
        borderTop: 'none',
        boxShadow: '0 10px 30px rgba(0,0,0,0.8)'
      }}>
        {/* Trackpad indentation */}
        <div style={{
          width: '100px',
          height: '4px',
          background: '#0a0a0a',
          marginTop: '0',
          borderBottomRadius: '4px'
        }}></div>
      </div>
      
      {/* Decorative background glow */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '120%',
        height: '120%',
        background: 'radial-gradient(circle, rgba(14,165,233,0.1) 0%, rgba(0,0,0,0) 60%)',
        zIndex: -1,
        pointerEvents: 'none'
      }}></div>
    </div>
  );
};

export default DesktopAppVisual;
