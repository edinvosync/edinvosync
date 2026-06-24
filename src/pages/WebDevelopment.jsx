import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import uiUxImg from '../assets/UI UX.png';
import ecomerceImg from '../assets/ecomerce.png';
import BookingModal from '../components/BookingModal';



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

const WebDevelopment = () => {
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
      <section className="pos-hero-video">
        <video
          className="pos-hero-video__video"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videos/web.mp4" type="video/mp4" />
        </video>

        <div className="pos-hero-video__overlay" />

        <div className="pos-hero-video__content">
          <span className="pos-hero-video__badge pos-hero-anim-1">Digital Excellence</span>

          <h1 className="pos-hero-video__headline pos-hero-anim-2">
            <span className="pos-hero-video__headline--black">Modern</span>{' '}
            Web Development &amp; Design
          </h1>

          <p className="pos-hero-video__desc pos-hero-anim-3">
            We build fast, scalable, and visually stunning web applications that drive engagement and elevate your brand's digital presence.
          </p>

          <div className="pos-hero-video__cta pos-hero-anim-4">
            <button className="pos-hero-video__btn-primary" onClick={() => setIsModalOpen(true)}>
              Book Demo
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '8px' }}>
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </section>

      <section id="features" className="features-section container">
        {/* Background Decorative Circles */}
        <div className="features-bg-circles">
          <svg width="300" height="300" viewBox="0 0 300 300" fill="none">
            <circle cx="200" cy="100" r="90" stroke="rgba(59, 130, 246, 0.03)" strokeWidth="1" />
            <circle cx="200" cy="100" r="60" stroke="rgba(59, 130, 246, 0.03)" strokeWidth="1" />
            <circle cx="200" cy="100" r="30" stroke="rgba(59, 130, 246, 0.03)" strokeWidth="1" />
          </svg>
        </div>

        {/* Background Decorative Dots */}
        <div className="features-bg-dots">
          <svg width="82" height="114" viewBox="0 0 82 114" fill="rgba(59, 130, 246, 0.12)">
            <circle cx="10" cy="10" r="2" /><circle cx="34" cy="10" r="2" /><circle cx="58" cy="10" r="2" /><circle cx="82" cy="10" r="2" />
            <circle cx="10" cy="34" r="2" /><circle cx="34" cy="34" r="2" /><circle cx="58" cy="34" r="2" /><circle cx="82" cy="34" r="2" />
            <circle cx="10" cy="58" r="2" /><circle cx="34" cy="58" r="2" /><circle cx="58" cy="58" r="2" /><circle cx="82" cy="58" r="2" />
            <circle cx="10" cy="82" r="2" /><circle cx="34" cy="82" r="2" /><circle cx="58" cy="82" r="2" /><circle cx="82" cy="82" r="2" />
            <circle cx="10" cy="106" r="2" /><circle cx="34" cy="106" r="2" /><circle cx="58" cy="106" r="2" /><circle cx="82" cy="106" r="2" />
          </svg>
        </div>

        <div className="features-section-header">
          <div className="features-badge">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '6px', verticalAlign: 'middle', marginTop: '-2px' }}>
              <path d="M12 2l2.4 7.6L22 12l-7.6 2.4L12 22l-2.4-7.6L2 12l7.6-2.4L12 2z" />
            </svg>
            <span>VALUE WE DELIVER</span>
          </div>
          <h2 className="features-title">
            Why Choose <span className="features-title-accent">Our Web Services?</span>
          </h2>
          <p className="features-subtitle">
            We deliver comprehensive digital solutions that combine beautiful design with robust engineering to help your business grow online.
          </p>
          <div className="features-header-line"></div>
        </div>

        <div className="features-cards-grid">
          {[
            {
              title: "Lightning Fast",
              desc: "Optimized for speed and performance, ensuring an incredible user experience and higher conversions.",
              color: "#3b82f6",
              fadeColor: "rgba(59, 130, 246, 0.05)",
              footerText: "Faster Load Times",
              icon: (
                <svg viewBox="0 0 24 24" className="feat-icon-svg" fill="currentColor">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              )
            },
            {
              title: "Responsive Design",
              desc: "Flawless experiences across all devices—from desktop monitors to the smallest smartphones.",
              color: "#0d9488",
              fadeColor: "rgba(13, 148, 136, 0.05)",
              footerText: "All Devices. Perfect Fit.",
              icon: (
                <svg viewBox="0 0 24 24" className="feat-icon-svg" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="12" height="9" rx="1.5" />
                  <path d="M6 12v3M4 15h6" />
                  <rect x="15" y="7" width="6" height="11" rx="1" fill="currentColor" />
                </svg>
              )
            },
            {
              title: "SEO Optimized",
              desc: "Built with best practices to ensure your site ranks well on search engines and drives organic traffic.",
              color: "#8b5cf6",
              fadeColor: "rgba(139, 92, 246, 0.05)",
              footerText: "Higher Rankings",
              icon: (
                <svg viewBox="0 0 24 24" className="feat-icon-svg" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="10" cy="10" r="6" />
                  <line x1="21" y1="21" x2="15" y2="15" />
                  <path d="M7 11l2-2 2 2 3-3" />
                </svg>
              )
            },
            {
              title: "Secure Architecture",
              desc: "Enterprise-grade security protocols to keep your data and your users' information safe.",
              color: "#ea580c",
              fadeColor: "rgba(234, 88, 12, 0.05)",
              footerText: "Your Security. Our Priority.",
              icon: (
                <svg viewBox="0 0 24 24" className="feat-icon-svg" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="M9 11l2 2 4-4" />
                </svg>
              )
            }
          ].map((f, i) => (
            <div
              key={i}
              className="feature-card-new reveal"
              style={{
                '--delay': `${i * 0.1}s`,
                '--accent-color': f.color,
                '--accent-fade': f.fadeColor
              }}
            >
              <div className="feature-card-header-wrapper">
                <svg className="icon-bg-decor" viewBox="0 0 140 100" fill="none">
                  <rect x="15" y="25" width="75" height="8" rx="4" fill={f.color} opacity="0.04" />
                  <rect x="35" y="42" width="85" height="10" rx="5" fill={f.color} opacity="0.07" />
                  <rect x="25" y="60" width="65" height="8" rx="4" fill={f.color} opacity="0.05" />
                </svg>
                <div className="feature-card-icon-container" style={{ backgroundColor: f.color, boxShadow: `0 10px 25px -5px ${f.color}66` }}>
                  {f.icon}
                </div>
              </div>

              <h3 className="feature-card-title">{f.title}</h3>
              <p className="feature-card-desc">{f.desc}</p>

              <div className="feature-card-footer" style={{ '--footer-bg': f.fadeColor, '--footer-text-color': f.color }}>
                <svg className="footer-wave-svg" viewBox="0 0 120 28" preserveAspectRatio="none">
                  <path d="M0 15 C 30 28, 90 2, 120 15 L 120 28 L 0 28 Z" fill="var(--footer-bg)" />
                </svg>
                <div className="footer-content">
                  <svg className="footer-check" viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="12" cy="12" r="10" fill="currentColor" />
                    <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" />
                  </svg>
                  <span>{f.footerText}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="process-section container">
        {/* Background Decorative Circles */}
        <div className="process-bg-circles">
          <svg width="250" height="250" viewBox="0 0 250 250" fill="none">
            <circle cx="125" cy="125" r="110" stroke="rgba(59, 130, 246, 0.03)" strokeWidth="1" />
            <circle cx="125" cy="125" r="80" stroke="rgba(59, 130, 246, 0.03)" strokeWidth="1" />
            <circle cx="125" cy="125" r="50" stroke="rgba(59, 130, 246, 0.03)" strokeWidth="1" />
          </svg>
        </div>

        {/* Background Decorative Dots */}
        <div className="process-bg-dots">
          <svg width="82" height="114" viewBox="0 0 82 114" fill="rgba(59, 130, 246, 0.08)">
            <circle cx="10" cy="10" r="2" /><circle cx="34" cy="10" r="2" /><circle cx="58" cy="10" r="2" /><circle cx="82" cy="10" r="2" />
            <circle cx="10" cy="34" r="2" /><circle cx="34" cy="34" r="2" /><circle cx="58" cy="34" r="2" /><circle cx="82" cy="34" r="2" />
            <circle cx="10" cy="58" r="2" /><circle cx="34" cy="58" r="2" /><circle cx="58" cy="58" r="2" /><circle cx="82" cy="58" r="2" />
            <circle cx="10" cy="82" r="2" /><circle cx="34" cy="82" r="2" /><circle cx="58" cy="82" r="2" /><circle cx="82" cy="82" r="2" />
          </svg>
        </div>

        <div className="process-section-header reveal">
          <div className="process-badge">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '6px', verticalAlign: 'middle', marginTop: '-2px' }}>
              <path d="M12 2l2.4 7.6L22 12l-7.6 2.4L12 22l-2.4-7.6L2 12l7.6-2.4L12 2z" />
            </svg>
            <span>OUR DEVELOPMENT PROCESS</span>
          </div>
          <h2 className="process-title">
            From Idea to Impact, <span className="process-title-accent">We Build It Right</span>
          </h2>
          <p className="process-subtitle">
            A proven process that ensures transparency, high quality, and on-time delivery of your project.
          </p>
          <div className="process-header-line"></div>
        </div>

        <div className="process-timeline-container reveal">
          {/* SVG Wave Line */}
          <svg className="process-svg-bg" viewBox="0 0 1200 280" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#2563eb" />
                <stop offset="20%" stopColor="#10b981" />
                <stop offset="40%" stopColor="#8b5cf6" />
                <stop offset="60%" stopColor="#f97316" />
                <stop offset="80%" stopColor="#06b6d4" />
                <stop offset="100%" stopColor="#1d4ed8" />
              </linearGradient>
            </defs>
            <path d="M 0 145 C 50 145, 50 180, 100 180 C 150 180, 250 110, 300 110 C 350 110, 450 180, 500 180 C 550 180, 650 110, 700 110 C 750 110, 850 180, 900 180 C 950 180, 1050 110, 1100 110 C 1150 110, 1150 145, 1200 145" stroke="url(#wave-gradient)" strokeWidth="3" />
          </svg>

          {/* Stepped Arrows */}
          {[1, 2, 3, 4, 5].map((step) => {
            const leftPositions = ["16.66%", "33.33%", "50%", "66.66%", "83.33%"];
            return (
              <div
                key={step}
                className="process-arrow"
                style={{ left: leftPositions[step - 1] }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </div>
            );
          })}

          <div className="process-nodes">
            {[
              {
                num: "01",
                title: "Discovery & Planning",
                desc: "We analyze your goals, target audience, and requirements to create a clear project roadmap.",
                color: "#2563eb",
                shadowColor: "rgba(37, 99, 235, 0.15)",
                left: "8.33%",
                isOdd: true,
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    <line x1="11" y1="8" x2="11" y2="14" />
                    <line x1="8" y1="11" x2="14" y2="11" />
                  </svg>
                )
              },
              {
                num: "02",
                title: "UI/UX Design",
                desc: "We design intuitive, engaging, and user-friendly interfaces that provide exceptional experiences.",
                color: "#10b981",
                shadowColor: "rgba(16, 185, 129, 0.15)",
                left: "25%",
                isOdd: false,
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="3" />
                    <path d="M3 12h6M15 12h6" />
                    <path d="M12 3v3M12 15v6" />
                    <path d="M12 6c-3.3 0-6 2.7-6 6M18 12c0-3.3-2.7-6-6-6" />
                  </svg>
                )
              },
              {
                num: "03",
                title: "Development & Integration",
                desc: "Our developers turn designs into clean, scalable, and high-performance solutions.",
                color: "#8b5cf6",
                shadowColor: "rgba(139, 92, 246, 0.15)",
                left: "41.66%",
                isOdd: true,
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                    <line x1="12" y1="2" x2="12" y2="22" />
                  </svg>
                )
              },
              {
                num: "04",
                title: "Testing & Quality Assurance",
                desc: "We thoroughly test every feature and functionality to ensure your product is secure, bug-free, and fast.",
                color: "#f97316",
                shadowColor: "rgba(249, 115, 22, 0.15)",
                left: "58.33%",
                isOdd: false,
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="m9 11 2 2 4-4" />
                  </svg>
                )
              },
              {
                num: "05",
                title: "Deployment",
                desc: "We deploy your project seamlessly and ensure a smooth launch with zero disruption.",
                color: "#06b6d4",
                shadowColor: "rgba(6, 182, 212, 0.15)",
                left: "75%",
                isOdd: true,
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4.5 16.5c-1.5 1.25-2.5 3.5-2.5 3.5s2.25-1 3.5-2.5L18.5 4.5a2.12 2.12 0 0 0-3-3L4.5 16.5z" />
                    <path d="M12 5l9 9" />
                    <path d="m9 18 4 4" />
                  </svg>
                )
              },
              {
                num: "06",
                title: "Support & Maintenance",
                desc: "We provide ongoing support, updates, and improvements to keep your product future-ready.",
                color: "#1d4ed8",
                shadowColor: "rgba(29, 78, 216, 0.15)",
                left: "91.66%",
                isOdd: false,
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    <path d="M12 8v4" />
                    <path d="M12 16h.01" />
                  </svg>
                )
              }
            ].map((step, idx) => (
              <div
                key={idx}
                className="process-node"
                style={{
                  left: step.left,
                  "--accent-color": step.color,
                  "--shadow-color": step.shadowColor
                }}
              >
                {/* Icon Wrapper */}
                <div
                  className="node-icon-wrap"
                  style={{
                    marginTop: step.isOdd ? "20px" : "110px"
                  }}
                >
                  <div className="node-icon-inner">
                    {step.icon}
                  </div>
                </div>

                {/* Connector Dotted Line */}
                <div
                  className="node-connector-line"
                  style={{
                    top: step.isOdd ? "104px" : "170px",
                    height: step.isOdd ? "146px" : "80px"
                  }}
                ></div>

                {/* Connecting Dot on Wave */}
                <div
                  className="node-wave-dot"
                  style={{
                    top: step.isOdd ? "174px" : "104px"
                  }}
                ></div>

                {/* Node Bottom Content Wrapper */}
                <div className="node-content-wrap">
                  <div className="node-number">{step.num}</div>
                  <h4 className="node-title">{step.title}</h4>
                  <div className="node-title-underline"></div>
                  <p className="node-desc">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="tech-stack-section container reveal">
        {/* Background Decorative Circles */}
        <div className="tech-bg-circles">
          <svg width="400" height="400" viewBox="0 0 400 400" fill="none">
            <circle cx="200" cy="200" r="180" stroke="rgba(59, 130, 246, 0.03)" strokeWidth="1" />
            <circle cx="200" cy="200" r="140" stroke="rgba(59, 130, 246, 0.03)" strokeWidth="1" />
            <circle cx="200" cy="200" r="100" stroke="rgba(59, 130, 246, 0.03)" strokeWidth="1" />
            <circle cx="200" cy="200" r="60" stroke="rgba(59, 130, 246, 0.03)" strokeWidth="1" />
          </svg>
        </div>

        {/* Background Decorative Dots */}
        <div className="tech-bg-dots">
          <svg width="82" height="114" viewBox="0 0 82 114" fill="rgba(59, 130, 246, 0.12)">
            <circle cx="10" cy="10" r="2" />
            <circle cx="34" cy="10" r="2" />
            <circle cx="58" cy="10" r="2" />
            <circle cx="82" cy="10" r="2" />
            <circle cx="10" cy="34" r="2" />
            <circle cx="34" cy="34" r="2" />
            <circle cx="58" cy="34" r="2" />
            <circle cx="82" cy="34" r="2" />
            <circle cx="10" cy="58" r="2" />
            <circle cx="34" cy="58" r="2" />
            <circle cx="58" cy="58" r="2" />
            <circle cx="82" cy="58" r="2" />
            <circle cx="10" cy="82" r="2" />
            <circle cx="34" cy="82" r="2" />
            <circle cx="58" cy="82" r="2" />
            <circle cx="82" cy="82" r="2" />
            <circle cx="10" cy="106" r="2" />
            <circle cx="34" cy="106" r="2" />
            <circle cx="58" cy="106" r="2" />
            <circle cx="82" cy="106" r="2" />
          </svg>
        </div>

        <div className="tech-section-header">
          <div className="tech-badge">POWERED BY INNOVATION</div>
          <h2 className="tech-title">
            Modern <span className="tech-title-accent">Tech Stack</span>
          </h2>
          <p className="tech-subtitle">
            We use the best tools in the industry to ensure your website is fast, secure, and future-proof.
          </p>
          <div className="tech-header-line"></div>
        </div>

        <div className="tech-cards-grid">
          {[
            {
              name: "React",
              desc: "A JavaScript library for building fast and interactive user interfaces.",
              color: "#3b82f6",
              dotColor: "#60a5fa",
              icon: (
                <svg viewBox="-11.5 -10.23174 23 20.46348" className="tech-card-svg">
                  <circle cx="0" cy="0" r="2.05" fill="#00d8ff" />
                  <g stroke="#00d8ff" strokeWidth="1" fill="none">
                    <ellipse rx="11" ry="4.2" />
                    <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                    <ellipse rx="11" ry="4.2" transform="rotate(120)" />
                  </g>
                </svg>
              )
            },
            {
              name: "Next.js",
              desc: "The React framework for production with SSR, SSG and more.",
              color: "#0f172a",
              dotColor: "#94a3b8",
              icon: (
                <svg viewBox="0 0 180 180" className="tech-card-svg" fill="none">
                  <circle cx="90" cy="90" r="90" fill="black" />
                  <path d="M140 140L80 60V140H68V40H80L130 110V40H142V140H140Z" fill="white" />
                </svg>
              )
            },
            {
              name: "Node.js",
              desc: "A powerful JavaScript runtime for building scalable server-side applications.",
              color: "#22c55e",
              dotColor: "#4ade80",
              icon: (
                <svg viewBox="0 0 24 24" className="tech-card-svg">
                  <path d="M12 2L3.5 7v10L12 22l8.5-5V7L12 2z" fill="#68a063" />
                  <path d="M12 4.5l6.5 3.8v7.4L12 19.5 5.5 15.7V8.3L12 4.5z" fill="white" />
                  <text x="12" y="15.5" fontSize="9" fontWeight="bold" fill="#3c873a" textAnchor="middle" fontFamily="sans-serif">JS</text>
                </svg>
              )
            },
            {
              name: "TypeScript",
              desc: "Typed JavaScript that scales with your project and catches errors early.",
              color: "#2563eb",
              dotColor: "#60a5fa",
              icon: (
                <svg viewBox="0 0 24 24" className="tech-card-svg" fill="#3178c6">
                  <rect width="24" height="24" rx="3" fill="#3178c6" />
                  <text x="18" y="19" fontSize="11" fontWeight="bold" fill="white" textAnchor="end" fontFamily="sans-serif">TS</text>
                </svg>
              )
            },
            {
              name: "Tailwind",
              desc: "A utility-first CSS framework for rapidly building custom designs.",
              color: "#06b6d4",
              dotColor: "#22d3ee",
              icon: (
                <svg viewBox="0 0 24 24" className="tech-card-svg">
                  <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.002 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19 12.002 19c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" fill="#38bdf8" />
                </svg>
              )
            },
            {
              name: "AWS",
              desc: "Reliable cloud infrastructure for hosting, storage, and scalability.",
              color: "#f59e0b",
              dotColor: "#fbbf24",
              icon: (
                <svg viewBox="0 0 48 30" className="tech-card-svg" fill="none">
                  <text x="24" y="16" fontSize="13" fontWeight="bold" fill="#232f3e" textAnchor="middle" fontFamily="sans-serif" letterSpacing="0.3">aws</text>
                  <path d="M6 21c7.2 4.2 18.6 4.8 28.2 2.4.9-.2 1.2.6.4.9-7.8 3.6-19.8 3.3-28.8-1.8-.6-.3-.3-1.2.2-1.5z" fill="#ff9900" />
                  <path d="M35.6 19.8c.4 1.2.8 2.6.8 4 0 .3-.3.4-.5.2l-3.2-2.6c-.2-.2-.1-.5.2-.5l2.7-1.1z" fill="#ff9900" />
                </svg>
              )
            },
            {
              name: "Vercel",
              desc: "The platform for frontend developers to ship faster and scale effortlessly.",
              color: "#000000",
              dotColor: "#64748b",
              icon: (
                <svg viewBox="0 0 24 24" className="tech-card-svg">
                  <path d="M12 2L24 22H0L12 2Z" fill="black" />
                </svg>
              )
            },
            {
              name: "PostgreSQL",
              desc: "A powerful, open-source relational database built for reliability.",
              color: "#4f46e5",
              dotColor: "#818cf8",
              icon: (
                <svg viewBox="0 0 128 128" className="tech-card-svg">
                  <path d="M110.2 49c-.2-.5-.5-1-.9-1.4l.2-.1c1.3-1.6 1.8-3.7 1.5-5.8-.4-2.8-2.1-5.3-4.7-6.5-2.6-1.2-5.7-1.1-8.2.4l-.1.1c-.8-1.5-1.9-2.7-3.3-3.6-2.5-1.5-5.5-1.9-8.4-1.2-2.9.7-5.4 2.4-7 4.9l-.1.1c-1.3-1.1-2.9-1.9-4.7-2.2-3.1-.6-6.3.2-8.7 2.1l.1-.3c.4-3.1-.7-6.2-2.9-8.2-2.4-2.2-5.7-3.1-9-2.6-4.5.7-8.1 3.9-9.6 8.2V33c-.7-.4-1.6-.7-2.5-.9-3-.7-6.2-.2-8.8 1.4L33 34c-.8-1.4-2-2.5-3.5-3.2-3.1-1.4-6.7-1.4-9.8.1-3.1 1.5-5.3 4.4-6.1 7.7-.2.9-.3 1.9-.3 2.8H13c-.3 0-.5.2-.5.5v5.9c0 .3.2.5.5.5h1.1c.3 4.2 2 8.1 4.9 11.1 1.7 1.8 3.8 3.1 6.1 3.9v3.4c0 .3.2.5.5.5h8.8c.3 0 .5-.2.5-.5v-4.1c4 0 7.9-1.3 11-3.7l1.7.9c1 .5 2 1 3.1 1.3l.3.1c1.5 5.5 5.2 10.1 10.3 12.8v5.8c0 1.2.6 2.3 1.7 3l14 9.1c.6.4 1.3.6 2 .6 1.1 0 2.2-.5 2.9-1.4 1.1-1.3 1.3-3.1.5-4.6l-5.6-10.7c4.6-2.8 8.1-7.1 9.9-12.2l.9-.1c3.1-.4 5.9-1.8 8-4l3-3c2-2 3.3-4.6 3.7-7.5l.2-.1c.3 0 .6-.1.8-.2z" fill="#336791" />
                  <path d="M96.7 41.7c-.5.4-1.1.7-1.7.9-.5.2-1.1.2-1.6 0-.5-.2-1-.5-1.3-.9s-.5-.9-.5-1.5c0-.6.2-1.1.5-1.5s.8-.7 1.3-.9c1.1-.3 2.3 0 3 .8.7.8.8 2 .3 3.1z" fill="#fff" />
                </svg>
              )
            },
            {
              name: "MongoDB",
              desc: "A document-based, distributed database designed for modern apps.",
              color: "#47A248",
              dotColor: "#589636",
              icon: (
                <svg viewBox="0 0 32 32" className="tech-card-svg">
                  <path d="M16 30s-10-5.8-10-14.8c0-7 6.4-11.6 10-13.2 3.6 1.6 10 6.2 10 13.2C26 24.2 16 30 16 30zm0-25.2c-2.4 1.4-7.6 5-7.6 10 0 6.6 7.6 11.2 7.6 11.2V4.8z" fill="#47A248" />
                  <path d="M16 30s10-5.8 10-14.8c0-7-6.4-11.6-10-13.2V30z" fill="#3F8E41" />
                  <path d="M16 1.5v28.8" stroke="#13aa52" strokeWidth="1" strokeLinecap="round" />
                </svg>
              )
            },
            {
              name: "MySQL",
              desc: "A widely used open-source relational database management system.",
              color: "#00758f",
              dotColor: "#f29111",
              icon: (
                <svg viewBox="0 0 128 128" className="tech-card-svg">
                  <path d="M123.6 72.8c-2.4-7.2-7.1-13.6-13.3-18-6.1-4.4-13.6-6.9-21.2-7.1-2.9 0-5.8.4-8.6 1.1-2.7.7-5.3 1.9-7.5 3.6-3.6-5.8-9.4-9.8-16.1-11.2-6.7-1.4-13.7-.5-19.8 2.5L34 26.6c4.6-2.1 8.8-5.1 12.2-8.9 3.5-3.8 6.1-8.3 7.8-13.2.3-.9-.2-1.8-1.1-2.1-.9-.3-1.8.2-2.1 1.1C49.1 8.2 46.7 12.4 43.4 16c-3.3 3.6-7.3 6.6-11.8 8.8L28.3 14c-.4-.9-1.4-1.3-2.3-.9-.9.4-1.3 1.4-.9 2.3l4.3 10.1C18.6 28 10 37.1 5.3 48.7c-4.7 11.6-5.7 24.5-2.8 36.7 2.1 8.9 6.8 17 13.4 23.3 6.6 6.3 15 10.5 24.1 12 3 .5 6.1.7 9.1.5h.3c5.3-.2 10.6-1.5 15.3-3.9 4.8-2.4 8.9-5.9 12-10.2 3.8 4.2 9 7.1 14.7 8.1s11.6.4 17.1-1.7c4.6-1.8 8.7-4.7 11.9-8.4 3.2-3.7 5.5-8.2 6.7-13 1.8-7.3 1-15-2.2-21.8l10 5c.8.4 1.8.1 2.2-.7.4-.8.1-1.8-.7-2.2l-10.8-5.4z" fill="#00758f" />
                  <path d="M102.8 51.7c1.3 0 2.6.5 3.5 1.5s1.5 2.2 1.5 3.5-.5 2.6-1.5 3.5-2.2 1.5-3.5 1.5-2.6-.5-3.5-1.5-1.5-2.2-1.5-3.5.5-2.6 1.5-3.5 2.2-1.5 3.5-1.5z" fill="#f29111" />
                </svg>
              )
            }
          ].map((tech, i) => (
            <div
              key={i}
              className="tech-card-new reveal"
              style={{
                '--delay': `${i * 0.05}s`,
                '--card-border-color': tech.color
              }}
            >
              <div className="tech-card-header">
                <div className="tech-card-icon-container">
                  {tech.icon}
                </div>
                <span className="tech-card-dot" style={{ backgroundColor: tech.dotColor }}></span>
              </div>
              <h3 className="tech-card-title">{tech.name}</h3>
              <p className="tech-card-desc">{tech.desc}</p>
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

        /* ─── PREMIUM VIDEO HERO SECTION ─── */
        .pos-hero-video {
          position: relative;
          width: 100%;
          height: 100vh;
          min-height: 650px;
          max-height: 950px;
          overflow: hidden;
          display: flex;
          align-items: center;
          background: #ffffff;
        }

        /* Full-size background video occupying the entire right side */
        .pos-hero-video__video {
          position: absolute;
          top: 0;
          right: 0;
          width: 65%;
          height: 100%;
          object-fit: cover;
          object-position: center center;
          z-index: 0;
        }

        /* Soft white gradient overlay from left to right */
        .pos-hero-video__overlay {
          position: absolute;
          inset: 0;
          z-index: 1;
          background: linear-gradient(
            to right,
            #ffffff 0%,
            #ffffff 35%,
            rgba(255, 255, 255, 0.92) 48%,
            rgba(255, 255, 255, 0.4) 70%,
            rgba(255, 255, 255, 0) 100%
          );
        }

        /* Content container positioned on the left */
        .pos-hero-video__content {
          position: relative;
          z-index: 2;
          max-width: 640px;
          padding: 0 80px;
          display: flex;
          flex-direction: column;
          gap: 0;
          box-sizing: border-box;
        }

        /* Badge design */
        .pos-hero-video__badge {
          display: inline-flex;
          align-items: center;
          background: rgba(59, 130, 246, 0.08);
          color: #2563eb;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          padding: 6px 16px;
          border-radius: 9999px;
          border: 1px solid rgba(59, 130, 246, 0.15);
          margin-bottom: 1.5rem;
          width: fit-content;
        }

        /* Headline: "Modern" black + rest blue gradient */
        .pos-hero-video__headline {
          font-size: clamp(2.5rem, 4.8vw, 4.2rem);
          font-weight: 850;
          line-height: 1.08;
          letter-spacing: -0.03em;
          margin: 0 0 1.5rem 0;
          font-family: system-ui, -apple-system, sans-serif;
          background: linear-gradient(90deg, #0ea5e9 0%, #2563eb 50%, #06b6d4 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .pos-hero-video__headline--black {
          -webkit-text-fill-color: #0f172a;
          color: #0f172a;
        }

        /* Supporting paragraph */
        .pos-hero-video__desc {
          font-size: 1.15rem;
          color: #475569;
          line-height: 1.7;
          margin: 0 0 2.2rem 0;
          max-width: 520px;
        }

        /* Button CTA */
        .pos-hero-video__btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #0f172a;
          color: #ffffff;
          padding: 16px 36px;
          border-radius: 12px;
          font-size: 1.05rem;
          font-weight: 700;
          border: none;
          cursor: pointer;
          transition: background 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease;
          box-shadow: 0 4px 20px rgba(15, 23, 42, 0.15);
        }

        .pos-hero-video__btn-primary:hover {
          background: #2563eb;
          transform: translateY(-2px);
          box-shadow: 0 12px 28px rgba(37, 99, 237, 0.3);
        }

        .pos-hero-video__btn-primary svg {
          transition: transform 0.25s ease;
        }

        .pos-hero-video__btn-primary:hover svg {
          transform: translateX(4px);
        }

        /* Animations */
        @keyframes posHeroSlideUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .pos-hero-anim-1 { animation: posHeroSlideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.05s both; }
        .pos-hero-anim-2 { animation: posHeroSlideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.18s both; }
        .pos-hero-anim-3 { animation: posHeroSlideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.32s both; }
        .pos-hero-anim-4 { animation: posHeroSlideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.44s both; }

        /* Responsive styling for 992px */
        /* Responsive styling for 992px (Keep desktop layout structure) */
        @media (max-width: 992px) {
          .pos-hero-video__content {
            max-width: 100%;
            padding: 0 40px;
          }
        }

        /* Responsive styling for 768px (Keep desktop layout structure) */
        @media (max-width: 768px) {
          .pos-hero-video__content {
            padding: 0 24px;
          }
          .pos-hero-video__headline {
            font-size: clamp(1.8rem, 7vw, 2.8rem);
          }
          .pos-hero-video__desc {
            font-size: 1rem;
            max-width: 90%;
          }
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

        .hero-btns {
          display: flex;
          gap: 20px;
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

        /* Development Process Section */
        .process-section {
          padding: 100px 0;
          position: relative;
          background: transparent;
          overflow: hidden;
        }

        .process-bg-circles {
          position: absolute;
          top: -20px;
          right: -40px;
          z-index: 0;
          pointer-events: none;
        }

        .process-bg-dots {
          position: absolute;
          top: 40px;
          left: 40px;
          z-index: 0;
          pointer-events: none;
        }

        .process-section-header {
          text-align: center;
          margin-bottom: 60px;
          position: relative;
          z-index: 1;
        }

        .process-badge {
          display: inline-flex;
          align-items: center;
          background: rgba(37, 99, 235, 0.08);
          color: #2563eb;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 1.5px;
          padding: 6px 16px;
          border-radius: 9999px;
          margin-bottom: 16px;
          text-transform: uppercase;
        }

        .process-title {
          font-size: clamp(2rem, 4vw, 2.75rem);
          color: #0f172a;
          font-weight: 800;
          margin-bottom: 12px;
          letter-spacing: -0.5px;
        }

        .process-title-accent {
          background: linear-gradient(90deg, #2563eb, #06b6d4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .process-subtitle {
          color: #64748b;
          font-size: 1.05rem;
          max-width: 650px;
          margin: 0 auto;
          line-height: 1.5;
        }

        .process-header-line {
          width: 32px;
          height: 3px;
          background: #2563eb;
          margin: 20px auto 0;
          border-radius: 2px;
        }

        .process-timeline-container {
          position: relative;
          width: 100%;
          height: 520px;
          margin-top: 60px;
        }

        .process-svg-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 280px;
          pointer-events: none;
          z-index: 1;
        }

        .process-arrow {
          position: absolute;
          top: 105px;
          color: #cbd5e1;
          font-size: 1.25rem;
          transform: translateX(-50%);
          z-index: 2;
        }

        .process-nodes {
          position: relative;
          width: 100%;
          height: 100%;
          z-index: 2;
        }

        .process-node {
          position: absolute;
          top: 0;
          width: 170px;
          margin-left: -85px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .node-icon-wrap {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 84px;
          height: 84px;
          border-radius: 50%;
          border: 1px solid rgba(226, 232, 240, 0.5);
          background: rgba(248, 250, 252, 0.4);
          transition: transform 0.3s ease;
        }

        .process-node:hover .node-icon-wrap {
          transform: scale(1.05);
        }

        .node-icon-inner {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 62px;
          height: 62px;
          border-radius: 50%;
          background: #ffffff;
          box-shadow: 0 8px 20px var(--shadow-color);
          border: 2.5px solid var(--accent-color);
          color: var(--accent-color);
        }

        .node-connector-line {
          position: absolute;
          width: 0px;
          border-left: 1.5px dashed rgba(226, 232, 240, 0.8);
          z-index: 0;
        }

        .node-wave-dot {
          position: absolute;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: 2.5px solid #ffffff;
          background: var(--accent-color);
          box-shadow: 0 0 0 2px var(--accent-color);
          z-index: 2;
        }

        .node-content-wrap {
          position: absolute;
          top: 250px;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .node-number {
          font-size: 1.4rem;
          font-weight: 800;
          color: var(--accent-color);
          line-height: 1;
          margin-bottom: 8px;
        }

        .node-title {
          font-size: 0.95rem;
          font-weight: 700;
          color: #0f172a;
          line-height: 1.3;
          margin: 0;
        }

        .node-title-underline {
          width: 16px;
          height: 2.5px;
          background: var(--accent-color);
          margin: 8px auto;
          border-radius: 1px;
        }

        .node-desc {
          font-size: 0.82rem;
          color: #64748b;
          line-height: 1.5;
          margin: 0;
          font-weight: 400;
        }

        @media (max-width: 1024px) {
          .process-timeline-container {
            height: auto;
            margin-top: 40px;
          }
          .process-svg-bg, .process-arrow {
            display: none;
          }
          .process-nodes {
            display: flex;
            flex-direction: column;
            gap: 40px;
            align-items: flex-start;
            padding-left: 70px;
            padding-right: 20px;
          }
          .process-nodes::before {
            content: '';
            position: absolute;
            top: 20px;
            bottom: 20px;
            left: 35px;
            width: 2px;
            background: linear-gradient(180deg, #2563eb, #10b981, #8b5cf6, #f97316, #06b6d4, #1d4ed8);
            border-radius: 1px;
          }
          .process-node {
            position: relative;
            left: auto !important;
            top: auto !important;
            margin-left: 0 !important;
            width: 100%;
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            gap: 20px;
            text-align: left;
          }
          .node-icon-wrap {
            position: absolute;
            left: -60px;
            top: 0 !important;
            margin-top: 0 !important;
            width: 50px;
            height: 50px;
          }
          .node-icon-inner {
            width: 38px;
            height: 38px;
            border-width: 1.5px;
          }
          .node-icon-inner svg {
            width: 16px;
            height: 16px;
          }
          .node-connector-line, .node-wave-dot {
            display: none;
          }
          .node-content-wrap {
            position: relative;
            top: auto;
            width: 100%;
            align-items: flex-start;
            text-align: left;
          }
          .node-title-underline {
            margin: 6px 0;
          }
        }

        /* Tech Stack Section styling matching the screenshot */
        .tech-stack-section {
          padding: 80px 0 120px;
          position: relative;
        }

        .tech-bg-circles {
          position: absolute;
          top: 0px;
          left: -40px;
          z-index: 0;
          pointer-events: none;
        }

        .tech-bg-dots {
          position: absolute;
          top: 60px;
          right: 40px;
          z-index: 0;
          pointer-events: none;
        }

        .tech-section-header {
          text-align: center;
          margin-bottom: 50px;
          position: relative;
          z-index: 1;
        }

        .tech-badge {
          display: inline-block;
          background: rgba(59, 130, 246, 0.08);
          color: #2563eb;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 1.5px;
          padding: 6px 16px;
          border-radius: 9999px;
          margin-bottom: 16px;
          text-transform: uppercase;
        }

        .tech-title {
          font-size: clamp(2rem, 4vw, 2.75rem);
          color: #0f172a;
          font-weight: 800;
          margin-bottom: 12px;
          letter-spacing: -0.5px;
        }

        .tech-title-accent {
          color: #2563eb;
        }

        .tech-subtitle {
          color: #64748b;
          font-size: 1.05rem;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.5;
        }

        .tech-header-line {
          width: 32px;
          height: 3px;
          background: #2563eb;
          margin: 20px auto 0;
          border-radius: 2px;
        }

        .tech-cards-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 24px;
          position: relative;
          z-index: 1;
        }

        .tech-card-new {
          background: #ffffff;
          border: 1px solid rgba(226, 232, 240, 0.8);
          border-bottom: 4px solid var(--card-border-color);
          border-radius: 20px;
          border-bottom-left-radius: 20px;
          border-bottom-right-radius: 20px;
          padding: 32px 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.03), 0 8px 10px -6px rgba(0, 0, 0, 0.02);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          min-height: 250px;
        }

        .tech-card-new:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 30px -10px rgba(0, 0, 0, 0.06), 0 10px 15px -5px rgba(0, 0, 0, 0.04);
        }

        .tech-card-header {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }

        .tech-card-icon-container {
          width: 68px;
          height: 68px;
          border-radius: 50%;
          background: #ffffff;
          border: 1px solid rgba(226, 232, 240, 0.8);
          box-shadow: 0 4px 8px -2px rgba(0, 0, 0, 0.03), 0 2px 4px -1px rgba(0, 0, 0, 0.02);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s ease;
        }

        .tech-card-new:hover .tech-card-icon-container {
          transform: scale(1.05);
        }

        .tech-card-svg {
          width: 32px;
          height: 32px;
          display: block;
        }

        .tech-card-dot {
          position: absolute;
          left: calc(100% + 14px);
          width: 6px;
          height: 6px;
          border-radius: 50%;
        }

        .tech-card-title {
          font-size: 1.15rem;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 12px;
        }

        .tech-card-desc {
          color: #64748b;
          font-size: 0.85rem;
          line-height: 1.5;
          margin: 0;
          font-weight: 400;
        }

        /* Responsive Breakpoints */
        @media (max-width: 1200px) {
          .tech-cards-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
          }
        }

        @media (max-width: 900px) {
          .tech-cards-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }
          .tech-bg-circles, .tech-bg-dots {
            display: none;
          }
        }

        @media (max-width: 600px) {
          .tech-cards-grid {
            grid-template-columns: 1fr;
            gap: 16px;
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

        /* Features Section styling matching the screenshot */
        .features-section {
          padding: 100px 0 80px;
          position: relative;
        }

        .features-bg-circles {
          position: absolute;
          top: 0px;
          right: -40px;
          z-index: 0;
          pointer-events: none;
        }

        .features-bg-dots {
          position: absolute;
          top: 60px;
          left: 40px;
          z-index: 0;
          pointer-events: none;
        }

        .features-section-header {
          text-align: center;
          margin-bottom: 50px;
          position: relative;
          z-index: 1;
        }

        .features-badge {
          display: inline-flex;
          align-items: center;
          background: rgba(59, 130, 246, 0.08);
          color: #2563eb;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 1.5px;
          padding: 6px 16px;
          border-radius: 9999px;
          margin-bottom: 16px;
          text-transform: uppercase;
        }

        .features-title {
          font-size: clamp(2rem, 4vw, 2.75rem);
          color: #0f172a;
          font-weight: 800;
          margin-bottom: 12px;
          letter-spacing: -0.5px;
        }

        .features-title-accent {
          color: #2563eb;
        }

        .features-subtitle {
          color: #64748b;
          font-size: 1.05rem;
          max-width: 650px;
          margin: 0 auto;
          line-height: 1.5;
        }

        .features-header-line {
          width: 32px;
          height: 3px;
          background: #2563eb;
          margin: 20px auto 0;
          border-radius: 2px;
        }

        .features-cards-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          position: relative;
          z-index: 1;
        }

        .feature-card-new {
          position: relative;
          background: #ffffff;
          border: 1px solid rgba(226, 232, 240, 0.8);
          border-radius: 24px;
          padding: 40px 0 0; /* no bottom padding since footer wave spans it */
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.03), 0 8px 12px -6px rgba(0, 0, 0, 0.02);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          min-height: 380px;
          overflow: hidden;
        }

        .feature-card-new::after {
          content: '';
          position: absolute;
          top: -1px;
          right: -1px;
          width: 32px;
          height: 32px;
          border-top: 3.5px solid var(--accent-color);
          border-right: 3.5px solid var(--accent-color);
          border-top-right-radius: 24px;
          pointer-events: none;
        }

        .feature-card-new:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.06), 0 10px 15px -5px rgba(0, 0, 0, 0.04);
          border-color: rgba(226, 232, 240, 0.5);
        }

        .feature-card-header-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 140px;
          height: 100px;
          margin-bottom: 20px;
        }

        .icon-bg-decor {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 0;
        }

        .feature-card-icon-container {
          position: relative;
          z-index: 1;
          width: 74px;
          height: 74px;
          border-radius: 50%;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s ease;
        }

        .feature-card-new:hover .feature-card-icon-container {
          transform: scale(1.05);
        }

        .feat-icon-svg {
          width: 30px;
          height: 30px;
          display: block;
        }

        .feature-card-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 12px;
          padding: 0 24px;
        }

        .feature-card-desc {
          color: #64748b;
          font-size: 0.9rem;
          line-height: 1.6;
          margin: 0 0 32px;
          padding: 0 28px;
          font-weight: 400;
        }

        .feature-card-footer {
          margin-top: auto;
          width: 100%;
          position: relative;
          background: var(--footer-bg);
          padding: 20px 24px;
          border-bottom-left-radius: 24px;
          border-bottom-right-radius: 24px;
        }

        .footer-wave-svg {
          position: absolute;
          top: -20px;
          left: 0;
          width: 100%;
          height: 20px;
          pointer-events: none;
        }

        .footer-content {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          color: var(--footer-text-color);
          font-weight: 600;
          font-size: 0.9rem;
        }

        .footer-check {
          width: 16px;
          height: 16px;
          flex-shrink: 0;
        }

        /* Responsive Breakpoints */
        @media (max-width: 1200px) {
          .features-cards-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
          }
        }

        @media (max-width: 768px) {
          .features-cards-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          .features-bg-circles, .features-bg-dots {
            display: none;
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
          .cta-card { padding: 40px; }
        }
      `}</style>
    </div >
  );
};

export default WebDevelopment;
