import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutTimeline = () => {
  const containerRef = useRef(null);
  const leftPanelRef = useRef(null);
  const rightPanelRef = useRef(null);

  const milestones = [
    {
      year: '2008',
      title: 'Private Trading Establishment',
      desc: 'Vittavardhana began its operations as a private proprietary trading desk, focusing on fundamental and technical research analysis of Indian stock indices.'
    },
    {
      year: '2012',
      title: 'Registered Advisory Expansion',
      desc: 'Registered as a professional advisory subbroker to manage capital for external clients, establishing a trust-first operational footprint.'
    },
    {
      year: '2018',
      title: 'Cross-Asset Diversification',
      desc: 'Expanded asset operations beyond direct equities into real estate indices, pre-IPO startups, venture capital channels, and alternative yield instruments.'
    },
    {
      year: '2026',
      title: '₹50 Crore AUM Achievement',
      desc: 'Achieved 50 Crore+ Assets Under Advisory (AUM), serving over 500+ corporate leaders, HNI families, and individual builders globally.'
    }
  ];

  useEffect(() => {
    // Only apply pinning on larger screens
    let mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      const rightHeight = rightPanelRef.current.offsetHeight;
      const windowHeight = window.innerHeight;
      
      // Pin the left panel while the right panel scrolls
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top 20%',
        end: () => `+=${Math.max(0, rightHeight - windowHeight + 200)}`,
        pin: leftPanelRef.current,
        pinSpacing: false, // Right panel will just scroll normally alongside
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <section className="section" ref={containerRef} style={{ paddingTop: '100px', paddingBottom: '100px' }}>
      <div className="container">
        <div className="grid-2" style={{ alignItems: 'flex-start', gap: '80px' }}>
          
          {/* Pinned Left Panel */}
          <div ref={leftPanelRef} style={{ maxWidth: '500px' }}>
            <span className="section-label">Evolution</span>
            <h2 className="display-lg" style={{ marginBottom: '1.5rem' }}>Our Timeline.</h2>
            <p className="text-body" style={{ color: 'var(--color-muted)', fontSize: '1.2rem' }}>
              From a proprietary trading desk to a ₹50 Crore advisory institution, we have continually adapted to protect and grow our clients' capital.
            </p>
          </div>

          {/* Scrolling Right Panel */}
          <div ref={rightPanelRef} className="timeline-section" style={{ paddingTop: '10px' }}>
            {milestones.map((m, idx) => (
              <div key={idx} className="timeline-content" style={{ marginBottom: '60px' }}>
                <div className="timeline-point" style={{ top: '8px' }} />
                <div className="timeline-header">
                  <span className="display-md text-gold" style={{ fontSize: '3rem', lineHeight: '1', marginBottom: '10px', display: 'block' }}>
                    {m.year}
                  </span>
                  <h3 className="timeline-title" style={{ fontSize: '1.5rem', marginBottom: '10px' }}>{m.title}</h3>
                </div>
                <p className="timeline-desc" style={{ fontSize: '1.1rem', color: 'var(--color-muted)' }}>{m.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutTimeline;
