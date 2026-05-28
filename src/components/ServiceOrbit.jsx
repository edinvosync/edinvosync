import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const ServiceOrbit = () => {
  const services = [
    {
      id: 1,
      title: "POS SYSTEM",
      desc: "Smart POS, Billing & Inventory Management",
      link: "/pos",
      color: "#00d2ff",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      )
    },
    {
      id: 2,
      title: "CREDIT CARD PROCESSING",
      desc: "Secure, Fast & Reliable Payment Processing",
      link: "/credit-card-processing",
      color: "#0084ff",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
          <line x1="1" y1="10" x2="23" y2="10" />
        </svg>
      )
    },
    {
      id: 3,
      title: "DIGITAL MARKETING",
      desc: "Promote, Engage & Grow Your Business",
      link: "/digital-marketing",
      color: "#00f2fe",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M11 5L6 9H2V15H6L11 19V5Z" />
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.53 8.47a5 5 0 0 1 0 7.07" />
        </svg>
      )
    },
    {
      id: 4,
      title: "EDI INTEGRATION",
      desc: "Seamless Data Exchange & Supply Chain Automation",
      link: "https://edinvosync.com/converter",
      isExternal: true,
      color: "#4facfe",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12" />
        </svg>
      )
    },
    {
      id: 5,
      title: "WEB DEVELOPMENT",
      desc: "Custom Websites That Engage & Convert",
      link: "/web-development",
      color: "#00c6ff",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
          <line x1="14" y1="4" x2="10" y2="20" />
        </svg>
      )
    }
  ];

  return (
    <div className="unique-orbit-wrapper">
      {/* Decorative background ripples */}
      <div className="bg-ripple ripple-1"></div>
      <div className="bg-ripple ripple-2"></div>

      <div className="orbit-main-container">
        {/* Central Glowing Core */}
        <div className="tech-core">
          <div className="core-glow"></div>
          <div className="core-circuit"></div>
          <div className="core-inner">
            <img src={logo} alt="EDInvoSync" className="core-logo" />
          </div>
          {/* Rotating tech ring */}
          <div className="tech-ring"></div>
        </div>

        {/* Orbit Path with subtle glow */}
        <div className="main-orbit-path"></div>

        {/* Orbiting Nodes */}
        {services.map((s, index) => {
          const angle = (index * (360 / services.length)) - 90;
          const radius = 240;

          const NodeContent = (
            <>
              <div className="node-ripple"></div>
              <div className="node-card">
                <div className="node-icon-wrapper">
                  {s.icon}
                </div>
                <div className="node-text">
                  <h4>{s.title}</h4>
                  <p>{s.desc}</p>
                </div>
              </div>
            </>
          );

          const commonProps = {
            className: "tech-node",
            style: {
              '--angle': `${angle}deg`,
              '--radius': `${radius}px`,
              '--node-color': s.color,
              '--delay': `${index * 0.1}s`,
              cursor: 'pointer',
              textDecoration: 'none'
            }
          };

          if (s.isExternal) {
            return (
              <a key={s.id} href={s.link} {...commonProps}>
                {NodeContent}
              </a>
            );
          }

          return (
            <Link key={s.id} to={s.link || "/services"} {...commonProps}>
              {NodeContent}
            </Link>
          );
        })}
      </div>

      <style>{`
        .unique-orbit-wrapper {
          position: relative;
          width: 700px;
          height: 700px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto;
          perspective: 1000px;
        }

        .orbit-main-container {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* ── Central Tech Core ── */
        .tech-core {
          position: relative;
          width: 200px;
          height: 200px;
          z-index: 20;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .core-inner {
          width: 140px;
          height: 140px;
          background: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 15px;
          z-index: 5;
          box-shadow: 0 0 30px rgba(0, 132, 255, 0.2);
          border: 2px solid rgba(0, 132, 255, 0.1);
        }

        .core-logo {
          width: 100%;
          height: auto;
          object-fit: contain;
        }

        .core-glow {
          position: absolute;
          width: 240px;
          height: 240px;
          background: radial-gradient(circle, rgba(0, 132, 255, 0.15) 0%, transparent 70%);
          border-radius: 50%;
          animation: pulseGlow 4s ease-in-out infinite;
        }

        .tech-ring {
          position: absolute;
          width: 180px;
          height: 180px;
          border: 2px dashed var(--accent);
          border-radius: 50%;
          opacity: 0.3;
          animation: rotateClockwise 20s linear infinite;
        }

        @keyframes rotateClockwise {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes pulseGlow {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.2); opacity: 0.8; }
        }

        /* ── Orbiting Nodes ── */
        .main-orbit-path {
          position: absolute;
          width: 480px;
          height: 480px;
          border: 1px solid rgba(0, 132, 255, 0.1);
          border-radius: 50%;
          pointer-events: none;
        }

        .tech-node {
          position: absolute;
          width: 180px;
          transform: rotate(var(--angle)) translateX(var(--radius)) rotate(calc(-1 * var(--angle)));
          z-index: 10;
          animation: nodeFloat 4s ease-in-out infinite;
          animation-delay: var(--delay);
        }

        .node-card {
          background: white;
          border-radius: 50%;
          width: 160px;
          height: 160px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 20px;
          text-align: center;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          border: 1px solid rgba(0, 132, 255, 0.1);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          position: relative;
          z-index: 2;
        }

        .tech-node:hover .node-card {
          transform: scale(1.1) translateY(-10px);
          border-color: var(--node-color);
          box-shadow: 0 20px 40px rgba(0, 132, 255, 0.15);
        }

        .node-icon-wrapper {
          width: 44px;
          height: 44px;
          color: var(--node-color);
          margin-bottom: 8px;
          transition: transform 0.3s ease;
        }

        .tech-node:hover .node-icon-wrapper {
          transform: scale(1.2);
        }

        .node-text h4 {
          font-size: 0.75rem;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 4px;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }

        .node-text p {
          font-size: 0.6rem;
          color: #64748b;
          line-height: 1.2;
          max-width: 110px;
          margin: 0 auto;
        }

        /* ── Animations ── */
        .node-ripple {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 100%;
          height: 100%;
          transform: translate(-50%, -50%);
          border: 2px solid var(--node-color);
          border-radius: 50%;
          opacity: 0;
          pointer-events: none;
          z-index: 1;
        }

        .tech-node:hover .node-ripple {
          animation: rippleEffect 1.5s ease-out infinite;
        }

        @keyframes rippleEffect {
          0% { transform: translate(-50%, -50%) scale(1); opacity: 0.5; }
          100% { transform: translate(-50%, -50%) scale(1.5); opacity: 0; }
        }

        @keyframes nodeFloat {
          0%, 100% { transform: rotate(var(--angle)) translateX(var(--radius)) rotate(calc(-1 * var(--angle))) translateY(0); }
          50% { transform: rotate(var(--angle)) translateX(var(--radius)) rotate(calc(-1 * var(--angle))) translateY(-10px); }
        }

        /* ── Background Elements ── */
        .bg-ripple {
          position: absolute;
          border-radius: 50%;
          border: 1px solid rgba(0, 132, 255, 0.05);
          pointer-events: none;
        }

        .ripple-1 { width: 800px; height: 800px; animation: pulseGlow 10s infinite; }
        .ripple-2 { width: 1000px; height: 1000px; animation: pulseGlow 15s infinite reverse; }

        @media (max-width: 1200px) {
          .unique-orbit-wrapper { transform: scale(0.8); }
        }

        @media (max-width: 768px) {
          .unique-orbit-wrapper { transform: scale(0.6); }
        }

        @media (max-width: 480px) {
          .unique-orbit-wrapper { transform: scale(0.45); }
        }
      `}</style>
    </div>
  );
};

export default ServiceOrbit;