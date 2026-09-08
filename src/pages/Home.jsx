//Har Har Mahadev 08092026
import React, { useState, useEffect, useRef } from 'react';
import themeImg from '../assets/theme.png';
import ServiceDiagram from '../components/ServiceDiagram';
import BookingModal from '../components/BookingModal';


const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);





  const resetModal = () => setIsModalOpen(false);

  // ── Scroll Reveal Logic ──
  const observerRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      threshold: 0.05, /* Lowered threshold for earlier trigger */
      rootMargin: "0px 0px -50px 0px" /* Trigger slightly before it enters fully */
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
        }
      });
    }, options);

    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    revealElements.forEach(el => observerRef.current.observe(el));

    return () => {
      if (observerRef.current) {
        revealElements.forEach(el => observerRef.current.unobserve(el));
      }
    };
  }, []);

  return (
    <div className="home-page">
      <section className="hero-section" style={{ backgroundImage: `url(${themeImg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
        <div className="container hero-container animate-fade">
          <div className="hero-content">
            <h1 className="hero-title">
              One Powerful Solution to <span className="text-gradient">Elevate</span> <br />
              Your Business Growth
            </h1>
            <p className="hero-subtitle">
              EDInvosync provides smart POS and invoicing solutions tailored for retail businesses and supermarkets.
              Scalable, secure, and fast—helping you manage billing, inventory, and sales with ease.
            </p>
            <div className="hero-actions">
              <button className="btn btn-hero-primary" onClick={() => setIsModalOpen(true)}>Book Demo</button>
            </div>
          </div>

          <div className="hero-visual">
            <ServiceDiagram />
          </div>
        </div>
      </section>

      <section className="why-choose-us-5">
        <div className="bg-dots bg-dots-left"></div>
        <div className="bg-dots bg-dots-right"></div>
        <div className="container">
          <div className="section-header-5 reveal-on-scroll">
            <h2>Why Retailers Choose<br />
              <span className="brand-title">
                EDInvosync
              </span>
            </h2>
          </div>

          <div className="features-grid-5">
            {[
              {
                title: "Everything Connected",
                desc: "POS, inventory, e-commerce, payments and EDI work together.",
                icon: <><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></>,
                color: "#1877f2",
                bgLight: "rgba(24, 119, 242, 0.1)",
                shadow: "rgba(24, 119, 242, 0.15)"
              },
              {
                title: "Built for Retail",
                desc: "Designed around the daily challenges of retail businesses.",
                icon: <><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></>,
                color: "#16a34a",
                bgLight: "rgba(22, 163, 74, 0.1)",
                shadow: "rgba(22, 163, 74, 0.15)"
              },
              {
                title: "Real-Time Inventory",
                desc: "Know what you're selling and what's actually in stock.",
                icon: <><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></>,
                color: "#ea580c",
                bgLight: "rgba(234, 88, 12, 0.1)",
                shadow: "rgba(234, 88, 12, 0.15)"
              },
              {
                title: "Multi-Location Control",
                desc: "Manage multiple stores from one centralized system.",
                icon: <><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></>,
                color: "#7c3aed",
                bgLight: "rgba(124, 58, 237, 0.1)",
                shadow: "rgba(124, 58, 237, 0.15)"
              },
              {
                title: "Human Support",
                desc: "Real people. Real help. Whenever you need it.",
                icon: <><path d="M3 18v-6a9 9 0 0 1 18 0v6" /><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" /></>,
                color: "#0d9488",
                bgLight: "rgba(13, 148, 136, 0.1)",
                shadow: "rgba(13, 148, 136, 0.15)"
              }
            ].map((feature, i) => (
              <div key={i} className="feature-card-5 reveal-on-scroll" style={{ '--color': feature.color, '--bg-light': feature.bgLight, '--shadow': feature.shadow, animationDelay: `${i * 0.1}s` }}>
                <div className="card-5-corner"></div>
                <div className="icon-box-5" style={{ background: feature.bgLight, color: feature.color }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {feature.icon}
                  </svg>
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="how-it-works">
        <div className="container">
          <div className="section-header reveal-on-scroll">
            <h2 className="section-title">How It <span className="text-gradient">Works</span></h2>
            <p className="section-desc">Simple. Smart. Automated. No manual work. Everything is connected in one seamless ecosystem.</p>
          </div>

          <div className="process-path">
            <div className="step-item reveal-on-scroll">
              <div className="step-number">01</div>
              <div className="step-connector"></div>
              <div className="step-card">
                <h4>Order Placement</h4>
                <p>Customer places an order through your smart POS system or integrated website.</p>
              </div>
            </div>

            <div className="step-item reveal-on-scroll">
              <div className="step-number">02</div>
              <div className="step-connector"></div>
              <div className="step-card">
                <h4>Secure Payment</h4>
                <p>Payments are processed instantly and securely through bank-grade encrypted channels.</p>
              </div>
            </div>

            <div className="step-item reveal-on-scroll">
              <div className="step-number">03</div>
              <div className="step-connector"></div>
              <div className="step-card">
                <h4>Inventory Sync</h4>
                <p>Your stock levels are updated automatically across all platforms in real-time.</p>
              </div>
            </div>

            <div className="step-item reveal-on-scroll">
              <div className="step-number">04</div>
              <div className="step-connector"></div>
              <div className="step-card">
                <h4>Growth Trigger</h4>
                <p>Marketing campaigns and loyalty rewards are automatically triggered for the customer.</p>
              </div>
            </div>

            <div className="step-item reveal-on-scroll">
              <div className="step-number">05</div>
              <div className="step-card">
                <h4>EDI Fulfillment</h4>
                <p>EDI automatically sends orders to your suppliers to restock and fulfill the demand.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Industries We Serve ── */}
      <section className="industries-section">
        <div className="industries-blob-left"></div>
        <div className="industries-blob-right"></div>
        <div className="container">
          <div className="industries-header reveal-on-scroll">
            <div className="badge-pill">
              <span className="badge-line"></span>
              <span className="badge-text">BUILT FOR YOUR BUSINESS</span>
              <span className="badge-line"></span>
            </div>
            <h2 className="industries-title">
              <svg className="spark-left" viewBox="0 0 24 24" width="30" height="30"><path d="M12 2v6M12 16v6M4.93 4.93l4.24 4.24M14.83 14.83l4.24 4.24M2 12h6M16 12h6" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" /></svg>
              <span className="title-text">Industries <span className="brand-title" style={{ paddingBottom: 0 }}>We Serve</span></span>
              <svg className="spark-right" viewBox="0 0 24 24" width="30" height="30"><path d="M12 2v6M12 16v6M4.93 4.93l4.24 4.24M14.83 14.83l4.24 4.24M2 12h6M16 12h6" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" /></svg>
            </h2>
            <p className="industries-desc">
              No matter what you sell, EDInvosync has the tools to help you run your business smarter, faster and more efficiently.
            </p>
          </div>

          <div className="industries-grid">
            {[
              {
                id: "grocery",
                title: "Grocery Stores",
                desc: "Inventory, barcode scanning, purchasing and reporting.",
                checks: ["Real-time inventory tracking", "Barcode scanning", "Quick purchasing", "Detailed reporting"],
                icon: <><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></>,
                color: "#16a34a",
                bgLight: "#dcfce7",
                border: "#bbf7d0"
              },
              {
                id: "convenience",
                title: "Convenience Stores",
                desc: "Fast checkout, inventory and multi-location management.",
                checks: ["Speedy checkout", "Inventory control", "Multi-location support", "Sales & performance reports"],
                icon: <><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><path d="M9 22V12h6v10" /></>,
                color: "#2563eb",
                bgLight: "#dbeafe",
                border: "#bfdbfe"
              },
              {
                id: "liquor",
                title: "Liquor Stores",
                desc: "Age verification, inventory management and reporting.",
                checks: ["Age verification", "Stock tracking", "Compliance support", "Sales & analytics"],
                icon: <><rect x="8" y="10" width="8" height="12" rx="2" /><path d="M10 2h4v4h-4zM10 6l-2 4h8l-2-4" /></>,
                color: "#7c3aed",
                bgLight: "#f3e8ff",
                border: "#e9d5ff"
              },
              {
                id: "smoke",
                title: "Smoke Shops",
                desc: "Product management, barcode scanning and compliance-oriented workflows.",
                checks: ["Age verification", "Inventory tracking", "Barcode scanning", "Compliance support"],
                icon: <><path d="M18 20V10M12 20V4M6 20v-6" /><path d="M10 4c0-2-2-2-2-2s-2 0-2 2 2 2 2 2-2 2-2 2" /><path d="M16 10c0-2-2-2-2-2s-2 0-2 2 2 2 2 2-2 2-2 2" /></>,
                color: "#f97316",
                bgLight: "#ffedd5",
                border: "#fed7aa"
              },
              {
                id: "retail",
                title: "Retail Stores",
                desc: "POS, inventory, customers and analytics.",
                checks: ["Point of Sale (POS)", "Inventory management", "Customer management", "Business analytics"],
                icon: <><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" /><path d="M3 6h18" /><path d="M16 10a4 4 0 01-8 0" /></>,
                color: "#e11d48",
                bgLight: "#ffe4e6",
                border: "#fecdd3"
              },
              {
                id: "multiloc",
                title: "Multi-Location Businesses",
                desc: "Centralized management across multiple stores.",
                checks: ["Single dashboard", "Real-time sync", "Store-wise reporting", "Better control & visibility"],
                icon: <><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></>,
                color: "#0d9488",
                bgLight: "#ccfbf1",
                border: "#99f6e4"
              }
            ].map((ind, i) => (
              <div key={i} className="industry-card reveal-on-scroll" style={{ '--ind-color': ind.color, '--ind-bg': ind.bgLight, '--ind-border': ind.border, animationDelay: `${i * 0.1}s` }}>
                <div className="ind-bg-shape">
                  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="var(--ind-bg)" d="M45,-75C58.3,-66.6,69.1,-52.8,76.5,-37.5C83.9,-22.2,87.9,-5.4,85.1,10.6C82.3,26.6,72.7,41.8,60.1,53.2C47.5,64.6,31.9,72.2,15.2,76.3C-1.5,80.4,-19.3,81.1,-34.5,75C-49.7,68.9,-62.3,56.1,-72.1,41.4C-81.9,26.7,-88.9,10.1,-87.8,-5.9C-86.7,-21.9,-77.5,-37.3,-65.4,-48.6C-53.3,-59.9,-38.3,-67.1,-23.4,-72.2C-8.5,-77.3,6.3,-80.3,21.8,-79.1C37.3,-77.9,45,-75,45,-75Z" transform="translate(100 100) scale(1.1)" />
                  </svg>
                </div>
                <div className="ind-card-content">
                  <div className="ind-card-header">
                    <div className="ind-icon-box">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        {ind.icon}
                      </svg>
                    </div>
                    <h3>{ind.title}</h3>
                  </div>
                  <p className="ind-desc">{ind.desc}</p>
                  <ul className="ind-checks">
                    {ind.checks.map((chk, idx) => (
                      <li key={idx}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                        <span>{chk}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header-left reveal-on-scroll">
            <h2 className="section-title-left">Trusted by <span className="text-gradient-blue">Businesses Like Yours</span></h2>
            <p className="section-desc-left">Don't take our word for it — hear from the business owners who've transformed their operations with EDInvosync.</p>
          </div>

          <div className="reviews-grid">
            {[
              {
                name: "Rajesh Patel",
                role: "Owner, Patel Liquor Store",
                avatar: "RP",
                color: "#3b82f6",
                stars: 5,
                review: "EDInvosync completely transformed how we run our store. The inventory management is flawless — no more manual stock counts. Our checkout speed improved by 40% and the analytics dashboard helps me make smarter decisions every day."
              },
              {
                name: "Sarah Johnson",
                role: "Manager, QuickMart Convenience",
                avatar: "SJ",
                color: "#10b981",
                stars: 5,
                review: "We switched from a legacy POS and the difference is night and day. The age verification feature is incredibly useful, and our staff learned the system in under an hour. Customer support is always available when we need them."
              },
              {
                name: "Michael Torres",
                role: "CEO, Torres Supermarkets",
                avatar: "MT",
                color: "#f59e0b",
                stars: 5,
                review: "Running 3 supermarket locations used to be a nightmare. Now with EDInvosync's multi-location sync, I can see everything from one dashboard in real time. The loyalty program has boosted our repeat customer rate by over 30%."
              },
              {
                name: "Priya Sharma",
                role: "Director, FreshMart Grocery",
                avatar: "PS",
                color: "#8b5cf6",
                stars: 5,
                review: "The web development team built us an incredible online ordering system that integrates seamlessly with our POS. Sales increased within the first month. I highly recommend EDInvosync to any retail business owner."
              },
              {
                name: "James Williams",
                role: "Owner, Cloud Nine Smoke Shop",
                avatar: "JW",
                color: "#f43f5e",
                stars: 5,
                review: "Managing tobacco and vape inventory is complex, but EDInvosync handles it perfectly. The barcode scanning and label generation save us hours every week. The credit card processing rates are the best we've found."
              },
              {
                name: "Anita Desai",
                role: "Founder, Desai Fashion Boutique",
                avatar: "AD",
                color: "#06b6d4",
                stars: 5,
                review: "We were skeptical at first, but the demo convinced us immediately. The digital marketing campaigns EDInvosync ran for us brought in a wave of new customers. The reporting tools are detailed and easy to understand."
              }
            ].map((r, i) => (
              <div key={i} className="review-card reveal-on-scroll" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="review-stars">
                  {'★'.repeat(r.stars)}
                </div>
                <p className="review-text">"{r.review}"</p>
                <div className="review-author">
                  <div className="review-avatar" style={{ background: r.color }}>
                    {r.avatar}
                  </div>
                  <div className="review-info">
                    <strong>{r.name}</strong>
                    <span>{r.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Booking Modal ── */}
      {isModalOpen && <BookingModal onClose={resetModal} />}

      <style>{`
        .home-page {
          padding-top: 100px;
          position: relative;
          background-color: #ffffff;
          min-height: 100vh;
          overflow-x: hidden;
        }

        /* ── Scroll Reveal ── */
        .reveal-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .reveal-visible {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }

        /* Staggered delays for better effect */
        .feature-card-5:nth-child(1) { transition-delay: 0.1s; }
        .feature-card-5:nth-child(2) { transition-delay: 0.2s; }
        .feature-card-5:nth-child(3) { transition-delay: 0.3s; }
        .feature-card-5:nth-child(4) { transition-delay: 0.4s; }
        .feature-card-5:nth-child(5) { transition-delay: 0.5s; }

        .step-item:nth-child(1) { transition-delay: 0.15s; }
        .step-item:nth-child(2) { transition-delay: 0.3s; }
        .step-item:nth-child(3) { transition-delay: 0.45s; }
        .step-item:nth-child(4) { transition-delay: 0.6s; }
        .step-item:nth-child(5) { transition-delay: 0.75s; }

        /* ── Why Choose Us ── */
        .why-choose-us-5 {
          padding: 8rem 0;
          background: linear-gradient(135deg, #f4faff 0%, #f4fdf8 100%);
          position: relative;
          overflow: hidden;
        }
        .why-choose-us-5::before {
          content: '';
          position: absolute;
          top: -150px;
          left: -100px;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(24, 119, 242, 0.08) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
        }
        .why-choose-us-5::after {
          content: '';
          position: absolute;
          bottom: -150px;
          right: -100px;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(16, 185, 129, 0.08) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
        }
        .bg-dots {
          position: absolute;
          width: 120px;
          height: 120px;
          background-image: radial-gradient(#cbd5e1 2px, transparent 2px);
          background-size: 20px 20px;
          opacity: 0.5;
          pointer-events: none;
        }
        .bg-dots-left { top: 15%; left: 5%; }
        .bg-dots-right { top: 15%; right: 5%; }

        .section-header-5 {
          text-align: center;
          margin-bottom: 5rem;
          position: relative;
          z-index: 2;
          padding: 0 1.5rem;
        }
        .section-header-5 h2 {
          font-size: 2.2rem;
          color: #0f172a;
          font-weight: 800;
          line-height: 1.2;
        }
        .brand-title {
          position: relative;
          display: inline-block;
          background: linear-gradient(90deg, #1877f2, #10b981);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          padding-bottom: 0.8rem;
        }


        .features-grid-5 {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 2rem;
          max-width: 1250px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
          padding: 0 1.5rem;
        }

        .feature-card-5 {
          width: calc(33.333% - 1.34rem);
          min-width: 320px;
          background: #ffffff;
          border-radius: 16px;
          padding: 2.5rem;
          border-left: 8px solid var(--color);
          box-shadow: -8px 12px 25px var(--shadow), 0 5px 15px rgba(0,0,0,0.03);
          text-align: left;
          position: relative;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .feature-card-5:hover {
          transform: translateY(-8px);
          box-shadow: -12px 18px 35px var(--shadow), 0 8px 20px rgba(0,0,0,0.05);
        }

        .card-5-corner {
          position: absolute;
          bottom: -40px;
          right: -40px;
          width: 150px;
          height: 150px;
          background: var(--bg-light);
          border-radius: 50%;
          pointer-events: none;
        }

        .icon-box-5 {
          width: 64px;
          height: 64px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
        }
        .icon-box-5 svg {
          width: 32px;
          height: 32px;
        }

        .feature-card-5 h3 {
          font-size: 1.4rem;
          font-weight: 800;
          color: #1e293b;
          margin-bottom: 1rem;
          position: relative;
          z-index: 2;
        }
        .feature-card-5 p {
          font-size: 1.05rem;
          color: #64748b;
          line-height: 1.6;
          position: relative;
          z-index: 2;
        }

        @media (max-width: 1024px) {
          .feature-card-5 {
            width: calc(50% - 1rem);
          }
        }
        @media (max-width: 768px) {
          .feature-card-5 {
            width: 100%;
          }
          .section-header-5 h2 {
            font-size: 2.5rem;
          }
          .bg-dots {
            display: none;
          }
          .why-choose-us-5 {
            padding: 4rem 0;
          }
        }

        /* ── How It Works ── */
        .section-header {
          text-align: center;
          margin-bottom: 4rem;
          max-width: 750px;
          margin-left: auto;
          margin-right: auto;
          padding: 0 1.5rem;
        }
        .section-title {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          color: #0f172a;
          line-height: 1.2;
          font-weight: 800;
        }
        .section-desc {
          font-size: 1.15rem;
          color: #64748b;
          line-height: 1.7;
        }
        .how-it-works {
          padding: 4rem 0 8rem 0;
          background: linear-gradient(135deg, #e0f2fe 0%, #dcfce7 100%);
        }
        .process-path {
          display: flex;
          justify-content: space-between;
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          padding: 0 1.5rem;
        }
        .step-item {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          z-index: 1;
        }
        .step-number {
          width: 50px;
          height: 50px;
          background: #fff;
          border: 2px solid #e2e8f0;
          color: var(--accent);
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          font-weight: 800;
          font-size: 1.1rem;
          margin-bottom: 1.5rem;
          box-shadow: 0 4px 15px rgba(0,0,0,0.05);
          transition: 0.3s;
        }
        .step-item:hover .step-number {
          background: var(--accent);
          color: #fff;
          border-color: var(--accent);
          transform: scale(1.1);
          box-shadow: 0 0 20px var(--accent-glow);
        }
        .step-connector {
          position: absolute;
          top: 25px;
          left: 50%;
          width: 100%;
          height: 2px;
          background: #e2e8f0;
          z-index: -1;
        }
        .step-item:hover .step-connector {
          background: var(--accent);
        }
        .step-card {
          text-align: center;
          padding: 0 0.75rem;
        }
        .step-card h4 {
          font-size: 1.15rem;
          margin-bottom: 0.75rem;
          color: #0f172a;
        }
        .step-card p {
          color: #64748b;
          font-size: 0.9rem;
          line-height: 1.6;
        }

        @media (max-width: 991px) {
          .process-path {
            flex-direction: column;
            gap: 4rem;
          }
          .step-connector {
            top: 60px;
            left: 30px;
            width: 2px;
            height: 100%;
          }
          .step-item {
            align-items: flex-start;
            flex-direction: row;
            gap: 2rem;
          }
          .step-card {
            text-align: left;
            padding: 0;
          }
        }

        /* ── Testimonials ── */
        .testimonials-section {
          padding: 8rem 0;
          background: linear-gradient(180deg, #f0f9ff 0%, #e0f2fe 100%);
          position: relative;
          overflow: hidden;
        }

        .section-header-left {
          text-align: center;
          margin-bottom: 3.5rem;
          max-width: 900px;
          margin-left: auto;
          margin-right: auto;
          padding: 0 1.5rem;
        }

        .section-title-left {
          font-size: 2.2rem;
          margin-bottom: 0.5rem;
          color: #0f172a;
          line-height: 1.2;
          font-weight: 800;
        }

        .text-gradient-blue {
          background: linear-gradient(90deg, #3b82f6, #06b6d4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .section-desc-left {
          font-size: 1rem;
          color: #475569;
          line-height: 1.6;
        }

        .reviews-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          max-width: 1250px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        .review-card {
          background: #fff;
          border-radius: 20px;
          padding: 2.5rem 2rem;
          border: 1px solid rgba(255, 255, 255, 0.8);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.04);
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .review-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 45px rgba(0, 0, 0, 0.08);
        }

        .review-stars {
          color: #f59e0b;
          font-size: 1.25rem;
          letter-spacing: 2px;
        }

        .review-text {
          color: #64748b;
          font-size: 0.95rem;
          line-height: 1.7;
          flex: 1;
          font-style: italic;
        }

        .review-author {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding-top: 1.5rem;
          border-top: 1px solid #f1f5f9;
        }

        .review-avatar {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-weight: 700;
          font-size: 0.95rem;
          flex-shrink: 0;
        }

        .review-info {
          display: flex;
          flex-direction: column;
        }

        .review-info strong {
          display: block;
          font-size: 0.95rem;
          color: #0f172a;
          font-weight: 700;
        }

        .review-info span {
          font-size: 0.85rem;
          color: #94a3b8;
        }

        @media (max-width: 1024px) {
          .reviews-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 768px) {
          .reviews-grid { grid-template-columns: 1fr; }
          .testimonials-section { padding: 4rem 0; }
          .section-header-left { text-align: center; }
        }

        .hero-section {
          min-height: 95vh;
          display: flex;
          align-items: center;
          position: relative;
          z-index: 1;
          overflow: hidden;
        }

        .hero-section::before {
          content: '';
          position: absolute;
          top: -10%;
          right: -10%;
          width: 60%;
          height: 120%;
          background: linear-gradient(135deg, rgba(0, 132, 255, 0.03) 0%, rgba(0, 242, 254, 0.02) 100%);
          border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
          filter: blur(80px);
          z-index: -1;
          animation: blobFloat 20s infinite alternate;
        }

        @keyframes blobFloat {
          from { transform: translate(0, 0) rotate(0deg); }
          to { transform: translate(-50px, 50px) rotate(10deg); }
        }


        .hero-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          max-width: 1350px;
          margin: 0 auto;
          padding: 0 1.5rem;
          width: 100%; /* Ensure it doesn't exceed parent */
          box-sizing: border-box;
        }

        .hero-visual {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .hero-title {
          font-size: clamp(2.2rem, 10vw, 4.5rem);
          line-height: 1.1;
          margin-bottom: 1rem;
          color: #0f172a;
          max-width: 900px;
          text-shadow: 0 4px 20px rgba(255, 255, 255, 0.8);
          overflow-wrap: break-word;
          word-wrap: break-word;
          word-break: normal;
        }

        .text-gradient {
          background: linear-gradient(90deg, var(--secondary), var(--accent));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          filter: drop-shadow(0 2px 10px rgba(255,255,255,0.5));
        }

        .hero-subtitle {
          font-size: clamp(1.1rem, 3vw, 1.35rem);
          color: var(--text-muted);
          max-width: 600px;
          margin-bottom: 1rem;
          line-height: 1.6;
        }

        .hero-actions {
          display: flex;
          gap: 1.5rem;
        }

        .btn-hero-primary {
          background: linear-gradient(135deg, var(--secondary), var(--accent));
          color: white;
          padding: 1rem 2rem;
          border-radius: 12px;
          font-weight: 600;
          font-size: 1.1rem;
          border: none;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          box-shadow: 0 4px 15px rgba(0, 132, 255, 0.2);
        }

        .btn-hero-primary:hover {
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 10px 25px rgba(0, 132, 255, 0.4);
        }

        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2000;
          padding: 20px;
        }

        .modal-container {
          background: #fff;
          width: 100%;
          max-width: 500px;
          border-radius: 30px;
          padding: 40px;
          position: relative;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2);
        }

        .reveal-modal {
          animation: modalAppear 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        @keyframes modalAppear {
          from { opacity: 0; transform: translateY(30px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        .modal-close {
          position: absolute;
          top: 20px;
          right: 20px;
          background: #f1f5f9;
          border: none;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          font-size: 24px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: 0.3s;
        }

        .modal-close:hover { background: #e2e8f0; color: #dc2626; }

        .modal-progress {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 30px;
        }

        .progress-step {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #f1f5f9;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          color: #94a3b8;
          transition: 0.3s;
        }

        .progress-step.active {
          background: var(--accent);
          color: #fff;
        }

        .progress-line {
          width: 40px;
          height: 2px;
          background: #f1f5f9;
          margin: 0 10px;
        }

        .modal-step h2 { font-size: 1.8rem; margin-bottom: 10px; color: #0f172a; }
        .modal-step p { color: #64748b; margin-bottom: 25px; }

        .form-group { margin-bottom: 20px; text-align: left; }
        .form-group label { display: block; margin-bottom: 8px; font-weight: 600; color: #334155; }
        .form-group input,
        .form-select { 
          width: 100%; padding: 14px; background: #f8fafc; 
          border: 1px solid #e2e8f0; border-radius: 12px; font-size: 1rem;
          appearance: none;
        }

        .form-select {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23475569'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 1rem center;
          background-size: 1.2em;
          padding-right: 2.5rem;
          cursor: pointer;
        }

        .form-select:focus {
          outline: none;
          border-color: #a51f33;
          box-shadow: 0 0 0 3px rgba(165, 31, 51, 0.1);
        }

        .time-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 10px;
          margin-bottom: 25px;
          max-height: 300px;
          overflow-y: auto;
          padding-right: 5px;
        }

        .time-btn {
          padding: 10px 5px;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 10px;
          font-weight: 600;
          cursor: pointer;
          transition: 0.3s;
          font-size: 0.85rem;
        }

        .time-btn:hover { border-color: var(--accent); color: var(--accent); }
        .time-btn.selected { background: var(--accent); color: #fff; border-color: var(--accent); }

        .modal-actions { display: flex; gap: 15px; margin-top: 25px; }
        .btn { padding: 12px 24px; border-radius: 12px; font-weight: 600; cursor: pointer; transition: 0.3s; border: none; }
        .btn-primary { background: var(--accent); color: #fff; flex: 1; }
        .btn-primary:disabled { opacity: 0.5; cursor: not-allowed; }
        .btn-outline { background: #fff; border: 1px solid #e2e8f0; color: #64748b; flex: 1; }
        .success-btn { width: 100%; margin-top: 20px; }

        .success-step { text-align: center; }
        .success-icon {
          width: 80px;
          height: 80px;
          background: #22c55e;
          color: #fff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 40px;
          margin: 0 auto 20px;
        }

        @media (max-width: 991px) {
          .hero-container {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 2.5rem;
            padding: 0 1.25rem;
            width: 100%;
            display: block; /* Switch to block to prevent flex-centering overflow */
          }
          .hero-content {
            display: block;
            width: 100%;
            padding: 0;
            text-align: center;
          }
          .hero-title {
            font-size: clamp(1.8rem, 10vw, 3rem);
            margin: 0 auto 1.5rem;
            width: 100%;
            word-wrap: break-word;
          }
          .hero-subtitle {
            font-size: 1.05rem;
            margin: 0 auto 2.5rem;
            padding: 0;
            width: 100%;
          }
          .hero-actions {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            gap: 12px;
          }
          .hero-actions .btn {
            width: 100%;
            max-width: 320px; /* Prevent button from being too wide on tablets */
          }
          .time-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        /* ── Industries We Serve ── */
        .industries-section {
          padding: 8rem 0;
          background: #f8fafc;
          position: relative;
          overflow: hidden;
        }
        .industries-blob-left {
          position: absolute;
          top: -10%;
          left: -10%;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(56, 189, 248, 0.4) 0%, rgba(56, 189, 248, 0) 70%);
          z-index: 0;
        }
        .industries-blob-right {
          position: absolute;
          top: -10%;
          right: -10%;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(74, 222, 128, 0.3) 0%, rgba(74, 222, 128, 0) 70%);
          z-index: 0;
        }
        .industries-section .container {
          position: relative;
          z-index: 1;
        }
        .industries-header {
          text-align: center;
          margin-bottom: 5rem;
        }
        .badge-pill {
          display: inline-flex;
          align-items: center;
          gap: 1rem;
          background: #e0f2fe;
          padding: 0.5rem 1.5rem;
          border-radius: 50px;
          margin-bottom: 1.5rem;
        }
        .badge-line {
          width: 20px;
          height: 2px;
          background: #38bdf8;
        }
        .badge-text {
          color: #0284c7;
          font-weight: 700;
          font-size: 0.85rem;
          letter-spacing: 1px;
        }
        .industries-title {
          font-size: 3.5rem;
          color: #0f172a;
          font-weight: 800;
          text-align: center;
          margin-bottom: 1.5rem;
        }
        .industries-title svg {
          display: inline-block;
          vertical-align: middle;
          margin: 0 10px;
        }
        .industries-title .title-text {
          display: inline-block;
        }
        .spark-left, .spark-right {
          transform: translateY(-5px);
        }
        .industries-desc {
          font-size: 1.15rem;
          color: #475569;
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .industries-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          margin-bottom: 3rem;
          max-width: 1250px;
          margin-left: auto;
          margin-right: auto;
        }

        .industry-card {
          background: #ffffff;
          border-radius: 20px;
          padding: 2.5rem;
          position: relative;
          overflow: hidden;
          box-shadow: 0 8px 25px rgba(0,0,0,0.02);
          border: 1px solid var(--ind-border);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          display: flex;
          flex-direction: column;
        }
        .industry-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.08);
        }
        .ind-bg-shape {
          position: absolute;
          bottom: -50px;
          right: -50px;
          width: 250px;
          height: 250px;
          opacity: 0.8;
          z-index: 0;
          pointer-events: none;
        }
        .ind-card-content {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        .ind-card-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.25rem;
        }
        .ind-icon-box {
          width: 55px;
          height: 55px;
          border-radius: 50%;
          background: var(--ind-color);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          flex-shrink: 0;
        }
        .ind-icon-box svg {
          width: 26px;
          height: 26px;
        }
        .ind-card-header h3 {
          font-size: 1.4rem;
          color: #0f172a;
          font-weight: 800;
          line-height: 1.2;
        }
        .ind-desc {
          color: #475569;
          font-size: 0.95rem;
          margin-bottom: 1.5rem;
          line-height: 1.5;
        }
        .ind-checks {
          list-style: none;
          padding: 0;
          margin: 0 0 2rem 0;
          flex-grow: 1;
        }
        .ind-checks li {
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          margin-bottom: 0.75rem;
          color: #334155;
          font-size: 0.95rem;
          font-weight: 600;
        }
        .ind-checks li svg {
          width: 18px;
          height: 18px;
          flex-shrink: 0;
          margin-top: 2px;
        }

        @media (max-width: 1024px) {
          .industries-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 768px) {
          .industries-grid {
            grid-template-columns: 1fr;
          }
          .industries-title {
            font-size: 2.2rem;
          }
          .industries-title svg {
            width: 20px;
            height: 20px;
            margin: 0 5px;
          }
          .industries-header {
            margin-bottom: 3rem;
          }
          .badge-line {
            display: none;
          }
          .badge-pill {
            padding: 0.5rem 1rem;
            text-align: center;
            max-width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
//Test

