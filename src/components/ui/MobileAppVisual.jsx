import React from 'react';
import LineChartWidget from '../widgets/LineChartWidget';
import BarChartWidget from '../widgets/BarChartWidget';

const MobileAppVisual = () => {
  return (
    <div className="mobile-app-mockup" style={{
      width: '100%',
      maxWidth: '320px',
      margin: '0 auto',
      position: 'relative',
      zIndex: 10
    }}>
      {/* Device Frame */}
      <div style={{
        background: '#0d0d0d',
        borderRadius: '40px',
        padding: '12px',
        boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5), inset 0 0 0 2px #333',
        position: 'relative',
        overflow: 'hidden',
        border: '4px solid #1a1a1a'
      }}>
        {/* Screen */}
        <div style={{
          background: '#050505',
          borderRadius: '32px',
          height: '650px',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative'
        }}>
          {/* Top Notch Area */}
          <div style={{
            background: '#000',
            height: '24px',
            width: '120px',
            borderBottomLeftRadius: '16px',
            borderBottomRightRadius: '16px',
            position: 'absolute',
            top: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 20
          }}></div>

          {/* App Header */}
          <div style={{ padding: '40px 20px 20px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
            <div style={{ color: '#888', fontSize: '0.8rem', marginBottom: '4px' }}>Welcome back, Alex!</div>
            <div style={{ color: '#fff', fontSize: '1.2rem', fontWeight: 500, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span>Investment Started</span>
              <div style={{ width: '30px', height: '30px', borderRadius: '50%', background: 'linear-gradient(135deg, #0ea5e9, #3b82f6)' }}></div>
            </div>
          </div>

          {/* App Content */}
          <div style={{ padding: '20px', flexGrow: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            
            {/* Progress Bar Area */}
            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '16px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.8rem' }}>
                <span style={{ color: '#888' }}>Progress</span>
                <span style={{ color: '#0ea5e9' }}>Step 5 of 6</span>
              </div>
              <div style={{ width: '100%', height: '4px', background: 'rgba(255,255,255,0.1)', borderRadius: '2px', overflow: 'hidden' }}>
                <div style={{ width: '80%', height: '100%', background: '#0ea5e9' }}></div>
              </div>
              <div style={{ color: '#fff', fontSize: '0.9rem', marginTop: '12px' }}>Funds Being Allocated</div>
            </div>

            {/* Reusing existing widgets as mobile app components */}
            <div style={{ transform: 'scale(0.9)', transformOrigin: 'top left', width: '111%' }}>
              <LineChartWidget />
            </div>
            
            <div style={{ transform: 'scale(0.9)', transformOrigin: 'top left', width: '111%' }}>
              <BarChartWidget />
            </div>
            
          </div>

          {/* App Tab Bar */}
          <div style={{ 
            height: '60px', 
            background: 'rgba(10,10,10,0.9)', 
            backdropFilter: 'blur(10px)',
            borderTop: '1px solid rgba(255,255,255,0.05)',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            paddingBottom: '10px'
          }}>
            <div style={{ width: '24px', height: '24px', borderRadius: '4px', background: '#0ea5e9' }}></div>
            <div style={{ width: '24px', height: '24px', borderRadius: '4px', background: 'rgba(255,255,255,0.2)' }}></div>
            <div style={{ width: '24px', height: '24px', borderRadius: '4px', background: 'rgba(255,255,255,0.2)' }}></div>
            <div style={{ width: '24px', height: '24px', borderRadius: '4px', background: 'rgba(255,255,255,0.2)' }}></div>
          </div>
        </div>
      </div>
      
      {/* Decorative background glow */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '150%',
        height: '150%',
        background: 'radial-gradient(circle, rgba(14,165,233,0.1) 0%, rgba(0,0,0,0) 70%)',
        zIndex: -1,
        pointerEvents: 'none'
      }}></div>
    </div>
  );
};

export default MobileAppVisual;
