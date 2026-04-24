import React from 'react';
import { motion } from 'framer-motion';

const Overview = () => {
  return (
    <section id="overview" className="overview" style={{
      padding: '8rem 0',
      background: 'var(--bg-secondary)',
      borderTop: '1px solid var(--glass-border)',
      borderBottom: '1px solid var(--glass-border)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="container" style={{ maxWidth: '850px' }}>
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 1, ease: "easeOut" }}
           style={{ textAlign: 'center' }}
        >

          <span className="section-label">
            // STUDENT_MISSION_LOG
          </span>

          <p style={{ 
            fontSize: 'clamp(1.1rem, 3vw, 2rem)', 
            fontWeight: 500, 
            lineHeight: 1.6, 
            color: 'var(--text-primary)',
            letterSpacing: '0.5px',
            marginTop: '2rem',
            fontFamily: 'var(--font-body)'
          }}>
            I am a <span style={{ color: 'var(--accent-cyan)', fontWeight: 700 }}>Networking and Cybersecurity student</span> driven by a deep passion for technology. My focus is on mastering complex network architectures and implementing robust security protocols to build efficient, reliable, and secure digital systems.
          </p>
          
          <div style={{ 
            marginTop: '4rem', 
            height: '1px', 
            width: '120px', 
            background: 'var(--accent-cyan)', 
            margin: '4rem auto 0',
            boxShadow: '0 0 15px var(--accent-cyan)',
            opacity: 0.5
          }}></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Overview;
