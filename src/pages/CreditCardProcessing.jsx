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

      <section className="pos-hero">
        <div className="container hero-grid">
          <div className="hero-text-content">
            <Link to="/services" className="back-link reveal">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
              Back to Services
            </Link>
            <span className="eyebrow reveal">Payment Solutions</span>
            <h1 className="reveal">Secure <span className="text-gradient">Payment Processing</span></h1>
            <p className="reveal">
              Accept payments securely and effortlessly. Our solutions support all major cards and digital wallets with bank-grade encryption and industry-leading approval rates.
            </p>
            <div className="hero-btns reveal">
              <button className="btn-primary" onClick={() => setIsModalOpen(true)}>Book Demo</button>
              <a href="#features" className="btn-secondary">View Rates</a>
            </div>
          </div>
          <div className="hero-visual reveal">
            <img src={creditCardProcessingImg} alt="Credit Card Processing" className="hero-img" />
          </div>
        </div>
      </section>

      <section id="features" className="pos-features container">
        <div className="section-header reveal">
          <h2>Seamless Transactions</h2>
          <p>Everything you need to accept payments online, in-store, or on the go.</p>
        </div>

        <div className="features-grid">
          {[
            {
              title: "All Major Cards",
              desc: "Accept Visa, Mastercard, Amex, Discover, and digital wallets like Apple Pay.",
              icon: "💳",
              color: "#3b82f6"
            },
            {
              title: "PCI-DSS Compliant",
              desc: "Bank-grade security and encryption to keep your customers' data safe.",
              icon: "🔒",
              color: "#06b6d4"
            },
            {
              title: "Chargeback Protection",
              desc: "Advanced fraud detection tools to minimize disputes and protect your revenue.",
              icon: "🛡️",
              color: "#8b5cf6"
            },
            {
              title: "Competitive Rates",
              desc: "Transparent pricing with industry-leading low processing fees.",
              icon: "💸",
              color: "#3b82f6"
            }
          ].map((f, i) => (
            <div key={i} className="feature-card reveal" style={{ '--delay': `${i * 0.1}s` }}>
              <div className="feature-icon" style={{ backgroundColor: `${f.color}15`, color: f.color }}>{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
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

      <section className="payment-methods container reveal">
        <div className="section-header">
          <h2>Accepted <span className="text-gradient">Payment Methods</span></h2>
          <p>We support a wide range of global and local payment options to ensure you never miss a sale.</p>
        </div>
        <div className="methods-grid">
          {[
            { name: "Visa", icon: "💳" },
            { name: "Mastercard", icon: "💳" },
            { name: "American Express", icon: "💳" },
            { name: "Discover", icon: "💳" },
            { name: "Apple Pay", icon: "🍎" },
            { name: "Google Pay", icon: "🔍" },
            { name: "Samsung Pay", icon: "📱" },
            { name: "Contactless", icon: "📡" },
            { name: "PayPal", icon: "💰" },
            { name: "Venmo", icon: "💸" },
            { name: "JCB", icon: "💳" },
            { name: "UnionPay", icon: "💳" }
          ].map((method, i) => (
            <div key={i} className="method-item" style={{ '--delay': `${i * 0.05}s` }}>
              <span className="method-icon">{method.icon}</span>
              <span className="method-name">{method.name}</span>
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

        .payment-methods {
          padding: 60px 0 100px;
        }

        .methods-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 20px;
        }

        .method-item {
          background: rgba(255, 255, 255, 0.5);
          backdrop-filter: blur(5px);
          padding: 20px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          gap: 12px;
          border: 1px solid rgba(255, 255, 255, 0.5);
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .method-item:hover {
          background: #fff;
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.05);
          border-color: #3b82f6;
        }

        .method-icon {
          font-size: 1.5rem;
        }

        .method-name {
          font-weight: 600;
          color: #0f172a;
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
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(10px);
          padding: 40px;
          border-radius: 24px;
          border: 1px solid rgba(255, 255, 255, 0.8);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.02);
          transition: all 0.4s ease;
        }

        .feature-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.08);
          border-color: #fff;
          background: #fff;
        }

        .feature-icon {
          width: 60px;
          height: 60px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
        }

        .feature-card h3 {
          font-size: 1.25rem;
          color: #0f172a;
          margin-bottom: 1rem;
        }

        .feature-card p {
          color: #64748b;
          line-height: 1.5;
          font-size: 0.95rem;
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
      `}</style>
    </div>
  );
};

export default CreditCardProcessing;
