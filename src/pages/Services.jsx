import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const POSIllustration = () => (
  <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
    <defs>
      <linearGradient id="posGrad" x1="0" y1="0" x2="400" y2="300" gradientUnits="userSpaceOnUse">
        <stop stopColor="#e8f4ff" /><stop offset="1" stopColor="#d0eaff" />
      </linearGradient>
      <style>{`
        @keyframes posScan{0%,100%{transform:translateY(0)}50%{transform:translateY(44px)}}
        @keyframes posCoin{0%,100%{transform:translateY(0)}50%{transform:translateY(-12px)}}
        @keyframes posGlow{0%,100%{opacity:0.3}50%{opacity:1}}
        @keyframes posCard{0%,100%{transform:translateX(0)}50%{transform:translateX(-6px)}}
        .pos-scan{animation:posScan 2s ease-in-out infinite}
        .pos-coin{animation:posCoin 1.8s ease-in-out infinite}
        .pos-glow{animation:posGlow 1.4s ease-in-out infinite}
        .pos-card{animation:posCard 2.5s ease-in-out infinite}
      `}</style>
    </defs>
    <rect width="400" height="300" rx="20" fill="url(#posGrad)" />
    <rect x="110" y="40" width="180" height="130" rx="14" fill="#1a73e8" opacity="0.9" />
    <rect x="120" y="50" width="160" height="100" rx="8" fill="#fff" opacity="0.95" />
    <rect x="130" y="60" width="60" height="8" rx="4" fill="#1a73e8" opacity="0.35" />
    <rect x="130" y="74" width="100" height="6" rx="3" fill="#1a73e8" opacity="0.2" />
    <rect x="130" y="86" width="80" height="6" rx="3" fill="#1a73e8" opacity="0.2" />
    <rect className="pos-scan" x="122" y="52" width="156" height="3" rx="2" fill="#00b0ff" opacity="0.7" />
    <rect x="200" y="110" width="60" height="24" rx="6" fill="#1a73e8" />
    <rect x="204" y="116" width="52" height="12" rx="3" fill="#fff" opacity="0.7" />
    <rect x="185" y="170" width="30" height="20" rx="4" fill="#1a73e8" opacity="0.5" />
    <rect x="160" y="188" width="80" height="10" rx="5" fill="#1a73e8" opacity="0.4" />
    <g className="pos-card">
      <rect x="290" y="100" width="60" height="90" rx="10" fill="#0d47a1" opacity="0.8" />
      <rect x="298" y="110" width="44" height="30" rx="6" fill="#fff" opacity="0.2" />
      <rect x="300" y="148" width="40" height="5" rx="2" fill="#00b0ff" />
      <rect x="300" y="158" width="40" height="5" rx="2" fill="#00b0ff" opacity="0.5" />
      <rect x="300" y="168" width="40" height="5" rx="2" fill="#00b0ff" opacity="0.3" />
    </g>
    <g className="pos-coin">
      <circle cx="70" cy="165" r="24" fill="#ffd54f" opacity="0.9" />
      <circle cx="70" cy="165" r="17" fill="#ffca28" />
      <text x="63" y="171" fontSize="15" fill="#e65100" fontWeight="bold">$</text>
    </g>
    <circle className="pos-glow" cx="340" cy="55" r="7" fill="#00b0ff" />
  </svg>
);

