import React, { useEffect, useRef } from 'react';

const Contact = () => {
  const revealRef = useRef(null);

  useEffect(() => {
    const els = revealRef.current?.querySelectorAll('.reveal');
    if (!els) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const siblings = [...entry.target.parentElement.querySelectorAll('.reveal')];
            const idx = siblings.indexOf(entry.target);
            entry.target.style.transitionDelay = `${idx * 0.1}s`;
            entry.target.classList.add('revealed');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div className="contact-page" ref={revealRef}>
      {/* ── Background Elements ── */}
      <div className="bg-blob blob-1"></div>
      <div className="bg-blob blob-2"></div>
      <div className="bg-blob blob-3"></div>

      <section className="contact-hero">
        <div className="container">
          <span className="eyebrow reveal">Contact Us</span>
          <h1 className="reveal">Let's Build Something <span className="text-gradient">Extraordinary</span></h1>
          <p className="reveal">Ready to revolutionize your digital infrastructure? Our team of experts is here to guide you through every step of your transformation journey.</p>
        </div>
      </section>

      <section className="contact-content container">
        <div className="contact-grid">
          <div className="map-card reveal">
            <iframe
              title="Google Map"
              src="https://maps.google.com/maps?q=EDInvosync,%20Vadodara,%20Gujarat&t=&z=14&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>

          <div className="contact-info-column">
            <div className="contact-info-card reveal">
              <div className="info-header">
                <h3>Contact Information</h3>
              </div>
              <div className="info-list">
                <div className="info-item reveal">
                  <div className="info-icon-box">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  </div>
                  <div className="info-text">
                    <strong>Our Locations</strong>
                    <p className="location-label">USA</p>
                    <p>4254 Lafayette Street, Marianna, FL 32446, USA</p>
                    <p className="location-label">India</p>
                    <p>FF 21, Rajdhani Society, Warasiya Ring Rd, nr. Apollo Pharmacy, Gayatri Nagar Society, Kishanwadi, Vadodara, Gujarat 390019</p>
                  </div>
                </div>
                <div className="info-item reveal">
                  <div className="info-icon-box">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  </div>
                  <div className="info-text">
                    <strong>Email Us</strong>
                    <p>info@edinvosync.com</p>
                    <p>edinvosync@gamil.com</p>
                  </div>
                </div>
                <div className="info-item reveal">
                  <div className="info-icon-box">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  </div>
                  <div className="info-text">
                    <strong>Call Us</strong>
                    <p>+1 (943) 230-2133 ext. 0</p>
                    <p>+91 816 081 1875</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .contact-page {
          padding-top: 140px;
          padding-bottom: 100px;
          position: relative;
          overflow: hidden;
          min-height: 100vh;
          background: #f8fafc;
        }

        /* ── Background Blobs ── */
        .bg-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          z-index: 0;
          opacity: 0.4;
          animation: float 20s infinite alternate;
        }

        .blob-1 {
          width: 400px;
          height: 400px;
          background: rgba(0, 132, 255, 0.2);
          top: -100px;
          right: -100px;
        }

        .blob-2 {
          width: 300px;
          height: 300px;
          background: rgba(0, 242, 254, 0.2);
          bottom: 10%;
          left: -50px;
          animation-delay: -5s;
        }

        .blob-3 {
          width: 500px;
          height: 500px;
          background: rgba(124, 58, 237, 0.1);
          top: 40%;
          right: 20%;
          animation-delay: -10s;
        }

        @keyframes float {
          0% { transform: translate(0, 0) rotate(0deg); }
          100% { transform: translate(50px, 100px) rotate(20deg); }
        }

        .container {
          position: relative;
          z-index: 1;
        }

        .eyebrow {
          display: inline-block;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: var(--accent);
          margin-bottom: 1.5rem;
          font-size: 0.9rem;
          padding: 8px 16px;
          background: rgba(26, 115, 232, 0.1);
          border-radius: 50px;
        }

        .contact-hero {
          text-align: center;
          margin-bottom: 80px;
        }

        .contact-hero h1 {
          font-size: clamp(2.5rem, 6vw, 4rem);
          line-height: 1.1;
          margin-bottom: 1.5rem;
          font-weight: 800;
          color: var(--text-main);
        }

        .contact-hero p {
          font-size: 1.2rem;
          color: var(--text-muted);
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr;
          gap: 50px;
          align-items: start;
        }

        .contact-form-container {
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.5);
          padding: 60px;
          border-radius: 40px;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.05);
        }

        .form-header {
          margin-bottom: 40px;
        }

        .form-header h2 {
          font-size: 2.2rem;
          margin-bottom: 10px;
          font-weight: 700;
        }

        .form-header p {
          color: var(--text-muted);
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 25px;
        }

        .form-group {
          margin-bottom: 25px;
        }

        .form-group label {
          display: block;
          margin-bottom: 10px;
          font-weight: 600;
          font-size: 0.95rem;
          color: var(--text-main);
        }

        .form-group input, 
        .form-group textarea,
        .form-group select {
          width: 100%;
          padding: 16px 20px;
          background: #f1f5f9;
          border: 2px solid transparent;
          border-radius: 16px;
          font-size: 1rem;
          transition: all 0.3s ease;
          font-family: inherit;
        }

        .form-group input:focus, 
        .form-group textarea:focus,
        .form-group select:focus {
          outline: none;
          background: #fff;
          border-color: var(--accent);
          box-shadow: 0 10px 20px rgba(26, 115, 232, 0.05);
        }

        .btn-submit {
          width: 100%;
          padding: 18px;
          background: linear-gradient(135deg, var(--secondary), var(--accent));
          color: #fff;
          border: none;
          border-radius: 16px;
          font-size: 1.1rem;
          font-weight: 700;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          box-shadow: 0 10px 25px rgba(26, 115, 232, 0.3);
        }

        .btn-submit:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(26, 115, 232, 0.4);
        }

        .btn-submit svg {
          transition: transform 0.3s ease;
        }

        .btn-submit:hover svg {
          transform: translate(3px, -3px);
        }

        .contact-info-column {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }

        .contact-info-card {
          background: var(--text-main);
          color: #fff;
          padding: 50px;
          border-radius: 40px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        .info-header h3 {
          font-size: 1.8rem;
          margin-bottom: 35px;
          font-weight: 700;
        }

        .info-list {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }

        .info-item {
          display: flex;
          gap: 20px;
          align-items: flex-start;
        }

        .info-icon-box {
          width: 50px;
          height: 50px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent);
          flex-shrink: 0;
        }

        .info-text strong {
          display: block;
          font-size: 1.1rem;
          margin-bottom: 8px;
        }

        .info-text p {
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.5;
          margin: 0 0 4px;
        }

        .info-text p.location-label {
          color: var(--accent);
          font-size: 0.78rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          margin-top: 10px;
          margin-bottom: 3px;
        }

        .info-text p.location-label:first-of-type {
          margin-top: 0;
        }

        .map-card {
          height: 550px;
          border-radius: 40px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.05);
          border: 4px solid #fff;
        }

        /* ─ Scroll Reveal ─ */
        .reveal { opacity: 0; transform: translateY(30px); transition: all 0.8s cubic-bezier(0.2, 1, 0.3, 1); }
        .revealed { opacity: 1; transform: translateY(0); }

        @media (max-width: 1200px) {
          .contact-form-container { padding: 40px; }
        }

        @media (max-width: 992px) {
          .contact-grid { grid-template-columns: 1fr; }
          .contact-hero h1 { font-size: 3rem; }
        }

        @media (max-width: 600px) {
          .form-row { grid-template-columns: 1fr; gap: 0; }
          .contact-form-container { padding: 30px; border-radius: 30px; }
          .contact-info-card { padding: 30px; border-radius: 30px; }
        }
      `}</style>
    </div>
  );
};

export default Contact;
