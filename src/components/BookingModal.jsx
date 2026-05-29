import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const BookingModal = ({ onClose }) => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingData, setBookingData] = useState({
    date: '',
    time: '',
    name: '',
    email: '',
    storeName: '',
    phone: '',
    language: ''
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleBooking = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const templateParams = {
        name: bookingData.name,
        email: bookingData.email,
        storeName: bookingData.storeName,
        phone: bookingData.phone,
        language: bookingData.language,
        date: bookingData.date,
        time: bookingData.time,
        message: `A new demo has been scheduled by ${bookingData.name} (${bookingData.email}) for ${bookingData.date} at ${bookingData.time}.`
      };

      // Send email to admin
      await emailjs.send(
        'service_vtfbkki',
        'template_i1ae2hr',
        templateParams,
        'O7T-nT_RlLVaHknnb'
      );

      // Send auto-reply to customer
      await emailjs.send(
        'service_vtfbkki',
        'template_070g529',
        templateParams,
        'O7T-nT_RlLVaHknnb'
      );

      setIsSubmitting(false);
      nextStep();

    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to schedule demo. Please try again.");

      setIsSubmitting(false);
    }
  };

  return (
    <div className="bm-overlay" onClick={onClose}>
      <div className="bm-container" onClick={(e) => e.stopPropagation()}>
        <button className="bm-close" onClick={onClose}>&times;</button>
        <div className="bm-content-scroll">
        <div className="bm-progress">
          <div className={`bm-step ${step >= 1 ? 'active' : ''}`}>1</div>
          <div className="bm-line"></div>
          <div className={`bm-step ${step >= 2 ? 'active' : ''}`}>2</div>
          <div className="bm-line"></div>
          <div className={`bm-step ${step >= 3 ? 'active' : ''}`}>3</div>
        </div>

        {step === 1 && (
          <div className="bm-modal-step">
            <h2>Select Date &amp; Time</h2>
            <p>Choose a convenient time for your personalized demo.</p>
            <div className="bm-form-group">
              <label>Date</label>
              <input
                type="date"
                required
                min={new Date().toISOString().split('T')[0]}
                onChange={(e) => setBookingData({ ...bookingData, date: e.target.value })}
              />
            </div>
            <div className="bm-time-grid">
              {[
                '09:00 PM', '09:30 PM', '10:00 PM', '10:30 PM', '11:00 PM', '11:30 PM',
                '12:00 AM', '12:30 AM', '01:00 AM', '01:30 AM', '02:00 AM', '02:30 AM',
                '03:00 AM', '03:30 AM', '04:00 AM', '04:30 AM', '05:00 AM', '05:30 AM'
              ].map((t) => (
                <button
                  key={t}
                  className={`bm-time-btn ${bookingData.time === t ? 'selected' : ''}`}
                  onClick={() => setBookingData({ ...bookingData, time: t })}
                >
                  {t}
                </button>
              ))}
            </div>
            <button
              className="bm-btn bm-btn-primary bm-full"
              disabled={!bookingData.date || !bookingData.time}
              onClick={nextStep}
            >
              Continue
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="bm-modal-step">
            <h2>Confirm Details</h2>
            <p>Tell us a bit about yourself to finalize the booking.</p>
            <form onSubmit={handleBooking}>
              <div className="bm-form-group">
                <label>Full Name</label>
                <input type="text" required placeholder="Enter your name"
                  onChange={(e) => setBookingData({ ...bookingData, name: e.target.value })} />
              </div>
              <div className="bm-form-group">
                <label>Work Email</label>
                <input type="email" required placeholder="Enter your email"
                  onChange={(e) => setBookingData({ ...bookingData, email: e.target.value })} />
              </div>
              <div className="bm-form-group">
                <label>Store Name</label>
                <input type="text" required placeholder="Enter your store name"
                  onChange={(e) => setBookingData({ ...bookingData, storeName: e.target.value })} />
              </div>
              <div className="bm-form-group">
                <label>Contact Number</label>
                <input type="tel" required placeholder="Enter your contact number" maxLength="10" pattern="[0-9]*"
                  value={bookingData.phone}
                  onChange={(e) => {
                    const val = e.target.value.replace(/\D/g, '');
                    if (val.length <= 10) {
                      setBookingData({ ...bookingData, phone: val });
                    }
                  }} />
              </div>
              <div className="bm-form-group">
                <label>Preferred Language</label>
                <select required className="bm-select" value={bookingData.language}
                  onChange={(e) => setBookingData({ ...bookingData, language: e.target.value })}>
                  <option value="" disabled>Select...</option>
                  <option value="English">English</option>
                  <option value="Hindi/Gujarati">Hindi/Gujarati</option>
                </select>
              </div>
              <div className="bm-actions">
                <button type="button" className="bm-btn bm-btn-outline" onClick={prevStep}>Back</button>
                <button type="submit" className="bm-btn bm-btn-primary" disabled={isSubmitting}>
                  {isSubmitting ? 'Scheduling...' : 'Schedule Event'}
                </button>
              </div>
            </form>
          </div>
        )}

        {step === 3 && (
          <div className="bm-modal-step bm-success">
            <div className="bm-success-icon">✓</div>
            <h2>Demo Scheduled!</h2>
            <p>Your demo is confirmed for <strong>{bookingData.date}</strong> at <strong>{bookingData.time}</strong>.</p>
            <button className="bm-btn bm-btn-primary bm-full" onClick={onClose}>Close</button>
          </div>
        )}
 </div>
        <style>{`
          .bm-overlay {
            position: fixed;
            inset: 0;
            background: rgba(0,0,0,0.6);
            backdrop-filter: blur(8px);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
            padding: 20px;
          }

          .bm-container {
            background: #fff;
            width: 100%;
            max-width: 500px;
            max-height: 90vh;
            box-sizing: border-box;
            border-radius: 30px;
            position: relative;
            box-shadow: 0 25px 50px rgba(0,0,0,0.2);
            animation: bmAppear 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            display: flex;
            flex-direction: column;
            overflow: hidden;
          }

          .bm-content-scroll {
            overflow-y: auto;
            padding: 40px 40px 0 40px;
            flex: 1;
            scrollbar-width: thin;
            scrollbar-color: #cbd5e1 transparent;
          }

          .bm-content-scroll::-webkit-scrollbar {
            width: 6px;
          }
          .bm-content-scroll::-webkit-scrollbar-thumb {
            background: #cbd5e1;
            border-radius: 3px;
          }

          @keyframes bmAppear {
            from { opacity: 0; transform: translateY(30px) scale(0.95); }
            to   { opacity: 1; transform: translateY(0) scale(1); }
          }

          .bm-close {
            position: absolute;
            top: 20px; right: 20px;
            background: #f1f5f9;
            border: none;
            width: 36px; height: 36px;
            border-radius: 50%;
            font-size: 24px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: 0.3s;
          }
          .bm-close:hover { background: #e2e8f0; color: #dc2626; }

          .bm-progress {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 30px;
          }
          .bm-step {
            width: 32px; height: 32px;
            border-radius: 50%;
            background: #f1f5f9;
            display: flex; align-items: center; justify-content: center;
            font-weight: 700; color: #94a3b8;
            transition: 0.3s;
          }
          .bm-step.active { background: #1a73e8; color: #fff; }
          .bm-line { width: 40px; height: 2px; background: #f1f5f9; margin: 0 10px; }
          .bm-modal-step { padding-bottom: 40px; }
          .bm-modal-step h2 { font-size: 1.8rem; margin-bottom: 10px; color: #0f172a; }
          .bm-modal-step p  { color: #64748b; margin-bottom: 25px; }

          .bm-form-group { margin-bottom: 20px; text-align: left; }
          .bm-form-group label { display: block; margin-bottom: 8px; font-weight: 600; color: #334155; }
          .bm-form-group input,
          .bm-select {
            width: 100%; padding: 14px;
            background: #f8fafc;
            border: 1px solid #e2e8f0;
            border-radius: 12px;
            font-size: 1rem;
            font-family: inherit;
            box-sizing: border-box;
            appearance: none;
          }
          .bm-select {
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23475569'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E");
            background-repeat: no-repeat;
            background-position: right 1rem center;
            background-size: 1.2em;
            padding-right: 2.5rem;
            cursor: pointer;
          }

          .bm-time-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 10px;
            margin-bottom: 25px;
            max-height: 300px;
            overflow-y: auto;
            padding-right: 5px;
          }
          .bm-time-btn {
            padding: 10px 5px;
            background: #f8fafc;
            border: 1px solid #e2e8f0;
            border-radius: 10px;
            font-weight: 600;
            cursor: pointer;
            transition: 0.3s;
            font-size: 0.85rem;
          }
          .bm-time-btn:hover { border-color: #1a73e8; color: #1a73e8; }
          .bm-time-btn.selected { background: #1a73e8; color: #fff; border-color: #1a73e8; }

          .bm-actions { display: flex; gap: 15px; margin-top: 25px; }
          .bm-btn { padding: 12px 24px; border-radius: 12px; font-weight: 600; cursor: pointer; transition: 0.3s; border: none; font-size: 1rem; }
          .bm-btn-primary { background: linear-gradient(135deg, #0084ff, #1a73e8); color: #fff; flex: 1; }
          .bm-btn-primary:disabled { opacity: 0.5; cursor: not-allowed; }
          .bm-btn-outline { background: #fff; border: 1px solid #e2e8f0; color: #64748b; flex: 1; }
          .bm-full { width: 100%; margin-top: 10px; }

          .bm-success { text-align: center; }
          .bm-success-icon {
            width: 80px; height: 80px;
            background: #22c55e;
            color: #fff;
            border-radius: 50%;
            display: flex; align-items: center; justify-content: center;
            font-size: 2.5rem;
            margin: 0 auto 20px;
          }
        `}</style>
      </div>
    </div>
  );
};

export default BookingModal;
