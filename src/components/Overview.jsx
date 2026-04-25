import React from 'react';
import { motion } from 'framer-motion';

const Overview = () => {
  return (
    <section id="overview" className="overview" style={{
      padding: '6.5rem 0',
      background: 'var(--bg-secondary)',
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)'
    }}>
      <div className="container" style={{ maxWidth: '850px' }}>
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: '-100px' }}
           transition={{ duration: 0.8, ease: 'easeOut' }}
           style={{ textAlign: 'center' }}
        >
          <span className="section-label">About me</span>

          <p style={{
            fontSize: 'clamp(1.05rem, 3vw, 1.5rem)',
            fontWeight: 500,
            lineHeight: 1.8,
            color: 'var(--text-primary)',
            marginTop: '1rem'
          }}>
            I am a networking and cybersecurity student at the beginning of my journey. Right now I am focused on understanding the basics clearly and improving through regular study and small hands-on exercises.
          </p>
          
          <p style={{ marginTop: '1rem', color: 'var(--text-dim)' }}>
            Current focus: networking fundamentals, cybersecurity fundamentals, and consistent daily learning.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Overview;
