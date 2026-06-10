import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import PassionWidget from '../widgets/PassionWidget';
import UnderstandingWidget from '../widgets/UnderstandingWidget';
import IntegrityWidget from '../widgets/IntegrityWidget';
import ExcellenceWidget from '../widgets/ExcellenceWidget';
import DisciplineWidget from '../widgets/DisciplineWidget';
import UnityWidget from '../widgets/UnityWidget';

gsap.registerPlugin(ScrollTrigger);

const AboutCoreValues = () => {
  const containerRef = useRef(null);

  const coreValues = [
    {
      name: 'Passion',
      desc: 'Passion drives us to go out of our way to understand exactly what our customers need and how we can support their wealth journeys.',
      icon: <PassionWidget />
    },
    {
      name: 'Understanding',
      desc: 'Our clients deserve our care, respect, and empathy. We listen attentively to build a strategy that works specifically for your unique situation.',
      icon: <UnderstandingWidget />
    },
    {
      name: 'Integrity',
      desc: 'We conduct our business with absolute honesty and transparency. Everything we do stands up to the highest standards of scrutiny.',
      icon: <IntegrityWidget />
    },
    {
      name: 'Excellence',
      desc: 'The quality of our investment analysis, research, and advisory services must represent the absolute peak of industry standards.',
      icon: <ExcellenceWidget />
    },
    {
      name: 'Discipline',
      desc: 'Financial markets require rigorous control, regulation, and direction. We implement systematic guidelines to keep your assets secure.',
      icon: <DisciplineWidget />
    },
    {
      name: 'Unity',
      desc: 'Developing strong, long-term relationships based on trust, collaboration, and mutual growth with our clients is our ultimate standard.',
      icon: <UnityWidget />
    }
  ];

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Setup matchMedia for responsive animations
      let mm = gsap.matchMedia();

      mm.add("(min-width: 769px)", () => {
        const items = gsap.utils.toArray('.core-timeline-item');
        items.forEach((item, i) => {
          const card = item.querySelector('.core-timeline-card');
          const isLeft = i % 2 === 0;
          
          gsap.fromTo(card,
            { opacity: 0, x: isLeft ? -100 : 100 },
            { 
              opacity: 1, 
              x: 0, 
              duration: 1, 
              ease: 'power3.out',
              scrollTrigger: {
                trigger: item,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
              }
            }
          );
        });
      });

      mm.add("(max-width: 768px)", () => {
        const items = gsap.utils.toArray('.core-timeline-item');
        items.forEach((item) => {
          const card = item.querySelector('.core-timeline-card');
          
          gsap.fromTo(card,
            { opacity: 0, x: 50 },
            { 
              opacity: 1, 
              x: 0, 
              duration: 1, 
              ease: 'power3.out',
              scrollTrigger: {
                trigger: item,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
              }
            }
          );
        });
      });

    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section 
      className="section" 
      ref={containerRef}
      style={{ paddingTop: '120px', paddingBottom: '120px', background: 'var(--color-surface-1)', position: 'relative', overflow: 'hidden' }}
    >
      <style>{`
        .core-timeline-container { position: relative; max-width: 1100px; margin: 80px auto 0; }
        .core-timeline-spine { position: absolute; top: 0; bottom: 0; left: 50%; width: 2px; background: linear-gradient(to bottom, transparent, var(--color-subtle) 5%, var(--color-subtle) 95%, transparent); transform: translateX(-50%); }
        .core-timeline-item { display: flex; padding: 50px 0; width: 100%; position: relative; }
        .core-timeline-item.left { justify-content: flex-start; }
        .core-timeline-item.right { justify-content: flex-end; }
        .core-timeline-node { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 20px; height: 20px; border-radius: 50%; background: var(--color-primary); border: 4px solid var(--color-surface-1); z-index: 2; box-shadow: 0 0 15px rgba(211,47,47,0.5); }
        
        .core-timeline-card { 
          width: 44%; 
          padding: 40px; 
          border-radius: var(--radius-lg); 
          background: linear-gradient(135deg, rgba(30,30,30,0.6), rgba(10,10,10,0.8)); 
          border: 1px solid var(--glass-border-hover); 
          box-shadow: 0 20px 40px rgba(0,0,0,0.3);
          backdrop-filter: blur(10px);
          position: relative;
        }
        
        /* Small connecting line from spine to card */
        .core-timeline-card::before {
          content: '';
          position: absolute;
          top: 50%;
          width: 6%;
          height: 2px;
          background: var(--glass-border-hover);
        }
        .core-timeline-item.left .core-timeline-card::before { right: -6%; }
        .core-timeline-item.right .core-timeline-card::before { left: -6%; }

        @media (max-width: 768px) {
          .core-timeline-spine { left: 30px; transform: none; }
          .core-timeline-item.left, .core-timeline-item.right { justify-content: flex-end; padding: 30px 0; }
          .core-timeline-node { left: 30px; transform: translate(-50%, -50%); }
          .core-timeline-card { width: calc(100% - 80px); padding: 30px; }
          .core-timeline-card::before { display: none; }
        }
      `}</style>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
          <span className="section-label" style={{ marginBottom: '20px', display: 'inline-block' }}>Operational Ethics</span>
          <h2 className="display-lg" style={{ marginBottom: '1.5rem' }}>Our Core Values.</h2>
          <p className="text-body" style={{ fontSize: '1.2rem', color: 'var(--color-muted)' }}>
            Vittavardhana is a values-driven organization. These six tenets guide our client relationships and research desks.
          </p>
        </div>

        <div className="core-timeline-container">
          <div className="core-timeline-spine"></div>

          {coreValues.map((val, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <div className={`core-timeline-item ${isLeft ? 'left' : 'right'}`} key={idx}>
                
                <div className="core-timeline-node"></div>

                <div className="core-timeline-card">
                  <span style={{ fontSize: '6rem', fontWeight: 800, color: 'rgba(255,255,255,0.02)', position: 'absolute', top: '-10px', right: isLeft ? '20px' : 'auto', left: isLeft ? 'auto' : '20px', lineHeight: 1, pointerEvents: 'none', fontFamily: 'var(--font-heading)' }}>
                    0{idx + 1}
                  </span>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '24px', marginBottom: '20px', position: 'relative', zIndex: 2 }}>
                    <div style={{ width: '60px', height: '60px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {val.icon}
                    </div>
                    <h4 className="display-md" style={{ margin: 0, fontSize: '2rem' }}>{val.name}</h4>
                  </div>
                  
                  <p className="text-body" style={{ color: 'var(--color-muted)', fontSize: '1.1rem', lineHeight: '1.7', position: 'relative', zIndex: 2 }}>
                    {val.desc}
                  </p>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutCoreValues;
