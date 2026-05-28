import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const ServiceDiagram = () => {
  const [activeNodes, setActiveNodes] = useState([]);

  useEffect(() => {
    const timeouts = [];
    [1, 2, 3, 4, 5].forEach((num, index) => {
      timeouts.push(setTimeout(() => {
        setActiveNodes(prev => [...prev, num]);
      }, 500 * (index + 1))); 
    });

    return () => timeouts.forEach(clearTimeout);
  }, []);

  const services = [
    {
      id: 1, num: "01", title: "CREDIT CARD PROCESSING", desc: "Secure, Fast & Reliable Payment Processing", link: "/credit-card-processing",
      color: "#f97316", gradStart: "#fb923c", gradEnd: "#ea580c",
      startY: 160, endY: 45
    },
    {
      id: 2, num: "02", title: "POS SYSTEM", desc: "Smart POS, Billing & Inventory Management", link: "/pos",
      color: "#3b82f6", gradStart: "#60a5fa", gradEnd: "#2563eb",
      startY: 210, endY: 155
    },
    {
      id: 3, num: "03", title: "DIGITAL MARKETING", desc: "Promote, Engage & Grow Your Business", link: "/digital-marketing",
      color: "#ec4899", gradStart: "#f472b6", gradEnd: "#db2777",
      startY: 265, endY: 265
    },
    {
      id: 4, num: "04", title: "WEB DEVELOPMENT", desc: "Custom Websites That Engage & Convert", link: "/web-development",
      color: "#10b981", gradStart: "#34d399", gradEnd: "#059669",
      startY: 320, endY: 375
    },
    {
      id: 5, num: "05", title: "EDI INTEGRATION", desc: "Seamless Data Exchange & Supply Chain Automation", link: "https://edinvosync.com/converter", isExternal: true,
      color: "#8b5cf6", gradStart: "#a78bfa", gradEnd: "#7c3aed",
      startY: 370, endY: 485
    }
  ];

  const getIcon = (id) => {
    switch(id) {
      case 1: return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
          <line x1="1" y1="10" x2="23" y2="10" />
        </svg>
      );
      case 2: return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      );
      case 3: return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M11 5L6 9H2V15H6L11 19V5Z" />
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.53 8.47a5 5 0 0 1 0 7.07" />
        </svg>
      );
      case 4: return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      );
      case 5: return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      );
      default: return null;
    }
  };

  return (
    <div className="service-diagram-wrapper">
      <div className="sd-left-core">
        <div className="sd-core-outer">
          <div className="sd-core-glow"></div>
          <div className="sd-core-inner">
            <img src={logo} alt="EDInvosync" className="sd-core-logo" />
            <p className="sd-core-text">Powering Your<br />Business Ecosystem</p>
          </div>
        </div>
      </div>

      <div className="sd-cables-container">
        <svg className="sd-cables-svg" viewBox="0 0 130 530">
          <defs>
            {services.map(s => (
              <linearGradient key={`grad-${s.id}`} id={`plug-grad-${s.id}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={s.gradStart} />
                <stop offset="100%" stopColor={s.gradEnd} />
              </linearGradient>
            ))}
          </defs>
          
          {services.map((service) => {
            const isActive = activeNodes.includes(service.id);
            return (
              <g key={`cable-${service.id}`} className={isActive ? 'cable-active' : 'cable-inactive'}>
                {/* Curved solid wire */}
                <path 
                  d={`M 0 ${service.startY} C 35 ${service.startY}, 35 ${service.endY}, 65 ${service.endY}`} 
                  fill="none" 
                  stroke={service.color} 
                  strokeWidth="4" 
                  className="sd-cable-path"
                />
                
                {/* 3D Plug */}
                <g className="sd-plug-group">
                  <rect x="65" y={service.endY - 12} width="24" height="24" rx="4" fill={`url(#plug-grad-${service.id})`} />
                  <line x1="71" y1={service.endY - 8} x2="71" y2={service.endY + 8} stroke="#ffffff" strokeOpacity="0.4" strokeWidth="1" />
                  <line x1="75" y1={service.endY - 8} x2="75" y2={service.endY + 8} stroke="#ffffff" strokeOpacity="0.4" strokeWidth="1" />
                  <line x1="79" y1={service.endY - 8} x2="79" y2={service.endY + 8} stroke="#ffffff" strokeOpacity="0.4" strokeWidth="1" />
                  <rect x="89" y={service.endY - 6} width="10" height="12" rx="1.5" fill="#cbd5e1" />
                  <rect x="91" y={service.endY - 3} width="6" height="6" rx="1" fill="#94a3b8" />
                </g>

                {/* Energy beam from plug to node */}
                <path 
                  d={`M 99 ${service.endY} L 130 ${service.endY}`} 
                  stroke={service.color} 
                  strokeWidth="4" 
                  strokeDasharray="6 4" 
                  className="energy-beam" 
                  style={{ filter: `drop-shadow(0 0 6px ${service.color})` }}
                />
              </g>
            );
          })}
        </svg>
      </div>

      <div className="sd-right-nodes">
        {services.map((service) => {
          const isActive = activeNodes.includes(service.id);
          const NodeContent = (
            <div className={`sd-node-wrapper ${isActive ? 'active' : ''}`}>
              <div className="sd-node" style={{ '--node-color': service.color }}>
                {/* 3D Squircle Icon */}
                <div className="sd-node-icon-box" style={{ background: `linear-gradient(135deg, ${service.gradStart}, ${service.gradEnd})` }}>
                  {getIcon(service.id)}
                </div>
                
                <div className="sd-node-content">
                  <h4>{service.title}</h4>
                  <p>{service.desc}</p>
                </div>
                
                <div className="sd-node-divider"></div>
                
                <div className="sd-node-right">
                  <div className="sd-node-num" style={{ color: `${service.color}66` }}>{service.num}</div>
                  <div className="sd-node-line-indicator" style={{ '--node-color': service.color }}></div>
                </div>
              </div>
            </div>
          );

          if (service.isExternal) {
            return (
              <a key={service.id} href={service.link} target="_blank" rel="noopener noreferrer" className="sd-node-link">
                {NodeContent}
              </a>
            );
          }

          return (
            <Link key={service.id} to={service.link} className="sd-node-link">
              {NodeContent}
            </Link>
          );
        })}
      </div>

      <style>{`
        .service-diagram-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          max-width: 1000px;
          margin: 0 auto;
          position: relative;
          padding: 2rem 0;
        }

        /* ── Core (Left) ── */
        .sd-left-core {
          flex-shrink: 0;
          z-index: 10;
          position: relative;
        }
        
        .sd-core-outer {
          width: 320px;
          height: 240px;
          border-radius: 32px;
          background: white;
          box-shadow: 0 10px 40px rgba(0, 132, 255, 0.08), inset 0 0 0 6px #f8fafc;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          border: 10px solid #ffffff;
        }

        .sd-core-glow {
          position: absolute;
          width: 360px;
          height: 280px;
          border-radius: 40px;
          background: radial-gradient(ellipse, rgba(0, 132, 255, 0.05) 0%, transparent 70%);
          z-index: -1;
        }

        .sd-core-inner {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          background: white;
          border-radius: 24px;
          width: 270px;
          height: 190px;
        }

        .sd-core-logo {
          width: 140px;
          height: auto;
          margin-bottom: 0.5rem;
        }

        .sd-core-text {
          font-size: 0.8rem;
          color: #64748b;
          font-weight: 500;
          line-height: 1.4;
        }

        /* ── Cables (Middle) ── */
        .sd-cables-container {
          width: 130px;
          height: 530px;
          flex-shrink: 0;
          position: relative;
        }

        .sd-cables-svg {
          width: 100%;
          height: 100%;
          display: block;
        }

        .cable-inactive {
          opacity: 0;
        }

        .cable-active .sd-cable-path {
          stroke-dasharray: 400;
          stroke-dashoffset: 400;
          animation: drawWire 0.8s ease-out forwards;
        }

        .cable-active .sd-plug-group {
          opacity: 0;
          animation: fadeIn 0.4s ease-out 0.8s forwards;
        }

        .cable-active .energy-beam {
          opacity: 0;
          animation: fadeIn 0.4s ease-out 1.2s forwards, beamFlow 0.5s linear infinite 1.2s;
        }

        @keyframes drawWire {
          to { stroke-dashoffset: 0; }
        }

        @keyframes beamFlow {
          to { stroke-dashoffset: -10; }
        }

        @keyframes fadeIn {
          to { opacity: 1; }
        }

        /* ── Nodes (Right) ── */
        .sd-right-nodes {
          display: flex;
          flex-direction: column;
          gap: 20px;
          z-index: 10;
          flex-grow: 1;
        }

        .sd-node-link {
          text-decoration: none;
          display: block;
        }

        .sd-node-wrapper {
          opacity: 0;
          transform: translateX(20px);
          transition: all 0.5s ease;
        }

        .sd-node-wrapper.active {
          opacity: 1;
          transform: translateX(0);
        }

        .sd-node-wrapper:hover .sd-node {
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
        }

        .sd-node {
          background: white;
          height: 90px;
          display: flex;
          align-items: center;
          border-radius: 12px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.04);
          position: relative;
          transition: all 0.3s ease;
        }

        .sd-node-icon-box {
          width: 60px;
          height: 60px;
          border-radius: 14px;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-left: -20px; /* Sticks out to touch the SVG beam */
          box-shadow: inset 0 2px 4px rgba(255,255,255,0.3), 0 8px 16px rgba(0,0,0,0.15);
          flex-shrink: 0;
          position: relative;
          z-index: 2;
        }

        .sd-node-icon-box svg {
          width: 28px;
          height: 28px;
        }

        .sd-node-content {
          flex-grow: 1;
          padding: 0 15px 0 20px;
        }

        .sd-node-content h4 {
          font-size: 0.95rem;
          font-weight: 800;
          color: #0f172a;
          margin: 0 0 4px 0;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .sd-node-content p {
          font-size: 0.8rem;
          color: #64748b;
          margin: 0;
          line-height: 1.4;
          max-width: 250px;
        }

        .sd-node-divider {
          width: 1px;
          height: 40px;
          border-left: 2px solid #f1f5f9;
          margin-right: 25px;
        }

        .sd-node-right {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          justify-content: center;
          padding-right: 25px;
          gap: 6px;
        }

        .sd-node-num {
          font-size: 1.6rem;
          font-weight: 300;
          line-height: 1;
          font-family: 'Inter', sans-serif;
        }

        .sd-node-line-indicator {
          width: 26px;
          height: 2px;
          background-color: var(--node-color);
          border-radius: 2px;
          position: relative;
        }

        .sd-node-line-indicator::after {
          content: '';
          position: absolute;
          right: -8px;
          top: 50%;
          transform: translateY(-50%);
          width: 5px;
          height: 5px;
          background-color: var(--node-color);
          border-radius: 50%;
        }

        @media (max-width: 1024px) {
          .service-diagram-wrapper {
            flex-direction: column;
            gap: 2rem;
          }
          .sd-cables-container {
            display: none;
          }
          .sd-node-icon-box {
            margin-left: 15px;
          }
        }
      `}</style>
    </div>
  );
};

export default ServiceDiagram;
