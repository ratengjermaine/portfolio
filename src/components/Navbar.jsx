import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#overview' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1000,
        padding: scrolled ? '0.9rem 0' : '1.15rem 0',
        transition: 'all 0.25s ease',
        background: scrolled ? 'rgba(11, 18, 32, 0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(8px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent'
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="#home" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.55rem' }}>
          <span style={{
            width: '28px',
            height: '28px',
            borderRadius: '8px',
            border: '1px solid var(--border)',
            background: 'rgba(79, 140, 255, 0.08)',
            color: 'var(--text-secondary)',
            fontSize: '0.76rem',
            fontWeight: 700,
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            JR
          </span>
          <span style={{ fontWeight: 700, fontSize: '1.02rem', letterSpacing: '0.2px' }}>
            Jermaine Rateng
          </span>
        </a>

        <div style={{ display: 'flex', alignItems: 'center' }}>
          <ul style={{ display: 'flex', gap: '1.5rem' }} className="nav-list-desktop">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  style={{
                    fontSize: '0.95rem',
                    fontWeight: 500,
                    color: 'var(--text-secondary)',
                    minHeight: '44px',
                    display: 'inline-flex',
                    alignItems: 'center'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--text-primary)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--text-secondary)';
                  }}
                >
                  {link.name}
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

      {isOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            right: 0,
            width: '80%',
            maxWidth: '300px',
            height: '100vh',
            background: 'var(--bg-secondary)',
            borderLeft: '1px solid var(--border)',
            zIndex: 1050,
            display: 'flex',
            flexDirection: 'column',
            padding: '5rem 1.6rem 2rem',
            gap: '1.5rem'
          }}
        >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                style={{
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  minHeight: '44px'
                }}
              >
                {link.name}
              </a>
            ))}
        </div>
      )}

      <style>{`
        @media (max-width: 860px) {
          .nav-list-desktop { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
