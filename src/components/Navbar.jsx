import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';


const Navbar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


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
  const servicePaths = ['/pos', '/credit-card-processing', '/digital-marketing', '/web-development'];
  const isServicePage = servicePaths.includes(location.pathname);
  
  const navClass = `navbar ${isHome && !scrolled ? 'navbar-transparent' : 'navbar-solid'} ${isMobileMenuOpen ? 'mobile-nav-open' : ''}`;

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className={navClass}>
      <div className="container nav-container">
        {/* Logo */}
        <Link to="/" className={`nav-logo ${isServicePage ? 'nav-logo-left' : ''}`}>
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
          <ul className="mobile-nav-links">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path} onClick={() => setIsMobileMenuOpen(false)}>
                  {link.name}
                </Link>
              </li>
            ))}

          </ul>
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

        .nav-logo-left {
          margin-left: -8px;  /* subtle left shift, keep logo visible */
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
          width: 80%;
          height: 100vh;
          background: #fff;
          box-shadow: -10px 0 30px rgba(0,0,0,0.1);
          transition: 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
          padding: 100px 40px;
          display: flex;
          flex-direction: column;
          z-index: 2050;
        }

        .mobile-drawer.open { right: 0; }
        .mobile-nav-links { list-style: none; display: flex; flex-direction: column; gap: 2rem; }
        .mobile-nav-links a { font-size: 1.8rem; font-weight: 700; color: var(--text-main); font-family: var(--font-heading); }

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
  );
};

export default Navbar;
