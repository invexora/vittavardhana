import { useState } from 'react';
import { Calendar, User, Search, BookOpen, ChevronRight, ArrowLeft } from 'lucide-react';

const News = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeArticle, setActiveArticle] = useState(null);

  const categories = ['All', 'SIP', 'Equities', 'Alternative Assets', 'Portfolio Restructuring'];

  const articles = [
    {
      id: 1,
      title: 'The Power of SIPs: Decoupling Wealth from Market Volatility',
      date: 'May 18, 2026',
      category: 'SIP',
      author: 'Kishor Jadhav',
      summary: 'Why systematic investment plans outperform aggressive market-timing strategies over long time horizons using rupee cost averaging.',
      content: `In the volatile landscape of public equities, the urge to "time the market" is one of the most common causes of investor drag. Systematic Investment Plans (SIPs) provide a powerful countermeasure. By investing a fixed sum on recurring cycles, investors automatically purchase more mutual fund units when valuations are compressed and fewer units when markets peak.

Rupee cost averaging removes the emotional burden of investing. Over a 5, 10, or 15-year horizon, this disciplined accumulation compounds significantly. At Vittavardhana, we analyze mutual fund indices and expense ratios to structure SIPs that align with specific lifecycle milestones. Our models demonstrate that disciplined consistency beats erratic trading in 92% of historical market periods.`
    },
    {
      id: 2,
      title: 'Alternative Asset Classes: A Strategic Guide for HNIs',
      date: 'May 10, 2026',
      category: 'Alternative Assets',
      author: 'Rushikesh Gaikwad',
      summary: 'An analysis of bill discounting, REITs, sustainable energy indices, and venture capital allocations in high-net-worth portfolios.',
      content: `Standard stock-and-bond portfolios are increasingly correlated during global macroeconomic corrections. For High-Net-Worth Individuals (HNIs), diversifying into decoupled alternative asset classes is no longer optional—it is a core strategy for wealth preservation.

Alternative investments like invoice bill discounting present corporate-backed fixed yields ranging from 11% to 13% with short lock-in periods (30-90 days). Similarly, commercial Real Estate Investment Trusts (REITs) offer liquid access to premium office and logistics parks with quarterly rental payouts. By capping Web3/Cryptocurrency exposures to small tactical tranches and scaling startup equity, modern investors can construct robust, multi-layered portfolios.`
    },
    {
      id: 3,
      title: 'Pre-IPO Valuations: Unlocking Early Value in Indian Unicorns',
      date: 'April 28, 2026',
      category: 'Equities',
      author: 'Kishor Jadhav',
      summary: 'How late-stage venture capital assets are opening up to individual investors, and how to evaluate financial statements before listing.',
      content: `The path of capital accumulation in India is changing. Companies are remaining private longer, raising late-stage private equity to scale before launching an Initial Public Offering (IPO). Consequently, a substantial portion of value creation occurs before a company hits the public stock exchanges.

Investing in unlisted pre-IPO shares lets individual investors purchase equities at early-stage valuations. However, the unlisted space carries liquidity constraints and information asymmetry. Vittavardhana's modern investment desk bridges this gap by conducting rigorous fundamental research, examining cash flows, corporate governance, and secondary transaction discounts to identify pre-IPO unicorns positioned for long-term growth.`
    },
    {
      id: 4,
      title: 'Portfolio Restructuring: How Rebalancing Boosts Net Yields',
      date: 'April 14, 2026',
      category: 'Portfolio Restructuring',
      author: 'Rushikesh Gaikwad',
      summary: 'Auditing your mutual fund holdings, removing expense ratio drags, and re-allocating capital to capture modern market returns.',
      content: `A portfolio left unattended will gradually drift. During a bull market in equities, the portfolio's risk factor increases beyond the client's comfortable parameters. Portfolio restructuring is the process of auditing holdings, eliminating underperforming assets, and rebalancing parameters.

Restructuring focuses on removing high-expense direct plans or underperforming active funds, replacing them with optimized index trackers or targeted sectoral equities. Additionally, structuring allows investors to write off losses against realized capital gains (tax-loss harvesting). Regular restructuring can optimize net annual portfolio returns by 1.5% to 3.0%, transforming long-term compounding outcomes.`
    },
    {
      id: 5,
      title: 'Traditional vs. Modern: Constructing a Dual-Core Portfolio',
      date: 'March 25, 2026',
      category: 'Equities',
      author: 'Kishor Jadhav',
      summary: 'Balancing the guaranteed security of FDs and gold bonds with the accelerated capital appreciation of index equities.',
      content: `A healthy wealth planning model does not force a choice between old-school security and modern growth assets. Instead, it combines both. We call this the Dual-Core Portfolio Strategy.

The core foundation consists of Traditional Investments (guaranteed fixed deposits, sovereign gold bonds, and PPF) to protect capital and guarantee emergency reserves. Built on top of this foundation is the Modern Investment Core (equities, index ETFs, international mutual funds), which provides the compounding engine to beat long-term inflation. Vittavardhana helps you map out the perfect ratio based on your age, liabilities, and income expectations.`
    }
  ];

  // Filtering Logic
  const filteredArticles = articles.filter(art => {
    const matchesSearch = art.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          art.summary.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || art.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="news-page">

      {/* HEADER SECTION */}
      <section className="news-hero-section">
        <div className="container animate-fade-in-up news-hero-content">
          <span className="section-label">Research Desk</span>
          <h1 className="display-lg news-hero-title">Market Intelligence</h1>
          <p className="news-hero-lead">
            Bespoke investment guides, market updates, and insights from Vittavardhana's research desk.
          </p>
        </div>
      </section>

      {/* ARTICLE READER VIEW */}
      {activeArticle ? (
        <section className="news-reader-section">
          <div className="container news-reader-container">
            <button
              onClick={() => setActiveArticle(null)}
              className="news-back-btn"
            >
              <ArrowLeft size={16} /> Back to Articles
            </button>

            <article className="glass-card news-reader-card">
              {/* Meta details */}
              <div className="news-reader-meta">
                <span className="news-reader-category-badge">
                  {activeArticle.category}
                </span>
                <span className="news-reader-meta-item">
                  <Calendar size={14} className="text-gold" /> {activeArticle.date}
                </span>
                <span className="news-reader-meta-item">
                  <User size={14} className="text-gold" /> {activeArticle.author}
                </span>
              </div>

              {/* Title */}
              <h2 className="news-reader-title">{activeArticle.title}</h2>

              {/* Body Content */}
              <div className="news-reader-body">
                {activeArticle.content}
              </div>

              {/* Author footer */}
              <div className="news-reader-author-card">
                <span className="news-reader-author-label">Written By</span>
                <span className="news-reader-author-name">{activeArticle.author}</span>
                <span className="news-reader-author-role">Principal Advisory Architect at Vittavardhana</span>
              </div>
            </article>
          </div>
        </section>
      ) : (
        /* MAIN LIST VIEW */
        <section className="scroll-reveal news-list-section">
          <div className="container">

            {/* Search & Filter Bar */}
            <div className="news-filter-bar">
              {/* Category Filters */}
              <div className="news-filter-tabs">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`news-filter-tab ${selectedCategory === cat ? 'news-filter-tab-active' : ''}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Search Bar */}
              <div className="news-search-wrapper">
                <Search size={16} className="news-search-icon" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="form-input news-search-input"
                />
              </div>
            </div>

            {/* Articles List Grid */}
            <div className="news-articles-grid">
              {filteredArticles.length > 0 ? (
                filteredArticles.map(art => (
                  <div
                    key={art.id}
                    className="glass-card news-article-card"
                    onClick={() => setActiveArticle(art)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && setActiveArticle(art)}
                  >
                    {/* Meta details */}
                    <div className="news-article-meta">
                      <span className="news-article-category">{art.category}</span>
                      <span className="news-article-sep">•</span>
                      <span>{art.date}</span>
                    </div>

                    {/* Title */}
                    <h3 className="news-article-title">{art.title}</h3>

                    {/* Summary */}
                    <p className="news-article-summary">{art.summary}</p>

                    {/* Read action */}
                    <button className="feature-card-link">
                      Read Full Article <ChevronRight size={14} />
                    </button>
                  </div>
                ))
              ) : (
                <div className="news-empty-state">
                  <BookOpen size={48} className="news-empty-icon" />
                  <h4 className="news-empty-title">No Articles Found</h4>
                  <p className="news-empty-desc">Try modifying your search queries or category filters.</p>
                </div>
              )}
            </div>

          </div>
        </section>
      )}

    </div>
  );
};

export default News;
