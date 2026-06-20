import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import BookingModal from '../components/BookingModal';

// Import generated assets
import posExperienceImg from '../assets/images/pos_experience.png';
import inventoryMgmtImg from '../assets/images/inventory_mgmt.png';
import loyaltyRewardsImg from '../assets/images/loyalty_rewards.png';
import businessAnalyticsImg from '../assets/images/business_analytics.png';
import hardwareSuiteImg from '../assets/images/hardware_suite.png';
import posDashboardImg from '../assets/abcd.png';

// Import 3D Illustrations for Features
import posInventory3d from '../assets/images/pos_inventory_3d.png';
import posBilling3d from '../assets/images/pos_billing_3d.png';
import posAnalytics3d from '../assets/images/pos_analytics_3d.png';
import posCloud3d from '../assets/images/pos_cloud_3d.png';

// Store type assets
// Store type assets
import liquorStoreImg from '../assets/store_liquor.png';
import tobaccoShopImg from '../assets/store_tobacco.png';


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

const POS = () => {
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

      {/* ── PREMIUM VIDEO HERO (matches DigitalMarketing format) ── */}
      <section className="dm-hero">
        {/* Full-bleed background video — right half */}
        <video
          className="dm-hero__video"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videos/pos.mp4" type="video/mp4" />
        </video>

        {/* White-to-transparent gradient overlay */}
        <div className="dm-hero__overlay" />

        {/* Left content */}
        <div className="dm-hero__content">
          <span className="dm-badge dm-anim-1">Next-Gen Retail Tech</span>

          <h1 className="dm-headline dm-anim-2">
            Smart POS Solutions<br />
            <span className="dm-headline__accent">for Modern Business</span>
          </h1>

          <p className="dm-desc dm-anim-3">
            Transform your checkout experience with our intelligent Point of Sale system.
            Designed for speed, reliability, and deep business insights.
          </p>

          <div className="dm-cta dm-anim-4">
            <button className="dm-btn-primary" onClick={() => setIsModalOpen(true)}>
              Book Demo
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>

        </div>
      </section>

      <section id="features" className="pos-features container">
        <div className="section-header reveal">
          <div className="features-badge animate-fade">
            <span className="badge-star-icon">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            </span>
            <span className="badge-text">All-in-One Retail Solution</span>
          </div>
          <h2 className="features-section-title">
            <svg className="title-spark-left" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="3.5" strokeLinecap="round">
              <path d="M5 12c-2-1-4-3-4-5M8 15c-1-2-2-5-1-7M12 19c0-3-1-6-3-7" />
            </svg>
            Why Choose <span className="title-accent">Our POS?</span>
            <svg className="title-spark-right" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="3.5" strokeLinecap="round">
              <path d="M19 12c2-1 4-3 4-5M16 15c1-2 2-5 1-7M12 19c0-3 1-6 3-7" />
            </svg>
          </h2>
          <p>Everything you need to run your retail operation smoothly, from single stores to global chains.</p>
        </div>

        <div className="features-grid">
          {[
            {
              title: "Inventory Management",
              desc: "Automated stock tracking with low-inventory alerts and multi-location syncing.",
              color: "#3b82f6",
              img: posInventory3d,
              bgGlow: "rgba(59, 130, 246, 0.05)",
              badgeText: "Stay stocked. Never miss a sale."
            },
            {
              title: "Smart Billing",
              desc: "Lightning-fast checkout with support for all payment methods and digital receipts.",
              color: "#10b981",
              img: posBilling3d,
              bgGlow: "rgba(16, 185, 129, 0.05)",
              badgeText: "Faster checkout. Happier customers."
            },
            {
              title: "Advanced Analytics",
              desc: "Deep insights into sales trends, employee performance, and customer behavior.",
              color: "#8b5cf6",
              img: posAnalytics3d,
              bgGlow: "rgba(139, 92, 246, 0.05)",
              badgeText: "Data-driven decisions. Stronger growth."
            },
            {
              title: "Cloud Sync",
              desc: "Access your business data from anywhere, anytime with secure cloud integration.",
              color: "#f59e0b",
              img: posCloud3d,
              bgGlow: "rgba(245, 158, 11, 0.05)",
              badgeText: "Secure. Reliable. Always available."
            }
          ].map((f, i) => (
            <div key={i} className="feature-card reveal" style={{ 
              '--delay': `${i * 0.1}s`, 
              '--accent-color': f.color, 
              '--bg-glow': f.bgGlow,
              '--border-color': `${f.color}33`
            }}>
              <div className="feature-card-icon-container" style={{ borderColor: f.color }}>
                <img src={f.img} alt={f.title} className="feature-card-icon-img" />
              </div>
              <h3 className="feature-card-title">{f.title}</h3>
              <div className="feature-card-divider"></div>
              <p className="feature-card-desc">{f.desc}</p>
              
              <div className="feature-card-badge" style={{ background: `${f.color}0f`, color: f.color }}>
                <span className="badge-check-circle" style={{ background: f.color }}>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </span>
                <span className="badge-text">{f.badgeText}</span>
              </div>

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

      <section className="pos-store-types container">
        <div className="section-header reveal">
          <h2>Built For <span className="text-gradient">Every Type Of Store</span></h2>
          <p>Our versatile POS system is engineered to handle the specific workflows of diverse retail environments.</p>
        </div>

        <div className="store-types-grid">
          {[
            {
              name: "Liquor Stores",
              img: liquorStoreImg,
              features: [
                "RIP management",
                "RIP Reconciliation with detailed reports",
                "Automatic price cascading for multi-pack items",
                "Advanced EDI engine for supplier file processing",
                "Automatic cost cascading for multi-pack items",
                "Automatic stock cascading for multi-pack items",
                "Liquor industry-specific sales promotions"
              ]
            },
            {
              name: "Smoke & Tobacco Shops",
              img: tobaccoShopImg,
              features: [
                "Advanced tobacco inventory management",
                "Automated age verification compliance",
                "Multi-pack, carton & bundle pricing support",
                "Integrated barcode scanning & POS billing",
                "Real-time sales tracking & reporting",
                "Buy-down, discount & promotion management",
                "Secure cash handling & payment processing",
                "Customer loyalty & Scan data programs",
                "Low stock alerts & supplier management"
              ]
            },
            {
              name: "Convenience Stores",
              img: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=800&q=80",
              features: [
                "EBT Foodstamp processing",
                "Foodstamp tax adjustment in split transactions",
                "Buy-down amount management",
                "Buy-down amount reports",
                "Integrated WIC check processing",
                "Convenience industry-specific sales promotions"
              ]
            },
            {
              name: "Grocery Stores",
              img: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80",
              features: [
                "Inventory & stock management",
                "Barcode scanning & fast checkout",
                "Fresh produce & perishables tracking",
                "Integrated weighing scale support",
                "Discount, coupon & promotion management",
                "Multi-payment processing options",
                "Real-time sales & profit reporting",
                "Customer loyalty & rewards programs",
                "Supplier & purchase order management"
              ]
            },
            {
              name: "Supermarkets",
              img: "https://images.unsplash.com/photo-1534723452862-4c874018d66d?w=800&q=80",
              features: [
                "Integrated Foodstamp processing",
                "Advanced SIL engine for supplier file processing",
                "Non-PLU barcode processing",
                "Price-embedded barcode processing",
                "Coupon processing",
                "Foodstamp tax adjustment in split transactions",
                "Buy-down amount management and reports",
                "Integrated WIC check processing",
                "Supermarket Sales Promotions"
              ]
            },
            {
              name: "Multi-Store Retail Chains",
              img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
              features: [
                "Centralized multi-store management",
                "Real-time inventory synchronization",
                "Unified sales & performance reporting",
                "Branch-wise stock transfer management",
                "Centralized pricing & promotion control",
                "Employee & role-based access management",
                "Multi-location billing & payment processing",
                "Customer loyalty programs across all stores",
                "Advanced analytics & business insights"
              ]
            }
          ].map((store, i) => (
            <div key={i} className="store-type-card reveal" style={{ '--delay': `${i * 0.1}s` }}>
              <div className="store-image-wrapper">
                <img src={store.img} alt={store.name} className="store-image" />
                <div className="store-overlay">
                  {store.features && (
                    <div className="store-features-overlay">
                      <ul>
                        {store.features.map((feature, idx) => (
                          <li key={idx}>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
              <div className="store-name-tag">
                <h3>{store.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="pos-powerful-features container">
        <div className="section-header reveal">
          <div className="features-badge animate-fade">
            <span className="badge-star-icon">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            </span>
            <span className="badge-text">Designed to Empower Your Business</span>
          </div>
          <h2 className="features-section-title">
            <svg className="title-spark-left" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="3.5" strokeLinecap="round">
              <path d="M5 12c-2-1-4-3-4-5M8 15c-1-2-2-5-1-7M12 19c0-3-1-6-3-7" />
            </svg>
            Powerful Features <span className="title-accent">To Grow Your Business</span>
            <svg className="title-spark-right" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="3.5" strokeLinecap="round">
              <path d="M19 12c2-1 4-3 4-5M16 15c1-2 2-5 1-7M12 19c0-3 1-6 3-7" />
            </svg>
          </h2>
          <p>Everything your business needs — from smart billing to deep analytics, loyalty programs to security.</p>
        </div>

        <div className="powerful-rows">
          {[
            {
              title: "Smart POS Experience",
              subtitle: "Fast. Simple. Reliable.",
              icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              ),
              color: "#3b82f6",
              img: posExperienceImg,
              items: ["Touch Screen Interface", "Multiple Payment Types", "Fast & Easy Billing", "Gift Card Management", "Age Verification", "Customer Charge Accounts"]
            },
            {
              title: "Advanced Inventory Management",
              subtitle: "Track. Manage. Optimize.",
              icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                  <line x1="12" y1="22.08" x2="12" y2="12" />
                </svg>
              ),
              color: "#10b981",
              img: inventoryMgmtImg,
              items: ["Multi-Location Inventory", "Purchase & Sales History", "Real-time Stock Tracking", "Barcode & Label Generation", "Reorder Point Management", "Multi-Pack Item Management"]
            },
            {
              title: "Promotions & Loyalty Programs",
              subtitle: "Engage. Reward. Retain.",
              icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 12 20 22 4 22 4 12" />
                  <rect x="2" y="7" width="20" height="5" />
                  <line x1="12" y1="22" x2="12" y2="7" />
                  <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
                  <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
                </svg>
              ),
              color: "#f59e0b",
              img: loyaltyRewardsImg,
              items: ["Mix & Match Discounts", "Quantity Discounts", "Buy X Get Y Offers", "Loyalty Cards", "Coupon-Based Discounts", "Reward Point System"]
            },
            {
              title: "Reports & Business Insights",
              subtitle: "Analyze. Forecast. Grow.",
              icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#f43f5e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="20" x2="18" y2="10" />
                  <line x1="12" y1="20" x2="12" y2="4" />
                  <line x1="6" y1="20" x2="6" y2="14" />
                </svg>
              ),
              color: "#f43f5e",
              img: businessAnalyticsImg,
              items: ["Sales Reports", "Employee Activity Reports", "Inventory Reports", "Cash Drawer Reconciliation", "Profitability Reports", "Purchase Invoice Reports"]
            },
            {
              title: "Hardware & Integration",
              subtitle: "Connect. Expand. Integrate.",
              icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 10V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v4h12z" />
                  <path d="M6 10h12v4a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4v-4z" />
                  <line x1="9" y1="2" x2="9" y2="4" />
                  <line x1="15" y1="2" x2="15" y2="4" />
                  <line x1="12" y1="18" x2="12" y2="22" />
                </svg>
              ),
              color: "#8b5cf6",
              img: hardwareSuiteImg,
              items: ["Receipt Printers", "Customer Displays", "Barcode Scanners", "Credit Card Processing", "Cash Drawers", "E-commerce Integration"]
            },
            {
              title: "Secure, Reliable & Compliant",
              subtitle: "Protect. Trust. Comply.",
              icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              ),
              color: "#06b6d4",
              img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
              items: ["PCI Compliant", "Regular Backups", "Data Security", "Cloud & Local Options", "User Access Control", "99.9% System Uptime"]
            }
          ].map((cat, i) => {
            const isReverse = i % 2 !== 0;
            return (
              <div key={i} className={`powerful-row reveal ${isReverse ? 'reverse' : ''}`} style={{ '--delay': `${i * 0.1}s`, '--cat-color': cat.color }}>
                <div className="powerful-content">
                  {isReverse && (
                    <div className="powerful-dots-decor" style={{ color: cat.color }}>
                      <svg width="35" height="75" viewBox="0 0 35 75" fill="currentColor">
                        {Array.from({ length: 15 }).map((_, idx) => {
                          const col = idx % 3;
                          const row = Math.floor(idx / 3);
                          return <circle key={idx} cx={6 + col * 11} cy={6 + row * 11} r="2" opacity="0.18" />;
                        })}
                      </svg>
                    </div>
                  )}
                  <div className="powerful-card-header">
                    <div className="powerful-icon-container" style={{ borderColor: cat.color }}>
                      {cat.icon}
                    </div>
                    <div className="powerful-title-group">
                      <h3 className="powerful-row-title">{cat.title}</h3>
                      <p className="powerful-row-subtitle">{cat.subtitle}</p>
                    </div>
                  </div>
                  <ul className="powerful-list-grid">
                    {cat.items.map((item, j) => (
                      <li key={j} className="powerful-list-item">
                        <span className="powerful-check-icon" style={{ background: cat.color }}>
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </span>
                        <span className="powerful-list-text">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="powerful-image-wrapper">
                  {isReverse ? (
                    <svg className="powerful-curve-left" viewBox="0 0 80 100" preserveAspectRatio="none">
                      <path d="M80,0 C30,30 30,70 80,100 L0,100 L0,0 Z" fill="#ffffff" />
                    </svg>
                  ) : (
                    <svg className="powerful-curve-right" viewBox="0 0 80 100" preserveAspectRatio="none">
                      <path d="M0,0 C50,30 50,70 0,100 L80,100 L80,0 Z" fill="#ffffff" />
                    </svg>
                  )}
                  <img src={cat.img} alt={cat.title} className="powerful-image" />
                  <div className="powerful-image-overlay" style={{ background: `linear-gradient(135deg, ${cat.color}15 0%, transparent 100%)` }}></div>
                </div>
              </div>
            );
          })}
        </div>
      </section>      <style>{`
        /* ─── PAGE SHELL ─── */
        .pos-detail-page {
          min-height: 100vh;
          position: relative;
          background: #ffffff;
        }

        /* ─── HERO SECTION (matches DigitalMarketing.jsx exactly) ─── */
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

        /* Background video — right half */
        .dm-hero__video {
          position: absolute;
          top: 0;
          right: 0;
          width: 60%;
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
            rgba(255,255,255,0) 80%
          );
        }

        /* Left content */
        .dm-hero__content {
          position: relative;
          z-index: 2;
          max-width: 620px;
          padding: 100px 60px 0;
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
          font-size: clamp(2.4rem, 4.2vw, 3.8rem);
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
          max-width: 480px;
        }

        /* CTA row */
        .dm-cta {
          display: flex;
          gap: 16px;
          align-items: center;
          margin-bottom: 2.8rem;
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
        .dm-btn-primary svg { transition: transform 0.25s ease; }
        .dm-btn-primary:hover svg { transform: translateX(4px); }

        .dm-btn-ghost {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #475569;
          font-size: 0.95rem;
          font-weight: 600;
          text-decoration: none;
          padding: 15px 20px;
          border-radius: 10px;
          transition: color 0.2s ease, background 0.2s ease;
        }
        .dm-btn-ghost:hover { color: #1d4ed8; background: #eff6ff; }

        /* Stats row */
        .dm-hero-stats {
          display: flex;
          align-items: center;
          gap: 0;
        }
        .dm-stat {
          display: flex;
          flex-direction: column;
          gap: 2px;
          padding: 0 20px;
        }
        .dm-stat:first-child { padding-left: 0; }
        .dm-stat__num {
          font-size: 1.4rem;
          font-weight: 800;
          color: #0a0f1e;
          letter-spacing: -0.02em;
          line-height: 1;
        }
        .dm-stat__label {
          font-size: 0.75rem;
          color: #94a3b8;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }
        .dm-stat-divider {
          width: 1px;
          height: 36px;
          background: #e2e8f0;
        }

        /* ─── Reveal animations (scroll-triggered, same as DM) ─── */
        .reveal {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1);
        }
        .reveal.revealed {
          opacity: 1;
          transform: translateY(0);
        }
        .dm-hero__content .reveal:nth-child(1) { transition-delay: 0.05s; }
        .dm-hero__content .reveal:nth-child(2) { transition-delay: 0.15s; }
        .dm-hero__content .reveal:nth-child(3) { transition-delay: 0.28s; }
        .dm-hero__content .reveal:nth-child(4) { transition-delay: 0.40s; }
        .dm-hero__content .reveal:nth-child(5) { transition-delay: 0.52s; }
        /* ─── Hero entrance animations (load-triggered) ─── */
        @keyframes dmSlideUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .dm-anim-1 { animation: dmSlideUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.05s both; }
        .dm-anim-2 { animation: dmSlideUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.18s both; }
        .dm-anim-3 { animation: dmSlideUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.32s both; }
        .dm-anim-4 { animation: dmSlideUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.44s both; }



        /* ─── CONTAINER UTILITY ─── */
        .container {
          max-width: 1300px;
          margin: 0 auto;
          padding-left: 40px;
          padding-right: 40px;
          position: relative;
          z-index: 1;
        }

        .pos-features {
          padding: 100px 0;
        }

        .pos-powerful-features {
          padding: 80px 0 100px;
          background: #ffffff;
          position: relative;
        }

        .powerful-rows {
          display: flex;
          flex-direction: column;
          gap: 60px;
          margin-top: 60px;
        }

        .powerful-row {
          display: flex;
          align-items: stretch;
          background: #ffffff;
          border-radius: 30px;
          border: 1.5px solid #f1f5f9;
          border-left: 6px solid var(--cat-color);
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.02);
          transition: transform 0.4s ease, box-shadow 0.4s ease;
          overflow: hidden;
          position: relative;
          min-height: 380px;
        }

        .powerful-row:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.05);
        }

        .powerful-row.reverse {
          flex-direction: row-reverse;
          border-left: 1.5px solid #f1f5f9;
          border-right: 6px solid var(--cat-color);
        }

        .powerful-content {
          flex: 1.1;
          padding: 50px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          position: relative;
        }

        .powerful-dots-decor {
          position: absolute;
          right: 35px;
          top: 50%;
          transform: translateY(-50%);
          pointer-events: none;
          z-index: 1;
        }

        .powerful-card-header {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 35px;
          position: relative;
          z-index: 2;
        }

        .powerful-icon-container {
          width: 58px;
          height: 58px;
          border-radius: 50%;
          background: #ffffff;
          border: 1.5px solid var(--cat-color);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.03);
          flex-shrink: 0;
          transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .powerful-row:hover .powerful-icon-container {
          transform: scale(1.1);
        }

        .powerful-title-group {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .powerful-row-title {
          font-size: 1.5rem;
          font-weight: 800;
          color: #0f172a;
          margin: 0;
          font-family: var(--font-heading);
          line-height: 1.2;
        }

        .powerful-row-subtitle {
          font-size: 0.95rem;
          color: #64748b;
          margin: 0;
          font-weight: 600;
        }

        .powerful-list-grid {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 16px 20px;
          list-style: none;
          padding: 0;
          margin: 0;
          position: relative;
          z-index: 2;
        }

        .powerful-list-item {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .powerful-check-icon {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .powerful-list-text {
          font-size: 0.95rem;
          color: #475569;
          font-weight: 600;
          line-height: 1.4;
        }

        .powerful-image-wrapper {
          flex: 1;
          position: relative;
          overflow: hidden;
        }

        .powerful-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.7s ease;
        }

        .powerful-row:hover .powerful-image {
          transform: scale(1.04);
        }

        .powerful-image-overlay {
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
        }

        .powerful-curve-left, .powerful-curve-right {
          position: absolute;
          top: -1px;
          bottom: -1px;
          height: calc(100% + 2px);
          width: 70px;
          z-index: 2;
          pointer-events: none;
        }

        .powerful-curve-left {
          left: -1px;
        }

        .powerful-curve-right {
          right: -1px;
        }

        @media (max-width: 992px) {
          .powerful-row, .powerful-row.reverse {
            flex-direction: column;
            align-items: stretch;
            border-left: 6px solid var(--cat-color);
            border-right: 1px solid #f1f5f9;
            min-height: auto;
          }
          .powerful-content {
            padding: 40px 30px;
          }
          .powerful-image-wrapper {
            height: 250px;
            width: 100%;
          }
          .powerful-curve-left, .powerful-curve-right {
            display: none;
          }
          .powerful-dots-decor {
            display: none;
          }
        }

        @media (max-width: 580px) {
          .powerful-list-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }
          .powerful-row-title {
            font-size: 1.3rem;
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
          gap: 8px;
          background: #eff6ff;
          border: 1px solid #bfdbfe;
          color: #2563eb;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 8px 20px;
          border-radius: 999px;
          margin-bottom: 1.5rem;
          z-index: 2;
          position: relative;
        }

        .badge-star-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: #2563eb;
          color: #ffffff;
          padding-bottom: 1px; /* Visual alignment tweak */
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

        .features-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
          margin-top: 70px;
          position: relative;
          z-index: 2;
        }

        .feature-card {
          background: #ffffff;
          border: 2px solid var(--border-color);
          border-radius: 28px;
          padding: 60px 25px 35px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.02);
          transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.4s ease;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          cursor: pointer;
        }

        .feature-card:hover {
          transform: translateY(-12px);
          box-shadow: 0 20px 40px var(--bg-glow), 0 12px 24px rgba(0,0,0,0.02);
        }

        .feature-card-icon-container {
          width: 90px;
          height: 90px;
          border-radius: 50%;
          background: #ffffff;
          border: 1.5px solid var(--accent-color);
          display: flex;
          align-items: center;
          justify-content: center;
          position: absolute;
          top: -45px;
          left: 50%;
          transform: translateX(-50%);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.06);
          z-index: 10;
          transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.4s ease;
        }

        .feature-card:hover .feature-card-icon-container {
          transform: translateX(-50%) scale(1.08) translateY(-2px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
        }

        .feature-card-icon-img {
          width: 54px;
          height: 54px;
          object-fit: contain;
          transition: transform 0.4s ease;
        }

        .feature-card:hover .feature-card-icon-img {
          transform: translateY(-2px) scale(1.08);
        }

        .feature-card-title {
          font-size: 1.35rem;
          font-weight: 800;
          color: #0f172a;
          margin-top: 15px;
          margin-bottom: 12px;
          line-height: 1.3;
          font-family: var(--font-heading);
        }

        .feature-card-divider {
          width: 32px;
          height: 3px;
          background: var(--accent-color);
          border-radius: 2px;
          margin-bottom: 20px;
        }

        .feature-card-desc {
          font-size: 0.95rem;
          color: #64748b;
          line-height: 1.6;
          margin-bottom: 25px;
          flex-grow: 1;
        }

        .feature-card-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 8px 16px;
          border-radius: 999px;
          margin-top: auto;
          margin-bottom: 10px;
          width: 100%;
          box-sizing: border-box;
          justify-content: flex-start;
          text-align: left;
          z-index: 2;
        }

        .badge-check-circle {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .feature-card-badge .badge-text {
          font-size: 0.82rem;
          font-weight: 700;
          color: #334155;
          line-height: 1.3;
        }

        .card-wave {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 35px;
          border-bottom-left-radius: 26px;
          border-bottom-right-radius: 26px;
          overflow: hidden;
          pointer-events: none;
          z-index: 1;
        }

        @media (max-width: 1200px) {
          .features-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 50px 30px;
          }
        }

        @media (max-width: 768px) {
          .features-grid {
            grid-template-columns: 1fr;
            gap: 60px;
          }
          .section-header h2,
          .features-section-title,
          .payment-section-title {
            font-size: 1.8rem;
            line-height: 1.3;
            gap: 8px;
            flex-wrap: wrap;
            text-align: center;
          }
          .title-spark-left, .title-spark-right {
            width: 22px;
            height: 22px;
          }
          .section-header {
            margin-bottom: 40px;
          }
          .pos-features {
            padding: 90px 0 60px;
          }
          .pos-powerful-features {
            padding: 90px 0 60px;
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



        .pos-store-types {
          padding: 100px 0 150px;
        }

        .store-types-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 50px;
        }

        .store-type-card {
          position: relative;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
          transition: all 0.4s ease;
          background: #fff;
          cursor: pointer;
        }

        .store-type-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
        }

        .store-image-wrapper {
          width: 100%;
          aspect-ratio: 16 / 12;
          overflow: hidden;
          position: relative;
        }

        .store-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .store-type-card:hover .store-image {
          transform: scale(1.1);
        }

        .store-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0.2) 100%);
          opacity: 0.8;
          transition: all 0.4s ease;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 20px 25px;
        }

        .store-type-card:hover .store-overlay {
          opacity: 1;
          background: rgba(15, 23, 42, 0.9);
          backdrop-filter: blur(4px);
        }

        .store-features-overlay {
          opacity: 0;
          transform: translateY(15px);
          transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
          width: 100%;
        }

        .store-type-card:hover .store-features-overlay {
          opacity: 1;
          transform: translateY(0);
        }

        .store-features-overlay ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px 20px;
        }

        .store-features-overlay li {
          color: #f1f5f9;
          font-size: 0.78rem;
          margin-bottom: 0;
          display: flex;
          align-items: flex-start;
          gap: 6px;
          line-height: 1.25;
          font-weight: 500;
        }

        .store-features-overlay li svg {
          color: #3b82f6;
          flex-shrink: 0;
          margin-top: 1px;
          width: 14px;
          height: 14px;
        }

        .store-name-tag {
          position: absolute;
          bottom: 20px;
          left: 20px;
          right: 20px;
          z-index: 2;
          transition: all 0.4s ease;
        }

        .store-type-card:hover .store-name-tag {
          transform: translateY(-220px);
          opacity: 0;
        }

        .store-name-tag h3 {
          color: #fff;
          font-size: 1.4rem;
          font-weight: 700;
          margin: 0;
          text-shadow: 0 2px 4px rgba(0,0,0,0.3);
        }

        @media (max-width: 768px) {
          .store-types-grid {
            grid-template-columns: 1fr;
          }
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
      `}</style>
    </div>
  );
};

export default POS;