const WebDevIllustration = () => (
  <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
    <defs>
      <linearGradient id="webGrad" x1="0" y1="0" x2="400" y2="300" gradientUnits="userSpaceOnUse">
        <stop stopColor="#e3f2fd" /><stop offset="1" stopColor="#e8eaf6" />
      </linearGradient>
      <style>{`
        @keyframes webCursor{0%,49%{opacity:1}50%,100%{opacity:0}}
        @keyframes webFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-9px)}}
        @keyframes webBar{0%{width:0}100%{width:110px}}
        @keyframes webPing{0%,100%{opacity:0.2}33%{opacity:1}}
        .web-cursor{animation:webCursor 1s step-end infinite}
        .web-phone{animation:webFloat 2.6s ease-in-out infinite}
        .web-p1{animation:webPing 1.5s ease-in-out infinite}
        .web-p2{animation:webPing 1.5s ease-in-out 0.5s infinite}
        .web-p3{animation:webPing 1.5s ease-in-out 1s infinite}
      `}</style>
    </defs>
    <rect width="400" height="300" rx="20" fill="url(#webGrad)" />
    <rect x="30" y="25" width="250" height="185" rx="12" fill="#fff" stroke="#1a73e8" strokeWidth="1.5" />
    <rect x="30" y="25" width="250" height="32" rx="12" fill="#1a73e8" />
    <rect x="30" y="45" width="250" height="12" fill="#1a73e8" />
    <circle cx="50" cy="41" r="5" fill="#ff5252" />
    <circle cx="66" cy="41" r="5" fill="#ffd740" />
    <circle cx="82" cy="41" r="5" fill="#69f0ae" />
    <rect x="100" y="35" width="150" height="12" rx="6" fill="#fff" opacity="0.2" />
    <rect x="45" y="70" width="90" height="10" rx="4" fill="#1a73e8" opacity="0.5" />
    <rect className="web-cursor" x="138" y="70" width="3" height="10" rx="1" fill="#1a73e8" />
    <rect x="45" y="88" width="210" height="5" rx="3" fill="#90a4ae" opacity="0.4" />
    <rect x="45" y="99" width="170" height="5" rx="3" fill="#90a4ae" opacity="0.3" />
    <rect x="45" y="116" width="70" height="55" rx="8" fill="#e3f2fd" />
    <rect x="123" y="116" width="70" height="55" rx="8" fill="#e8eaf6" />
    <rect x="201" y="116" width="65" height="55" rx="8" fill="#fce4ec" />
    <rect x="45" y="180" width="65" height="16" rx="8" fill="#1a73e8" />
    <rect x="45" y="206" width="110" height="7" rx="3" fill="#1a73e8" opacity="0.15" />
    <rect className="web-p1" x="161" y="206" width="8" height="7" rx="3" fill="#1a73e8" opacity="0.8" />
    <rect x="45" y="219" width="80" height="7" rx="3" fill="#00b0ff" opacity="0.15" />
    <rect className="web-p2" x="131" y="219" width="8" height="7" rx="3" fill="#00b0ff" opacity="0.8" />
    <rect x="45" y="232" width="95" height="7" rx="3" fill="#1a73e8" opacity="0.1" />
    <rect className="web-p3" x="146" y="232" width="8" height="7" rx="3" fill="#1a73e8" opacity="0.8" />
    <g className="web-phone">
      <rect x="298" y="58" width="72" height="135" rx="14" fill="#0d47a1" opacity="0.9" />
      <rect x="306" y="72" width="56" height="95" rx="7" fill="#fff" opacity="0.12" />
      <rect x="322" y="200" width="24" height="5" rx="2" fill="#fff" opacity="0.4" />
      <rect x="310" y="78" width="40" height="6" rx="3" fill="#fff" opacity="0.2" />
      <rect x="310" y="90" width="40" height="6" rx="3" fill="#fff" opacity="0.15" />
      <rect x="310" y="102" width="30" height="6" rx="3" fill="#fff" opacity="0.1" />
    </g>
  </svg>
);

