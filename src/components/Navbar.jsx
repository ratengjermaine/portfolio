import React, { useState, useEffect } from 'react';
import { Menu, X, Shield } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', code: '01' },
    { name: 'About', href: '#overview', code: '02' },
    { name: 'Tech', href: '#skills', code: '03' },
    { name: 'Contact', href: '#contact', code: '04' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1000,
        padding: scrolled ? '0.75rem 0' : '1.25rem 0',
        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        background: scrolled ? 'rgba(2, 6, 23, 0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(0, 242, 255, 0.1)' : '1px solid transparent'
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        
        {/* Logo / System ID */}
        <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{ 
            width: '38px', 
            height: '38px', 
            borderRadius: '2px', 
            background: 'rgba(0, 242, 255, 0.05)', 
            border: '1px solid var(--accent-cyan)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: 'inset 0 0 10px rgba(0, 242, 255, 0.1)'
          }}>
            <Shield size={20} color="var(--accent-cyan)" />
          </div>
          <span style={{ 
            fontFamily: 'var(--font-heading)', 
            fontSize: '1.1rem', 
            fontWeight: 800, 
            color: 'var(--text-primary)',
            letterSpacing: '1px'
          }}>
            JR<span style={{ color: 'var(--accent-cyan)' }}>_SYS</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <ul style={{ display: 'flex', gap: '3rem' }} className="nav-list-desktop">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  style={{ 
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.8rem', 
                    fontWeight: 700, 
                    color: 'var(--text-secondary)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    transition: 'all 0.3s ease',
                    minHeight: '44px'
                  }} 
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--accent-cyan)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--text-secondary)';
                  }}
                >
                  <span style={{ color: 'var(--accent-cyan)', opacity: 0.5 }}>{link.code}</span>
                  {link.name.toUpperCase()}
                </a>
              </li>
            ))}
          </ul>

          <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)} style={{ 
            display: 'none', 
            background: 'none', 
            border: 'none', 
            color: 'var(--text-primary)', 
            cursor: 'pointer',
            padding: '0.5rem',
            minHeight: '44px',
            minWidth: '44px'
          }}>
             {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              width: '85%',
              maxWidth: '320px',
              height: '100vh',
              background: 'rgba(2, 6, 23, 0.98)',
              borderLeft: '1px solid var(--accent-cyan)',
              zIndex: 1050,
              display: 'flex',
              flexDirection: 'column',
              padding: '6rem 2rem',
              gap: '2.5rem'
            }}
          >
            <div style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-dim)', fontSize: '0.75rem', marginBottom: '1rem', letterSpacing: '2px' }}>
              // NAVIGATIONAL_LINKS
            </div>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                style={{
                  fontSize: '1.4rem',
                  fontWeight: 800,
                  color: 'var(--text-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.2rem',
                  fontFamily: 'var(--font-heading)',
                  minHeight: '44px'
                }}
              >
                <span style={{ color: 'var(--accent-cyan)', fontSize: '0.9rem', fontFamily: 'var(--font-mono)' }}>{link.code}</span>
                {link.name}
              </a>
            ))}
            
            <div style={{ marginTop: 'auto', borderTop: '1px solid var(--glass-border)', paddingTop: '2.5rem' }}>
               <div style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-dim)', fontSize: '0.65rem' }}>
                 ESTABLISHING_SECURE_NODE...
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 860px) {
          .nav-list-desktop { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </motion.nav>
  );
};

export default Navbar;
