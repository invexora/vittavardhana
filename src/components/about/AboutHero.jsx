import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Shield, Sparkles } from 'lucide-react';

const AboutHero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.stagger-reveal',
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.4,
          stagger: 0.15,
          ease: 'power4.out',
          delay: 0.2
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      style={{ 
        position: 'relative',
        paddingTop: '18vh', 
        paddingBottom: '12vh',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'var(--color-canvas)',
        overflow: 'hidden'
      }}
    >
      {/* Subtle Background Glows */}
      <div style={{
        position: 'absolute', top: '-10%', left: '-10%', width: '60vw', height: '60vw',
        background: 'radial-gradient(circle, rgba(197, 168, 128, 0.04) 0%, transparent 60%)',
        borderRadius: '50%', zIndex: 0
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Main Title Area */}
        <div className="stagger-reveal" style={{ textAlign: 'center', marginBottom: '8rem' }}>
          <span className="section-label" style={{ marginBottom: '1.5rem', display: 'inline-block' }}>
            <Sparkles size={14} style={{ display: 'inline', marginRight: '8px', verticalAlign: 'middle', position: 'relative', top: '-1px' }}/>
            Our Chronicle
          </span>
          <h1 className="display-xl" style={{ fontSize: 'clamp(3rem, 6vw, 5.5rem)', lineHeight: '1.1', letterSpacing: '-0.02em', marginBottom: '2rem' }}>
            The Vittavardhana Story.
          </h1>
          <p className="text-body" style={{ fontSize: '1.25rem', color: 'var(--color-muted)', maxWidth: '750px', margin: '0 auto', lineHeight: '1.6' }}>
            Building capital security, enabling lifestyle quality, and maintaining institutional integrity since 2008.
          </p>
        </div>

        {/* Narrative Split */}
        <div className="grid-2 stagger-reveal" style={{ alignItems: 'center', gap: '4rem', maxWidth: '1100px', margin: '0 auto' }}>
          
          {/* Left: Core Philosophy */}
          <div style={{ position: 'relative', paddingLeft: '2.5rem' }}>
            <div style={{ 
              position: 'absolute', left: '0', top: '0', bottom: '0', width: '2px', 
              background: 'linear-gradient(to bottom, var(--color-primary), transparent)' 
            }} />
            <h2 className="display-lg" style={{ marginBottom: '1rem', color: 'var(--color-ink)', fontSize: 'clamp(2.5rem, 4vw, 3.5rem)' }}>Crafting Wealth.</h2>
            <h2 className="display-lg text-gold" style={{ opacity: 0.9, fontSize: 'clamp(2.5rem, 4vw, 3.5rem)' }}>Enriching Lives.</h2>
          </div>

          {/* Right: Glassmorphism Details */}
          <div className="glass-card" style={{ padding: '3.5rem', position: 'relative', overflow: 'hidden' }}>
            <Shield size={120} className="text-gold" style={{ position: 'absolute', top: '-20px', right: '-20px', opacity: 0.05, transform: 'rotate(15deg)' }} />
            
            <p className="text-body" style={{ fontSize: '1.15rem', color: 'var(--color-muted)', marginBottom: '2rem', lineHeight: '1.7' }}>
              Recognizing the critical need for organized, conflict-free wealth advisory...
            </p>
            <div style={{ height: '1px', background: 'rgba(255,255,255,0.1)', width: '100%', marginBottom: '2rem' }} />
            <p className="display-md" style={{ fontSize: '1.6rem', color: 'var(--color-ink)', lineHeight: '1.4' }}>
              We protect asset purchasing power against systemic inflation.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutHero;
