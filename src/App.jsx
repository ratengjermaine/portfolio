import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Overview from './components/Overview';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="app">
      <div className="scanline"></div>
      <Navbar />
      <main>
        <Hero />
        <Overview />
        <Skills />
        <Contact />
      </main>
      <footer className="footer" style={{ 
        padding: '4rem 0', 
        textAlign: 'center', 
        borderTop: '1px solid var(--glass-border)',
        background: 'var(--bg-primary)',
        position: 'relative',
        zIndex: 1,
        width: '100%'
      }}>
        <div className="container">
          <p className="mono footer-text" style={{ 
            fontSize: '0.75rem', 
            color: 'var(--text-dim)',
            fontWeight: 500,
            letterSpacing: '2px',
            lineHeight: '1.8'
          }}>
            © {new Date().getFullYear()} JERMAINE_RATENG <span className="footer-separator">//</span> ALL_RIGHTS_RESERVED
          </p>
        </div>
      </footer>

      <style>{`
        @media (max-width: 768px) {
          .footer {
            padding: 3rem 0;
          }
          .footer-text {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            align-items: center;
          }
          .footer-separator {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}

export default App;
