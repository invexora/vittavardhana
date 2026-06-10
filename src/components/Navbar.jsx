import { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change at render time to avoid state-in-effect issues
  const [prevPath, setPrevPath] = useState(location.pathname);
  if (location.pathname !== prevPath) {
    setPrevPath(location.pathname);
    setIsOpen(false);
  }

  // Track scroll for glassmorphic effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about-us' },
    { name: 'Services', path: '/services' },
    { name: 'Contact Us', path: '/contact-us' },
  ];

  const isActive = useCallback((path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  }, [location.pathname]);

  return (
    <>
      <nav className={`navbar ${scrolled ? 'navbar-scrolled' : 'navbar-transparent'}`}>
        <div className="navbar-inner">
          {/* Logo */}
          <Link to="/" className="brand-logo-wrapper">
            <img src="/logo.png" alt="Vittavardhana" className="brand-logo-img" />
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '1.4rem', fontWeight: 500, letterSpacing: '1px', color: '#fff', textTransform: 'uppercase' }}>Vittavardhanaa</span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="navbar-links">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`navbar-link ${isActive(link.path) ? 'navbar-link-active' : ''}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="navbar-cta">
            <Link to="/contact-us" className="navbar-contact-link">
              Get in touch
            </Link>
            <a 
              href={`https://api.whatsapp.com/send/?phone=919876549402&text=${encodeURIComponent('Hi, we are interested in your services. Please get in touch with us!')}&type=phone_number&app_absent=0`}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-btn glass-btn-primary"
            >
              Consult Now
            </a>
            <button
              className="navbar-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${isOpen ? 'mobile-menu-open' : ''}`}>
        <div className="mobile-menu-label">Menu</div>
        <div className="mobile-menu-links">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="mobile-menu-link"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="mobile-menu-divider" />
        <a
          href={`https://api.whatsapp.com/send/?phone=919876549402&text=${encodeURIComponent('Hi, we are interested in your services. Please get in touch with us!')}&type=phone_number&app_absent=0`}
          target="_blank"
          rel="noopener noreferrer"
          className="glass-btn glass-btn-primary w-full"
          onClick={() => setIsOpen(false)}
          style={{ textAlign: 'center' }}
        >
          Consult Now
        </a>
      </div>
    </>
  );
};

export default Navbar;
