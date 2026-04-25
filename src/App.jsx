import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Contact />
      </main>
      <footer className="footer" style={{ 
        padding: '2.8rem 0', 
        textAlign: 'center',
        borderTop: '1px solid var(--border)',
        background: 'var(--bg-primary)',
        width: '100%'
      }}>
        <div className="container">
          <p className="footer-text" style={{
            fontSize: '0.9rem',
            color: 'var(--text-dim)',
            fontWeight: 500
          }}>
            © {new Date().getFullYear()} Jermaine Rateng'. All rights reserved.
          </p>
        </div>
      </footer>

      <style>{`
        @media (max-width: 768px) {
          .footer {
            padding: 2.2rem 0;
          }
        }
      `}</style>
    </div>
  );
}

export default App;
