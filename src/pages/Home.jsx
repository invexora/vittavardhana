import { useState, useEffect, useRef, lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { ErrorBoundary } from '../components/ErrorBoundary';
import {
  Shield, ArrowRight, Phone, CheckCircle,
  Landmark, Cpu, RotateCcw, FileSpreadsheet,
  HelpCircle, TrendingUp, Quote, X
} from 'lucide-react';
import { createScrollReveal, createStaggerReveal, createCounterAnimation, createBatchReveal, createPinnedRow, killAllScrollTriggers } from '../lib/animations';
import BarChartWidget from '../components/widgets/BarChartWidget';
import PieChartWidget from '../components/widgets/PieChartWidget';
import LineChartWidget from '../components/widgets/LineChartWidget';
import DataGridWidget from '../components/widgets/DataGridWidget';
import FunnelWidget from '../components/widgets/FunnelWidget';
import NetworkWidget from '../components/widgets/NetworkWidget';
import MobileAppVisual from '../components/ui/MobileAppVisual';
import DesktopAppVisual from '../components/ui/DesktopAppVisual';
import TestimonialMarquee from '../components/ui/TestimonialMarquee';

// Lazy-load the heavy 3D component for performance
const HeroScene = lazy(() => import('../components/HeroScene'));

const Home = () => {
  // Callback Form State
  const [formData, setFormData] = useState({ firstName: '', lastName: '', phone: '' });
  const [submitted, setSubmitted] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);

  // Refs for GSAP
  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const servicesRef = useRef(null);
  const rowRefs = useRef([]); // Refs for the 3 distinct pinned rows
  const ctaRef = useRef(null);
  const testimonialsRef = useRef(null);
  const aumRef = useRef(null);

  // Initialize scroll-triggered animations
  useEffect(() => {
    const timer = setTimeout(() => {
      // Hero content reveal
      if (heroRef.current) {
        createStaggerReveal(heroRef.current, '.hero-animate', { y: 30, stagger: 0.12 });
      }

      // Stats counter animations
      if (statsRef.current) {
        const statNumbers = statsRef.current.querySelectorAll('.stat-number');
        statNumbers.forEach((el) => {
          const target = parseInt(el.getAttribute('data-target'), 10);
          const suffix = el.getAttribute('data-suffix') || '';
          createCounterAnimation(el, target, { suffix, start: 'top 90%' });
        });
      }

      // AUM Slow Counter
      if (aumRef.current) {
        createCounterAnimation(aumRef.current, 50, { duration: 4, start: 'top 95%' });
      }

      // Service rows pinning
      rowRefs.current.forEach(row => {
        if (row) createPinnedRow(row, '.expertise-card');
      });

      // CTA reveal
      if (ctaRef.current) {
        createScrollReveal(ctaRef.current, { y: 40 });
      }

      // Testimonials stagger
      if (testimonialsRef.current) {
        createStaggerReveal(testimonialsRef.current, '.testimonial-card', { y: 30, stagger: 0.1 });
      }
    }, 200);

    return () => {
      clearTimeout(timer);
      killAllScrollTriggers();
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmitCallback = (e) => {
    e.preventDefault();
    if (formData.firstName && formData.phone) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ firstName: '', lastName: '', phone: '' });
        setPopupOpen(false);
      }, 5000);
    }
  };

  const services = [
    {
      id: 'alternative-investment',
      title: 'Alternative Investments',
      desc: 'Diversify into decoupled asset classes like startup equity, Web3 venture capital, and asset-backed bill discounting yielding 11%-13% APR.',
      Widget: FunnelWidget
    },
    {
      id: 'sip',
      title: 'Systematic Investment Plans',
      desc: 'Automated, disciplined compounding mapping your financial independence. Leverage rupee cost averaging without emotional market timing.',
      Widget: BarChartWidget
    },
    {
      id: 'traditional-investments',
      title: 'Traditional Investments',
      desc: 'Preserve capital through fixed-income models, PPF, gold indices, and real estate allocations built for generation-spanning stability.',
      Widget: PieChartWidget
    },
    {
      id: 'advisory-services',
      title: 'Advisory Services',
      desc: 'Holistic wealth planning, inheritance structures, and tax optimization consultations managed by certified investment advisors.',
      Widget: NetworkWidget
    },
    {
      id: 'modern-investments',
      title: 'Modern Investments',
      desc: 'Accelerate growth with unlisted pre-IPOs, index ETFs, direct equities, commodities, and hedging strategies tailored to modern risk profiles.',
      Widget: LineChartWidget
    },
    {
      id: 'portfolio-restructuring',
      title: 'Portfolio Restructuring',
      desc: 'Audit obsolete holdings and rebalance parameters to maximize net returns. Minimize expense ratio drags and optimize tax liabilities.',
      Widget: DataGridWidget
    }
  ];

  // Group services into pairs (3 rows of 2) for the layout
  const serviceRows = [
    services.slice(0, 2),
    services.slice(2, 4),
    services.slice(4, 6)
  ];

  const testimonials = [
    {
      name: 'Kishor Patil',
      role: 'Business Owner',
      quote: 'Vittavardhana helped me structure my retirement funds with absolute transparency. Their advisory services have been game-changing for my family.'
    },
    {
      name: 'Susparsha Gaikwad',
      role: 'Senior Consultant',
      quote: 'Their portfolio restructuring advice simplified our asset allocation and significantly improved our tax-adjusted returns.'
    },
    {
      name: 'Prakash Patil',
      role: 'Real Estate Developer',
      quote: 'They bring complete integrity to wealth management. Their transparent models and expert stock evaluation are highly reliable.'
    }
  ];

  return (
    <div className="overflow-hidden" style={{ backgroundColor: 'var(--color-canvas)', minHeight: '100vh' }}>

      {/* ═══════ 3D FIXED BACKGROUND (vanquish.so style) ═══════ */}
      <ErrorBoundary fallback={<div className="hero-3d-error-fallback" />}>
        <Suspense fallback={<div className="hero-3d-loading" />}>
          <HeroScene />
        </Suspense>
      </ErrorBoundary>

      {/* ═══════ 1. HERO — Immersive 3D Fullscreen ═══════ */}
      <section className="hero hero-immersive" id="hero-top">


        {/* Dark gradient overlay for text readability */}
        <div className="hero-overlay" />

        {/* Split Content — avoids the 3D model in the center */}
        <div className="container hero-split-wrapper" ref={heroRef}>
          {/* Left Side Content */}
          <div className="hero-left-content hero-animate">

            <h1 className="display-xl hero-headline" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}>
              Vittavardhanaa:<br />
              <span className="highlight">Independent Investment Advisory</span>
            </h1>

            <p className="hero-subtitle">
              Trusted investment strategy and portfolio advisory for individuals and businesses. 15+ years of expertise across mutual funds, equities, SIPs, PMS and alternative assets.
            </p>

            <div className="hero-buttons">
              <Link to="/services" className="button-primary">
                View Services <ArrowRight size={18} />
              </Link>
              <a
                href={`https://api.whatsapp.com/send/?phone=919876549402&text=${encodeURIComponent('Hi, we are interested in your services. Please get in touch with us!')}&type=phone_number&app_absent=0`}
                target="_blank"
                rel="noopener noreferrer"
                className="button-secondary"
                style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
              >
                Free Consultation
              </a>
            </div>
          </div>

          {/* Right Side Content - AUM Display */}
          <div className="hero-right-content hero-animate" style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            
            {/* Glowing Green Radial Background */}
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, transparent 70%)', filter: 'blur(30px)', pointerEvents: 'none', zIndex: 0 }} />

            <div className="hero-aum-inner" style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              
              {/* Main Numbers Row */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <span style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 600, color: '#6b7280', transform: 'translateY(10px)' }}>₹</span>
                
                <div style={{ 
                  color: '#10b981', 
                  display: 'inline-block',
                  filter: 'drop-shadow(0 10px 20px rgba(16, 185, 129, 0.4))'
                }}>
                  <span
                    ref={aumRef}
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: 'clamp(4rem, 8vw, 6.5rem)',
                      fontWeight: 700,
                      lineHeight: 1,
                      letterSpacing: '-0.02em'
                    }}
                  >
                    0
                  </span>
                </div>
                
                <span style={{ 
                  fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
                  fontWeight: 600, 
                  background: 'linear-gradient(to bottom right, #34d399, #10b981)', 
                  WebkitBackgroundClip: 'text', 
                  WebkitTextFillColor: 'transparent',
                  transform: 'translateY(15px)'
                }}>
                  cr+
                </span>
              </div>

              {/* Fading Separator Line */}
              <div style={{ width: '150px', height: '1px', background: 'linear-gradient(90deg, transparent 0%, #10b981 50%, transparent 100%)', marginBottom: '1rem', opacity: 0.6 }} />

              {/* Label Text */}
              <span style={{ 
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(0.85rem, 2vw, 1.1rem)', 
                fontWeight: 600, 
                color: '#9ca3af', 
                letterSpacing: '3px',
                textTransform: 'uppercase',
                marginBottom: '1rem'
              }}>
                Assets Under Management
              </span>

              {/* Three Dots Indicator */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#10b981', opacity: 0.8 }} />
                <div style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#10b981', opacity: 0.5 }} />
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#10b981', opacity: 0.8 }} />
              </div>

            </div>
          </div>
        </div>

        {/* Scroll down indicator */}
        <a href="#stats" className="hero-scroll-down">
          <span className="hero-scroll-line" />
          <span>Scroll</span>
        </a>
      </section>


      {/* ═══════ 2. STATS TICKER ═══════ */}
      <section id="stats" className="section section-dark section-border-top section-border-bottom" ref={statsRef}>
        <div className="container">
          <div className="split-layout-left">
            <div className="stats-strip grid-2" style={{ rowGap: '32px' }}>
              <div className="stat-item">
                <div className="stat-number" data-target="15" data-suffix="+">0</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-item">
                <div className="stat-number" data-target="500" data-suffix="+">0</div>
                <div className="stat-label">Active HNI Clients</div>
              </div>
              <div className="stat-item">
                <div className="stat-number" data-target="100" data-suffix="+">0</div>
                <div className="stat-label">Lending Institutions</div>
              </div>
              <div className="stat-item">
                <div className="stat-number" data-target="100" data-suffix="%">0</div>
                <div className="stat-label">Transparent Auditing</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ 3. SERVICES — Expertise Cards ═══════ */}
      <section className="section" id="services" ref={servicesRef}>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', paddingTop: '10vh' }}>
          
          {/* Top Text */}
          <div style={{ width: '100%', maxWidth: '800px', textAlign: 'left', zIndex: 10 }}>
            <div className="flex flex-col gap-md" style={{ alignItems: 'flex-start' }}>
              <span className="section-label">Our Expertise</span>
              <h2 className="display-lg">Tailored Investment Verticals</h2>
              <p className="section-subtitle" style={{ marginLeft: 0 }}>
                We orchestrate allocations across traditional stability corridors, high-yielding modern indices, and alternative market instruments.
              </p>
            </div>
          </div>

          <div className="services-rows-container" style={{ display: 'block' }}>
            {serviceRows.map((row, rowIndex) => (
              <div 
                key={rowIndex} 
                className="services-row-wrapper" 
                ref={el => rowRefs.current[rowIndex] = el}
                style={{ display: 'block', paddingBottom: rowIndex === serviceRows.length - 1 ? '10vh' : '20vh' }}
              >
                <div 
                  className="services-row-grid"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    columnGap: '30vw',
                    rowGap: '2rem',
                    alignItems: 'center',
                  }}
                >
                {row.map((service, colIndex) => (
                  <div 
                    key={service.id} 
                    className={`expertise-card ${colIndex === 0 ? 'card-left' : 'card-right'}`}
                    style={{
                      background: 'rgba(13, 13, 13, 0.95)', 
                      backdropFilter: 'blur(10px)',
                      padding: '1.5rem', 
                      borderRadius: '20px', 
                      border: '1px solid rgba(255,255,255,0.08)',
                      boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)',
                      willChange: 'transform, opacity' // Optimize for GSAP
                    }}
                  >
                    <div style={{ marginBottom: '1.5rem' }}>
                      <service.Widget />
                    </div>
                    
                    <h3 className="card-title" style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>{service.title}</h3>
                    <p className="card-desc" style={{ color: '#888', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>{service.desc}</p>
                    <button className="card-btn" style={{ background: 'transparent', border: 'none', color: '#0ea5e9', fontWeight: 600, padding: 0, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      Explore Capability <ArrowRight size={16} />
                    </button>
                  </div>
                ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ═══════ 3.5 PLATFORM APPS ═══════ */}
      <div style={{ background: 'var(--color-canvas)', position: 'relative', zIndex: 10 }}>
        <section className="section section-dark" id="mobile-app" style={{ marginTop: '150vh', paddingTop: '10vh', paddingBottom: '5vh' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center' }}>
            <div className="split-layout-text">
              <h2 className="display-lg">Mobile Application</h2>
              <p className="section-subtitle" style={{ marginTop: '1rem', marginBottom: '2rem' }}>
                Access your portfolio from anywhere in the world with our intuitive mobile application. Track your investments seamlessly on the go, with real-time updates and full access to your custom advisory dashboard.
              </p>
            </div>
            <div className="split-layout-visual">
               <MobileAppVisual />
            </div>
          </div>
        </div>
      </section>

      <section className="section section-dark" id="desktop-app" style={{ paddingTop: '5vh', paddingBottom: '15vh' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center' }}>
            <div className="split-layout-visual" style={{ order: 2 }}>
               <DesktopAppVisual />
            </div>
            <div className="split-layout-text" style={{ paddingLeft: '2rem', order: 1 }}>
              <h2 className="display-lg">Custom Dashboard</h2>
              <p className="section-subtitle" style={{ marginTop: '1rem', marginBottom: '2rem' }}>
                Gain full control of your investment journey with our personalized dashboard. Enjoy real-time insights, precise performance tracking, and seamless access to your entire portfolio through our powerful desktop interface.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* ═══════ 5. TESTIMONIAL MARQUEE ═══════ */}
      <TestimonialMarquee />

      {/* ═══════ 7. NEW MODERN CTA ═══════ */}
      <section className="section" style={{ padding: '15vh 0', position: 'relative', overflow: 'hidden' }}>
        {/* Abstract floating background elements */}
        <div style={{ position: 'absolute', top: '-20%', left: '-10%', width: '50vw', height: '50vw', background: 'radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, transparent 70%)', filter: 'blur(60px)', zIndex: 0 }} />
        <div style={{ position: 'absolute', bottom: '-20%', right: '-10%', width: '40vw', height: '40vw', background: 'radial-gradient(circle, rgba(14, 165, 233, 0.1) 0%, transparent 70%)', filter: 'blur(60px)', zIndex: 0 }} />

        <div className="container" style={{ position: 'relative', zIndex: 1, display: 'flex', justifyContent: 'center' }}>
          <div style={{ 
            background: 'rgba(255, 255, 255, 0.02)', 
            backdropFilter: 'blur(20px)', 
            border: '1px solid rgba(255, 255, 255, 0.08)', 
            borderRadius: '40px', 
            padding: '5rem 3rem',
            textAlign: 'center',
            maxWidth: '900px',
            width: '100%',
            boxShadow: '0 30px 60px rgba(0,0,0,0.4)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* Subtle inner top highlight */}
            <div style={{ position: 'absolute', top: 0, left: '20%', right: '20%', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(16, 185, 129, 0.5), transparent)' }} />
            
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(16, 185, 129, 0.1)', padding: '8px 16px', borderRadius: '100px', color: '#10b981', fontWeight: 600, fontSize: '0.9rem', marginBottom: '2rem' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981', boxShadow: '0 0 10px #10b981' }} />
              Advisory Available
            </div>
            
            <h2 className="display-xl" style={{ marginBottom: '1.5rem', fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
              Talk to our team <br/><span style={{ color: 'rgba(255,255,255,0.4)' }}>to get started</span>
            </h2>
            
            <p className="section-subtitle" style={{ margin: '0 auto 3rem auto', maxWidth: '600px', fontSize: '1.1rem' }}>
              Launch your wealth journey with a confidential 15-minute portfolio consultation. A certified advisor will contact you within 24 hours.
            </p>
            
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button 
                className="glass-btn glass-btn-primary" 
                onClick={() => setPopupOpen(true)}
                style={{ fontSize: '1.1rem', padding: '1.2rem 2.5rem', borderRadius: '100px' }}
              >
                Schedule Consultation <ArrowRight size={20} />
              </button>
              <Link 
                to="/contact-us" 
                className="glass-btn glass-btn-ghost"
                style={{ fontSize: '1.1rem', padding: '1.2rem 2.5rem', borderRadius: '100px', background: 'rgba(255,255,255,0.05)' }}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
      </div> {/* END SOLID BACKGROUND */}

      {/* ═══════ POPUP FORM ═══════ */}
      <div
        className={`popup-overlay ${popupOpen ? 'popup-overlay-visible' : ''}`}
        onClick={(e) => { if (e.target === e.currentTarget) setPopupOpen(false); }}
      >
        <div className="popup-box">
          <button className="popup-close" onClick={() => setPopupOpen(false)}>
            <X size={20} />
          </button>

          {submitted ? (
            <div className="flex flex-col items-center gap-lg" style={{ padding: '40px 0', textAlign: 'center' }}>
              <div className="contact-icon">
                <CheckCircle size={28} />
              </div>
              <h3 className="display-md">Request Received</h3>
              <p className="text-body">
                Thank you! Our advisory team has received your inquiry. We will contact you at the provided phone number shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmitCallback} className="flex flex-col gap-lg">
              <h3 className="display-md">Schedule a Consultation</h3>
              <p className="text-muted">Provide your details for a confidential 15-minute portfolio review.</p>

              <div className="grid-2">
                <div className="form-group">
                  <label className="form-label">First Name *</label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="John"
                    className="form-input form-input-rect"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Doe"
                    className="form-input form-input-rect"
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+91 XXXXX XXXXX"
                  className="form-input form-input-rect"
                />
              </div>

              <button type="submit" className="glass-btn glass-btn-solid w-full" style={{ marginTop: '8px' }}>
                Schedule Call Back <ArrowRight size={16} />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
