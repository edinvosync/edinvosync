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

      <section className="why-choose-us">
        <div className="container">
          <div className="section-header reveal-on-scroll">
            <h2 className="section-title">Why <span className="text-gradient">Choose Us</span></h2>
            <p className="section-desc">We combine industry expertise with cutting-edge technology to deliver solutions that drive real business results.</p>
          </div>

          <div className="features-grid">
            {[
              {
                title: "Innovation-First",
                desc: "Cutting-edge technology tailored for modern enterprise growth and digital transformation.",
                icon: <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />,
                color: "#3b82f6"
              },
              {
                title: "24/7 Expert Support",
                desc: "Dedicated assistance from our technical experts, ensuring your business never stops moving.",
                icon: <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />,
                color: "#10b981"
              },
              {
                title: "Enterprise Security",
                desc: "Bank-grade encryption and security protocols protecting your data at every single touchpoint.",
                icon: <><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></>,
                color: "#f59e0b"
              },
              {
                title: "Seamless Scalability",
                desc: "Flexible solutions that grow with your business, from local startups to global enterprise chains.",
                icon: <path d="M22 12h-4l-3 9L9 3l-3 9H2" />,
                color: "#8b5cf6"
              }
            ].map((feature, i) => (
              <div key={i} className="feature-card reveal-on-scroll" style={{'--feat-color': feature.color, animationDelay: `${i * 0.1}s`}}>
                <div className="feature-icon-box" style={{ background: `${feature.color}15`, color: feature.color }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {feature.icon}
                  </svg>
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
                <div className="feature-hover-line" style={{ background: feature.color }}></div>
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

      {/* ── Testimonials ── */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header reveal-on-scroll">
            <h2 className="section-title">Trusted by <span className="text-gradient">Businesses Like Yours</span></h2>
            <p className="section-desc">Don't take our word for it — hear from the business owners who've transformed their operations with EDInvosync.</p>
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
                  <div className="review-avatar" style={{ background: `linear-gradient(135deg, ${r.color}, ${r.color}aa)` }}>
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
        .feature-card:nth-child(1) { transition-delay: 0.1s; }
        .feature-card:nth-child(2) { transition-delay: 0.2s; }
        .feature-card:nth-child(3) { transition-delay: 0.3s; }
        .feature-card:nth-child(4) { transition-delay: 0.4s; }

        .step-item:nth-child(1) { transition-delay: 0.15s; }
        .step-item:nth-child(2) { transition-delay: 0.3s; }
        .step-item:nth-child(3) { transition-delay: 0.45s; }
        .step-item:nth-child(4) { transition-delay: 0.6s; }
        .step-item:nth-child(5) { transition-delay: 0.75s; }

        /* ── Why Choose Us ── */
        .why-choose-us {
          padding: 8rem 0;
          background: #eef6ff;
          position: relative;
          overflow: hidden;
        }
        .section-header {
          text-align: center;
          margin-bottom: 5rem;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
          padding: 0 1.5rem;
        }
        .section-subtitle {
          display: inline-block;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: var(--accent);
          font-size: 0.9rem;
          margin-bottom: 0.75rem;
          font-family: var(--font-heading);
        }
        .section-title {
          font-size: 3rem;
          margin-bottom: 1.5rem;
          color: #0f172a;
          line-height: 1.2;
        }
        .section-desc {
          font-size: 1.15rem;
          color: #64748b;
          line-height: 1.7;
        }
        .features-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
          max-width: 1350px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }
        .feature-card {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(10px);
          padding: 2.5rem 2rem;
          border-radius: 24px;
          border: 1px solid rgba(0,0,0,0.03);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          text-align: left;
          position: relative;
          z-index: 1;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0,0,0,0.02);
        }
        .feature-card:hover {
          transform: translateY(-12px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.06);
          background: #ffffff;
        }
        .feature-hover-line {
          position: absolute;
          bottom: 0;
          left: 0;
          height: 4px;
          width: 0;
          transition: width 0.4s ease;
        }
        .feature-card:hover .feature-hover-line {
          width: 100%;
        }
        .feature-icon-box {
          width: 60px;
          height: 60px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .feature-card:hover .feature-icon-box {
          transform: scale(1.1) rotate(-5deg);
        }
        .feature-icon-box svg {
          width: 28px;
          height: 28px;
        }
        .feature-card h3 {
          font-size: 1.35rem;
          margin-bottom: 1rem;
          color: #0f172a;
        }
        .feature-card p {
          color: #64748b;
          font-size: 1rem;
          line-height: 1.6;
        }

        @media (max-width: 1200px) {
          .features-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 768px) {
          .features-grid { grid-template-columns: 1fr; }
          .why-choose-us { padding: 4rem 1rem; }
          .section-title { font-size: 2.2rem; }
          .section-header { margin-bottom: 3rem; }
        }

        /* ── How It Works ── */
        .how-it-works {
          padding: 8rem 0;
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
          padding: 10rem 0;
          background: radial-gradient(circle at 50% 50%, #f0f7ff 0%, #eef8ff 100%);
          position: relative;
          overflow: hidden;
        }

        .testimonials-section::before {
          content: '';
          position: absolute;
          top: -200px;
          right: -200px;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(0, 132, 255, 0.06) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
        }

        .reviews-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          max-width: 1350px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        .review-card {
          background: #fff;
          border-radius: 32px;
          padding: 3rem 2.5rem;
          border: 1px solid rgba(255, 255, 255, 0.8);
          box-shadow: 
            0 10px 40px -10px rgba(0, 0, 0, 0.08),
            0 20px 25px -5px rgba(0, 0, 0, 0.02);
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .review-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.1);
          border-color: rgba(0, 132, 255, 0.2);
        }

        .review-stars {
          color: #f59e0b;
          font-size: 1.2rem;
          letter-spacing: 2px;
        }

        .review-text {
          color: #475569;
          font-size: 0.97rem;
          line-height: 1.75;
          flex: 1;
          font-style: italic;
        }

        .review-author {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding-top: 1rem;
          border-top: 1px solid #f1f5f9;
        }

        .review-avatar {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-weight: 800;
          font-size: 0.9rem;
          flex-shrink: 0;
          letter-spacing: 1px;
        }

        .review-info strong {
          display: block;
          font-size: 0.95rem;
          color: #0f172a;
          font-weight: 700;
        }

        .review-info span {
          font-size: 0.82rem;
          color: #94a3b8;
        }

        @media (max-width: 1200px) {
          .reviews-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 768px) {
          .reviews-grid { grid-template-columns: 1fr; }
          .testimonials-section { padding: 4rem 0; }
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
      `}</style>
    </div>
  );
};

export default Home;