const CreditCardIllustration = () => (
  <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
    <defs>
      <linearGradient id="ccBg" x1="0" y1="0" x2="400" y2="300" gradientUnits="userSpaceOnUse">
        <stop stopColor="#e8f5e9" /><stop offset="1" stopColor="#e3f2fd" />
      </linearGradient>
      <linearGradient id="ccCard1" x1="60" y1="60" x2="280" y2="200" gradientUnits="userSpaceOnUse">
        <stop stopColor="#1565c0" /><stop offset="1" stopColor="#00b0ff" />
      </linearGradient>
      <linearGradient id="ccCard2" x1="80" y1="130" x2="320" y2="240" gradientUnits="userSpaceOnUse">
        <stop stopColor="#0d47a1" /><stop offset="1" stopColor="#1a73e8" />
      </linearGradient>
      <style>{`
        @keyframes ccFloat{0%,100%{transform:translateY(0) rotate(0deg)}50%{transform:translateY(-10px) rotate(1deg)}}
        @keyframes ccRing{0%,100%{r:12;opacity:0.7}50%{r:24;opacity:0}}
        @keyframes ccWave{0%,100%{opacity:0.25}50%{opacity:0.95}}
        .cc-card{animation:ccFloat 2.6s ease-in-out infinite}
        .cc-ring{animation:ccRing 1.8s ease-out infinite}
        .cc-w1{animation:ccWave 1.6s ease-in-out infinite}
        .cc-w2{animation:ccWave 1.6s ease-in-out 0.35s infinite}
        .cc-w3{animation:ccWave 1.6s ease-in-out 0.7s infinite}
      `}</style>
    </defs>
    <rect width="400" height="300" rx="20" fill="url(#ccBg)" />
    <rect x="85" y="125" width="235" height="145" rx="16" fill="url(#ccCard2)" opacity="0.6" transform="rotate(-5 202 197)" />
    <g className="cc-card">
      <rect x="60" y="58" width="242" height="152" rx="16" fill="url(#ccCard1)" />
      <rect x="60" y="98" width="242" height="30" fill="#fff" opacity="0.1" />
      <rect x="85" y="73" width="38" height="28" rx="5" fill="#ffd740" opacity="0.9" />
      <rect x="91" y="79" width="26" height="18" rx="3" fill="#e6ac00" />
      <rect x="80" y="148" width="30" height="8" rx="3" fill="#fff" opacity="0.6" />
      <rect x="118" y="148" width="30" height="8" rx="3" fill="#fff" opacity="0.6" />
      <rect x="156" y="148" width="30" height="8" rx="3" fill="#fff" opacity="0.6" />
      <rect x="194" y="148" width="30" height="8" rx="3" fill="#fff" opacity="0.6" />
      <rect x="80" y="170" width="80" height="7" rx="3" fill="#fff" opacity="0.5" />
      <rect x="240" y="170" width="40" height="7" rx="3" fill="#fff" opacity="0.5" />
      <path className="cc-w1" d="M308 85 Q320 98 308 111" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path className="cc-w2" d="M316 79 Q332 98 316 117" stroke="#fff" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path className="cc-w3" d="M324 73 Q344 98 324 123" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    </g>
    <circle className="cc-ring" cx="342" cy="232" r="12" stroke="#69f0ae" strokeWidth="2" fill="none" />
    <circle cx="342" cy="232" r="12" fill="#69f0ae" opacity="0.85" />
    <path d="M336 232 L340 236 L348 226" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const DigitalMarketingIllustration = () => (
  <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
    <defs>
      <linearGradient id="dmBg" x1="0" y1="0" x2="400" y2="300" gradientUnits="userSpaceOnUse">
        <stop stopColor="#fce4ec" /><stop offset="1" stopColor="#e8f4ff" />
      </linearGradient>
      <radialGradient id="igGrad" cx="30%" cy="107%" r="120%">
        <stop offset="0%" stopColor="#feda75" />
        <stop offset="30%" stopColor="#fa7e1e" />
        <stop offset="60%" stopColor="#d62976" />
        <stop offset="90%" stopColor="#962fbf" />
        <stop offset="100%" stopColor="#4f5bd5" />
      </radialGradient>
      <style>{`
        @keyframes dmB1{0%,100%{transform:scaleY(1)}50%{transform:scaleY(1.2)}}
        @keyframes dmB2{0%,100%{transform:scaleY(1)}50%{transform:scaleY(1.25)}}
        @keyframes dmB3{0%,100%{transform:scaleY(1)}50%{transform:scaleY(1.18)}}
        @keyframes dmDot{0%{transform:translate(0,0)}20%{transform:translate(40px,-40px)}40%{transform:translate(80px,-80px)}60%{transform:translate(120px,-58px)}80%{transform:translate(160px,-98px)}100%{transform:translate(205px,-120px)}}
        @keyframes dmMeg{0%,100%{transform:rotate(0deg)}50%{transform:rotate(-7deg)}}
        @keyframes dmIg{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}
        .dm-b1{transform-origin:65px 260px;animation:dmB1 1.7s ease-in-out infinite}
        .dm-b2{transform-origin:105px 260px;animation:dmB2 1.7s ease-in-out 0.2s infinite}
        .dm-b3{transform-origin:145px 260px;animation:dmB3 1.7s ease-in-out 0.4s infinite}
        .dm-dot{animation:dmDot 3s linear infinite}
        .dm-mega{transform-origin:74px 90px;animation:dmMeg 2s ease-in-out infinite}
        .dm-ig{animation:dmIg 2.2s ease-in-out infinite}
      `}</style>
    </defs>
    <rect width="400" height="300" rx="20" fill="url(#dmBg)" />
    <rect className="dm-b1" x="48" y="178" width="34" height="82" rx="6" fill="#1a73e8" opacity="0.7" />
    <rect className="dm-b2" x="90" y="138" width="34" height="122" rx="6" fill="#1a73e8" opacity="0.85" />
    <rect className="dm-b3" x="132" y="98" width="34" height="162" rx="6" fill="#1a73e8" />
    <rect x="174" y="118" width="34" height="142" rx="6" fill="#00b0ff" opacity="0.8" />
    <rect x="216" y="78" width="34" height="182" rx="6" fill="#00b0ff" />
    <polyline points="65,183 107,143 149,103 191,123 233,83 270,63" stroke="#ff4081" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    <circle className="dm-dot" cx="65" cy="183" r="7" fill="#ff4081" />
    <g className="dm-mega">
      <path d="M46 52 L96 72 L96 112 L46 132 Z" fill="#1a73e8" opacity="0.85" />
      <rect x="28" y="77" width="20" height="30" rx="5" fill="#0d47a1" />
      <path d="M96 82 Q126 92 118 102" stroke="#00b0ff" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M96 72 Q136 80 130 94" stroke="#00b0ff" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.6" />
    </g>
    <circle cx="318" cy="108" r="28" fill="#1877f2" opacity="0.9" />
    <text x="308" y="116" fontSize="22" fill="#fff" fontWeight="bold">f</text>
    <g className="dm-ig">
      <circle cx="360" cy="178" r="22" fill="url(#igGrad)" />
      <rect x="352" y="170" width="16" height="16" rx="4" stroke="#fff" strokeWidth="2" fill="none" />
      <circle cx="360" cy="178" r="4" stroke="#fff" strokeWidth="1.5" fill="none" />
      <circle cx="367" cy="171" r="1.5" fill="#fff" />
    </g>
  </svg>
);

const EDIIllustration = () => (
  <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
    <defs>
      <linearGradient id="ediBg" x1="0" y1="0" x2="400" y2="300" gradientUnits="userSpaceOnUse">
        <stop stopColor="#e8f4ff" /><stop offset="1" stopColor="#e8eaf6" />
      </linearGradient>
      <style>{`
        @keyframes ediP1{0%{transform:translateX(0);opacity:1}90%{opacity:1}100%{transform:translateX(170px);opacity:0}}
        @keyframes ediP2{0%{transform:translateX(0);opacity:1}90%{opacity:1}100%{transform:translateX(-170px);opacity:0}}
        @keyframes ediLed{0%,100%{opacity:0.4}50%{opacity:1}}
        @keyframes ediHub{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}
        .edi-p1{animation:ediP1 1.8s linear infinite}
        .edi-p2{animation:ediP2 1.8s linear 0.9s infinite}
        .edi-l1{animation:ediLed 1s ease-in-out infinite}
        .edi-l2{animation:ediLed 1s ease-in-out 0.5s infinite}
        .edi-hub{animation:ediHub 2.2s ease-in-out infinite}
      `}</style>
    </defs>
    <rect width="400" height="300" rx="20" fill="url(#ediBg)" />
    <rect x="28" y="75" width="85" height="150" rx="12" fill="#1a73e8" opacity="0.9" />
    <rect x="40" y="90" width="61" height="8" rx="4" fill="#fff" opacity="0.5" />
    <rect x="40" y="105" width="61" height="8" rx="4" fill="#fff" opacity="0.3" />
    <rect x="40" y="120" width="61" height="8" rx="4" fill="#fff" opacity="0.3" />
    <circle className="edi-l1" cx="48" cy="180" r="7" fill="#69f0ae" />
    <circle className="edi-l2" cx="66" cy="180" r="7" fill="#69f0ae" />
    <rect x="40" y="198" width="61" height="12" rx="4" fill="#fff" opacity="0.2" />
    <rect x="287" y="75" width="85" height="150" rx="12" fill="#0d47a1" opacity="0.9" />
    <rect x="299" y="90" width="61" height="8" rx="4" fill="#fff" opacity="0.5" />
    <rect x="299" y="105" width="61" height="8" rx="4" fill="#fff" opacity="0.3" />
    <rect x="299" y="120" width="61" height="8" rx="4" fill="#fff" opacity="0.3" />
    <circle className="edi-l1" cx="305" cy="180" r="7" fill="#ffd740" />
    <circle className="edi-l2" cx="323" cy="180" r="7" fill="#ffd740" />
    <rect x="299" y="198" width="61" height="12" rx="4" fill="#fff" opacity="0.2" />
    <path d="M117 128 L283 128" stroke="#00b0ff" strokeWidth="2" strokeDasharray="6 4" strokeLinecap="round" />
    <path d="M283 172 L117 172" stroke="#ff4081" strokeWidth="2" strokeDasharray="6 4" strokeLinecap="round" />
    <polygon points="278,122 290,128 278,134" fill="#00b0ff" />
    <polygon points="122,166 110,172 122,178" fill="#ff4081" />
    <rect className="edi-p1" x="117" y="120" width="22" height="16" rx="5" fill="#00b0ff" opacity="0.95" />
    <rect className="edi-p2" x="261" y="164" width="22" height="16" rx="5" fill="#ff4081" opacity="0.95" />
    <g className="edi-hub">
      <rect x="152" y="108" width="96" height="84" rx="14" fill="#fff" stroke="#1a73e8" strokeWidth="2" />
      <text x="163" y="150" fontSize="18" fill="#1a73e8" fontWeight="bold">EDI</text>
      <rect x="165" y="158" width="62" height="6" rx="3" fill="#1a73e8" opacity="0.25" />
      <rect x="170" y="169" width="52" height="6" rx="3" fill="#1a73e8" opacity="0.15" />
    </g>
  </svg>
);

const services = [
  {
    id: 'pos',
    title: 'Point of Sale (POS)',
    tag: 'Retail Technology',
    desc: 'Empower your retail business with our cutting-edge POS solutions. Streamline transactions, manage inventory in real-time, and deliver seamless customer experiences across all your store locations.',
    bullets: ['Real-time inventory tracking', 'Multi-location management', 'Integrated payment processing', 'Sales analytics & reporting'],
    illustration: <POSIllustration />,
  },
  {
    id: 'web',
    title: 'Web Development',
    tag: 'Digital Presence',
    desc: 'From sleek landing pages to powerful enterprise web applications, we craft pixel-perfect, high-performance websites that convert visitors into customers and elevate your brand online.',
    bullets: ['Custom responsive design', 'React & Next.js development', 'SEO-optimized architecture', 'Fast & secure hosting'],
    illustration: <WebDevIllustration />,
  },
  {
    id: 'cc',
    title: 'Credit Card Processing',
    tag: 'Payment Solutions',
    desc: 'Accept payments securely and effortlessly. Our payment processing solutions support all major cards and digital wallets with bank-grade encryption and industry-leading approval rates.',
    bullets: ['All major cards accepted', 'PCI-DSS compliant', 'Chargeback protection', 'Competitive processing rates'],
    illustration: <CreditCardIllustration />,
  },
  {
    id: 'dm',
    title: 'Digital Marketing',
    tag: 'Growth & Visibility',
    desc: 'Grow your brand with data-driven digital marketing strategies. From SEO and social media campaigns to paid advertising, we help you reach the right audience and maximize your ROI.',
    bullets: ['SEO & content strategy', 'Social media management', 'PPC & ad campaigns', 'Analytics & conversion tracking'],
    illustration: <DigitalMarketingIllustration />,
  },
  {
    id: 'edi',
    title: 'EDI Integration',
    tag: 'Data Exchange',
    desc: 'Automate and streamline your B2B data exchange with full-cycle EDI integration. We support all major standards including X12, EDIFACT, and AS2 for seamless partner connectivity.',
    bullets: ['X12, EDIFACT & AS2 support', 'ERP & CRM integration', 'Real-time data validation', '24/7 monitoring & support'],
    illustration: <EDIIllustration />,
    externalLink: 'https://edinvosync.com/converter'
  },
];

const Services = () => {
  const listRef = useRef(null);

  useEffect(() => {
    const rows = listRef.current?.querySelectorAll('.service-row');
    if (!rows) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    rows.forEach((row) => observer.observe(row));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="services-page">
      <div className="services-hero container">
        <span className="services-eyebrow">What We Offer</span>
        <h1 className="section-title">Our <span className="text-gradient">Services</span></h1>
        <p className="section-subtitle">Comprehensive technology solutions designed to accelerate your business growth.</p>
      </div>

      <div className="services-list container" ref={listRef}>
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`service-row ${index % 2 === 0 ? 'row-normal' : 'row-reverse'}`}
          >
            <div className="service-illustration">
              {service.illustration}
            </div>
            <div className="service-content">
              <span className="service-tag">{service.tag}</span>
              <h2 className="service-title">{service.title}</h2>
              <p className="service-desc">{service.desc}</p>
              <ul className="service-bullets">
                {service.bullets.map((b, i) => (
                  <li key={i}><span className="bullet-dot" />{b}</li>
                ))}
              </ul>
              {service.externalLink ? (
                <a href={service.externalLink} className="service-cta" style={{ textDecoration: 'none', display: 'inline-block', textAlign: 'center' }}>
                  Open Converter
                </a>
              ) : service.id === 'pos' ? (
                <Link to="/pos" className="service-cta" style={{ textDecoration: 'none' }}>Learn More</Link>
              ) : service.id === 'web' ? (
                <Link to="/web-development" className="service-cta" style={{ textDecoration: 'none' }}>Learn More</Link>
              ) : service.id === 'cc' ? (
                <Link to="/credit-card-processing" className="service-cta" style={{ textDecoration: 'none' }}>Learn More</Link>
              ) : service.id === 'dm' ? (
                <Link to="/digital-marketing" className="service-cta" style={{ textDecoration: 'none' }}>Learn More</Link>
              ) : (
                <button className="service-cta">Learn More</button>
              )}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .services-page {
          padding-top: 140px;
          padding-bottom: 80px;
        }

        .services-hero {
          text-align: center;
          padding-bottom: 60px;
        }

        .services-eyebrow {
          display: inline-block;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #1a73e8;
          background: rgba(26,115,232,0.08);
          padding: 0.35rem 1rem;
          border-radius: 50px;
          margin-bottom: 1rem;
        }

        .section-title {
          font-size: 3.5rem;
          margin-bottom: 1.5rem;
          color: #0f172a;
        }

        .text-gradient {
          background: linear-gradient(90deg, #3b82f6, #06b6d4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .section-subtitle {
          font-size: 1.2rem;
          color: #64748b;
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .services-list {
          display: flex;
          flex-direction: column;
          gap: 120px;
        }

        .service-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
          opacity: 0;
          transform: translateY(60px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }

        .service-row.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .row-reverse {
          direction: rtl;
        }

        .row-reverse > * {
          direction: ltr;
        }

        .service-illustration {
          border-radius: 30px;
          overflow: hidden;
          box-shadow: 0 20px 50px rgba(0,0,0,0.1);
          transition: transform 0.4s ease;
        }

        .service-illustration:hover {
          transform: translateY(-5px);
        }

        .service-content {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .service-tag {
          font-size: 0.85rem;
          font-weight: 700;
          color: #3b82f6;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .service-title {
          font-size: 2.5rem;
          color: #0f172a;
          line-height: 1.2;
        }

        .service-desc {
          font-size: 1.1rem;
          line-height: 1.7;
          color: #64748b;
        }

        .service-bullets {
          list-style: none;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .service-bullets li {
          display: flex;
          align-items: center;
          gap: 12px;
          font-weight: 500;
          color: #334155;
        }

        .bullet-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #3b82f6;
        }

        .service-cta {
          width: fit-content;
          background: linear-gradient(135deg, #3b82f6, #06b6d4);
          color: white;
          padding: 1rem 2.5rem;
          border-radius: 12px;
          font-weight: 600;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(59, 130, 246, 0.25);
        }

        .service-cta:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(59, 130, 246, 0.45);
        }

        @media (max-width: 900px) {
          .service-row, .row-reverse {
            grid-template-columns: 1fr;
            direction: ltr;
            text-align: center;
            gap: 40px;
          }
          .service-content {
            align-items: center;
          }
          .section-title {
            font-size: 2.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Services;
