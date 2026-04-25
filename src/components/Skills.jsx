import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const focusAreas = [
    {
      title: 'Networking',
      description: 'Designing reliable and structured network environments with a focus on performance and resilience.',
      items: ['Routing and switching principles', 'Subnetting and IP planning', 'Traffic flow interpretation', 'Structured troubleshooting workflow']
    },
    {
      title: 'Cybersecurity',
      description: 'Applying defensive security thinking to identify risk and protect core network assets.',
      items: ['Security baseline practices', 'Threat-awareness mindset', 'Access control fundamentals', 'Foundational incident response process']
    }
  ];

  const technicalStack = [
    { name: 'Wireshark', context: 'Deep packet analysis and network troubleshooting.' },
    { name: 'Cisco Packet Tracer', context: 'Network topology simulation and Cisco configuration practice.' },
    { name: 'Nmap', context: 'Host discovery and network surface visibility checks.' },
    { name: 'PuTTY', context: 'Secure remote access for CLI-based network administration.' },
    { name: 'Microsoft Outlook', context: 'Professional communication and workflow coordination.' },
    { name: 'Microsoft Excel', context: 'Structured tracking for configurations, notes, and issue logs.' },
    { name: 'Microsoft Word', context: 'Clear technical documentation and reporting.' }
  ];

  return (
    <section id="skills" className="skills" style={{
      padding: '6.5rem 0',
      background: 'var(--bg-primary)'
    }}>
      <motion.div
        className="container"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span className="section-label">Expertise</span>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 2.6rem)', color: 'var(--text-primary)' }}>Technical Focus</h2>
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
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="glass-card"
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

        <div style={{ textAlign: 'center', marginTop: '2.3rem' }}>
          <h3 style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>Core Technical Stack</h3>
          <div style={{ display: 'grid', gap: '0.7rem' }}>
            {technicalStack.map((item, idx) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: idx * 0.05, duration: 0.45 }}
                className="glass-card"
                style={{ textAlign: 'left' }}
              >
                <p style={{ color: 'var(--text-primary)', fontWeight: 600, marginBottom: '0.25rem' }}>
                  {item.name}
                </p>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.93rem' }}>
                  {item.context}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
