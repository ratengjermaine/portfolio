import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const focusAreas = [
    {
      title: 'Networking',
      description: 'Designing and maintaining reliable network setups for real-world use.',
      items: ['LAN and WAN basics', 'Routing and switching', 'Protocol analysis', 'Cisco lab configuration']
    },
    {
      title: 'Cybersecurity',
      description: 'Applying defensive security practices to reduce risk and improve resilience.',
      items: ['Network hardening', 'Security auditing', 'Vulnerability awareness', 'Incident response basics']
    }
  ];

  const tools = [
    'Cisco Packet Tracer',
    'Wireshark',
    'PuTTY',
    'Nmap',
    'Microsoft Outlook',
    'Microsoft Excel',
    'Microsoft Word'
  ];

  return (
    <section id="skills" className="skills" style={{
      padding: '6.5rem 0',
      background: 'var(--bg-primary)'
    }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span className="section-label">Skills</span>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 2.6rem)', color: 'var(--text-primary)' }}>What I work with</h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.2rem',
          marginBottom: '2rem'
        }}>
          {focusAreas.map((focus, idx) => (
            <motion.div
              key={focus.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              style={{
                padding: '1.4rem',
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border)',
                borderRadius: '14px'
              }}
            >
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{focus.title}</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '0.9rem' }}>{focus.description}</p>
              <ul style={{ color: 'var(--text-dim)', display: 'grid', gap: '0.35rem' }}>
                {focus.items.map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '2.2rem' }}>
          <h3 style={{ marginBottom: '0.9rem', fontSize: '1.1rem' }}>Tools</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.65rem' }}>
            {tools.map((tool) => (
              <span key={tool} style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                color: 'var(--text-secondary)',
                padding: '0.45rem 0.75rem',
                borderRadius: '999px',
                fontSize: '0.86rem'
              }}>
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
