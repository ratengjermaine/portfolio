import React from 'react';
import { Mail, Instagram, Terminal, ShieldAlert } from 'lucide-react';
import { motion } from 'framer-motion';

const XLogo = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884a9.875 9.875 0 019.882 9.886c-.001 5.45-4.436 9.884-9.886 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.631 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const Contact = () => {
  const socials = [
    { icon: <Mail size={22} />, href: 'mailto:ratengjermaine@gmail.com', label: 'EMAIL' },
    { icon: <XLogo />, href: 'https://x.com/JermaineRateng', label: 'X_CORP' },
    { icon: <Instagram size={22} />, href: 'https://instagram.com/jermaine.fvr', label: 'INSTA' },
    { icon: <WhatsAppIcon />, href: 'https://wa.me/254701559825', label: 'WAPP' },
  ];

  return (
    <section id="contact" className="contact" style={{
      padding: '8rem 0',
      background: 'var(--bg-secondary)',
      borderTop: '1px solid var(--glass-border)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
        <span className="section-label">// NODE_COMMUNICATIONS</span>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 style={{ 
            fontSize: 'clamp(2rem, 5vw, 3.5rem)', 
            marginBottom: '1.5rem',
            color: 'var(--text-primary)',
            fontFamily: 'var(--font-heading)',
            letterSpacing: '2px'
          }}>
            SYSTEM <span className="glow-text-cyan">OUTREACH</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '4rem', fontSize: '1.1rem', fontFamily: 'var(--font-body)' }}>
            Establishing a secure bridge for networking collaboration and security initiatives.
          </p>
        </motion.div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', 
          gap: '1.5rem' 
        }}>
          {socials.map((social, i) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05, borderColor: 'var(--accent-cyan)', background: 'rgba(0, 242, 255, 0.05)' }}
              style={{
                background: 'var(--bg-primary)',
                border: '1px solid var(--glass-border)',
                padding: '2.5rem 1.5rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1.2rem',
                borderRadius: '2px',
                transition: 'all 0.3s ease',
                minHeight: '44px'
              }}
            >
              <div style={{ color: 'var(--accent-cyan)' }}>
                {social.icon}
              </div>
              <span className="mono" style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '1px' }}>{social.label}</span>
            </motion.a>
          ))}
        </div>

        <div style={{ marginTop: '6rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1.2rem', color: 'var(--text-dim)' }}>
           <Terminal size={14} />
           <span className="mono" style={{ fontSize: '0.7rem', letterSpacing: '2px' }}>ENCRYPTED_SIGNAL_STABLE // 2026</span>
           <ShieldAlert size={14} />
        </div>
      </div>
    </section>
  );
};

export default Contact;
