import React from 'react';
import { motion } from 'framer-motion';
import { Network, Shield, Cpu, FileText, BarChart3, Mail, Terminal, Search, Zap, Command } from 'lucide-react';

const Skills = () => {
  const coreFocus = [
    {
      title: 'Networking Infrastructure',
      icon: <Network size={36} />,
      color: 'var(--accent-emerald)',
      description: 'Building and managing advanced network architectures with a focus on high availability and secure routing.',
      skills: ['LAN/WAN Optimization', 'Protocol Analysis', 'Cisco IOS Configuration', 'Network Monitoring']
    },
    {
      title: 'Cybersecurity Operations',
      icon: <Shield size={36} />,
      color: 'var(--accent-purple)',
      description: 'Mastering defensive strategies and vulnerability management to protect critical digital infrastructure.',
      skills: ['Incident Detection', 'Network Security Audits', 'Encryption Protocols', 'Defensive Hardening']
    }
  ];

  const techStack = [
    { name: 'Word', icon: <FileText size={18} /> },
    { name: 'Excel', icon: <BarChart3 size={18} /> },
    { name: 'Outlook', icon: <Mail size={18} /> }
  ];

  const tools = [
    { name: 'Cisco Packet Tracer', icon: <Cpu size={18} /> },
    { name: 'Wireshark', icon: <Search size={18} /> },
    { name: 'PuTTY', icon: <Terminal size={18} /> },
    { name: 'Nmap', icon: <Zap size={18} /> }
  ];

  return (
    <section id="skills" className="skills" style={{
      padding: 'var(--space-xxl) 0',
      background: 'var(--bg-primary)',
      position: 'relative'
    }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <span className="section-label">// CORE_SPECIALIZATIONS</span>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', color: 'var(--text-primary)', letterSpacing: '2px' }}>Student Focus Areas</h2>
        </div>

        {/* Major Focus Areas */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2.5rem',
          marginBottom: '6rem'
        }} className="focus-grid">
          {coreFocus.map((focus, idx) => (
            <motion.div
              key={focus.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.8 }}
              className="hud-border hud-corner-tl hud-corner-br"
              style={{
                padding: '3rem 2.5rem',
                background: 'var(--bg-secondary)',
                position: 'relative'
              }}
            >
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ 
                  color: focus.color, 
                  marginBottom: '1.5rem',
                  display: 'inline-flex',
                  padding: '1.2rem',
                  background: 'rgba(255,255,255,0.02)',
                  border: `1px solid ${focus.color}33`,
                  borderRadius: '2px'
                }}>
                  {focus.icon}
                </div>
                <h3 style={{ fontSize: '1.6rem', marginBottom: '1.2rem', color: 'var(--text-primary)', letterSpacing: '1px' }}>{focus.title.toUpperCase()}</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '2.5rem', lineHeight: 1.7, fontSize: '0.95rem' }}>{focus.description}</p>
                
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                  {focus.skills.map(skill => (
                    <span 
                      key={skill} 
                      className="mono"
                      style={{ 
                        fontSize: '0.65rem', 
                        padding: '0.4rem 0.9rem', 
                        background: 'rgba(0, 242, 255, 0.03)', 
                        border: '1px solid var(--glass-border)',
                        color: focus.color,
                        letterSpacing: '1px'
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technical Sections Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '3rem'
        }} className="tech-sections-grid">
          
          {/* Professional Tools tab-like section */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
              <Command size={16} color="var(--accent-cyan)" />
              <span className="mono" style={{ color: 'var(--accent-cyan)', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '2px' }}>TOOLS_LAB</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '1rem' }}>
              {tools.map((tool, idx) => (
                <motion.div
                  key={tool.name}
                  whileHover={{ scale: 1.02, borderColor: 'var(--accent-cyan)', background: 'rgba(0, 242, 255, 0.05)' }}
                  className="glass"
                  style={{
                    padding: '1.2rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    border: '1px solid var(--glass-border)',
                    borderRadius: '2px',
                    minHeight: '44px'
                  }}
                >
                  <span style={{ color: 'var(--accent-cyan)' }}>{tool.icon}</span>
                  <span className="mono" style={{ fontSize: '0.75rem', fontWeight: 600 }}>{tool.name}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Tech Stack section */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
              <FileText size={16} color="var(--accent-cyan)" />
              <span className="mono" style={{ color: 'var(--accent-cyan)', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '2px' }}>TECH_STACK</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: '1rem' }}>
              {techStack.map((item, idx) => (
                <motion.div
                  key={item.name}
                  whileHover={{ scale: 1.02, borderColor: 'var(--accent-cyan)', background: 'rgba(0, 242, 255, 0.05)' }}
                  className="glass"
                  style={{
                    padding: '1.2rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    border: '1px solid var(--glass-border)',
                    borderRadius: '2px',
                    minHeight: '44px'
                  }}
                >
                  <span style={{ color: 'var(--accent-cyan)' }}>{item.icon}</span>
                  <span className="mono" style={{ fontSize: '0.75rem', fontWeight: 600 }}>{item.name}</span>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .tech-sections-grid { grid-template-columns: 1fr !important; }
          .focus-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default Skills;
