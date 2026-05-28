import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import BookingModal from '../components/BookingModal';
import digitalMarketingImg from '../assets/images/digital_marketing.png';



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

const DigitalMarketing = () => {
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
            <span className="eyebrow reveal">Growth & Visibility</span>
            <h1 className="reveal">Data-Driven <span className="text-gradient">Digital Marketing</span></h1>
            <p className="reveal">
              Grow your brand with precision marketing strategies. From SEO and social media campaigns to paid advertising, we help you reach the right audience.
            </p>
            <div className="hero-btns reveal">
              <button className="btn-primary" onClick={() => setIsModalOpen(true)}>Book Demo</button>
              <a href="#features" className="btn-secondary">View Services</a>
            </div>
          </div>
          <div className="hero-visual reveal">
            <img src={digitalMarketingImg} alt="Digital Marketing" className="hero-img" />
          </div>
        </div>
      </section>

      <section id="features" className="pos-features container">
        <div className="section-header reveal">
          <h2>Maximize Your ROI</h2>
          <p>Comprehensive digital marketing solutions designed to increase your visibility, traffic, and sales.</p>
        </div>

        <div className="features-grid">
          {[
            {
              title: "SEO & Content Strategy",
              desc: "Rank higher on search engines and attract organic traffic with keyword-optimized content.",
              icon: "🎯",
              color: "#3b82f6"
            },
            {
              title: "Social Media Management",
              desc: "Engage your audience and build brand loyalty across all major social platforms.",
              icon: "📱",
              color: "#06b6d4"
            },
            {
              title: "PPC & Ad Campaigns",
              desc: "Targeted advertising campaigns that deliver high-quality leads and maximize return on ad spend.",
              icon: "💰",
              color: "#8b5cf6"
            },
            {
              title: "Analytics & Tracking",
              desc: "Deep insights into campaign performance, user behavior, and conversion tracking.",
              icon: "📈",
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
          <h2>Powerful Strategies <span className="text-gradient">To Scale Your Brand</span></h2>
          <p>We combine creativity with technical expertise to deliver marketing campaigns that actually convert.</p>
        </div>

        <div className="powerful-rows">
          {[
            {
              title: "Search Engine Optimization",
              icon: "🎯",
              color: "#3b82f6",
              renderVisual: () => (
                <div className="seo-sketch-container">
                  <svg viewBox="0 0 500 350" className="seo-sketch-svg">
                    <defs>
                      <filter id="chalkEffect" x="-20%" y="-20%" width="140%" height="140%">
                        <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" result="noise" />
                        <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" />
                      </filter>
                    </defs>
                    <rect width="100%" height="100%" rx="24" fill="#1e293b" />

                    {/* Central Node */}
                    <circle cx="250" cy="175" r="50" fill="none" stroke="#fff" strokeWidth="2" strokeDasharray="5 5" className="sketch-line" />
                    <text x="250" y="185" textAnchor="middle" fill="#fff" fontSize="32" fontWeight="bold" filter="url(#chalkEffect)" style={{ fontFamily: 'monospace' }}>SEO</text>

                    {/* Connecting Lines & Nodes */}
                    {[
                      { label: "RANKING", x: 250, y: 60, icon: "⭐" },
                      { label: "BACK LINKS", x: 400, y: 100, icon: "🔗" },
                      { label: "KEYWORDS", x: 410, y: 220, icon: "🔑" },
                      { label: "SITE ARCH", x: 300, y: 290, icon: "🏗️" },
                      { label: "CONTENT", x: 150, y: 290, icon: "📝" },
                      { label: "TRAFFIC", x: 90, y: 220, icon: "📈" },
                      { label: "ANALYSIS", x: 100, y: 100, icon: "🔍" }
                    ].map((node, idx) => (
                      <g key={idx}>
                        <line x1="250" y1="175" x2={node.x} y2={node.y} stroke="#fff" strokeWidth="1" strokeDasharray="4 4" opacity="0.4" />
                        <circle cx={node.x} cy={node.y} r="15" fill="#3b82f6" opacity="0.2" />
                        <text x={node.x} y={node.y - 25} textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold" opacity="0.8">{node.label}</text>
                        <text x={node.x - 7} y={node.y + 5} fontSize="14">{node.icon}</text>
                      </g>
                    ))}
                  </svg>
                </div>
              ),
              items: ["On-Page & Off-Page SEO", "Keyword Research & Analysis", "Technical SEO Audits", "Local SEO Optimization", "Backlink Building Strategy", "Competitor SEO Analysis"]
            },
            {
              title: "Social Media Mastery",
              icon: "📱",
              color: "#10b981",
              img: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80",
              items: ["Multi-Platform Management", "Content Creation & Planning", "Audience Engagement", "Influencer Collaborations", "Social Listening & Trends", "Paid Social Advertising"]
            },
            {
              title: "Paid Advertising (PPC)",
              icon: "💰",
              color: "#f59e0b",
              img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
              items: ["Google Ads (Search & Display)", "Meta Ads (FB & IG)", "Retargeting Campaigns", "High-Converting Landers", "A/B Testing & Optimization", "Budget Management & ROI"]
            },
            {
              title: "Content & Email Marketing",
              icon: "✉️",
              color: "#f43f5e",
              img: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?w=800&q=80",
              items: ["Email Automation Flows", "Newsletter Campaigns", "Blog & Article Writing", "Copywriting for Conversions", "Lead Magnet Development", "Customer Journey Mapping"]
            },
            {
              title: "Performance Analytics",
              icon: "📈",
              color: "#8b5cf6",
              img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
              items: ["Conversion Rate Optimization", "Custom Tracking Dashboards", "Behavioral Heatmaps", "ROAS & LTV Analysis", "Weekly Performance Reports", "Data-Driven Strategy Pivots"]
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
                {cat.renderVisual ? cat.renderVisual() : (
                  <>
                    <img src={cat.img} alt={cat.title} className="powerful-image" />
                    <div className="powerful-image-overlay" style={{ background: `linear-gradient(135deg, ${cat.color}22 0%, transparent 100%)` }}></div>
                  </>
                )}
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

        .seo-sketch-container {
          width: 100%;
          height: 100%;
          background: #1e293b;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }

        .seo-sketch-svg {
          width: 100%;
          height: 100%;
          max-height: 400px;
          filter: drop-shadow(0 0 10px rgba(0,0,0,0.5));
        }

        .sketch-line {
          animation: dash 5s linear infinite;
        }

        @keyframes dash {
          to { stroke-dashoffset: 50; }
        }

        @media (max-width: 992px) {
          .powerful-row, .powerful-row.reverse { 
            flex-direction: column; 
            border-left: 4px solid var(--cat-color);
            border-right: none;
          }
          .powerful-image-wrapper { width: 100%; }
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

export default DigitalMarketing;
