import React, { useEffect, useRef } from 'react';


/* ── Data ───────────────────────────────────────────────── */
const values = [
  { icon: '🚀', title: 'Innovation', color: '#1a73e8', desc: "We constantly push boundaries to deliver next-generation solutions that redefine what's possible." },
  { icon: '🤝', title: 'Integrity', color: '#0d9488', desc: "Trust is the foundation of every relationship. We operate with full transparency and honesty." },
  { icon: '⚡', title: 'Excellence', color: '#f59e0b', desc: "We hold ourselves to the highest standards, delivering quality that exceeds expectations every time." },
  { icon: '🌍', title: 'Impact', color: '#7c3aed', desc: "Our work drives real transformation — helping businesses grow, scale, and thrive in a digital world." },
  { icon: '🔒', title: 'Security', color: '#dc2626', desc: "We safeguard your data with enterprise-grade protection and industry-leading compliance standards." },
  { icon: '💡', title: 'Collaboration', color: '#16a34a', desc: "Great outcomes come from great partnerships. We work closely with clients as true strategic allies." },
];

const journey = [
  { 
    date: 'October 2024', 
    title: 'The Foundation', 
    desc: 'EDInvoSync was born with a singular vision: to revolutionize how enterprises exchange data, eliminating manual friction from global trade.',
    icon: '🌱',
    color: '#1a73e8'
  },
  { 
    date: 'December 2023', 
    title: 'First Major Milestone', 
    desc: 'Successfully launched our core EDI-to-ERP bridge, enabling seamless synchronization for our first wave of enterprise partners.',
    icon: '⚡',
    color: '#7c3aed'
  },
  { 
    date: 'Early 2024', 
    title: 'Global Expansion', 
    desc: 'Expanded our infrastructure to support multi-national logistics and complex cross-border compliance standards.',
    icon: '🌍',
    color: '#0d9488'
  },
  { 
    date: 'Present Day', 
    title: 'Innovation Without Limits', 
    desc: 'Today, we continue to push the boundaries of real-time connectivity, helping businesses scale faster than ever before.',
    icon: '🚀',
    color: '#f59e0b'
  },
];



