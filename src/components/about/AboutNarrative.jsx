import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutNarrative = () => {
  const containerRef = useRef(null);
  const textContainerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const phrases = gsap.utils.toArray('.narrative-phrase');
      
      // Pin the section and scrub through the phrases
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=300%', // Scrolls for 300% of viewport height
          pin: true,
          scrub: 1,
        }
      });

      phrases.forEach((phrase, index) => {
        // Fade in
        tl.to(phrase, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: 'power2.out'
        });

        // Hold for a moment
        tl.to({}, { duration: 0.5 });

        // Fade out (unless it's the last one)
        if (index < phrases.length - 1) {
          tl.to(phrase, {
            opacity: 0,
            y: -50,
            scale: 0.95,
            duration: 1,
            ease: 'power2.in'
          });
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      style={{ 
        height: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        background: 'var(--color-canvas)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div className="container" ref={textContainerRef} style={{ position: 'relative', height: '100%', width: '100%' }}>
        
        {/* Phrases positioned absolutely in the center */}
        <div 
          className="narrative-phrase"
          style={{ 
            position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
            width: '100%', textAlign: 'center', opacity: 0, transformOrigin: 'center'
          }}
        >
          <h2 className="display-lg">Crafting Wealth.</h2>
        </div>

        <div 
          className="narrative-phrase"
          style={{ 
            position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
            width: '100%', textAlign: 'center', opacity: 0, transformOrigin: 'center'
          }}
        >
          <h2 className="display-lg">Enriching Lives.</h2>
        </div>

        <div 
          className="narrative-phrase"
          style={{ 
            position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
            width: '100%', textAlign: 'center', opacity: 0, transformOrigin: 'center', maxWidth: '900px'
          }}
        >
          <p className="display-md" style={{ color: 'var(--color-muted)' }}>
            Recognizing the critical need for organized, conflict-free wealth advisory...
          </p>
        </div>

        <div 
          className="narrative-phrase"
          style={{ 
            position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
            width: '100%', textAlign: 'center', opacity: 0, transformOrigin: 'center', maxWidth: '900px'
          }}
        >
          <p className="display-md" style={{ color: 'var(--color-ink)' }}>
            We protect asset purchasing power against inflation.
          </p>
        </div>

      </div>
    </section>
  );
};

export default AboutNarrative;
