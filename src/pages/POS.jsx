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
      <div className="mesh-gradient"></div>
      <div className="particles-container">
        <FloatingParticle size="400px" top="-10%" left="-5%" delay="0s" color="rgba(59, 130, 246, 0.08)" />
        <FloatingParticle size="500px" top="50%" left="70%" delay="-2s" color="rgba(6, 182, 212, 0.06)" />
        <FloatingParticle size="300px" top="20%" left="30%" delay="-4s" color="rgba(139, 92, 246, 0.05)" />
      </div>

      <section className="pos-hero">
        <div className="container hero-grid">
          <div className="hero-text-content">
            <Link to="/services" className="back-link reveal">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
              Back to Services
            </Link>
            <span className="eyebrow reveal">Next-Gen Retail Tech</span>
            <h1 className="reveal">Smart <span className="text-gradient">POS Solutions</span> for Modern Business</h1>
            <p className="reveal">
              Transform your checkout experience with our intelligent Point of Sale system. Designed for speed, reliability, and deep business insights.
            </p>
            <div className="hero-btns reveal">
              <button className="btn-primary" onClick={() => setIsModalOpen(true)}>Book Demo</button>
              <a href="#features" className="btn-secondary">Explore Features</a>
            </div>
          </div>
          <div className="hero-visual reveal">
            <img src={posDashboardImg} alt="POS System" className="hero-img" />
          </div>
        </div>
      </section>

      <section id="features" className="pos-features container">
        <div className="section-header reveal">
          <h2>Why Choose Our POS?</h2>
          <p>Everything you need to run your retail operation smoothly, from single stores to global chains.</p>
        </div>

        <div className="features-grid">
          {[
            {
              title: "Inventory Management",
              desc: "Automated stock tracking with low-inventory alerts and multi-location syncing.",
              icon: "📦",
              color: "#3b82f6"
            },
            {
              title: "Smart Billing",
              desc: "Lightning-fast checkout with support for all payment methods and digital receipts.",
              icon: "⚡",
              color: "#06b6d4"
            },
            {
              title: "Advanced Analytics",
              desc: "Deep insights into sales trends, employee performance, and customer behavior.",
              icon: "📊",
              color: "#8b5cf6"
            },
            {
              title: "Cloud Sync",
              desc: "Access your business data from anywhere, anytime with secure cloud integration.",
              icon: "☁️",
              color: "#3b82f6"
            }
          ].map((f, i) => (
            <div key={i} className="feature-card reveal" style={{ '--delay': `${i * 0.1}s`, '--accent-glow': `${f.color}15` }}>
              <div className="feature-icon" style={{ backgroundColor: `${f.color}15`, color: f.color }}>{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
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
          <h2>Powerful Features <span className="text-gradient">To Grow Your Business</span></h2>
          <p>Everything your business needs — from smart billing to deep analytics, loyalty programs to security.</p>
        </div>

        <div className="powerful-rows">
          {[
            {
              title: "Smart POS Experience",
              icon: "🖥️",
              color: "#3b82f6",
              img: posExperienceImg,
              items: ["Touch Screen Interface", "Fast & Easy Billing", "Age Verification", "Multiple Payment Types", "Gift Card Management", "Customer Charge Accounts"]
            },
            {
              title: "Advanced Inventory Management",
              icon: "📦",
              color: "#10b981",
              img: inventoryMgmtImg,
              items: ["Multi-Location Inventory", "Real-time Stock Tracking", "Reorder Point Management", "Purchase & Sales History", "Barcode & Label Generation", "Multi-Pack Item Management"]
            },
            {
              title: "Promotions & Loyalty Programs",
              icon: "🎁",
              color: "#f59e0b",
              img: loyaltyRewardsImg,
              items: ["Mix & Match Discounts", "Buy X Get Y Offers", "Coupon-Based Discounts", "Quantity Discounts", "Loyalty Cards", "Reward Point System"]
            },
            {
              title: "Reports & Business Insights",
              icon: "📊",
              color: "#f43f5e",
              img: businessAnalyticsImg,
              items: ["Sales Reports", "Inventory Reports", "Profitability Reports", "Employee Activity Reports", "Cash Drawer Reconciliation", "Purchase Invoice Reports"]
            },
            {
              title: "Hardware & Integration",
              icon: "🔌",
              color: "#8b5cf6",
              img: hardwareSuiteImg,
              items: ["Receipt Printers", "Barcode Scanners", "Cash Drawers", "Customer Displays", "Credit Card Processing", "E-commerce Integration"]
            },
            {
              title: "Secure, Reliable & Compliant",
              icon: "🔒",
              color: "#06b6d4",
              img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
              items: ["PCI Compliant", "Data Security", "User Access Control", "Regular Backups", "Cloud & Local Options", "99.9% System Uptime"]
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





      <style>{`
        .pos-detail-page {
          padding-top: 100px;
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
          grid-template-columns: 1.1fr 0.9fr;
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
          font-size: clamp(2.2rem, 4vw, 3.2rem);
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
          font-size: 1.1rem;
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
          max-width: 580px;
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
          background: color-mix(in srgb, var(--cat-color, #fff) 5%, rgba(255, 255, 255, 0.7));
          backdrop-filter: blur(10px);
          border-radius: 32px;
          padding: 40px;
          border: 1px solid color-mix(in srgb, var(--cat-color, #fff) 15%, rgba(255, 255, 255, 0.8));
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.03);
          border-left: 6px solid var(--cat-color);
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

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
        }

        .feature-card {
          background: rgba(255, 255, 255, 0.45);
          backdrop-filter: blur(25px) saturate(200%);
          -webkit-backdrop-filter: blur(25px) saturate(200%);
          padding: 50px 40px;
          border-radius: 36px;
          border: 1px solid rgba(255, 255, 255, 0.6);
          box-shadow: 
            0 10px 40px -10px rgba(0, 0, 0, 0.05),
            0 20px 25px -5px rgba(0, 0, 0, 0.02);
          transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          cursor: pointer;
        }

        /* Shine Sweep Animation */
        .feature-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -150%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.4),
            transparent
          );
          transition: 0.8s;
          z-index: 2;
        }

        .feature-card:hover::before {
          left: 150%;
        }

        .feature-card:hover {
          transform: translateY(-15px) scale(1.03);
          background: rgba(255, 255, 255, 0.95);
          border-color: rgba(255, 255, 255, 1);
          box-shadow: 
            0 30px 60px -12px rgba(0, 0, 0, 0.15),
            0 18px 36px -18px rgba(0, 0, 0, 0.1);
        }

        .feature-icon {
          width: 80px;
          height: 80px;
          border-radius: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.2rem;
          margin-bottom: 2.5rem;
          position: relative;
          z-index: 1;
          background: #fff;
          box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.1);
          transition: all 0.5s ease;
        }
        
        @keyframes floatIcon {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }

        .feature-card:hover .feature-icon {
          animation: floatIcon 3s ease-in-out infinite;
          box-shadow: 0 15px 30px -10px rgba(0, 0, 0, 0.2);
        }

        .feature-card h3 {
          font-size: 1.5rem;
          font-weight: 800;
          color: #1e293b;
          margin-bottom: 1.5rem;
          position: relative;
          z-index: 1;
          letter-spacing: -0.02em;
        }

        .feature-card p {
          color: #475569;
          line-height: 1.8;
          font-size: 1.05rem;
          position: relative;
          z-index: 1;
          font-weight: 500;
        }

        .feature-card::after {
          content: '';
          position: absolute;
          bottom: -70px;
          right: -70px;
          width: 200px;
          height: 200px;
          background: radial-gradient(circle, var(--accent-glow, rgba(59, 130, 246, 0.1)) 0%, transparent 70%);
          border-radius: 50%;
          transition: all 0.8s ease;
          opacity: 0.3;
        }
        
        .feature-card:hover::after {
          transform: scale(2);
          opacity: 0.6;
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
