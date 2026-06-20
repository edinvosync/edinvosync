import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import BookingModal from '../components/BookingModal';
import creditCardProcessingImg from '../assets/images/credit_card_processing.png';




import businessAnalyticsImg from '../assets/Advanced Merchant Reporting.png';

const FloatingParticle = ({ size, top, left, delay, color }) => (
  <div
    className="floating-particle"
    style={{
      width: size,
      height: size,
      top,
      left,
      animationDelay: delay,
      background: color
    }}
  />
);

const CreditCardProcessing = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const revealRef = useRef(null);

  useEffect(() => {
    const els = revealRef.current?.querySelectorAll('.reveal');
    if (!els) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div className="pos-detail-page" ref={revealRef}>
      {isModalOpen && <BookingModal onClose={() => setIsModalOpen(false)} />}
      <div className="mesh-gradient"></div>
      <div className="particles-container">
        <FloatingParticle size="400px" top="-10%" left="-5%" delay="0s" color="rgba(59, 130, 246, 0.08)" />
        <FloatingParticle size="500px" top="50%" left="70%" delay="-2s" color="rgba(6, 182, 212, 0.06)" />
        <FloatingParticle size="300px" top="20%" left="30%" delay="-4s" color="rgba(139, 92, 246, 0.05)" />
      </div>

      {/* ── PREMIUM VIDEO HERO ── */}
      <section className="dm-hero">
        {/* Full-bleed background video — right half */}
        <video
          className="dm-hero__video"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videos/credit.mp4" type="video/mp4" />
        </video>

        {/* White-to-transparent gradient overlay */}
        <div className="dm-hero__overlay" />

        {/* Left content */}
        <div className="dm-hero__content">
          <span className="dm-badge dm-anim-1">Payment Solutions</span>

          <h1 className="dm-headline dm-anim-2">
            Secure<br />
            <span className="dm-headline__accent">Payment Processing</span>
          </h1>

          <p className="dm-desc dm-anim-3">
            Accept payments securely and effortlessly. Our solutions support all major cards and digital wallets with bank-grade encryption and industry-leading approval rates.
          </p>

          <div className="dm-cta dm-anim-4">
            <button className="dm-btn-primary" onClick={() => setIsModalOpen(true)}>
              Book Demo
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '8px' }}>
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </section>

      <section id="features" className="pos-features container">
        <div className="section-header reveal">
          <div className="features-badge animate-fade">
            <span className="badge-shield-icon">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zM10 15.5l-3-3 1.4-1.4 1.6 1.6 4.6-4.6 1.4 1.4-6 6z" />
              </svg>
            </span>
            <span className="badge-text" style={{ marginLeft: '6px' }}>TRUSTED. SECURE. RELIABLE.</span>
          </div>
          <h2 className="features-section-title">
            <svg className="title-spark-left" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="3.5" strokeLinecap="round">
              <path d="M5 12c-2-1-4-3-4-5M8 15c-1-2-2-5-1-7M12 19c0-3-1-6-3-7" />
            </svg>
            Seamless <span className="title-accent">Transactions</span>
            <svg className="title-spark-right" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="3.5" strokeLinecap="round">
              <path d="M19 12c2-1 4-3 4-5M16 15c1-2 2-5 1-7M12 19c0-3 1-6 3-7" />
            </svg>
          </h2>
          <p className="features-section-subtitle">Everything you need to accept payments online, in-store, or on the go.</p>
        </div>

        <div className="features-grid">
          {[
            {
              number: "01",
              title: "All Major Cards",
              desc: "Accept Visa, Mastercard, Amex, Discover, and digital wallets like Apple Pay.",
              icon: (
                <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="4" y="10" width="40" height="28" rx="6" fill="#2563eb" />
                  <rect x="4" y="16" width="40" height="6" fill="#1d4ed8" />
                  <rect x="8" y="26" width="8" height="6" rx="1.5" fill="#f59e0b" />
                  <rect x="20" y="27" width="16" height="2" rx="1" fill="#93c5fd" />
                  <rect x="20" y="31" width="10" height="2" rx="1" fill="#93c5fd" />
                </svg>
              ),
              color: "#2563eb"
            },
            {
              number: "02",
              title: "PCI-DSS Compliant",
              desc: "Bank-grade security and encryption to keep your customers' data safe.",
              icon: (
                <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 20V15C14 9.477 18.477 5 24 5C29.523 5 34 9.477 34 15V20" stroke="#f59e0b" strokeWidth="4.5" strokeLinecap="round" />
                  <rect x="8" y="18" width="32" height="25" rx="6" fill="#10b981" />
                  <circle cx="24" cy="28" r="3.5" fill="#047857" />
                  <path d="M24 31.5V36" stroke="#047857" strokeWidth="3" strokeLinecap="round" />
                </svg>
              ),
              color: "#10b981"
            },
            {
              number: "03",
              title: "Chargeback Protection",
              desc: "Advanced fraud detection tools to minimize disputes and protect your revenue.",
              icon: (
                <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 4C14.5 4.5 8 7 8 7C8 7 8 20 8 28C8 38 20 43.5 24 44C28 43.5 40 38 40 28C40 20 40 7 40 7C40 7 33.5 4.5 24 4Z" fill="#8b5cf6" />
                  <path d="M24 6.5C16.5 7 11 9 11 9C11 9 11 20 11 26.5C11 34.5 20.8 39.5 24 40C27.2 39.5 37 34.5 37 26.5C37 20 37 9 37 9C37 9 31.5 7 24 6.5Z" fill="#a78bfa" opacity="0.4" />
                  <path d="M17 23.5L22 28.5L31 18.5" stroke="#ffffff" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ),
              color: "#8b5cf6"
            },
            {
              number: "04",
              title: "Competitive Rates",
              desc: "Transparent pricing with industry-leading low processing fees.",
              icon: (
                <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="4" y="20" width="32" height="18" rx="3" fill="#d97706" transform="rotate(-6 20 29)" />
                  <rect x="6" y="16" width="32" height="18" rx="3" fill="#fbbf24" />
                  <circle cx="22" cy="25" r="4" fill="#d97706" />
                  <circle cx="36" cy="30" r="7.5" fill="#f59e0b" stroke="#b45309" strokeWidth="1.5" />
                  <circle cx="36" cy="30" r="4" fill="#fbbf24" />
                </svg>
              ),
              color: "#f59e0b"
            }
          ].map((f, i) => (
            <div key={i} className="feature-card reveal" style={{ '--delay': `${i * 0.1}s`, '--accent-color': f.color }}>
              <div className="card-number" style={{ color: f.color, borderColor: `${f.color}33`, background: `${f.color}08` }}>{f.number}</div>
              
              <div className="feature-icon-container">
                <svg className="icon-ring" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="1.5" fill="none" strokeDasharray="4 4" />
                  <circle cx="96" cy="50" r="4" fill="currentColor" />
                </svg>
                <div className="icon-inner-circle">
                  {f.icon}
                </div>
              </div>

              <h3 className="feature-card-title">{f.title}</h3>
              <div className="feature-card-divider" style={{ background: f.color }}></div>
              <p className="feature-card-desc">{f.desc}</p>
              
              <div className="card-wave" style={{ color: f.color }}>
                <svg viewBox="0 0 100 30" preserveAspectRatio="none" style={{ width: '100%', height: '35px', display: 'block' }}>
                  <path d="M0,20 C30,10 70,30 100,15 L100,30 L0,30 Z" fill="currentColor" opacity="0.08" />
                  <path d="M0,25 C40,18 60,28 100,22 L100,30 L0,30 Z" fill="currentColor" opacity="0.05" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="pos-powerful-features container">
        <div className="section-header reveal">
          <h2>Powerful Features <span className="text-gradient">For Modern Merchants</span></h2>
          <p>Everything your business needs to accept payments securely, manage transactions, and scale your operations.</p>
        </div>

        <div className="powerful-rows">
          {[
            {
              title: "Seamless Omnichannel Payments",
              icon: "📱",
              color: "#3b82f6",
              img: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=800&q=80",
              items: ["In-Store Smart Terminals", "Mobile POS Integration", "Secure E-commerce Gateways", "Contactless & NFC Payments", "Virtual Terminal Access", "Recurring Billing & Invoicing"]
            },
            {
              title: "Ironclad Security & Compliance",
              icon: "🛡️",
              color: "#10b981",
              img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
              items: ["End-to-End Encryption", "Tokenization Technology", "PCI Level 1 Compliance", "Advanced Fraud Detection", "Real-time Risk Monitoring", "Chargeback Protection Tools"]
            },
            {
              title: "Advanced Merchant Reporting",
              icon: "📈",
              color: "#f59e0b",
              img: businessAnalyticsImg,
              items: ["Real-time Transaction Tracking", "Daily Batch Summaries", "Custom Sales Analytics", "Fee Transparency Reports", "Multi-Location Management", "Exportable Accounting Data"]
            },
            {
              title: "Next-Gen Hardware Solutions",
              icon: "💳",
              color: "#8b5cf6",
              img: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=800&q=80",
              items: ["Smart EMV Terminals", "Wireless & Bluetooth Units", "Customer-Facing Displays", "Lightning-Fast Processing", "Integrated Receipt Printing", "Dual Connectivity (Wi-Fi/4G)"]
            }
          ].map((cat, i) => (
            <div key={i} className={`powerful-row reveal ${i % 2 !== 0 ? 'reverse' : ''}`} style={{ '--delay': `${i * 0.1}s`, '--cat-color': cat.color }}>
              <div className="powerful-content">
                <div className="powerful-card-header">
                  <div className="powerful-icon" style={{ background: `${cat.color}18`, color: cat.color }}>{cat.icon}</div>
                  <h3 style={{ color: cat.color }}>{cat.title}</h3>
                </div>
                <ul className="powerful-list">
                  {cat.items.map((item, j) => (
                    <li key={j}>
                      <span className="check-icon" style={{ color: cat.color }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="powerful-image-wrapper">
                <img src={cat.img} alt={cat.title} className="powerful-image" />
                <div className="powerful-image-overlay" style={{ background: `linear-gradient(135deg, ${cat.color}22 0%, transparent 100%)` }}></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="pos-payment-methods container">
        <div className="payment-bg-pattern-left">
          <svg width="400" height="400" viewBox="0 0 400 400" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3 6" opacity="0.08" style={{ color: '#94a3b8' }}>
            <circle cx="50" cy="200" r="100" />
            <circle cx="50" cy="200" r="160" />
            <circle cx="50" cy="200" r="220" />
            <circle cx="50" cy="200" r="280" />
          </svg>
        </div>
        <div className="payment-bg-pattern-right">
          <svg width="400" height="400" viewBox="0 0 400 400" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3 6" opacity="0.08" style={{ color: '#94a3b8' }}>
            <circle cx="350" cy="200" r="100" />
            <circle cx="350" cy="200" r="160" />
            <circle cx="350" cy="200" r="220" />
            <circle cx="350" cy="200" r="280" />
          </svg>
        </div>

        <div className="section-header reveal">
          <div className="payment-badge animate-fade">
            <span className="badge-shield-icon">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zM10 15.5l-3-3 1.4-1.4 1.6 1.6 4.6-4.6 1.4 1.4-6 6z" />
              </svg>
            </span>
            <span className="badge-text" style={{ marginLeft: '6px' }}>SECURE. RELIABLE. GLOBAL.</span>
          </div>
          <h2 className="payment-section-title">
            <svg className="title-spark-left" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="3.5" strokeLinecap="round">
              <path d="M5 12c-2-1-4-3-4-5M8 15c-1-2-2-5-1-7M12 19c0-3-1-6-3-7" />
            </svg>
            Accepted <span className="title-accent">Payment Methods</span>
            <svg className="title-spark-right" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="3.5" strokeLinecap="round">
              <path d="M19 12c2-1 4-3 4-5M16 15c1-2 2-5 1-7M12 19c0-3 1-6 3-7" />
            </svg>
          </h2>
          <p className="payment-section-subtitle">We support a wide range of global and local payment options to ensure you never miss a sale.</p>
        </div>

        <div className="payment-features reveal">
          <div className="payment-feature-item">
            <div className="payment-feature-icon" style={{ color: '#2563eb', background: 'rgba(37, 99, 235, 0.06)' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <polyline points="9 11 11 13 15 9" />
              </svg>
            </div>
            <div className="payment-feature-text">
              <span className="payment-feature-title">100% Secure Transactions</span>
              <span className="payment-feature-desc">Your payments are safe with us</span>
            </div>
          </div>

          <div className="payment-feature-item">
            <div className="payment-feature-icon" style={{ color: '#10b981', background: 'rgba(16, 185, 129, 0.06)' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
            </div>
            <div className="payment-feature-text">
              <span className="payment-feature-title">Global & Local Support</span>
              <span className="payment-feature-desc">Choose what works for you</span>
            </div>
          </div>

          <div className="payment-feature-item">
            <div className="payment-feature-icon" style={{ color: '#8b5cf6', background: 'rgba(139, 92, 246, 0.06)' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
            </div>
            <div className="payment-feature-text">
              <span className="payment-feature-title">Faster Checkouts</span>
              <span className="payment-feature-desc">Smooth payments, happy customers</span>
            </div>
          </div>
        </div>

        <div className="payment-methods-grid">
          {[
            {
              name: "Visa",
              desc: "Credit & Debit Cards",
              logo: (
                <svg width="55" height="18" viewBox="0 0 55 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.5 2H8.4L5.8 12.8L2.5 4C2.2 2.8 1.1 2 1 2H1L4.2 14H8.4L14.7 2H12.5Z" fill="#1A1F71" />
                  <path d="M2.5 2L1 2.7L3.8 3.5L4.8 2H2.5Z" fill="#F7A800" />
                  <path d="M19.5 2H23.6L20 14H15.9L19.5 2Z" fill="#1A1F71" />
                  <path d="M34.5 4.5C34.5 3 32.3 2.6 30.6 2.6C27 2.6 25 4.3 25 6.8C25 10.3 30 10.1 30 11.9C30 12.5 28.5 13 27.1 13C25.3 13 23.4 12.2 22.6 11.8L22.3 12.1L22.7 14C23.9 14.4 25.9 14.8 27.9 14.8C31.7 14.8 34.6 13 34.6 10.2C34.6 6.5 29.5 6.3 29.5 4.7C29.5 4.2 30.9 3.8 32 3.8C33.5 3.8 34.5 4.3 34.5 4.5Z" fill="#1A1F71" />
                  <path d="M46.5 2H43.4L38.5 14H42.6L43.5 11.5H49.4L50 14H54.1L50.9 2H46.5ZM44.4 9.1L46.7 4L48.6 9.1H44.4Z" fill="#1A1F71" />
                </svg>
              ),
              shadowGlow: "rgba(26, 31, 113, 0.05)"
            },
            {
              name: "Mastercard",
              desc: "Credit & Debit Cards",
              logo: (
                <svg width="45" height="28" viewBox="0 0 50 30" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="18" cy="15" r="14" fill="#EB001B" opacity="0.9" />
                  <circle cx="32" cy="15" r="14" fill="#F79E1B" opacity="0.9" />
                  <path d="M25 5.25a14 14 0 0 0-4.66 9.75A14 14 0 0 0 25 24.75a14 14 0 0 0 4.66-9.75A14 14 0 0 0 25 5.25z" fill="#FF5F00" />
                </svg>
              ),
              shadowGlow: "rgba(235, 0, 27, 0.05)"
            },
            {
              name: "American Express",
              desc: "Credit Cards",
              logo: (
                <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                  <rect width="40" height="40" rx="6" fill="#016fd0"/>
                  <text x="50%" y="42%" dominantBaseline="middle" textAnchor="middle" fill="#ffffff" fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif" fontWeight="900" fontSize="9" letterSpacing="1">AM</text>
                  <text x="50%" y="72%" dominantBaseline="middle" textAnchor="middle" fill="#ffffff" fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif" fontWeight="900" fontSize="9" letterSpacing="1">EX</text>
                </svg>
              ),
              shadowGlow: "rgba(1, 111, 208, 0.05)"
            },
            {
              name: "Discover",
              desc: "Credit Cards",
              logo: (
                <svg width="72" height="16" viewBox="0 0 120 28" xmlns="http://www.w3.org/2000/svg">
                  <text x="5" y="21" fill="#111212" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="20" letterSpacing="0.5">DISC</text>
                  <circle cx="68" cy="13.5" r="9.5" fill="#f60" />
                  <circle cx="68" cy="13.5" r="5" fill="#fff" />
                  <text x="80" y="21" fill="#111212" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="20" letterSpacing="0.5">VER</text>
                </svg>
              ),
              shadowGlow: "rgba(255, 96, 0, 0.05)"
            },
            {
              name: "Apple Pay",
              desc: "Pay with Apple Wallet",
              logo: (
                <svg width="55" height="22" viewBox="0 0 60 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.22 8.3c.06-.05.11-.11.16-.18a3.1 3.1 0 00.73-2.1c0-.08-.01-.15-.02-.23a3.24 3.24 0 00-2.2 1.13c-.25.26-.46.59-.57.94a3.17 3.17 0 00-.73 2.1c0 .08.01.16.02.24.08.01.17.01.25.01a3.02 3.02 0 002.36-1.91zM17.15 11.6c-.66-.46-1.5-.74-2.45-.74-1.28 0-2.12.58-2.67.58-.57 0-1.37-.55-2.4-.55-1.96 0-3.63 1.54-3.63 4.2 0 2.5 1.56 5.43 3.49 5.43.92 0 1.34-.52 2.47-.52 1.12 0 1.5.52 2.47.52 1.95 0 3.39-2.73 3.39-4.14a4.15 4.15 0 01-2.42-3.8c0-2 1.57-2.97 2.46-3.08a4.18 4.18 0 00-3.21-1.95z" fill="#000" />
                  <text x="24" y="17.5" fill="#000" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="16">Pay</text>
                </svg>
              ),
              shadowGlow: "rgba(0, 0, 0, 0.05)"
            },
            {
              name: "Google Pay",
              desc: "Pay with Google Wallet",
              logo: (
                <svg width="60" height="22" viewBox="0 0 60 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 11c0-.7-.1-1.4-.2-2H5v3.8h2.8c-.1.7-.5 1.3-1.1 1.7v2.8h1.8c1.1-1 1.7-2.5 1.7-4.3z" fill="#4285F4"/>
                  <path d="M5 16c1.4 0 2.5-.5 3.3-1.3l-1.8-2.8c-.4.3-.9.5-1.5.5-1.2 0-2.2-.8-2.5-1.9H.6v2.9C1.5 14.8 3.1 16 5 16z" fill="#34A853"/>
                  <path d="M2.5 10.5c-.1-.4-.2-.8-.2-1.2s.1-.8.2-1.2V5.2H.6C0 6.4-.3 7.8-.3 9.3c0 1.5.3 2.9.9 4.1l1.9-2.9z" fill="#FBBC05"/>
                  <path d="M5 4.8c.8 0 1.5.3 2 .8l1.5-1.5C7.5 3.2 6.4 2.7 5 2.7 3.1 2.7 1.5 3.9.6 5.2l2.5 1.9c.3-1.1 1.3-1.9 1.9-1.9z" fill="#EA4335"/>
                  <text x="14" y="16" fill="#5F6368" fontFamily="'Product Sans', Arial, sans-serif" fontWeight="bold" fontSize="15">Pay</text>
                </svg>
              ),
              shadowGlow: "rgba(66, 133, 244, 0.05)"
            },
            {
              name: "Samsung Pay",
              desc: "Pay with Samsung",
              logo: (
                <svg width="85" height="18" viewBox="0 0 115 24" xmlns="http://www.w3.org/2000/svg">
                  <text x="0" y="17" fill="#0A0F1E" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="12" letterSpacing="0.5">SAMSUNG</text>
                  <text x="75" y="17" fill="#1434CB" fontFamily="'Georgia', serif" fontStyle="italic" fontWeight="bold" fontSize="14">pay</text>
                </svg>
              ),
              shadowGlow: "rgba(20, 52, 203, 0.05)"
            },
            {
              name: "Contactless",
              desc: "Tap & Pay",
              logo: (
                <svg width="40" height="30" viewBox="0 0 40 30" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#6366f1" strokeWidth="2" strokeLinecap="round">
                  <path d="M10 6a15 15 0 0 1 0 18" strokeWidth="2.5" />
                  <path d="M14 9a10 10 0 0 1 0 12" strokeWidth="2.5" />
                  <path d="M18 12a5 5 0 0 1 0 6" strokeWidth="2.5" />
                  <path d="M22 15h.01" strokeWidth="3" />
                  <rect x="25" y="7" width="12" height="16" rx="1" transform="rotate(30 25 7)" fill="#4f46e5" stroke="none" />
                </svg>
              ),
              shadowGlow: "rgba(99, 102, 241, 0.05)"
            },
            {
              name: "PayPal",
              desc: "Secure Online Payments",
              logo: (
                <svg width="32" height="36" viewBox="0 0 32 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.3 2H9.6c-.9 0-1.6.7-1.8 1.6L4.3 26.1c-.1.6.3 1.1.9 1.1h4.6l1.6-10c.1-.8.9-1.4 1.8-1.4h3.1c5.1 0 9.1-2.1 10.3-8.1C27.9 3.5 24.3 2 19.3 2z" fill="#003087"/>
                  <path d="M22.3 8.8c-1.2 6-5.2 8.1-10.3 8.1H8.9c-.8 0-1.6.6-1.8 1.4l-2 12.3c-.1.7.4 1.3 1.1 1.3h4.6c.9 0 1.6-.7 1.8-1.6l1.6-10c.1-.8.9-1.4 1.8-1.4h3.1c4.7 0 8.3-1.9 9.4-7.5.5-2.6 0-4.6-1.2-5.9c-.5.8-1 2.3-1 3.3z" fill="#0079C1"/>
                  <path d="M21.3 8.8c-.8 4.2-3.4 6.8-7.6 6.8H10.6c-.6 0-1.2.4-1.3 1l-1.6 10c0 .3-.3.5-.6.5H5.8L9.3 3.6c.2-.9.9-1.6 1.8-1.6h9.7c5 0 8.6 1.5 7.3 7.7-.3 1.5-.9 2.8-1.8 3.7c-.5-1.5-1.5-3.3-3-4.6z" fill="#00457C" opacity="0.15"/>
                </svg>
              ),
              shadowGlow: "rgba(0, 121, 193, 0.05)"
            },
            {
              name: "Venmo",
              desc: "Pay with Venmo",
              logo: (
                <svg width="35" height="35" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.55 4.5h-5.22L12.5 18.25l-2.62-7.1C9.4 9.8 8.1 9 6.7 9H3.1l6.2 16.5c.8 2.1 2.8 3.5 5 3.5h1.2c2.2 0 4.2-1.4 5-3.5L26.9 4.5z" fill="#008CFF" />
                </svg>
              ),
              shadowGlow: "rgba(0, 140, 255, 0.05)"
            },
            {
              name: "JCB",
              desc: "Credit & Debit Cards",
              logo: (
                <svg width="48" height="28" viewBox="0 0 60 35" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="2" width="16" height="31" rx="4" fill="#005bac" />
                  <rect x="22" y="2" width="16" height="31" rx="4" fill="#d0021b" />
                  <rect x="42" y="2" width="16" height="31" rx="4" fill="#009245" />
                  <text x="10" y="24" fill="#ffffff" fontFamily="'Helvetica Neue', Arial, sans-serif" fontWeight="900" fontSize="16" textAnchor="middle">J</text>
                  <text x="30" y="24" fill="#ffffff" fontFamily="'Helvetica Neue', Arial, sans-serif" fontWeight="900" fontSize="16" textAnchor="middle">C</text>
                  <text x="50" y="24" fill="#ffffff" fontFamily="'Helvetica Neue', Arial, sans-serif" fontWeight="900" fontSize="16" textAnchor="middle">B</text>
                </svg>
              ),
              shadowGlow: "rgba(0, 91, 172, 0.05)"
            },
            {
              name: "UnionPay",
              desc: "Global Card Payments",
              logo: (
                <svg width="55" height="30" viewBox="0 0 60 33" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 2 L38 2 L32 31 L2 31 Z" fill="#d0021b" />
                  <path d="M28 2 L58 2 L58 31 L22 31 Z" fill="#005bac" opacity="0.9" />
                  <path d="M25 2 L32 2 L26 31 L19 31 Z" fill="#009688" opacity="0.8" />
                  <text x="30" y="20" fill="#ffffff" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="8" textAnchor="middle" letterSpacing="0.2">UnionPay</text>
                </svg>
              ),
              shadowGlow: "rgba(0, 91, 172, 0.05)"
            }
          ].map((item, idx) => (
            <div key={idx} className="payment-card reveal" style={{ '--delay': `${idx * 0.05}s` }}>
              <div className="payment-check-badge">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <div className="payment-logo-container" style={{ '--shadow-glow': item.shadowGlow }}>
                {item.logo}
              </div>
              <h3 className="payment-card-title">{item.name}</h3>
              <p className="payment-card-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>



      <style>{`
        .pos-detail-page {
          padding-top: 0;
          min-height: 100vh;
          position: relative;
          background: var(--bg-main);
          overflow: hidden;
        }

        .mesh-gradient {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: 
            radial-gradient(at 0% 0%, rgba(37, 99, 235, 0.05) 0px, transparent 50%),
            radial-gradient(at 100% 0%, rgba(8, 145, 178, 0.05) 0px, transparent 50%),
            radial-gradient(at 50% 50%, rgba(37, 99, 235, 0.02) 0px, transparent 50%);
          pointer-events: none;
          z-index: 0;
        }

        .particles-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 0;
        }

        .floating-particle {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          animation: floatParticle 20s infinite alternate ease-in-out;
        }

        @keyframes floatParticle {
          from { transform: translate(0, 0) scale(1); }
          to { transform: translate(50px, 50px) scale(1.1); }
        }

        .container {
          max-width: 1300px;
          margin: 0 auto;
          padding: 0 40px;
          position: relative;
          z-index: 1;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
          padding: 80px 0;
        }

        .back-link {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #64748b;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.9rem;
          margin-bottom: 2rem;
          transition: color 0.3s ease;
        }

        .back-link:hover {
          color: #3b82f6;
        }

        .eyebrow {
          display: inline-block;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: #3b82f6;
          margin-bottom: 1rem;
          font-size: 0.85rem;
        }

        .pos-hero h1 {
          font-size: clamp(2.5rem, 5vw, 4rem);
          line-height: 1.1;
          color: #0f172a;
          margin-bottom: 1.5rem;
          font-weight: 800;
        }

        .text-gradient {
          background: linear-gradient(90deg, #3b82f6, #06b6d4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .pos-hero p {
          font-size: 1.2rem;
          color: #64748b;
          line-height: 1.6;
          margin-bottom: 2.5rem;
          max-width: 540px;
        }

        .hero-btns {
          display: flex;
          gap: 20px;
        }

        .hero-img {
          width: 100%;
          max-width: 650px;
          height: auto;
          border-radius: 32px;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
          transition: transform 0.5s ease;
        }

        .hero-img:hover {
          transform: translateY(-10px) scale(1.02);
        }

        .btn-primary {
          background: linear-gradient(135deg, #3b82f6, #06b6d4);
          color: #fff;
          padding: 1rem 2.5rem;
          border-radius: 12px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 10px 20px rgba(59, 130, 246, 0.2);
        }

        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 30px rgba(59, 130, 246, 0.4);
        }

        .btn-secondary {
          background: #f1f5f9;
          color: #0f172a;
          padding: 1rem 2.5rem;
          border-radius: 12px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .btn-secondary:hover {
          background: #e2e8f0;
        }

        .pos-features {
          padding: 100px 0;
        }

        .pos-powerful-features {
          padding: 80px 0 100px;
        }

        .powerful-rows {
          display: flex;
          flex-direction: column;
          gap: 80px;
        }

        .powerful-row {
          display: flex;
          align-items: center;
          gap: 60px;
          background: rgba(255, 255, 255, 0.6);
          backdrop-filter: blur(10px);
          border-radius: 32px;
          padding: 40px;
          border: 1px solid rgba(255, 255, 255, 0.8);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.03);
          border-left: 4px solid var(--cat-color);
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }

        .powerful-row:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08);
        }

        .powerful-row.reverse {
          flex-direction: row-reverse;
          border-left: none;
          border-right: 4px solid var(--cat-color);
        }

        .powerful-content {
          flex: 1;
        }

        .powerful-image-wrapper {
          flex: 1.2;
          position: relative;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          aspect-ratio: 16 / 9;
        }

        .powerful-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.7s ease;
        }

        .powerful-row:hover .powerful-image {
          transform: scale(1.05);
        }

        .powerful-image-overlay {
          position: absolute;
          inset: 0;
          z-index: 1;
        }

        .powerful-card-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 24px;
        }

        .powerful-icon {
          width: 60px;
          height: 60px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.8rem;
          flex-shrink: 0;
        }

        .powerful-card-header h3 {
          font-size: 1.5rem;
          font-weight: 700;
          line-height: 1.3;
          margin: 0;
        }

        .powerful-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .powerful-list li {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          font-size: 1.05rem;
          color: #475569;
          font-weight: 500;
          line-height: 1.5;
        }

        .check-icon {
          display: flex;
          align-items: center;
          flex-shrink: 0;
          margin-top: 2px;
        }

        @media (max-width: 992px) {
          .powerful-row, .powerful-row.reverse { 
            flex-direction: column; 
            border-left: 4px solid var(--cat-color);
            border-right: none;
          }
          .powerful-image-wrapper { width: 100%; }
        }

        /* ─── ACCEPTED PAYMENT METHODS ─── */
        .pos-payment-methods {
          padding: 100px 0;
          background: transparent;
          position: relative;
          overflow: hidden;
        }

        .payment-bg-pattern-left,
        .payment-bg-pattern-right {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          pointer-events: none;
          z-index: 0;
        }

        .payment-bg-pattern-left {
          left: 0;
        }

        .payment-bg-pattern-right {
          right: 0;
        }

        .payment-badge {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          background: #eff6ff;
          border: 1.5px solid #bfdbfe;
          color: #2563eb;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 6px 16px;
          border-radius: 999px;
          margin-bottom: 1.5rem;
          z-index: 2;
          position: relative;
        }

        .badge-shield-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: #2563eb;
          color: #ffffff;
        }

        .payment-section-title {
          font-size: clamp(2rem, 4vw, 2.8rem);
          font-weight: 900;
          color: #0f172a;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 15px;
          margin-bottom: 1rem;
          position: relative;
          z-index: 2;
          width: 100%;
        }

        .title-accent {
          color: #2563eb;
          background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .title-spark-left {
          transform: rotate(-15deg) translateY(-2px);
        }

        .title-spark-right {
          transform: rotate(15deg) translateY(-2px);
        }

        .payment-section-subtitle {
          color: #64748b;
          max-width: 600px;
          margin: 0 auto;
          font-size: 1rem;
          font-weight: 500;
        }

        .payment-features {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 30px;
          margin: 40px auto 60px;
          flex-wrap: wrap;
          max-width: 1000px;
          position: relative;
          z-index: 2;
        }

        .payment-feature-item {
          display: flex;
          align-items: center;
          gap: 16px;
          background: #ffffff;
          padding: 12px 24px;
          border-radius: 20px;
          border: 1.5px solid #f1f5f9;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.01);
          flex: 1;
          min-width: 280px;
          max-width: 320px;
        }

        .payment-feature-icon {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          position: relative;
        }

        .payment-feature-icon::after {
          content: '';
          position: absolute;
          inset: -4px;
          border-radius: 50%;
          border: 1px solid currentColor;
          opacity: 0.12;
        }

        .payment-feature-text {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .payment-feature-title {
          font-size: 0.95rem;
          font-weight: 800;
          color: #0f172a;
        }

        .payment-feature-desc {
          font-size: 0.8rem;
          color: #64748b;
          font-weight: 500;
        }

        .payment-methods-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 24px;
          position: relative;
          z-index: 2;
        }

        .payment-card {
          background: #ffffff;
          border: 1.5px solid #f1f5f9;
          border-radius: 20px;
          padding: 30px 16px 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          position: relative;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.01);
          transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.4s ease, border-color 0.4s ease;
        }

        .payment-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.04);
          border-color: #e2e8f0;
        }

        .payment-logo-container {
          width: 76px;
          height: 76px;
          border-radius: 50%;
          background: #ffffff;
          box-shadow: 0 6px 20px var(--shadow-glow, rgba(0, 0, 0, 0.02));
          border: 1px solid #f8fafc;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          flex-shrink: 0;
        }

        .payment-card:hover .payment-logo-container {
          transform: scale(1.1);
        }

        .payment-card-title {
          font-size: 1.05rem;
          font-weight: 800;
          color: #0f172a;
          margin: 0 0 4px 0;
          font-family: var(--font-heading);
        }

        .payment-card-desc {
          font-size: 0.78rem;
          color: #64748b;
          margin: 0;
          font-weight: 500;
          line-height: 1.3;
        }

        .payment-check-badge {
          position: absolute;
          top: 14px;
          right: 14px;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: #0f766e;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          box-shadow: 0 2px 6px rgba(15, 118, 110, 0.2);
        }

        @media (max-width: 1200px) {
          .payment-methods-grid {
            grid-template-columns: repeat(4, 1fr);
            gap: 20px;
          }
        }

        @media (max-width: 992px) {
          .payment-features {
            gap: 20px;
          }
          .payment-feature-item {
            flex: none;
            width: 100%;
            max-width: none;
          }
          .payment-methods-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 768px) {
          .payment-methods-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }
          .pos-payment-methods {
            padding: 60px 0;
          }
        }

        @media (max-width: 480px) {
          .payment-methods-grid {
            grid-template-columns: 1fr;
          }
        }

        .section-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .section-header h2 {
          font-size: 2.5rem;
          color: #0f172a;
          margin-bottom: 1rem;
        }

        .section-header p {
          color: #64748b;
          max-width: 600px;
          margin: 0 auto;
        }

        .features-badge {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          background: #eff6ff;
          border: 1.5px solid #bfdbfe;
          color: #2563eb;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 6px 16px;
          border-radius: 999px;
          margin-bottom: 1.5rem;
          z-index: 2;
          position: relative;
        }

        .badge-shield-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: #2563eb;
          color: #ffffff;
        }

        .features-section-title {
          font-size: clamp(2rem, 4vw, 2.8rem);
          font-weight: 900;
          color: #0f172a;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 15px;
          margin-bottom: 1rem;
          position: relative;
          z-index: 2;
          width: 100%;
        }

        .features-section-subtitle {
          color: #64748b;
          max-width: 600px;
          margin: 0 auto;
          font-size: 1rem;
          font-weight: 500;
          margin-bottom: 50px;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
          position: relative;
          z-index: 2;
        }

        .feature-card {
          background: #ffffff;
          border: 1.5px solid #f1f5f9;
          border-radius: 28px;
          padding: 45px 24px 35px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          position: relative;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.01);
          transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.4s ease, border-color 0.4s ease;
          overflow: hidden;
          cursor: pointer;
        }

        .feature-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 45px rgba(0, 0, 0, 0.05);
          border-color: #e2e8f0;
        }

        .card-number {
          position: absolute;
          top: 20px;
          left: 20px;
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.05em;
          border: 1.5px solid currentColor;
          padding: 3px 8px;
          border-radius: 999px;
          line-height: 1;
        }

        .feature-icon-container {
          position: relative;
          width: 90px;
          height: 90px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
          color: var(--accent-color);
        }

        .icon-ring {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          animation: spinRing 25s infinite linear;
        }

        @keyframes spinRing {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .icon-inner-circle {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: #ffffff;
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.04);
          border: 1px solid #f1f5f9;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
          transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .feature-card:hover .icon-inner-circle {
          transform: scale(1.08);
        }

        .feature-card-title {
          font-size: 1.22rem;
          font-weight: 800;
          color: #0f172a;
          margin: 0 0 10px 0;
          font-family: var(--font-heading);
        }

        .feature-card-divider {
          width: 32px;
          height: 3px;
          border-radius: 2px;
          margin-bottom: 18px;
        }

        .feature-card-desc {
          font-size: 0.92rem;
          color: #64748b;
          line-height: 1.5;
          margin: 0;
          font-weight: 500;
        }

        .card-wave {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          pointer-events: none;
          z-index: 1;
        }

        @media (max-width: 1200px) {
          .features-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
          }
        }

        @media (max-width: 768px) {
          .features-grid {
            grid-template-columns: 1fr;
          }
        }

        .pos-cta {
          padding-bottom: 100px;
        }

        .cta-card {
          background: #0f172a;
          border-radius: 40px;
          padding: 80px;
          text-align: center;
          color: #fff;
          position: relative;
          overflow: hidden;
        }

        .cta-card::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -20%;
          width: 300px;
          height: 300px;
          background: rgba(59, 130, 246, 0.1);
          filter: blur(100px);
          border-radius: 50%;
        }

        .cta-card h2 {
          font-size: 2.5rem;
          margin-bottom: 1.5rem;
        }

        .cta-card p {
          color: rgba(255,255,255,0.7);
          margin-bottom: 2.5rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        /* Animations */
        .reveal { opacity: 0; transform: translateY(30px); transition: all 0.8s cubic-bezier(0.2, 1, 0.3, 1); }
        .revealed { opacity: 1; transform: translateY(0); }
        .reveal[style*="--delay"] { transition-delay: var(--delay); }

        @media (max-width: 992px) {
          .hero-grid { grid-template-columns: 1fr; text-align: center; gap: 40px; }
          .hero-text-content { display: flex; flex-direction: column; align-items: center; }
          .pos-hero p { margin-left: auto; margin-right: auto; }
          .cta-card { padding: 40px; }
        }

        /* ─── HERO SECTION ─── */
        .dm-hero {
          position: relative;
          width: 100%;
          height: 100vh;
          min-height: 600px;
          max-height: 900px;
          overflow: hidden;
          display: flex;
          align-items: center;
          background: #fff;
        }

        /* Background video */
        .dm-hero__video {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center center;
          z-index: 0;
        }

        /* White-to-transparent gradient overlay */
        .dm-hero__overlay {
          position: absolute;
          inset: 0;
          z-index: 1;
          background: linear-gradient(
            to right,
            #ffffff 0%,
            #ffffff 42%,
            rgba(255,255,255,0.85) 54%,
            rgba(255,255,255,0.3) 68%,
            rgba(255,255,255,0) 100%
          );
        }

        /* Left content */
        .dm-hero__content {
          position: relative;
          z-index: 2;
          max-width: 620px;
          padding: 0 60px;
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        /* Badge */
        .dm-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #eff6ff;
          color: #2563eb;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 6px 16px;
          border-radius: 999px;
          border: 1px solid #bfdbfe;
          margin-bottom: 1.6rem;
          width: fit-content;
        }

        /* Headline */
        .dm-headline {
          font-size: clamp(2.6rem, 4.5vw, 4rem);
          font-weight: 900;
          line-height: 1.08;
          color: #0a0f1e;
          letter-spacing: -0.03em;
          margin: 0 0 1.6rem 0;
        }
        .dm-headline__accent {
          background: linear-gradient(115deg, #1d4ed8 0%, #0ea5e9 60%, #06b6d4 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Description */
        .dm-desc {
          font-size: 1.1rem;
          color: #475569;
          line-height: 1.75;
          margin: 0 0 2.4rem 0;
          max-width: 500px;
        }

        /* CTA row */
        .dm-cta {
          display: flex;
          gap: 16px;
          align-items: center;
        }

        .dm-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #0a0f1e;
          color: #ffffff;
          padding: 15px 32px;
          border-radius: 10px;
          font-size: 1rem;
          font-weight: 700;
          border: none;
          cursor: pointer;
          letter-spacing: 0.01em;
          transition: background 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease;
          box-shadow: 0 4px 24px rgba(10,15,30,0.18);
        }
        .dm-btn-primary:hover {
          background: #1d4ed8;
          transform: translateY(-3px);
          box-shadow: 0 12px 32px rgba(29,78,216,0.35);
        }
        .dm-btn-primary svg {
          transition: transform 0.25s ease;
        }
        .dm-btn-primary:hover svg {
          transform: translateX(4px);
        }

        @keyframes dmSlideUp {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .dm-anim-1 { animation: dmSlideUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.05s both; }
        .dm-anim-2 { animation: dmSlideUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.18s both; }
        .dm-anim-3 { animation: dmSlideUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.32s both; }
        .dm-anim-4 { animation: dmSlideUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.44s both; }
      `}</style>
    </div>
  );
};

export default CreditCardProcessing;
