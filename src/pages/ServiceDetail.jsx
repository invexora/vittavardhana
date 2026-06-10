import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft, CheckCircle, Calculator, ShieldCheck
} from 'lucide-react';

const ServiceDetail = () => {
  const { id } = useParams();

  // SIP Calculator State
  const [monthlyInvest, setMonthlyInvest] = useState(5000);
  const [annualReturn, setAnnualReturn] = useState(12);
  const [years, setYears] = useState(10);

  // Compute SIP returns directly during render
  const calculateSip = () => {
    const P = monthlyInvest;
    const i = (annualReturn / 12) / 100;
    const n = years * 12;

    const totalValue = i === 0
      ? P * n
      : P * ((Math.pow(1 + i, n) - 1) / i) * (1 + i);

    const investedAmount = P * n;
    const gainAmount = Math.max(0, totalValue - investedAmount);

    return {
      invested: Math.round(investedAmount),
      gain: Math.round(gainAmount),
      total: Math.round(totalValue)
    };
  };

  const sipResult = calculateSip();

  // Format currency to Indian Rupees
  const formatRupee = (value) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(value);
  };

  // Find active service data
  const servicesContent = {
    'traditional-investments': {
      title: 'Traditional Investments',
      sub: 'Wealth preservation through secure, stable financial instruments.',
      desc: 'Traditional investments form the bedrock of defensive financial portfolios. They are designed for steady growth, low volatility, and safety of principal. Vittavardhana assists you in selecting, auditing, and optimizing these secure assets in alignment with your risk tolerance and age parameters.',
      benefits: [
        'Capital Preservation: Guaranteed security of capital under Government backed schemes.',
        'Steady Income: Constant cash flow models through monthly/quarterly payouts.',
        'Inflation Hedge: Gold and Real Estate indices offset currency devaluation.',
        'Tax Deductions: Leverage long-term PPF deposits and NPS systems for maximum tax rebates.'
      ],
      details: [
        { label: 'Asset Risk Profile', val: 'Low to Minimal' },
        { label: 'Ideal Horizon', val: '5+ Years' },
        { label: 'Primary Offerings', val: 'Fixed Deposits, PPF, NPS, Real Estate, Gold Bonds' },
        { label: 'Average Historical Yields', val: '6.5% - 8.5% per annum' }
      ]
    },
    'modern-investments': {
      title: 'Modern Investments',
      sub: 'Accelerated equity growth through contemporary market assets.',
      desc: 'Modern investments target high capital appreciation by participating directly in business equity, indices, and commodities. Vittavardhana combines technical analysis (chart trends, support/resistance) and fundamental research (balance sheet analysis, valuations) to construct growth-oriented portfolios.',
      benefits: [
        'Pre-IPO Opportunities: Invest in late-stage unicorn startups before they hit the public stock market.',
        'Compounding Gains: Leverage direct equity and mutual funds for compounding returns.',
        'Liquidity: High liquidity allows swift entry and exit during market cycles.',
        'Diversification: Dynamic allocation across ETFs, commodities (Gold, Silver), and stable currencies.'
      ],
      details: [
        { label: 'Asset Risk Profile', val: 'Moderate to High' },
        { label: 'Ideal Horizon', val: '3 - 7 Years' },
        { label: 'Primary Offerings', val: 'Direct Stocks, Pre-IPOs, Index Mutual Funds, Commodity Hedging' },
        { label: 'Average Historical Yields', val: '12% - 16% per annum (varies)' }
      ]
    },
    'alternative-investment': {
      title: 'Alternative Investments',
      sub: 'Decoupled asset classes for sophisticated portfolio hedging.',
      desc: 'Alternative investments present opportunities that operate outside standard stock and bond corridors. Vittavardhana leads in alternative asset advisory, evaluating startups, digital assets, and asset-backed debt systems for premium clients.',
      benefits: [
        'Startup Equity: Support seed and pre-Series A startups for exponential multiples.',
        'Bill Discounting: Short-term corporate credit offering fixed double-digit yields (11%-13%).',
        'REITs: Invest in high-ticket commercial real estate yielding rental payouts without physical management.',
        'Cryptocurrency & Web3: Tactical allocation in major digital assets (BTC, ETH) with strict risk caps.'
      ],
      details: [
        { label: 'Asset Risk Profile', val: 'High to Aggressive' },
        { label: 'Ideal Horizon', val: '2 - 5 Years' },
        { label: 'Primary Offerings', val: 'Bill Discounting, REITs, Cryptocurrencies, Venture Capital' },
        { label: 'Average Historical Yields', val: '11% - 25% per annum' }
      ]
    },
    'sip': {
      title: 'Systematic Investment Plans (SIP)',
      sub: 'Disciplined wealth creation through rupee cost averaging.',
      desc: 'Systematic Investment Plans (SIPs) make market participation accessible, safe, and automated. By investing a fixed amount at recurring times, you purchase more units when prices are low and fewer units when prices are high, eliminating the risk of timing the market.',
      benefits: [
        'Rupee Cost Averaging: Naturally handles market cycles without emotional intervention.',
        'Power of Compounding: Small amounts invested early compound into massive corporate reserves.',
        'Disciplined Savings: Cultivates systematic wealth building by automating bank mandates.',
        'Ultimate Flexibility: Start with as little as ₹500/month, and pause or modify at any time.'
      ],
      details: [
        { label: 'Asset Risk Profile', val: 'Subject to underlying mutual fund' },
        { label: 'Ideal Horizon', val: '3 - 15+ Years' },
        { label: 'Primary Offerings', val: 'Equity Mutual Funds, Hybrid SIPs, Debt SIPs' },
        { label: 'Average Historical Yields', val: '10% - 15% per annum' }
      ]
    },
    'portfolio-restructuring': {
      title: 'Portfolio Restructuring',
      sub: 'Realigning assets to protect capital and maximize growth.',
      desc: 'Over time, portfolios drift from their target asset allocation due to differential market movements, or contain obsolete mutual funds with high expense ratios. Vittavardhana conducts a exhaustive audit to remove structural drag and re-optimize weight parameters.',
      benefits: [
        'Asset Realignment: Restores the portfolio to the client\'s precise target risk profile.',
        'Removal of Drags: Identifies and liquidates high-expense, underperforming assets.',
        'Tax Optimization: Implements tax-loss harvesting to write off capital gains obligations.',
        'Reinvestment: Reallocates capital into higher-yielding, modern asset indices.'
      ],
      details: [
        { label: 'Process Audit time', val: '3 - 5 Business Days' },
        { label: 'Ideal frequency', val: 'Annually or Semi-Annually' },
        { label: 'Outputs', val: 'Full Portfolio Diagnostic report, Reallocation orders' },
        { label: 'Target Benefit', val: 'Aims to boost net yields by 1.5% - 3.0% annually' }
      ]
    },
    'ipo-advisory': {
      title: 'IPO Advisory',
      sub: 'Expert preparation for public stock market listings.',
      desc: 'An Initial Public Offering is a pivotal milestone for any corporate entity. Vittavardhana\'s IPO Advisory works with expanding mid-size corporates to prepare their capital structure, operations, and governance models for a successful public listing.',
      benefits: [
        'Valuation Modeling: Setting correct valuations to attract long-term institutional backing.',
        'Prospectus Structuring: Building DRHP documents in compliance with regulatory bodies.',
        'Pre-IPO Capital: Raising funds from premium private equity indices before Listing Day.',
        'Investor Relations: Positioning the corporate story to mutual funds and retail groups.'
      ],
      details: [
        { label: 'Target Clients', val: 'Mid-sized corporates, high-growth startups' },
        { label: 'Process Horizon', val: '6 - 18 Months' },
        { label: 'Services', val: 'Valuations, DRHP filings, Underwriting setups, Pre-IPO sales' },
        { label: 'Regulatory Scope', val: 'SEBI compliance advisory' }
      ]
    },
    'advisory-services': {
      title: 'Advisory Services',
      sub: 'Personalized wealth leadership planning for HNIs and families.',
      desc: 'Wealth is not just about asset appreciation; it requires preservation, inheritance planning, and structured tax leadership. Our certified advisory service maps out holistic pathways for high-net-worth individuals to sustain their wealth.',
      benefits: [
        'Estate Planning: Crafting trusts and wills to transition wealth seamlessly across generations.',
        'Tax Optimization: Structuring income streams, investments, and corporations to optimize tax brackets.',
        'Risk Management: Setting up corporate keyman insurance, health buffers, and capital protections.',
        'Bespoke Planning: Individualized support with dedicated monthly reviews and phone access.'
      ],
      details: [
        { label: 'Service Level', val: 'Dedicated Wealth Advisor' },
        { label: 'Minimum Relationship Value', val: '₹10 Lakhs Portfolio Size' },
        { label: 'Primary Outputs', val: 'Annual Financial Plan, Monthly Audits, Quarterly Rebalancing' },
        { label: 'Review Frequency', val: 'Monthly or On-Demand' }
      ]
    }
  };

  const activeSvc = servicesContent[id] || servicesContent['traditional-investments'];

  return (
    <div className="svcdetail-page">

      {/* HEADER SECTION */}
      <section className="svcdetail-hero">
        <div className="container">
          <Link to="/services" className="svcdetail-back-link">
            <ArrowLeft size={16} className="text-gold" /> Back to Services
          </Link>
          <h1 className="display-lg svcdetail-title">{activeSvc.title}</h1>
          <p className="svcdetail-subtitle">{activeSvc.sub}</p>
        </div>
      </section>

      {/* SERVICE BODY */}
      <section className="scroll-reveal">
        <div className="container">
          <div className="service-detail-grid">

            {/* Left Content Area */}
            <div className="svcdetail-left">

              {/* Service Overview */}
              <div className="glass-card svcdetail-overview">
                <h3 className="svcdetail-section-heading">Service Overview</h3>
                <p className="svcdetail-overview-text">{activeSvc.desc}</p>
              </div>

              {/* DYNAMIC FEATURE WIDGET: PREMIUM SIP CALCULATOR COCKPIT */}
              {id === 'sip' && (
                <div className="code-window-card glow-pulse svcdetail-sip-card">
                  {/* Console Header Bar */}
                  <div className="svcdetail-sip-header">
                    <div className="editor-header-dots">
                      <div className="editor-dot red" />
                      <div className="editor-dot yellow" />
                      <div className="editor-dot green" />
                    </div>
                    <span className="svcdetail-sip-filename">compounding_cockpit.sh</span>
                  </div>

                  <div className="svcdetail-sip-title-row">
                    <Calculator className="text-gold" size={22} />
                    <h3 className="svcdetail-sip-title">Wealth Compounding Simulator</h3>
                  </div>

                  {/* Sliders and Metrics Display side by side */}
                  <div className="svcdetail-sip-grid">

                    {/* Input Controls */}
                    <div className="svcdetail-sip-controls">

                      {/* Monthly Investment */}
                      <div className="svcdetail-slider-group">
                        <div className="svcdetail-slider-label-row">
                          <span className="svcdetail-slider-label">Monthly Capital Contribution</span>
                          <span className="svcdetail-slider-value">{formatRupee(monthlyInvest)}</span>
                        </div>
                        <input
                          type="range"
                          min="500"
                          max="100000"
                          step="500"
                          value={monthlyInvest}
                          onChange={(e) => setMonthlyInvest(parseInt(e.target.value))}
                          className="crimson-slider"
                        />
                      </div>

                      {/* Expected Return */}
                      <div className="svcdetail-slider-group">
                        <div className="svcdetail-slider-label-row">
                          <span className="svcdetail-slider-label">Expected Annual Yield (CAGR)</span>
                          <span className="svcdetail-slider-value">{annualReturn}%</span>
                        </div>
                        <input
                          type="range"
                          min="1"
                          max="30"
                          step="0.5"
                          value={annualReturn}
                          onChange={(e) => setAnnualReturn(parseFloat(e.target.value))}
                          className="crimson-slider"
                        />
                      </div>

                      {/* Time Period */}
                      <div className="svcdetail-slider-group">
                        <div className="svcdetail-slider-label-row">
                          <span className="svcdetail-slider-label">Investment Duration</span>
                          <span className="svcdetail-slider-value">{years} Years</span>
                        </div>
                        <input
                          type="range"
                          min="1"
                          max="40"
                          step="1"
                          value={years}
                          onChange={(e) => setYears(parseInt(e.target.value))}
                          className="crimson-slider"
                        />
                      </div>

                    </div>

                    {/* Results Panel */}
                    <div className="result-card-inner">
                      <div className="svcdetail-result-item">
                        <span className="svcdetail-result-label">Invested Capital</span>
                        <h4 className="svcdetail-result-amount">{formatRupee(sipResult.invested)}</h4>
                      </div>
                      <div className="svcdetail-result-item">
                        <span className="svcdetail-result-label">Compounded Returns (Gains)</span>
                        <h4 className="svcdetail-result-amount svcdetail-result-gain">{formatRupee(sipResult.gain)}</h4>
                      </div>
                      <div className="svcdetail-result-total">
                        <span className="svcdetail-result-label svcdetail-result-label-bold">Total Wealth Accumulated</span>
                        <h3 className="svcdetail-result-total-amount">{formatRupee(sipResult.total)}</h3>
                      </div>
                    </div>
                  </div>

                  {/* Visual Proportion Bar */}
                  <div className="svcdetail-sip-bar-wrapper">
                    <div className="svcdetail-sip-bar-track">
                      <div
                        className="svcdetail-sip-bar-invested"
                        style={{ width: `${(sipResult.invested / sipResult.total) * 100}%` }}
                      />
                      <div
                        className="svcdetail-sip-bar-gains"
                        style={{ width: `${(sipResult.gain / sipResult.total) * 100}%` }}
                      />
                    </div>

                    <div className="svcdetail-sip-bar-legend">
                      <div className="svcdetail-sip-legend-item">
                        <span className="svcdetail-legend-dot svcdetail-legend-dot-crimson" />
                        <span>Returns ({Math.round((sipResult.gain / sipResult.total) * 100) || 0}%)</span>
                      </div>
                      <div className="svcdetail-sip-legend-item">
                        <span className="svcdetail-legend-dot svcdetail-legend-dot-slate" />
                        <span>Invested ({Math.round((sipResult.invested / sipResult.total) * 100) || 0}%)</span>
                      </div>
                    </div>
                  </div>

                </div>
              )}

              {/* Core Benefits */}
              <div className="svcdetail-benefits-section">
                <h3 className="svcdetail-section-heading">Core Benefits &amp; Scope</h3>
                <div className="svcdetail-benefits-grid">
                  {activeSvc.benefits ? activeSvc.benefits.map((benefit, idx) => {
                    const [title, desc] = benefit.split(': ');
                    return (
                      <div key={idx} className="benefit-feature-card">
                        <CheckCircle size={18} className="text-gold svcdetail-benefit-icon" />
                        <div>
                          <h4 className="svcdetail-benefit-title">{title}</h4>
                          {desc && (
                            <p className="svcdetail-benefit-desc">{desc}</p>
                          )}
                        </div>
                      </div>
                    );
                  }) : (
                    <div className="svcdetail-benefits-empty">
                      <p>Checklist and full service prospectus available on inquiry.</p>
                    </div>
                  )}
                </div>
              </div>

            </div>

            {/* Right Column Area */}
            <div className="svcdetail-right">

              {/* Metrics Table Card */}
              <div className="glass-card svcdetail-metrics-card">
                <h4 className="svcdetail-metrics-heading">Service Metrics</h4>
                <div className="svcdetail-metrics-list">
                  {activeSvc.details ? activeSvc.details.map((detail, idx) => (
                    <div key={idx} className="metric-row-hairline">
                      <span className="svcdetail-metric-label">{detail.label}</span>
                      <span className="svcdetail-metric-value">{detail.val}</span>
                    </div>
                  )) : (
                    <span className="svcdetail-metric-empty">Request metrics during inquiry.</span>
                  )}
                </div>
              </div>

              {/* WhatsApp Inquiry Card */}
              <div className="inquiry-form-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '40px 20px' }}>
                <ShieldCheck size={42} className="text-gold" style={{ marginBottom: '16px' }} />
                <h4 className="svcdetail-inquiry-heading" style={{ marginBottom: '12px' }}>Interested in this Service?</h4>
                <p style={{ color: 'var(--color-muted)', marginBottom: '24px', fontSize: '0.9rem', lineHeight: 1.5 }}>
                  Connect with our advisory team instantly on WhatsApp to discuss {activeSvc.title} tailored to your portfolio.
                </p>
                <a 
                  href={`https://api.whatsapp.com/send/?phone=919876549402&text=${encodeURIComponent(`Hi, we are interested in your ${activeSvc.title} service. Please get in touch with us!`)}&type=phone_number&app_absent=0`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-primary svcdetail-inquiry-submit"
                  style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', width: '100%' }}
                >
                  Enquire via WhatsApp
                </a>
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default ServiceDetail;
