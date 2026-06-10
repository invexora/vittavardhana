import { useEffect, useState, useCallback } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Layout Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Preloader from './components/Preloader';

// Pages
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import ContactUs from './pages/ContactUs';

// Animations
import { initSmoothScroll, refreshScrollTriggers } from './lib/animations';

// Scroll To Top Helper — works with Lenis
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Use native scroll for route changes (Lenis will pick up)
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    // Refresh GSAP ScrollTriggers on route change
    const timer = setTimeout(() => refreshScrollTriggers(), 100);
    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
};

function App() {
  const [preloaderDone, setPreloaderDone] = useState(false);

  const handlePreloaderComplete = useCallback(() => {
    setPreloaderDone(true);
  }, []);

  // Initialize smooth scroll after preloader
  useEffect(() => {
    if (!preloaderDone) return;
    
    let lenis;
    initSmoothScroll().then((instance) => {
      lenis = instance;
    });

    return () => {
      if (lenis) lenis.destroy();
    };
  }, [preloaderDone]);

  return (
    <Router>
      <Preloader onComplete={handlePreloaderComplete} />
      <ScrollToTop />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main Page Content */}
      <main style={{ flex: '1 0 auto' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/service/:id" element={<ServiceDetail />} />
          <Route path="/contact-us" element={<ContactUs />} />
          {/* Fallback redirect */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </Router>
  );
}

export default App;
