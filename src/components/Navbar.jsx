import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import BookingModal from '../components/BookingModal';

const Navbar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);


  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const isHome = location.pathname === '/';

  // Apply transparent navbar when at the top of the page, on ALL pages
  const navClass = `navbar ${!scrolled ? 'navbar-transparent' : 'navbar-solid'} ${isMobileMenuOpen ? 'mobile-nav-open' : ''}`;

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' }

  ];

  return (
    <>
      <nav className={navClass}>
        <div className="container nav-container">
          {/* Logo */}
          <Link to="/" className="nav-logo">
            <img src={logo} alt="EDInvoSync Logo" />
          </Link>

          {/* Desktop Links */}
          <ul className="nav-links desktop-only">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path} className={location.pathname === link.path ? 'active' : ''}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Toggle Button */}
          <button
            className={`mobile-toggle ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          {/* Mobile Drawer */}
          <div className={`mobile-drawer ${isMobileMenuOpen ? 'open' : ''}`}>
            {/* Close Button X inside drawer */}
            <button 
              className="drawer-close-btn"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close Menu"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            <div className="drawer-menu-container">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                let icon;
                let activeClass = isActive ? 'drawer-link-active' : 'drawer-link-inactive';
                
                // Assign icon based on path
                if (link.path === '/') {
                  icon = (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                      <polyline points="9 22 9 12 15 12 15 22" />
                    </svg>
                  );
                } else if (link.path === '/about') {
                  icon = (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  );
                } else if (link.path === '/services') {
                  icon = (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="16 18 22 12 16 6" />
                      <polyline points="8 6 2 12 8 18" />
                    </svg>
                  );
                } else if (link.path === '/contact') {
                  icon = (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  );
                }

                return (
                  <Link 
                    key={link.path}
                    to={link.path} 
                    className={`drawer-link ${activeClass}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div className="drawer-link-icon-container">
                      {icon}
                    </div>
                    <span className="drawer-link-text">
                      {link.name === 'About' ? 'About Us' : link.name}
                    </span>
                    <svg className="drawer-link-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </Link>
                );
              })}
            </div>

            {/* Let's Build Card */}
            <div className="drawer-cta-card">
              <div className="drawer-cta-header">
                <div className="drawer-cta-rocket-container">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4.5 16.5c-1.5 1.25-2.5 3.5-2.5 3.5s2.25-1 3.5-2.5L18.5 4.5a2.12 2.12 0 0 0-3-3L4.5 16.5z" />
                    <path d="M12 5l9 9" />
                    <path d="m9 18 4 4" />
                  </svg>
                </div>
                <div className="drawer-cta-text-wrap">
                  <h4 className="drawer-cta-title">
                    Let's Build Something <span className="drawer-cta-title-accent">Amazing Together!</span>
                  </h4>
                  <p className="drawer-cta-subtitle">
                    Book a free consultation and take your business to the next level.
                  </p>
                </div>
              </div>
              <button 
                className="drawer-cta-btn"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsModalOpen(true);
                }}
              >
                <svg className="drawer-btn-cal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                <span>Book Free Consultation</span>
                <svg className="drawer-btn-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </div>
          </div>
        </div>



        <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 2000;
          padding: 0.2rem 0;
          transition: background 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
        }

        .navbar-transparent {
          background: transparent;
          border-bottom: 1px solid transparent;
          box-shadow: none;
        }
        .navbar-transparent .nav-logo img {
          filter: drop-shadow(0 0 4px rgba(0,0,0,0.2));
          /* subtle shadow ensures visibility on light backgrounds */
        }

        .navbar-solid {
          background: rgba(255, 255, 255, 0.97);
          border-bottom: 1px solid var(--border);
          box-shadow: 0 2px 20px rgba(0, 0, 0, 0.06);
          backdrop-filter: blur(12px);
        }

        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1400px; /* Slightly wider for the nudge */
          margin: 0 auto;
          padding: 0 1.5rem; /* Reduced from 4rem to move logo left */
          position: relative;
          height: 90px;
        }

        .nav-logo {
          margin-left: -12px;
          transition: margin-left 0.3s ease;
          position: relative;
          z-index: 2100; /* bring logo above other elements */
        }

        .nav-logo img {
          height: 70px;
          transform: translateY(6px) scale(1.4);
          transform-origin: left center;
          transition: var(--transition);
        }

        .nav-logo:hover img {
          transform: translateY(6px) scale(1.45);
        }

        .nav-links {
          display: flex;
          gap: 2.5rem;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
        }

        .nav-links a {
          font-weight: 600;
          color: var(--text-muted);
          position: relative;
          padding: 0.5rem 0;
          font-family: var(--font-heading);
          letter-spacing: 0.5px;
        }

        .nav-links a:hover, .nav-links a.active {
          color: var(--accent);
        }

        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, var(--secondary), var(--accent));
          transition: var(--transition);
        }

        .nav-links a:hover::after, .nav-links a.active::after {
          width: 100%;
        }

        .nav-btn-booking {
          background: linear-gradient(135deg, var(--secondary), var(--accent));
          color: white;
          padding: 0.65rem 1.4rem;
          border-radius: 12px;
          font-weight: 700;
          font-size: 0.95rem;
          border: none;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          box-shadow: 0 4px 15px rgba(0, 132, 255, 0.25);
          font-family: var(--font-heading);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-transform: none;
          margin-left: auto;
        }

        .nav-btn-booking:hover {
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 8px 20px rgba(0, 132, 255, 0.4);
        }

        .mobile-booking-btn {
          width: 100%;
          padding: 0.85rem;
          font-size: 1.05rem;
        }

        /* Mobile Toggle */
        .mobile-toggle {
          display: none;
          flex-direction: column;
          gap: 6px;
          background: none;
          border: none;
          cursor: pointer;
          z-index: 2100;
          padding: 10px;
        }

        .mobile-toggle span {
          display: block;
          width: 28px;
          height: 2px;
          background: var(--text-main);
          transition: 0.3s;
          border-radius: 2px;
        }

        .mobile-toggle.active span:nth-child(1) { transform: translateY(8px) rotate(45deg); }
        .mobile-toggle.active span:nth-child(2) { opacity: 0; }
        .mobile-toggle.active span:nth-child(3) { transform: translateY(-8px) rotate(-45deg); }

        /* Mobile Drawer */
        .mobile-drawer {
          position: fixed;
          top: 0;
          right: -100%;
          width: 100%;
          max-width: 440px;
          height: 100vh;
          background: #ffffff;
          box-shadow: -10px 0 40px rgba(0,0,0,0.08);
          transition: 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
          padding: 80px 24px 40px;
          display: flex;
          flex-direction: column;
          z-index: 2050;
        }

        .mobile-drawer.open {
          right: 0;
        }

        .drawer-close-btn {
          position: absolute;
          top: 24px;
          right: 24px;
          background: none;
          border: none;
          color: #0f172a;
          cursor: pointer;
          padding: 8px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s;
        }

        .drawer-close-btn:hover {
          background: #f1f5f9;
        }

        .drawer-close-btn svg {
          width: 24px;
          height: 24px;
        }

        .drawer-menu-container {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-top: 20px;
          margin-bottom: auto;
        }

        .drawer-link {
          display: flex;
          align-items: center;
          padding: 18px 20px;
          border-radius: 20px;
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .drawer-link-active {
          background: linear-gradient(135deg, #3b82f6, #06b6d4);
          color: #ffffff;
          box-shadow: 0 10px 25px -5px rgba(59, 130, 246, 0.4);
        }

        .drawer-link-inactive {
          background: #f8fafc;
          color: #0f172a;
          border: 1px solid rgba(226, 232, 240, 0.5);
        }

        .drawer-link-inactive:hover {
          background: #f1f5f9;
          transform: translateY(-2px);
        }

        .drawer-link-icon-container {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 18px;
          flex-shrink: 0;
          transition: background 0.3s;
        }

        .drawer-link-active .drawer-link-icon-container {
          background: rgba(255, 255, 255, 0.2);
          color: #ffffff;
        }

        .drawer-link-inactive:nth-child(1) .drawer-link-icon-container {
          background: rgba(59, 130, 246, 0.08);
          color: #3b82f6;
        }

        .drawer-link-inactive:nth-child(2) .drawer-link-icon-container {
          background: rgba(99, 102, 241, 0.08);
          color: #6366f1;
        }

        .drawer-link-inactive:nth-child(3) .drawer-link-icon-container {
          background: rgba(6, 182, 212, 0.08);
          color: #0891b2;
        }

        .drawer-link-inactive:nth-child(4) .drawer-link-icon-container {
          background: rgba(249, 115, 22, 0.08);
          color: #f97316;
        }

        .drawer-link-icon-container svg {
          width: 22px;
          height: 22px;
        }

        .drawer-link-text {
          font-weight: 700;
          font-size: 1.15rem;
          font-family: var(--font-heading);
          letter-spacing: -0.2px;
        }

        .drawer-link-arrow {
          width: 18px;
          height: 18px;
          margin-left: auto;
          opacity: 0.7;
          transition: transform 0.2s;
        }

        .drawer-link:hover .drawer-link-arrow {
          transform: translateX(3px);
        }

        .drawer-cta-card {
          background: #eef2ff;
          border: 1px solid rgba(99, 102, 241, 0.12);
          border-radius: 24px;
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 20px;
          box-shadow: 0 10px 30px rgba(99, 102, 241, 0.04);
        }

        .drawer-cta-header {
          display: flex;
          gap: 16px;
          align-items: flex-start;
        }

        .drawer-cta-rocket-container {
          width: 52px;
          height: 52px;
          border-radius: 16px;
          background: #ffffff;
          box-shadow: 0 4px 12px rgba(99, 102, 241, 0.12);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #4f46e5;
          flex-shrink: 0;
        }

        .drawer-cta-rocket-container svg {
          width: 26px;
          height: 26px;
          transform: rotate(45deg);
        }

        .drawer-cta-text-wrap {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .drawer-cta-title {
          font-size: 1.05rem;
          font-weight: 800;
          color: #0f172a;
          line-height: 1.4;
          font-family: var(--font-heading);
        }

        .drawer-cta-title-accent {
          color: #4f46e5;
          display: block;
        }

        .drawer-cta-subtitle {
          font-size: 0.8rem;
          color: #64748b;
          line-height: 1.5;
          font-weight: 400;
        }

        .drawer-cta-btn {
          width: 100%;
          background: linear-gradient(135deg, #3b82f6, #06b6d4);
          color: #ffffff;
          border: none;
          border-radius: 16px;
          padding: 16px 20px;
          font-size: 0.95rem;
          font-weight: 700;
          font-family: var(--font-heading);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          box-shadow: 0 8px 20px rgba(59, 130, 246, 0.25);
          transition: all 0.3s;
        }

        .drawer-cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 25px rgba(59, 130, 246, 0.35);
        }

        .drawer-btn-cal {
          width: 18px;
          height: 18px;
        }

        .drawer-btn-arrow {
          width: 18px;
          height: 18px;
          margin-left: auto;
          transition: transform 0.2s;
        }

        .drawer-cta-btn:hover .drawer-btn-arrow {
          transform: translateX(3px);
        }

        @media (max-width: 991px) {
          .nav-container { padding: 0 1.5rem; height: 80px; }
          .desktop-only { display: none; }
          .mobile-toggle { display: flex; }
          .nav-logo img { height: 50px; transform: scale(1.2); }
        }

        @media (max-width: 400px) {
          .nav-container { padding: 0 1rem; }
          .nav-logo img { transform: scale(1.05); }
        }
      `}</style>
      </nav>
      {isModalOpen && <BookingModal onClose={() => setIsModalOpen(false)} />}
    </>
  );
};

export default Navbar;
