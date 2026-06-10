import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

import BarChartWidget from '../components/widgets/BarChartWidget';
import PieChartWidget from '../components/widgets/PieChartWidget';
import LineChartWidget from '../components/widgets/LineChartWidget';
import DataGridWidget from '../components/widgets/DataGridWidget';
import FunnelWidget from '../components/widgets/FunnelWidget';
import NetworkWidget from '../components/widgets/NetworkWidget';
import UnderstandingWidget from '../components/widgets/UnderstandingWidget';
import IPOWidget from '../components/widgets/IPOWidget';
import { createStaggerReveal } from '../lib/animations';

const BentoServiceCard = ({ svc, className }) => {
  const cardRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <div
      ref={cardRef}
      className={`bento-card bento-animate ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className="bento-glow"
        style={{
          background: `radial-gradient(circle 400px at ${mousePos.x}px ${mousePos.y}px, rgba(212, 175, 55, 0.15), transparent 80%)`,
          opacity: isHovered ? 1 : 0
        }}
      />
      <div className="bento-border-glow"
        style={{
          background: `radial-gradient(circle 200px at ${mousePos.x}px ${mousePos.y}px, rgba(212, 175, 55, 0.4), transparent 80%)`,
          opacity: isHovered ? 1 : 0
        }}
      />

      <div className="bento-content">
        
        {/* The Animated 3D Widget - Now full width of the card */}
        <div className="bento-widget-wrapper">
          {svc.icon}
        </div>

        <div className="bento-text-content">
          <div className="bento-header">
            <h2 className="bento-title">{svc.title}</h2>
          </div>

          <p className="bento-desc">{svc.desc}</p>

          <div className="bento-pills">
            {svc.subItems.map((item, idx) => (
              <span key={idx} className="bento-pill">{item}</span>
            ))}
          </div>

          <div className="bento-footer">
            <Link to={`/service/${svc.id}`} className="bento-link">
              Detailed Console <ArrowRight size={14} />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

const Services = () => {
  const gridRef = useRef(null);

  useEffect(() => {
    if (gridRef.current) {
      createStaggerReveal(gridRef.current, '.bento-animate', { y: 50, stagger: 0.1, duration: 1 });
    }
  }, []);

  const services = [
    {
      id: 'traditional-investments',
      title: 'Traditional Investments',
      desc: 'Secure your capital with fixed deposits, public provident funds (PPF), structured retirement plans, physical gold indices, and real estate acquisition.',
      icon: <PieChartWidget />,
      subItems: ['Fixed Deposits', 'PPF', 'Retirement Plans', 'Gold Indices', 'Real Estate']
    },
    {
      id: 'modern-investments',
      title: 'Modern Investments',
      desc: 'Gain access to unlisted pre-IPOs, high-yield mutual funds, index ETFs, direct equities, commodities trading, and currency hedging.',
      icon: <LineChartWidget />,
      subItems: ['Pre-IPO Equities', 'Mutual Funds', 'ETFs', 'Direct Equities', 'Commodities']
    },
    {
      id: 'alternative-investment',
      title: 'Alternative Assets',
      desc: 'Unlock next-generation assets. Explore startup venture capital, cryptocurrencies, invoice bill discounting, REITs, and green energy funds.',
      icon: <FunnelWidget />,
      subItems: ['Startup Equity', 'Crypto & NFTs', 'Invoice Discounting', 'REITs']
    },
    {
      id: 'sip',
      title: 'Systematic Investment Plans',
      desc: 'Eliminate the need to time the market by contributing a fixed amount on weekly, monthly, or quarterly cycles, leveraging rupee cost averaging.',
      icon: <BarChartWidget />,
      subItems: ['Weekly/Monthly SIPs', 'Rupee Cost Averaging', 'Goal Mapping']
    },
    {
      id: 'portfolio-restructuring',
      title: 'Portfolio Restructuring',
      desc: 'Modify, rebalance, and reallocate your current asset holdings. We audit underperforming mutual funds based on updated risk parameters.',
      icon: <DataGridWidget />,
      subItems: ['Asset Audits', 'Underperformance Checks', 'Risk Rebalancing']
    },
    {
      id: 'ipo-advisory',
      title: 'IPO Advisory',
      desc: 'Tailored consulting for companies going public. We support firms through valuation audits, listing preparations, and prospectus structuring.',
      icon: <IPOWidget />,
      subItems: ['Company Valuations', 'Prospectus Structuring', 'Capital Strategy']
    },
    {
      id: 'advisory-services',
      title: 'Advisory Services',
      desc: 'Highly customized advisory focusing on holistic wealth management. We deliver bespoke financial planning, capital growth models, inheritance/estate planning, and corporate wealth preservation consultancy. Built strictly for long-term visionaries.',
      icon: <NetworkWidget />,
      subItems: ['Financial Planning', 'Wealth Preservation', 'Tax Strategy', 'Estate Planning']
    }
  ];

  return (
    <div className="services-page" style={{ background: 'var(--color-canvas)', position: 'relative', overflow: 'hidden' }}>
      
      {/* BACKGROUND ELEMENTS */}
      <div style={{ position: 'absolute', top: 0, right: 0, width: '50vw', height: '50vh', background: 'radial-gradient(circle, rgba(212,175,55,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '20%', left: 0, width: '40vw', height: '40vh', background: 'radial-gradient(circle, rgba(205,50,50,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />

      {/* HEADER SECTION */}
      <section className="services-hero scroll-reveal" style={{ paddingTop: '150px', paddingBottom: '80px', textAlign: 'center', position: 'relative', zIndex: 2 }}>
        <div className="container">
          <span className="section-label" style={{ marginBottom: '20px', display: 'inline-block' }}>Vector Index</span>
          <h1 className="display-lg" style={{ marginBottom: '24px' }}>
            Wealth Advisory Solutions.
          </h1>
          <p className="text-body" style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.2rem', color: 'var(--color-muted)' }}>
            Comprehensive capital allocation models across traditional security corridors, high-yielding modern markets, and alternative investment assets.
          </p>
        </div>
      </section>

      {/* BENTO GRID */}
      <section className="services-grid-section" style={{ paddingBottom: '120px', position: 'relative', zIndex: 2 }}>
        <div className="container" ref={gridRef}>
          <div className="bento-grid">
            {services.map((svc, index) => {
              // The 7th item spans full width
              const isHeroCard = index === 6;
              const cardClass = isHeroCard ? 'bento-span-full' : '';
              
              return (
                <BentoServiceCard key={svc.id} svc={svc} className={cardClass} />
              );
            })}
          </div>
        </div>
      </section>

      {/* STYLES */}
      <style>{`
        .bento-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .bento-card {
          position: relative;
          background: linear-gradient(135deg, rgba(20,20,20,0.8), rgba(10,10,10,0.95));
          border: 1px solid rgba(255,255,255,0.05);
          border-radius: var(--radius-lg);
          padding: 30px;
          overflow: hidden;
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.3s ease;
          display: flex;
          flex-direction: column;
          z-index: 1;
        }

        .bento-card:hover {
          transform: translateY(-5px);
          border-color: rgba(212,175,55,0.3);
          box-shadow: 0 20px 40px rgba(0,0,0,0.4);
          z-index: 2;
        }

        .bento-glow {
          position: absolute;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          transition: opacity 0.3s ease;
        }

        .bento-border-glow {
          position: absolute;
          inset: -1px;
          z-index: -1;
          pointer-events: none;
          transition: opacity 0.3s ease;
          border-radius: inherit;
        }

        .bento-content {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .bento-widget-wrapper {
          width: 100%;
          margin-bottom: 30px;
          transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .bento-card:hover .bento-widget-wrapper {
          transform: translateY(-8px) scale(1.02);
        }

        .bento-text-content {
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .bento-header {
          margin-bottom: 16px;
        }

        .bento-title {
          font-family: var(--font-heading);
          font-size: 1.6rem;
          color: #fff;
          margin: 0;
        }

        .bento-desc {
          color: var(--color-muted);
          line-height: 1.6;
          font-size: 1rem;
          margin-bottom: 24px;
          flex-grow: 1;
        }

        .bento-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 24px;
        }

        .bento-pill {
          padding: 6px 14px;
          border-radius: 20px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          font-size: 0.85rem;
          color: #ccc;
          transition: all 0.3s ease;
          white-space: nowrap;
        }

        .bento-card:hover .bento-pill {
          background: rgba(255,255,255,0.06);
          border-color: rgba(255,255,255,0.15);
          color: #fff;
        }

        .bento-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: var(--color-gold);
          font-weight: 600;
          text-decoration: none;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-size: 0.85rem;
          transition: gap 0.3s ease;
        }

        .bento-link:hover {
          gap: 12px;
        }

        /* 7th Hero Span Configuration */
        .bento-span-full {
          grid-column: 1 / -1;
        }

        .bento-span-full .bento-content {
          flex-direction: row;
          align-items: center;
          gap: 50px;
        }

        .bento-span-full .bento-widget-wrapper {
          flex: 0 0 450px;
          margin-bottom: 0;
        }

        .bento-span-full .bento-text-content {
          flex: 1;
          justify-content: center;
        }

        @media (max-width: 1200px) {
          .bento-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .bento-span-full .bento-content {
            flex-direction: column;
            align-items: flex-start;
            gap: 30px;
          }
          .bento-span-full .bento-widget-wrapper {
            flex: auto;
            width: 100%;
            margin-bottom: 0;
          }
        }

        @media (max-width: 768px) {
          .bento-grid {
            grid-template-columns: 1fr;
          }
          .bento-span-full {
            grid-column: auto;
          }
        }
      `}</style>
    </div>
  );
};

export default Services;
