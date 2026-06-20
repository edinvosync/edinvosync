import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
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

      {/* ── HERO ── */}
      <section className="dm-hero">
        {/* Full-bleed background video on the right */}
        <video
          className="dm-hero__video"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videos/abcd.mp4" type="video/mp4" />
        </video>

        {/* White gradient overlay: solid white on left → transparent on right */}
        <div className="dm-hero__overlay" />

        {/* Left content */}
        <div className="dm-hero__content">


          <span className="dm-badge reveal">Growth &amp; Visibility</span>

          <h1 className="dm-headline reveal">
            Data-Driven<br />
            <span className="dm-headline__accent">Digital Marketing</span>
          </h1>

          <p className="dm-desc reveal">
            Grow your brand with precision marketing strategies. From SEO and
            social media campaigns to paid advertising, we help you attract the
            right audience, increase engagement, and drive measurable business growth.
          </p>

          <div className="dm-cta reveal">
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


      <section className="proven-process-section">
        <div className="container">
          <div className="process-header reveal">
            <h3 className="process-subtitle">OUR PROVEN PROCESS FOR</h3>
            <h2 className="process-title">DIGITAL MARKETING</h2>
            <div className="process-dots-divider">
              <span style={{ backgroundColor: '#eab308' }}></span>
              <span style={{ backgroundColor: '#f97316' }}></span>
              <span style={{ backgroundColor: '#ec4899' }}></span>
              <span style={{ backgroundColor: '#8b5cf6' }}></span>
              <span style={{ backgroundColor: '#3b82f6' }}></span>
              <span style={{ backgroundColor: '#14b8a6' }}></span>
            </div>
            <p className="process-desc">A Strategic. Data-Driven. Results-Focused Approach.</p>
          </div>

          <div className="process-steps-container reveal">
            {[
              {
                num: "01",
                title: "DISCOVER &\nRESEARCH",
                desc: "We learn about your business, audience, industry & goals to build a strong foundation.",
                color: "#eab308",
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="10" cy="10" r="7" /><line x1="21" y1="21" x2="15" y2="15" /><line x1="8" y1="12" x2="8" y2="8" /><line x1="10" y1="12" x2="10" y2="6" /><line x1="12" y1="12" x2="12" y2="10" /></svg>
              },
              {
                num: "02",
                title: "STRATEGY\nDEVELOPMENT",
                desc: "We create a custom digital marketing strategy aligned with your objectives.",
                color: "#f97316",
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /><line x1="22" y1="2" x2="13.5" y2="10.5" /><polyline points="16 2 22 2 22 8" /></svg>
              },
              {
                num: "03",
                title: "CONTENT &\nCAMPAIGN CREATION",
                desc: "We craft compelling content and build high-impact campaigns that connect and convert.",
                color: "#ec4899",
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="3" y1="9" x2="21" y2="9" /><path d="M14.5 12.5l4-4a1.5 1.5 0 0 0-2-2l-4 4-1 3 3-1z" /></svg>
              },
              {
                num: "04",
                title: "IMPLEMENTATION\n& LAUNCH",
                desc: "We execute across the right channels using best practices to maximize visibility and reach.",
                color: "#8b5cf6",
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 11l14-4v10L3 14v-3z" /><path d="M9.6 15.8a2 2 0 1 1-3.8-1.6" /><path d="M20 9a3 3 0 0 1 0 6" /><path d="M23 7a5 5 0 0 1 0 10" /></svg>
              },
              {
                num: "05",
                title: "MONITOR, ANALYZE\n& OPTIMIZE",
                desc: "We track performance in real-time, analyze data, and optimize campaigns for better results.",
                color: "#3b82f6",
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18" /><rect x="7" y="14" width="4" height="7" /><rect x="14" y="9" width="4" height="12" /><polyline points="5 12 10 7 15 10 21 3" /></svg>
              },
              {
                num: "06",
                title: "MEASURE &\nGROW",
                desc: "We measure success against KPIs and continuously refine strategies to drive sustainable growth.",
                color: "#14b8a6",
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 21h8" /><path d="M12 17v4" /><path d="M7 4h10c0 4-2.5 8-5 8s-5-4-5-8" /><path d="M4 4h3v5H4z" /><path d="M17 4h3v5h-3" /><polygon points="12 7 13 9.5 15.5 9.5 13.5 11 14.5 13.5 12 12 9.5 13.5 10.5 11 8.5 9.5 11 9.5" /></svg>
              }
            ].map((step, idx) => (
              <React.Fragment key={idx}>
                <div className="process-card">
                  <div className="process-card-top-band" style={{ backgroundColor: step.color }}></div>
                  <div className="process-icon-wrapper" style={{ borderColor: step.color }}>
                    <div className="process-icon-inner" style={{ color: '#0f172a' }}>
                      {step.icon}
                    </div>
                  </div>
                  <div className="process-card-content">
                    <h4 className="process-card-title">{step.title}</h4>
                    <p className="process-card-desc">{step.desc}</p>
                  </div>
                </div>
                {idx < 5 && (
                  <div className="process-arrow" style={{ color: step.color }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      <section className="pos-powerful-features">
        <div className="container">
          <div className="section-header reveal">
            <h2>Powerful Strategies <span className="text-gradient">To Scale Your Brand</span></h2>
            <p>We combine creativity with technical expertise to deliver marketing campaigns that actually convert.</p>
          </div>

          <div className="premium-showcase-grid reveal">
            {[
              {
                num: "01",
                title: "Search Engine Optimization (SEO)",
                desc: "Improve your search rankings, attract organic traffic, and grow your business online.",
                color: "#1d4ed8",
                icon: (
                  <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <filter id="shadow3d" x="-20%" y="-20%" width="140%" height="140%">
                        <feDropShadow dx="1.5" dy="3" stdDeviation="2" floodOpacity="0.25" floodColor="#3b82f6" />
                      </filter>
                      <linearGradient id="gearGrad" x1="0" y1="0" x2="100" y2="100">
                        <stop offset="0%" stopColor="#93c5fd" />
                        <stop offset="100%" stopColor="#60a5fa" />
                      </linearGradient>
                      <linearGradient id="glassGrad" x1="0" y1="0" x2="100" y2="100">
                        <stop offset="0%" stopColor="#bfdbfe" />
                        <stop offset="100%" stopColor="#3b82f6" />
                      </linearGradient>
                      <linearGradient id="handleGrad" x1="0" y1="0" x2="100" y2="100">
                        <stop offset="0%" stopColor="#60a5fa" />
                        <stop offset="100%" stopColor="#2563eb" />
                      </linearGradient>
                      <linearGradient id="chartGrad" x1="0" y1="0" x2="100" y2="100">
                        <stop offset="0%" stopColor="#60a5fa" />
                        <stop offset="100%" stopColor="#3b82f6" />
                      </linearGradient>
                    </defs>

                    {/* Gear (back layer) */}
                    <g transform="translate(6, 6) scale(0.65)" filter="url(#shadow3d)">
                      <circle cx="50" cy="50" r="32" stroke="url(#gearGrad)" strokeWidth="12" strokeDasharray="16 12" />
                      <circle cx="50" cy="50" r="28" stroke="url(#gearGrad)" strokeWidth="14" />
                    </g>

                    {/* Handle */}
                    <rect x="62" y="62" width="16" height="32" rx="8" transform="rotate(-45 62 62)" fill="url(#handleGrad)" filter="url(#shadow3d)" />

                    {/* Magnifying Glass Rim */}
                    <circle cx="50" cy="50" r="32" fill="#f8fafc" stroke="url(#glassGrad)" strokeWidth="8" filter="url(#shadow3d)" />

                    {/* Inner Bar Chart */}
                    <g transform="translate(32, 34) scale(0.65)">
                      {/* Bars */}
                      <rect x="0" y="25" width="10" height="15" rx="3" fill="url(#chartGrad)" filter="url(#shadow3d)" />
                      <rect x="16" y="12" width="10" height="28" rx="3" fill="url(#chartGrad)" filter="url(#shadow3d)" />
                      <rect x="32" y="0" width="10" height="40" rx="3" fill="url(#chartGrad)" filter="url(#shadow3d)" />

                      {/* Arrow Line */}
                      <path d="M-5 25 L10 10 L22 22 L42 -5" stroke="#2563eb" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" filter="url(#shadow3d)" />
                      {/* Arrow Head */}
                      <path d="M30 -5 L42 -5 L42 7" stroke="#2563eb" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none" filter="url(#shadow3d)" />
                    </g>
                  </svg>
                )
              },
              {
                num: "02",
                title: "Social Media Marketing",
                desc: "Engage your audience, build your brand, and grow your presence across social platforms.",
                color: "#7c3aed",
                icon: (
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M11 5L6 9H2v6h4l5 4V5z" />
                    <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                    <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                  </svg>
                )
              },
              {
                num: "03",
                title: "E-Commerce Marketing",
                desc: "Boost your online sales, increase conversions, and scale your e-commerce store.",
                color: "#059669",
                icon: (
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="9" cy="21" r="1" />
                    <circle cx="20" cy="21" r="1" />
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                  </svg>
                )
              },
              {
                num: "04",
                title: "Google Ads",
                desc: "Drive targeted traffic, generate leads, and get the best ROI with smart Google Ads campaigns.",
                color: "#eab308",
                icon: (
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.9998 22.9291C1.7908 22.9291 0 21.1383 0 18.9293s1.7908-3.9998 3.9998-3.9998 3.9998 1.7908 3.9998 3.9998-1.7908 3.9998-3.9998 3.9998z" fill="#34A853" />
                    <path d="M23.4641 16.9287L15.4632 3.072C14.3586 1.1587 11.9121.5028 9.9988 1.6074S7.4295 5.1585 8.5341 7.0718l8.0009 13.8567c1.1046 1.9133 3.5511 2.5679 5.4644 1.4646 1.9134-1.1046 2.568-3.5511 1.4647-5.4644z" fill="#FBBC04" />
                    <path d="M7.5137 4.8438L1.5645 15.1484A4.5 4.5 0 0 1 4 14.4297c2.5597-.0075 4.6248 2.1585 4.4941 4.7148l3.2168-5.5723-3.6094-6.25c-.4499-.7793-.6322-1.6394-.5878-2.4784z" fill="#4285F4" />
                  </svg>
                )
              },
              {
                num: "05",
                title: "Meta Ads (Facebook & Instagram)",
                desc: "Reach the right audience, increase engagement, and grow your business with Meta Ads.",
                color: "#0ea5e9",
                icon: (
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 10C9.5 6.5 6 6.5 4 8.5s-2.5 5.5 0 7.5 5.5 2 8-2c2.5 4 6 4 8 2s2.5-5.5 0-7.5-5.5-2-8 2Z" />
                  </svg>
                )
              },
              {
                num: "06",
                title: "Web Design & Development",
                desc: "We design fast, responsive, and modern websites that convert visitors into customers.",
                color: "#ea580c",
                icon: (
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    <path d="M2 12h20" />
                  </svg>
                )
              }
            ].map((card, idx) => (
              <div key={idx} className="showcase-card-hz" style={{ '--card-color': card.color }}>
                <div className="card-hz-left">
                  <div className="card-bg-blobs">
                    <div className="blob blob-1"></div>
                    <div className="blob blob-2"></div>
                  </div>
                  <div className="icon-concentric-circles">
                    <div className="orbit-ring">
                      <div className="orbit-dot"></div>
                    </div>
                    <div className="outer-icon-circle">
                      <div className="inner-icon-circle">
                        {card.icon}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card-hz-right">
                  <div className="card-hz-header">
                    <span className="card-hz-number">{card.num}</span>
                    <div className="card-hz-divider"></div>
                    <div className="card-hz-title-wrapper">
                      <h3 className="card-hz-title">{card.title}</h3>
                      <div className="card-hz-accent-line"></div>
                    </div>
                  </div>

                  <p className="card-hz-desc">
                    {card.desc}
                  </p>

                  <div className="card-hz-footer">
                    <button className="card-hz-pill" onClick={() => setIsModalOpen(true)}>
                      <span className="pill-text">Learn More</span>
                      <div className="pill-arrow">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="5" y1="12" x2="19" y2="12" />
                          <polyline points="12 5 19 12 12 19" />
                        </svg>
                      </div>
                    </button>

                    <div className="dot-matrix-decor">
                      <svg width="24" height="32" viewBox="0 0 24 32" fill="none">
                        {Array.from({ length: 12 }).map((_, i) => {
                          const col = i % 3;
                          const row = Math.floor(i / 3);
                          return <circle key={i} cx={4 + col * 8} cy={4 + row * 8} r="2" fill="var(--card-color)" opacity="0.25" />;
                        })}
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>


        </div>
      </section>

      {/* ── TRUSTED BY SECTION ── */}
      <section className="trusted-by-section">
        <div className="trusted-by-inner">
          <div className="trusted-by-header reveal">
            <h2 className="trusted-heading">Trusted by <span className="trusted-heading-accent">Growing Businesses</span></h2>
            <div className="trusted-heading-line"><span></span><span className="trusted-heading-dot"></span><span></span></div>
            <p className="trusted-subtext">We're proud to partner with amazing brands and help them grow their online presence.</p>
          </div>

          <div className="trusted-logos-row reveal">
            {/* Express Bottle */}
            <div className="trusted-card">
              <div className="trusted-card-logo">
                <svg viewBox="0 0 120 60" width="120" height="60" xmlns="http://www.w3.org/2000/svg">
                  <g transform="translate(4,4)">
                    <rect x="0" y="8" width="12" height="40" rx="3" fill="#111" opacity="0.85" />
                    <rect x="3" y="3" width="6" height="8" rx="2" fill="#111" opacity="0.85" />
                    <rect x="1" y="20" width="10" height="3" rx="1" fill="#fff" />
                    <path d="M0 30 Q4 26 8 30" stroke="#e11d48" strokeWidth="1.5" fill="none" />
                  </g>
                  <text x="22" y="24" fontFamily="Arial Black,Arial" fontWeight="900" fontSize="13" fill="#1a1a1a" letterSpacing="-0.5">EXPRESS</text>
                  <text x="22" y="40" fontFamily="Arial Black,Arial" fontWeight="900" fontSize="16" fill="#e11d48" letterSpacing="-0.5">BOTTLE</text>
                  <text x="22" y="52" fontFamily="Arial,sans-serif" fontWeight="400" fontSize="6.5" fill="#666" letterSpacing="1">EXCELLENCE DELIVERED</text>
                </svg>
              </div>
            </div>

            {/* Hero Wholesale */}
            <div className="trusted-card">
              <div className="trusted-card-logo">
                <svg viewBox="0 0 130 60" width="130" height="60" xmlns="http://www.w3.org/2000/svg">
                  <text x="4" y="44" fontFamily="Arial Black,Arial" fontWeight="900" fontSize="38" fill="#1a1a1a" letterSpacing="-1">HERO</text>
                  <polygon points="93,10 96,19 106,19 98,25 101,34 93,28 85,34 88,25 80,19 90,19" fill="#e11d48" />
                  <text x="4" y="56" fontFamily="Arial,sans-serif" fontWeight="600" fontSize="11" fill="#555" letterSpacing="2">WHOLESALE</text>
                </svg>
              </div>
            </div>
          </div>

          <div className="trusted-dots">
            <span className="trusted-dot trusted-dot--active"></span>
            <span className="trusted-dot"></span>
            <span className="trusted-dot"></span>
          </div>
        </div>
      </section>

      <style>{`
        /* ─── Page shell ─── */
        .pos-detail-page {
          min-height: 100vh;
          position: relative;
          background: #ffffff;
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
          padding: 0 60px;
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        /* Back link */
        .dm-back-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #64748b;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.88rem;
          margin-bottom: 2.2rem;
          transition: color 0.25s ease;
          letter-spacing: 0.01em;
        }
        .dm-back-link:hover { color: #2563eb; }

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

        /* ─── Reveal animations ─── */
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

        /* ─── Container (for sections below hero) ─── */
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

        .pos-features {
          position: relative;
          padding: 100px 0;
        }

        .pos-features::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 800px;
          height: 800px;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, rgba(6, 182, 212, 0.1) 50%, transparent 70%);
          transform: translate(-50%, -50%);
          z-index: -1;
          filter: blur(60px);
          animation: pulse-blob 10s infinite alternate;
        }

        @keyframes pulse-blob {
          0% { transform: translate(-50%, -50%) scale(1); }
          100% { transform: translate(-50%, -50%) scale(1.1); }
        }

        .features-dashboard-wrapper {
          perspective: 1500px;
          margin: 0 auto;
          max-width: 1200px;
          padding: 20px;
        }

        .features-glass-pane {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.1) 100%);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-radius: 32px;
          border: 1px solid rgba(255, 255, 255, 0.5);
          box-shadow: 0 30px 60px rgba(31, 38, 135, 0.15), inset 0 1px 0 rgba(255,255,255,0.6);
          padding: 40px;
          transform: rotateX(5deg) rotateY(-5deg);
          transform-style: preserve-3d;
          transition: transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
        }

        .features-glass-pane:hover {
          transform: rotateX(0deg) rotateY(0deg) translateY(-10px);
        }

        .glass-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 25px;
          transform: translateZ(30px); /* Pop out from the back pane */
        }

        .glass-card {
          background: linear-gradient(135deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.2) 100%);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          padding: 30px;
          border: 1px solid rgba(255,255,255,0.8);
          box-shadow: 0 15px 35px rgba(0,0,0,0.05), inset 0 2px 2px rgba(255,255,255,0.9);
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
        }

        .glass-card::before {
          content: '';
          position: absolute;
          top: 0; left: -100%;
          width: 50%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
          transform: skewX(-20deg);
          transition: 0.5s;
        }

        .glass-card:hover::before {
          left: 150%;
        }

        .glass-card:hover {
          transform: translateY(-8px) translateZ(20px);
          box-shadow: 0 25px 45px rgba(0,0,0,0.1), inset 0 2px 2px rgba(255,255,255,0.9);
          border-color: rgba(255,255,255,1);
        }

        .glass-card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 20px;
        }

        .feature-icon {
          width: 50px;
          height: 50px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          box-shadow: 0 4px 10px rgba(0,0,0,0.05);
        }

        .glass-metric {
          font-size: 0.85rem;
          font-weight: 700;
          background: rgba(255,255,255,0.6);
          padding: 4px 10px;
          border-radius: 20px;
          backdrop-filter: blur(5px);
          border: 1px solid rgba(255,255,255,0.8);
        }

        .glass-card h3 {
          font-size: 1.25rem;
          color: #0f172a;
          margin-bottom: 12px;
          font-weight: 700;
        }

        .glass-card p {
          color: #475569;
          line-height: 1.5;
          font-size: 0.95rem;
          margin-bottom: 20px;
        }

        .glass-card-footer {
          margin-top: auto;
        }

        .progress-bar-bg {
          height: 6px;
          background: rgba(0,0,0,0.05);
          border-radius: 10px;
          overflow: hidden;
          box-shadow: inset 0 1px 2px rgba(0,0,0,0.05);
        }

        .progress-bar-fill {
          height: 100%;
          border-radius: 10px;
          position: relative;
        }
        
        .progress-bar-fill::after {
          content: '';
          position: absolute;
          top: 0; left: 0; bottom: 0; right: 0;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent);
          animation: shimmer 2s infinite linear;
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }



        .pos-powerful-features {
          background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
          padding: 100px 0;
          position: relative;
          color: #0f172a;
        }

        .pos-powerful-features .section-header h2 {
          color: #0f172a;
        }

        .pos-powerful-features .section-header p {
          color: #64748b;
        }

        .premium-showcase-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 30px;
          max-width: 1200px;
          margin: 60px auto 0;
          z-index: 10;
          position: relative;
        }

        @media (max-width: 1024px) {
          .premium-showcase-grid {
            grid-template-columns: 1fr;
          }
        }

        .showcase-card-hz {
          background: #ffffff;
          border: 1px solid #f1f5f9;
          border-radius: 24px;
          display: flex;
          flex-direction: row;
          overflow: hidden;
          box-shadow: 0 10px 40px -10px rgba(0,0,0,0.05);
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease;
          position: relative;
          min-height: 280px;
        }
        .showcase-card-hz:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 50px -10px rgba(0,0,0,0.1);
          border-color: var(--card-color);
        }

        .card-hz-left {
          flex: 0 0 35%;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px;
          overflow: hidden;
        }

        .card-hz-left::before {
          content: '';
          position: absolute;
          inset: 0;
          background: var(--card-color);
          opacity: 0.05;
          z-index: 0;
          pointer-events: none;
        }

        .card-bg-blobs {
          position: absolute;
          inset: 0;
          z-index: 0;
          pointer-events: none;
        }
        .blob {
          position: absolute;
          background: var(--card-color);
          opacity: 0.15;
          /* Removed filter: blur to get crisp organic edges like the screenshot */
        }
        .blob-1 {
          width: 160px;
          height: 180px;
          top: -30px;
          left: -30px;
          border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
        }
        .blob-2 {
          width: 240px;
          height: 200px;
          bottom: -40px;
          left: -40px;
          border-radius: 60% 40% 30% 70% / 50% 60% 40% 50%;
        }

        .icon-concentric-circles {
          position: relative;
          z-index: 1;
          width: 180px;
          height: 180px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .orbit-ring {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          border: 2px dashed var(--card-color);
          opacity: 0.5;
          animation: spin-slow 20s linear infinite;
        }

        .orbit-dot {
          position: absolute;
          width: 14px;
          height: 14px;
          background: var(--card-color);
          border-radius: 50%;
          top: 15%;
          right: 8%;
          box-shadow: 0 0 10px var(--card-color);
        }

        .outer-icon-circle {
          width: 135px;
          height: 135px;
          border-radius: 50%;
          background: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 10px 40px -10px rgba(0,0,0,0.1), inset -4px -4px 10px rgba(0,0,0,0.02);
          position: relative;
          z-index: 2;
        }

        .inner-icon-circle {
          width: 95px;
          height: 95px;
          border-radius: 50%;
          background: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: inset 0 3px 10px rgba(0,0,0,0.05), 0 0 0 1px rgba(0,0,0,0.03);
          position: relative;
          color: var(--card-color);
        }

        @keyframes spin-slow {
          100% { transform: rotate(360deg); }
        }

        .card-hz-right {
          flex: 1;
          padding: 40px 40px 40px 10px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .card-hz-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 12px;
        }

        .card-hz-number {
          font-size: 2.2rem;
          font-weight: 800;
          color: var(--card-color);
          line-height: 1;
        }

        .card-hz-divider {
          width: 1px;
          height: 48px;
          background: #e2e8f0;
        }

        .card-hz-title-wrapper {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .card-hz-title {
          font-size: 1.4rem;
          font-weight: 800;
          color: #0f172a;
          margin: 0;
          line-height: 1.2;
          letter-spacing: -0.02em;
        }

        .card-hz-accent-line {
          width: 30px;
          height: 3px;
          background: var(--card-color);
          border-radius: 2px;
        }

        .card-hz-desc {
          font-size: 1.05rem;
          color: #475569;
          line-height: 1.6;
          margin-bottom: 24px;
        }

        .card-hz-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: auto;
        }

        .card-hz-pill {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          border: 1.5px solid var(--card-color);
          padding: 6px 6px 6px 20px;
          border-radius: 99px;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          background: transparent;
          transition: all 0.3s ease;
        }

        .card-hz-pill::before {
          content: '';
          position: absolute;
          inset: 0;
          background: var(--card-color);
          opacity: 0.1;
          z-index: 0;
          transition: opacity 0.3s ease;
        }

        .card-hz-pill:hover::before {
          opacity: 0.2;
        }

        .pill-text {
          position: relative;
          z-index: 1;
          color: var(--card-color);
          font-weight: 700;
          font-size: 1rem;
        }

        .pill-arrow {
          position: relative;
          z-index: 1;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--card-color);
          border: 1.5px solid var(--card-color);
          transition: all 0.3s ease;
        }

        .card-hz-pill:hover .pill-arrow {
          background: var(--card-color);
          color: #ffffff;
        }
        
        .pill-arrow svg {
          stroke: currentColor;
          transition: transform 0.3s ease;
        }

        .card-hz-pill:hover .pill-arrow svg {
          transform: translateX(2px);
        }

        .dot-matrix-decor {
          color: var(--card-color);
          display: flex;
          align-items: center;
        }

        @media (max-width: 768px) {
          .pos-features, .pos-powerful-features {
            padding: 90px 0 60px;
          }
          .showcase-card-hz {
            flex-direction: row;
            min-height: auto;
          }
          .card-hz-left {
            flex: 0 0 160px;
            padding: 20px 10px;
          }
          .icon-concentric-circles {
            transform: scale(0.75);
          }
          .card-hz-right {
            padding: 25px 25px 25px 0;
          }
          .card-hz-title {
            font-size: 1.25rem;
          }
          .card-hz-desc {
            font-size: 0.95rem;
            margin-bottom: 16px;
          }
        }

        @media (max-width: 480px) {
          .pos-features, .pos-powerful-features {
            padding: 80px 0 50px;
          }
           .container {
            padding-left: 20px;
            padding-right: 20px;
          }
          .showcase-card-hz {
            flex-direction: row;
          }
          .card-hz-left {
            flex: 0 0 100px;
            padding: 10px 5px;
          }
          .icon-concentric-circles {
            transform: scale(0.55);
          }
          .card-hz-right {
            padding: 15px 15px 15px 0;
            gap: 4px;
          }
          .card-hz-header {
            gap: 8px;
            margin-bottom: 8px;
          }
          .card-hz-number {
            font-size: 1.6rem;
          }
          .card-hz-divider {
            height: 32px;
          }
          .card-hz-title {
            font-size: 1rem;
          }
          .card-hz-desc {
            font-size: 0.8rem;
            line-height: 1.4;
            margin-bottom: 12px;
          }
          .card-hz-pill {
            padding: 4px 4px 4px 12px;
            gap: 6px;
          }
          .pill-text {
            font-size: 0.75rem;
          }
          .pill-arrow {
            width: 22px;
            height: 22px;
          }
          .pill-arrow svg {
            width: 10px;
            height: 10px;
          }
          .dot-matrix-decor {
            display: none;
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

        /* ─── TRUSTED BY SECTION ─── */
        .trusted-by-section {
          background: #eef2ff;
          padding: 70px 0 56px;
        }

        .trusted-by-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 40px;
        }

        .trusted-by-header {
          text-align: center;
          margin-bottom: 48px;
        }

        .trusted-heading {
          font-size: clamp(1.6rem, 2.5vw, 2.2rem);
          font-weight: 800;
          color: #0f172a;
          margin: 0 0 14px 0;
          letter-spacing: -0.02em;
        }

        .trusted-heading-accent {
          color: #2563eb;
        }

        .trusted-heading-line {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0;
          margin-bottom: 18px;
        }

        .trusted-heading-line span:first-child,
        .trusted-heading-line span:last-child {
          display: block;
          height: 2px;
          width: 60px;
          background: linear-gradient(90deg, transparent, #3b82f6);
        }

        .trusted-heading-line span:last-child {
          background: linear-gradient(90deg, #3b82f6, transparent);
        }

        .trusted-heading-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #3b82f6;
          flex-shrink: 0;
          margin: 0 8px;
        }

        .trusted-subtext {
          color: #64748b;
          font-size: 1rem;
          max-width: 520px;
          margin: 0 auto;
          line-height: 1.65;
        }

        .trusted-logos-row {
          display: flex;
          gap: 18px;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          margin-bottom: 32px;
        }

        .trusted-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          padding: 22px 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 160px;
          min-height: 90px;
          box-shadow: 0 2px 12px -2px rgba(0,0,0,0.06);
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
        }

        .trusted-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px -6px rgba(37,99,235,0.12);
          border-color: #bfdbfe;
        }

        .trusted-card-logo {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .trusted-dots {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-top: 8px;
        }

        .trusted-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #cbd5e1;
          transition: background 0.3s ease;
        }

        .trusted-dot--active {
          background: #2563eb;
          width: 24px;
          border-radius: 5px;
        }

        @media (max-width: 768px) {
          .trusted-by-section { padding: 50px 0 40px; }
          .trusted-by-inner { padding: 0 20px; }
          .trusted-logos-row { gap: 12px; }
          .trusted-card { padding: 16px 18px; min-width: 130px; min-height: 74px; }
        }

        @media (max-width: 480px) {
          .trusted-logos-row { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
          .trusted-card { min-width: unset; width: 100%; }
        }
        /* ─── PROVEN PROCESS SECTION ─── */
        .proven-process-section {
          padding: 5rem 0;
          background: #ffffff;
        }

        .process-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .process-subtitle {
          font-family: var(--font-heading);
          font-size: 1.2rem;
          font-weight: 700;
          color: #1e293b;
          letter-spacing: 1px;
          margin-bottom: 0.5rem;
          text-transform: uppercase;
        }

        .process-title {
          font-family: var(--font-heading);
          font-size: 3.5rem;
          font-weight: 900;
          color: #0f172a;
          margin-bottom: 1rem;
          text-transform: uppercase;
        }

        .process-dots-divider {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 30px;
          margin: 1.5rem auto;
          position: relative;
          max-width: 500px;
        }

        .process-dots-divider::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 5%;
          width: 90%;
          height: 1px;
          background: #cbd5e1;
          z-index: 0;
        }

        .process-dots-divider span {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          z-index: 1;
          position: relative;
        }

        .process-desc {
          font-size: 1.2rem;
          color: #475569;
          font-weight: 500;
        }

        .process-steps-container {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0;
          flex-wrap: nowrap;
          padding-top: 50px;
        }

        .process-card {
          background: #ffffff;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.08);
          width: 15%;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0 1rem 2rem;
          text-align: center;
          margin-top: 30px;
        }

        .process-card-top-band {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 60px;
          border-radius: 12px 12px 0 0;
          z-index: 1;
        }

        .process-icon-wrapper {
          width: 90px;
          height: 90px;
          background: #ffffff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 8px solid;
          position: absolute;
          top: -45px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 2;
          box-shadow: 0 6px 16px rgba(0,0,0,0.12);
        }

        .process-icon-inner {
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .process-icon-inner svg {
          width: 100%;
          height: 100%;
        }

        .process-card-content {
          margin-top: 80px;
          width: 100%;
          position: relative;
          z-index: 2;
        }

        .process-card-title {
          font-family: var(--font-heading);
          font-size: 0.85rem;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 1rem;
          text-transform: uppercase;
          line-height: 1.3;
          white-space: pre-line;
          min-height: 2.6rem;
        }

        .process-card-desc {
          font-size: 0.8rem;
          color: #475569;
          line-height: 1.5;
          margin: 0;
        }

        .process-arrow {
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 5px;
          margin-top: 30px;
        }

        @media (max-width: 1200px) {
          .process-steps-container {
            flex-wrap: wrap;
            gap: 20px;
          }
          .process-card {
            width: 30%;
          }
          .process-arrow {
            display: none;
          }
        }

        @media (max-width: 768px) {
          .section-header h2 {
            font-size: 1.8rem;
            line-height: 1.3;
          }
          .section-header {
            margin-bottom: 40px;
          }
          .dm-feature-card {
            width: 100%;
            max-width: 300px;
            margin-left: auto;
            margin-right: auto;
          }
          .process-card {
            width: 45%;
          }
        }
        
        @media (max-width: 480px) {
          .process-card {
            width: 100%;
            max-width: 300px;
            margin-left: auto;
            margin-right: auto;
          }
          .process-title {
            font-size: 2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default DigitalMarketing;
