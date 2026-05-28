import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import POS from './pages/POS';
import DigitalMarketing from './pages/DigitalMarketing';
import WebDevelopment from './pages/WebDevelopment';
import CreditCardProcessing from './pages/CreditCardProcessing';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-wrapper">
        <Navbar />
        <main className="content-area">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/pos" element={<POS />} />
            <Route path="/digital-marketing" element={<DigitalMarketing />} />
            <Route path="/web-development" element={<WebDevelopment />} />
            <Route path="/credit-card-processing" element={<CreditCardProcessing />} />
          </Routes>
        </main>
        <Footer />
      </div>

      <style>{`
        .app-wrapper {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          background: radial-gradient(circle at top right, rgba(0, 242, 254, 0.1) 0%, rgba(0, 132, 255, 0.05) 40%, #f8fafc 100%);
        }
        
        .content-area {
          flex: 1;
        }
      `}</style>
    </Router>
  );
}

export default App;
