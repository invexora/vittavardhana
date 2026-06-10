import React from 'react';

const AboutFounder = () => {
  return (
    <section className="section scroll-reveal" style={{ padding: '120px 0', background: 'var(--color-canvas)' }}>
      <div className="container">
        <div 
          className="glass-card" 
          style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: '60px', 
            alignItems: 'center', 
            padding: '60px',
            background: 'linear-gradient(135deg, var(--color-surface-1), var(--color-surface-2))' 
          }}
        >
          {/* Avatar Graphic */}
          <div 
            style={{ 
              flex: '0 0 auto', 
              width: '240px', 
              height: '240px', 
              borderRadius: '50%', 
              border: '2px solid var(--glass-border-hover)', 
              boxShadow: '0 20px 40px rgba(0,0,0,0.6)',
              margin: '0 auto',
              overflow: 'hidden'
            }}
          >
            <img src="/founder.png" alt="Kishore V J" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          
          {/* Biography Text */}
          <div style={{ flex: '1 1 400px', textAlign: 'left' }}>
            <span className="section-label" style={{ marginBottom: '16px', display: 'inline-block' }}>
              Founder & Principal Advisor
            </span>
            <h2 className="display-lg" style={{ marginBottom: '24px' }}>Kishore V J</h2>
            
            <p className="text-body" style={{ marginBottom: '20px', fontSize: '1.2rem', lineHeight: '1.8' }}>
              With over a decade of hands-on experience in financial markets and wealth advisory, Kishore founded Vittavardhana to bridge the gap between traditional asset management and modern, dynamic investment strategies.
            </p>
            <p className="text-body" style={{ marginBottom: '32px', fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--color-muted)' }}>
              His vision is built on absolute transparency, uncompromising integrity, and a deep commitment to ensuring every client's financial independence and lifestyle quality.
            </p>
            
            <a 
              href="https://www.linkedin.com/in/kishorevj/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="glass-btn glass-btn-primary" 
              style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '12px 24px', fontSize: '1.1rem' }}
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFounder;
