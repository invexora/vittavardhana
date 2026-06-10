import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const AboutHero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Staggered reveal for the text elements
      gsap.fromTo('.hero-text-element',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.15,
          ease: 'power3.out',
          delay: 0.2
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      className="section-fullscreen" 
      style={{ 
        paddingTop: '15vh', 
        paddingBottom: '10vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}
    >
      <div className="container">
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <span 
            className="section-label hero-text-element" 
            style={{ display: 'inline-block', marginBottom: '2rem' }}
          >
            Our Chronicle
          </span>
          <h1 
            className="display-xl hero-text-element" 
            style={{ marginBottom: '2rem', lineHeight: '1.1' }}
          >
            The Vittavardhana Story.
          </h1>
          <p 
            className="text-body hero-text-element" 
            style={{ fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto', color: 'var(--color-muted)' }}
          >
            Building capital security, enabling lifestyle quality, and maintaining institutional integrity since 2008.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
