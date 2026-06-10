import { Link } from 'react-router-dom';
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';
import logoImg from '../assets/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'Facebook', url: 'https://www.facebook.com/VittaVardhanaa', icon: <FacebookIcon /> },
    { name: 'Instagram', url: 'https://www.instagram.com/vittavardhanaa', icon: <InstagramIcon /> },
    { name: 'LinkedIn', url: 'https://in.linkedin.com/company/vittavardhanaa', icon: <LinkedinIcon /> },
    { name: 'Twitter', url: 'https://twitter.com/VittaVardhanaa', icon: <TwitterIcon /> },
  ];

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about-us' },
    { name: 'Services', path: '/services' },
    { name: 'Contact Us', path: '/contact-us' },
  ];

  const services = [
    { name: 'Traditional Investments', path: '/service/traditional-investments' },
    { name: 'Modern Investments', path: '/service/modern-investments' },
    { name: 'Alternative Investment', path: '/service/alternative-investment' },
    { name: 'Systematic Investment Plan', path: '/service/sip' },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Column 1: Brand */}
          <div className="flex flex-col gap-lg">
            <Link to="/" className="brand-logo-wrapper" style={{ alignSelf: 'flex-start' }}>
              <img src={logoImg} alt="Vittavardhana" className="brand-logo-img" />
              <span style={{ fontFamily: 'var(--font-body)', fontSize: '1.4rem', fontWeight: 500, letterSpacing: '1px', color: '#fff', textTransform: 'uppercase' }}>Vittavardhanaa</span>
            </Link>
            <p className="footer-brand-desc">
              With a vision and integrity in monetary and economic consulting, Vittavardhana began in 2008 as a trader and, in 2012, as a subbroker. Over 15 years of experience in Fundamental & Technical Analysis of the stock market.
            </p>
            <div className="footer-socials">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={social.name}
                  className="footer-social"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="footer-link">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="footer-heading">Our Services</h4>
            <ul className="footer-links">
              {services.map((service) => (
                <li key={service.name}>
                  <Link to={service.path} className="footer-link">{service.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="footer-heading">Contact Us</h4>
            <div className="flex flex-col gap-lg">
              <div className="footer-contact-item">
                <MapPin size={18} />
                <span>S.No. 218/1A/2, Maruti Homes, Vrundavan Nagari, Plot No. 4, Lane No. 1, Panchawati, Nashik, Maharashtra 422003</span>
              </div>
              <div className="footer-contact-item">
                <Phone size={18} />
                <a href="tel:+919834736387" className="footer-link">+91 98347 36387</a>
              </div>
              <div className="footer-contact-item">
                <Mail size={18} />
                <a href="mailto:invest@vittavardhana.com" className="footer-link">invest@vittavardhana.com</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <span className="footer-bottom-text">
            &copy; {currentYear} Vittavardhana. All Rights Reserved.
          </span>
          <span className="footer-bottom-text">
            SEBI Registered Investment Advisory
          </span>
        </div>

        {/* Regulatory disclaimer */}
        <div className="footer-regulatory">
          <p className="footer-regulatory-text">
            Vittavardhana Investment Advisory is a SEBI Registered entity. Investments in securities markets are subject to market risks. Read all the related documents carefully before investing. Past performance is not indicative of future results. The information provided on this website is for informational purposes only and should not be considered as investment advice. Please consult your financial advisor before making any investment decisions.
          </p>
        </div>
      </div>
    </footer>
  );
};

/* Inline SVG social icons — compact and self-contained */
const FacebookIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const TwitterIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

export default Footer;