/* ── Component ──────────────────────────────────────────── */
const About = () => {
  const revealRef = useRef(null);

  useEffect(() => {
    const els = revealRef.current?.querySelectorAll('.reveal');
    if (!els) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Stagger based on position among siblings in the same parent
            const siblings = [...entry.target.parentElement.querySelectorAll('.reveal')];
            const idx = siblings.indexOf(entry.target);
            entry.target.style.transitionDelay = `${idx * 0.13}s`;
            entry.target.classList.add('revealed');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div className="about-page" ref={revealRef}>

      {/* ── Hero Banner ── */}
      <section className="about-hero">
        <div className="about-hero-bg" />
        <div className="container about-hero-content">
          <span className="about-eyebrow reveal">Who We Are</span>
          <h1 className="about-hero-title reveal">Building the Future of <span className="text-gradient">Digital Connectivity</span></h1>
          <p className="about-hero-sub reveal">
            EDInvoSync is a technology company on a mission to eliminate friction from enterprise data exchange —
            empowering businesses to move faster, connect smarter, and grow without limits.
          </p>
        </div>
      </section>

      {/* ── Mission / Vision / Approach ── */}
      <section className="mva-section container">
        {[
          {
            icon: '🎯',
            label: 'Our Mission',
            heading: 'Simplify Every Data Exchange',
            text: 'We exist to make complex B2B data communication effortless. By automating and standardizing EDI workflows, invoicing, and real-time sync, we free businesses from operational bottlenecks — so they can focus on what truly matters: growth.',
            accent: '#1a73e8',
          },
          {
            icon: '🔭',
            label: 'Our Vision',
            heading: 'A Seamlessly Connected Business World',
            text: 'We envision a global ecosystem where every business — regardless of size — communicates and transacts with zero friction. Our vision is to be the connective tissue of modern enterprise, bridging systems, partners, and continents in real time.',
            accent: '#7c3aed',
          },
          {
            icon: '🧭',
            label: 'Our Approach',
            heading: 'Technology Meets Human Expertise',
            text: 'We combine deep technical engineering with hands-on client collaboration. Every solution starts with listening — understanding your unique workflows, pain points, and ambitions. Then we build, deploy, and continuously evolve with you.',
            accent: '#0d9488',
          },
        ].map((item, i) => (
          <div key={i} className="mva-card reveal" style={{ '--accent-col': item.accent }} data-num={`0${i + 1}`}>
            <div className="mva-visual">
              <div className="mva-icon-wrap">
                <span className="mva-icon">{item.icon}</span>
              </div>
              <div className="mva-deco-line" />
            </div>
            <div className="mva-text">
              <span className="mva-label">{item.label}</span>
              <h2 className="mva-heading">{item.heading}</h2>
              <p className="mva-desc">{item.text}</p>
            </div>
          </div>
        ))}
      </section>

      {/* ── Journey ── */}
      <section className="journey-section container">
        <div className="section-header reveal">
          <span className="about-eyebrow">Our History</span>
          <h2 className="section-title">Our <span className="text-gradient">Journey</span></h2>
          <p className="section-subtitle">A look back at how we've grown and where we're headed.</p>
        </div>
        
        <div className="journey-timeline">
          <div className="timeline-line" />
          {journey.map((item, i) => (
            <div key={i} className={`journey-item reveal ${i % 2 === 1 ? 'journey-item-reverse' : ''}`}>
              <div className="journey-marker" style={{ '--marker-col': item.color }}>
                <span className="marker-icon">{item.icon}</span>
              </div>
              <div className="journey-content">
                <span className="journey-date">{item.date}</span>
                <h3 className="journey-item-title">{item.title}</h3>
                <p className="journey-item-desc">{item.desc}</p>
              </div>
              <div className="journey-spacer" />
            </div>
          ))}
        </div>
      </section>

      {/* ── Core Values ── */}
      <section className="values-section">
        <div className="container">
          <div className="section-header reveal">
            <span className="about-eyebrow">What Drives Us</span>
            <h2 className="section-title">Our <span className="text-gradient">Core Values</span></h2>
            <p className="section-subtitle">The principles that shape every decision, every product, and every partnership we build.</p>
          </div>
          <div className="values-grid">
            {values.map((v, i) => (
              <div key={i} className="value-card reveal" style={{ '--vc': v.color, animationDelay: `${i * 0.1}s` }}>
                <div className="value-card-top">
                  <div className="value-icon-wrap">
                    <span className="value-icon">{v.icon}</span>
                  </div>
                  <div className="value-accent-bar" />
                </div>
                <h3 className="value-title">{v.title}</h3>
                <p className="value-desc">{v.desc}</p>
                <div className="value-glow" />
              </div>
            ))}
          </div>
        </div>
      </section>



      <style>{`
        /* ─ Page ─ */
        .about-page { position: relative; }

        /* ─ Hero ─ */
        .about-hero {
          position: relative;
          padding: 160px 0 80px;
          overflow: hidden;
          text-align: center;
        }
        .about-hero-bg {
          position: absolute; inset: 0;
          background: linear-gradient(135deg, #e8f4ff 0%, #f0e8ff 50%, #e8fff9 100%);
          z-index: 0;
        }
        .about-hero-bg::after {
          content: '';
          position: absolute; inset: 0;
          background: radial-gradient(ellipse 70% 60% at 50% 0%, rgba(26,115,232,0.12), transparent);
        }
        .about-hero-content { position: relative; z-index: 1; max-width: 780px; margin: 0 auto; }
        .about-eyebrow {
          display: inline-block;
          font-size: 0.78rem; font-weight: 700; letter-spacing: 0.14em;
          text-transform: uppercase; color: var(--accent, #1a73e8);
          background: rgba(26,115,232,0.1); padding: 0.35rem 1rem;
          border-radius: 50px; margin-bottom: 1.2rem;
        }
        .about-hero-title {
          font-size: clamp(2rem, 5vw, 3.2rem);
          font-weight: 800; line-height: 1.15;
          color: var(--text-main, #1a1a2e); margin-bottom: 1.2rem;
        }
        .about-hero-sub {
          font-size: 1.05rem; color: var(--text-muted, #5f6368);
          line-height: 1.8; max-width: 620px; margin: 0 auto;
        }

        /* ─ MVA Bento Grid ─ */
        .mva-section { 
          padding: 120px 0; 
          display: grid; 
          grid-template-columns: repeat(12, 1fr);
          grid-template-rows: repeat(2, auto);
          gap: 35px; 
          position: relative;
        }
        
        /* Animated Background Blobs */
        .mva-section::before, .mva-section::after {
          content: '';
          position: absolute;
          width: 400px; height: 400px;
          border-radius: 50%;
          filter: blur(100px);
          z-index: -1;
          opacity: 0.15;
          animation: blobFloat 20s infinite alternate ease-in-out;
        }
        .mva-section::before { background: #1a73e8; top: 10%; left: -10%; }
        .mva-section::after { background: #7c3aed; bottom: 10%; right: -10%; animation-delay: -5s; }

        @keyframes blobFloat {
          from { transform: translate(0, 0) scale(1); }
          to { transform: translate(50px, 100px) scale(1.2); }
        }
        
        .mva-card {
          position: relative;
          background: rgba(255, 255, 255, 0.5);
          backdrop-filter: blur(30px) saturate(180%);
          -webkit-backdrop-filter: blur(30px) saturate(180%);
          border-radius: 45px;
          padding: 60px;
          border: 1px solid rgba(255, 255, 255, 0.7);
          box-shadow: 
            0 20px 50px rgba(0,0,0,0.03),
            inset 0 0 0 1px rgba(255,255,255,0.4);
          transition: all 0.7s cubic-bezier(0.15, 0.83, 0.66, 1);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          cursor: pointer;
        }

        .mva-card:nth-child(1) { grid-column: span 7; }
        .mva-card:nth-child(2) { grid-column: span 5; }
        .mva-card:nth-child(3) { grid-column: span 12; flex-direction: row; align-items: center; gap: 80px; }

        /* Shine Sweep */
        .mva-card::before {
          content: '';
          position: absolute;
          top: 0; left: -150%;
          width: 100%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          transition: 0.8s;
          z-index: 5;
        }
        .mva-card:hover::before { left: 150%; }

        .mva-card:hover {
          transform: translateY(-15px) rotateX(2deg) rotateY(-1deg);
          background: rgba(255, 255, 255, 0.9);
          box-shadow: 0 40px 100px rgba(0,0,0,0.1);
          border-color: var(--accent-col);
        }

        /* Large Background Number */
        .mva-card::after {
          content: attr(data-num);
          position: absolute;
          top: -20px; right: 20px;
          font-size: 10rem; font-weight: 900;
          color: var(--accent-col);
          opacity: 0.03;
          transition: all 0.6s ease;
          pointer-events: none;
        }
        .mva-card:hover::after {
          opacity: 0.08;
          transform: translateY(20px) scale(1.1);
        }

        .mva-visual { 
          display: flex; 
          flex-direction: column; 
          align-items: flex-start; 
          gap: 25px; 
          margin-bottom: 40px;
          position: relative;
          z-index: 2;
        }
        
        .mva-card:nth-child(3) .mva-visual { margin-bottom: 0; }

        .mva-icon-wrap {
          width: 90px; height: 90px; border-radius: 28px;
          background: linear-gradient(135deg, var(--accent-col, #1a73e8) 0%, color-mix(in srgb, var(--accent-col, #1a73e8) 60%, #fff) 100%);
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 15px 35px color-mix(in srgb, var(--accent-col, #1a73e8) 40%, transparent);
          transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        
        .mva-card:hover .mva-icon-wrap {
          transform: rotate(-10deg) scale(1.15) translateY(-5px);
          box-shadow: 0 25px 50px color-mix(in srgb, var(--accent-col, #1a73e8) 50%, transparent);
        }

        .mva-icon { font-size: 2.5rem; filter: drop-shadow(0 5px 10px rgba(0,0,0,0.1)); }

        .mva-deco-line {
          width: 5px; height: 50px;
          background: linear-gradient(to bottom, var(--accent-col, #1a73e8), transparent);
          border-radius: 10px;
          opacity: 0.6;
        }
        
        .mva-text { position: relative; z-index: 2; }
        .mva-card:nth-child(3) .mva-text { flex: 1; }

        .mva-label {
          display: inline-block; font-size: 0.8rem; font-weight: 900;
          letter-spacing: 0.2em; text-transform: uppercase;
          color: var(--accent-col, #1a73e8);
          background: color-mix(in srgb, var(--accent-col, #1a73e8) 15%, transparent);
          padding: 0.5rem 1.5rem; border-radius: 50px; margin-bottom: 25px;
          box-shadow: inset 0 0 10px color-mix(in srgb, var(--accent-col) 10%, transparent);
        }

        .mva-heading {
          font-size: clamp(1.8rem, 4vw, 2.8rem); font-weight: 900;
          color: #0f172a; margin-bottom: 20px; line-height: 1.1;
          letter-spacing: -0.04em;
        }

        .mva-desc { 
          color: #475569; 
          font-size: 1.1rem; 
          line-height: 1.8; 
          font-weight: 500;
          max-width: 90%;
        }

        /* ─ Values ─ */
        .values-section { background: linear-gradient(135deg, #f0f4ff 0%, #f5f0ff 50%, #f0fff8 100%); padding: 90px 0; }
        .section-header { text-align: center; margin-bottom: 60px; }
        .values-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px; }

        @keyframes iconFloat {
          0%,100% { transform: translateY(0) scale(1); }
          50%      { transform: translateY(-6px) scale(1.08); }
        }
        @keyframes barExpand { from { width: 0; } to { width: 100%; } }
        @keyframes glowPulse {
          0%,100% { opacity: 0; transform: scale(0.85); }
          50%      { opacity: 1; transform: scale(1); }
        }

        .value-card {
          background: #fff;
          border-radius: 22px;
          padding: 2.2rem 1.8rem 2rem;
          border: 1.5px solid rgba(0,0,0,0.06);
          box-shadow: 0 4px 20px rgba(0,0,0,0.05);
          position: relative;
          overflow: hidden;
          transition: transform 0.35s cubic-bezier(0.175,0.885,0.32,1.275),
                      box-shadow 0.35s ease,
                      border-color 0.3s ease;
          cursor: default;
        }
        .value-card::before {
          content: '';
          position: absolute; inset: 0;
          border-radius: 22px;
          padding: 1.5px;
          background: linear-gradient(135deg, var(--vc, #1a73e8), transparent 60%);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.35s ease;
        }
        .value-card:hover { transform: translateY(-10px) scale(1.02); box-shadow: 0 24px 55px rgba(0,0,0,0.1); border-color: transparent; }
        .value-card:hover::before { opacity: 1; }

        .value-card-top { display: flex; align-items: center; gap: 14px; margin-bottom: 1.3rem; }
        .value-icon-wrap {
          width: 58px; height: 58px; border-radius: 16px; flex-shrink: 0;
          background: color-mix(in srgb, var(--vc, #1a73e8) 12%, #fff);
          display: flex; align-items: center; justify-content: center;
          transition: background 0.3s ease;
        }
        .value-card:hover .value-icon-wrap { background: color-mix(in srgb, var(--vc, #1a73e8) 20%, #fff); }
        .value-icon {
          font-size: 1.9rem; display: block;
          animation: iconFloat 3s ease-in-out infinite;
        }
        .value-card:nth-child(2) .value-icon { animation-delay: 0.5s; }
        .value-card:nth-child(3) .value-icon { animation-delay: 1s; }
        .value-card:nth-child(4) .value-icon { animation-delay: 1.5s; }
        .value-card:nth-child(5) .value-icon { animation-delay: 2s; }
        .value-card:nth-child(6) .value-icon { animation-delay: 2.5s; }

        .value-accent-bar {
          height: 4px; border-radius: 4px; flex: 1;
          background: linear-gradient(90deg, var(--vc, #1a73e8), transparent);
          width: 0;
          transition: width 0.5s ease 0.1s;
        }
        .value-card:hover .value-accent-bar { width: 100%; }

        .value-title {
          font-size: 1.15rem; font-weight: 700;
          color: var(--text-main, #1a1a2e); margin-bottom: 0.65rem;
          transition: color 0.3s ease;
        }
        .value-card:hover .value-title { color: var(--vc, #1a73e8); }
        .value-desc { color: var(--text-muted, #5f6368); font-size: 0.9rem; line-height: 1.72; position: relative; z-index: 1; }

        .value-glow {
          position: absolute; bottom: -30px; right: -30px;
          width: 100px; height: 100px; border-radius: 50%;
          background: radial-gradient(circle, color-mix(in srgb, var(--vc,#1a73e8) 30%, transparent), transparent 70%);
          opacity: 0;
          transition: opacity 0.4s ease, transform 0.4s ease;
          pointer-events: none;
        }
        .value-card:hover .value-glow { opacity: 1; transform: scale(1.4); }
        
        /* ─ Journey ─ */
        .journey-section { padding: 100px 0; position: relative; }
        .journey-timeline {
          position: relative;
          max-width: 1000px;
          margin: 60px auto 0;
          display: flex;
          flex-direction: column;
          gap: 40px;
        }
        .timeline-line {
          position: absolute;
          left: 50%; top: 0; bottom: 0;
          width: 2px;
          background: linear-gradient(to bottom, transparent, rgba(26,115,232,0.2) 15%, rgba(26,115,232,0.2) 85%, transparent);
          transform: translateX(-50%);
          z-index: 0;
        }
        .journey-item {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          z-index: 1;
          width: 100%;
        }
        .journey-marker {
          width: 60px; height: 60px;
          background: #fff;
          border: 3px solid var(--marker-col);
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          box-shadow: 0 0 20px color-mix(in srgb, var(--marker-col) 30%, transparent);
          z-index: 2;
        }
        .marker-icon { font-size: 1.6rem; }
        
        .journey-content {
          width: 45%;
          padding: 30px;
          background: #fff;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
          border: 1px solid rgba(0,0,0,0.03);
          transition: transform 0.3s ease;
        }
        .journey-item:hover .journey-content { transform: translateY(-5px); }
        
        .journey-spacer { width: 45%; }
        
        .journey-item-reverse { flex-direction: row-reverse; }
        
        .journey-date {
          display: inline-block;
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--accent, #1a73e8);
          margin-bottom: 10px;
          padding: 4px 12px;
          background: rgba(26,115,232,0.08);
          border-radius: 50px;
        }
        .journey-item-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-main, #1a1a2e);
          margin-bottom: 12px;
        }
        .journey-item-desc {
          font-size: 0.95rem;
          color: var(--text-muted, #5f6368);
          line-height: 1.6;
        }

        /* ─ Scroll Reveal ─ */
        .reveal { opacity: 0; transform: translateY(40px); transition: opacity 0.65s ease, transform 0.65s ease; }
        .revealed { opacity: 1; transform: translateY(0); }

        /* ─ Responsive ─ */
        @media (max-width: 1024px) {
          .values-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 768px) {
          .mva-section { grid-template-columns: 1fr; gap: 20px; }
          .mva-card:nth-child(1), .mva-card:nth-child(2), .mva-card:nth-child(3) { 
            grid-column: span 12; 
            flex-direction: column; 
            gap: 20px;
            padding: 40px 30px;
          }
          .mva-deco-line { display: none; }
          .values-grid { grid-template-columns: 1fr; }
          
          .timeline-line { left: 30px; transform: none; }
          .journey-item, .journey-item-reverse { flex-direction: column; align-items: flex-start; padding-left: 80px; }
          .journey-marker { left: 0; transform: none; }
          .journey-content { width: 100%; }
          .journey-spacer { display: none; }
        }
      `}</style>
    </div>
  );
};

export default About;
