import React from 'react';
import { Github, Instagram, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const XLogo = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884a9.875 9.875 0 019.882 9.886c-.001 5.45-4.436 9.884-9.886 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.631 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const ThreadsIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M16.62 11.02c-.23-.11-.47-.21-.73-.29-.05-.92-.29-1.75-.77-2.41-.87-1.19-2.35-1.84-4.18-1.84-2.41 0-4.26 1.35-4.6 3.37l1.96.33c.2-1.14 1.3-1.88 2.64-1.88 1.2 0 2.08.39 2.56 1.05.25.35.4.79.45 1.3-.57-.08-1.18-.12-1.82-.12-3.26 0-5.42 1.44-5.42 3.83 0 2.22 1.79 3.72 4.47 3.72 1.73 0 3.02-.57 3.88-1.69.58-.76.9-1.72.98-2.86.28.12.53.26.75.42.54.4.81.92.81 1.56 0 1.55-1.34 2.62-3.27 2.62-1.85 0-3.13-.84-3.51-2.28l-1.9.5c.58 2.24 2.62 3.63 5.42 3.63 3.11 0 5.25-1.9 5.25-4.62 0-1.23-.5-2.29-1.45-2.99-.54-.41-1.19-.74-1.98-1.01Zm-2.71 2.06c-.02 1.09-.26 1.93-.73 2.54-.5.65-1.24.97-2.23.97-1.48 0-2.44-.72-2.44-1.85 0-1.18 1.08-1.9 3.31-1.9.74 0 1.44.08 2.09.24Z" />
  </svg>
);

const Contact = () => {
  const socials = [
    { icon: <Mail size={16} />, href: 'mailto:ratengjermaine@gmail.com', label: 'Email' },
    { icon: <Instagram size={16} />, href: 'https://instagram.com/jermaine.fvr', label: 'Instagram' },
    { icon: <XLogo />, href: 'https://x.com/JermaineRateng', label: 'X' },
    { icon: <ThreadsIcon />, href: 'https://www.threads.net/@ratengjermaine', label: 'Threads' },
    { icon: <Linkedin size={16} />, href: 'https://www.linkedin.com/in/ratengjermaine/', label: 'LinkedIn' },
    { icon: <Github size={16} />, href: 'https://github.com/ratengjermaine', label: 'GitHub' },
    { icon: <WhatsAppIcon />, href: 'https://wa.me/254701559825', label: 'WhatsApp' }
  ];

  return (
    <section id="contact" className="contact" style={{
      padding: '6.5rem 0',
      background: 'var(--bg-secondary)',
      borderTop: '1px solid var(--border)'
    }}>
      <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
        <span className="section-label">Contact</span>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 2.8rem)',
            marginBottom: '1.5rem',
            color: 'var(--text-primary)'
          }}>
            Let us connect
          </h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '2.3rem', fontSize: '1.05rem' }}>
            I am currently a student in networking and cybersecurity, open to internships and collaboration opportunities.
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
          gap: '0.7rem'
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
              whileHover={{ scale: 1.02 }}
              style={{
                background: 'var(--bg-primary)',
                border: '1px solid var(--border)',
                padding: '0.8rem 0.7rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.45rem',
                borderRadius: '12px'
              }}
            >
              <div style={{ color: 'var(--accent)' }}>
                {social.icon}
              </div>
              <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-primary)' }}>{social.label}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
