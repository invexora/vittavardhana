import React, { useEffect, useRef } from 'react';
import { createBatchReveal } from '../../lib/animations';

const AboutMissionGoal = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    createBatchReveal('.creative-mission-card');
  }, []);

  // 3D Tilt and interactive glow effect
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Calculate tilt (max 8 degrees for subtle premium feel)
    const rotateX = ((y - centerY) / centerY) * -8; 
    const rotateY = ((x - centerX) / centerX) * 8;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    
    // Move the glow effect to follow cursor
    const glow = card.querySelector('.card-glow');
    if (glow) {
      // Different colors for each card based on a custom attribute or just rely on CSS
      const isGold = card.getAttribute('data-glow') === 'gold';
      const color = isGold ? 'rgba(197, 168, 128, 0.15)' : 'rgba(211, 47, 47, 0.15)';
      glow.style.background = `radial-gradient(circle at ${x}px ${y}px, ${color} 0%, transparent 60%)`;
    }
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    const glow = card.querySelector('.card-glow');
    if (glow) {
      glow.style.background = 'transparent';
    }
  };

  return (
    <section 
      className="section" 
      ref={containerRef}
      style={{ 
        paddingTop: '160px', 
        paddingBottom: '160px', 
        background: 'var(--color-surface-1)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Abstract Background Ambient Glows */}
      <div style={{ position: 'absolute', top: '-5%', right: '-10%', width: '600px', height: '600px', background: 'var(--color-primary-soft)', filter: 'blur(120px)', borderRadius: '50%', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '-5%', left: '-10%', width: '600px', height: '600px', background: 'var(--color-gold-soft)', filter: 'blur(120px)', borderRadius: '50%', pointerEvents: 'none' }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        {/* Creative Typographic Header */}
        <div style={{ textAlign: 'center', marginBottom: '100px' }}>
          <span className="section-label" style={{ marginBottom: '20px', display: 'inline-block', letterSpacing: '4px' }}>OUR PURPOSE</span>
          <h2 className="display-lg" style={{ 
            background: 'linear-gradient(to right, #ffffff 30%, #888888 100%)', 
            WebkitBackgroundClip: 'text', 
            WebkitTextFillColor: 'transparent',
            margin: 0
          }}>
            Vision & Mission.
          </h2>
        </div>

        <div 
          style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '100px',
            maxWidth: '1100px',
            margin: '0 auto'
          }}
        >
          {/* Goal Card - Left Aligned */}
          <div 
            className="glass-card creative-mission-card" 
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            data-glow="primary"
            style={{ 
              padding: '80px', 
              position: 'relative',
              transition: 'transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
              border: '1px solid var(--glass-border-hover)',
              background: 'linear-gradient(135deg, rgba(20,20,20,0.8), rgba(5,5,5,0.95))',
              overflow: 'hidden',
              marginRight: 'auto',
              width: '90%',
              borderRadius: 'var(--radius-xl)',
              boxShadow: '0 30px 60px rgba(0,0,0,0.5)'
            }}
          >
            <div className="card-glow" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', transition: 'background 0.3s ease-out' }} />
            
            {/* Massive Watermark Typography */}
            <div style={{ position: 'absolute', top: '-40px', right: '40px', fontSize: '20rem', fontWeight: 800, color: 'rgba(255,255,255,0.015)', lineHeight: 1, pointerEvents: 'none', fontFamily: 'var(--font-heading)' }}>01</div>
            
            <div style={{ position: 'relative', zIndex: 2 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '24px', marginBottom: '40px' }}>
                <div style={{ width: '4px', height: '50px', background: 'var(--color-primary)', boxShadow: '0 0 15px var(--color-primary)' }} />
                <h3 className="display-md" style={{ margin: 0, letterSpacing: '2px', textTransform: 'uppercase' }}>Our Goal</h3>
              </div>
              
              <div style={{ borderLeft: '1px solid var(--glass-border-hover)', paddingLeft: '30px', marginLeft: '10px' }}>
                <p className="text-body" style={{ fontSize: '1.6rem', lineHeight: '1.6', color: '#ffffff', maxWidth: '800px', marginBottom: '24px' }}>
                  "To make people rich by enabling them to experience a quality lifestyle."
                </p>
                <p className="text-body" style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--color-muted)', maxWidth: '700px' }}>
                  We redefine traditional advisory parameters by integrating index options, professional portfolio restructures, and alternative venture fund allocations.
                </p>
              </div>
            </div>
          </div>

          {/* Mission Card - Right Aligned */}
          <div 
            className="glass-card creative-mission-card" 
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            data-glow="gold"
            style={{ 
              padding: '80px', 
              position: 'relative',
              transition: 'transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
              border: '1px solid var(--glass-border-hover)',
              background: 'linear-gradient(135deg, rgba(20,20,20,0.8), rgba(5,5,5,0.95))',
              overflow: 'hidden',
              marginLeft: 'auto',
              width: '90%',
              borderRadius: 'var(--radius-xl)',
              boxShadow: '0 30px 60px rgba(0,0,0,0.5)'
            }}
          >
            <div className="card-glow" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', transition: 'background 0.3s ease-out' }} />
            
            {/* Massive Watermark Typography */}
            <div style={{ position: 'absolute', top: '-40px', left: '40px', fontSize: '20rem', fontWeight: 800, color: 'rgba(255,255,255,0.015)', lineHeight: 1, pointerEvents: 'none', fontFamily: 'var(--font-heading)' }}>02</div>
            
            <div style={{ position: 'relative', zIndex: 2, textAlign: 'right' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '24px', marginBottom: '40px' }}>
                <h3 className="display-md" style={{ margin: 0, letterSpacing: '2px', textTransform: 'uppercase' }}>Our Mission</h3>
                <div style={{ width: '4px', height: '50px', background: 'var(--color-gold)', boxShadow: '0 0 15px var(--color-gold)' }} />
              </div>
              
              <div style={{ borderRight: '1px solid var(--glass-border-hover)', paddingRight: '30px', marginRight: '10px' }}>
                <p className="text-body" style={{ fontSize: '1.6rem', lineHeight: '1.6', color: '#ffffff', marginLeft: 'auto', maxWidth: '800px', marginBottom: '24px' }}>
                  To enhance the financial quality of life by diversifying trading, asset management, and advisory parameters.
                </p>
                <p className="text-body" style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--color-muted)', marginLeft: 'auto', maxWidth: '700px' }}>
                  Through custom strategies, we aim to deliver financial security and longevity to our wealth building partners.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutMissionGoal;
