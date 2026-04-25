import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 992);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return (
    <section id="home" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: isMobile ? '100px 20px 40px' : '100px 0',
      background: 'var(--bg-primary)'
    }}>
      <div style={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: isMobile ? '2rem' : '3rem',
        width: '100%',
        maxWidth: '1100px',
        margin: '0 auto',
        textAlign: isMobile ? 'center' : 'left'
      }}>
        <div style={{
          order: isMobile ? 2 : 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: isMobile ? 'center' : 'flex-start',
          maxWidth: isMobile ? '100%' : '620px'
        }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-label">Networking and Cybersecurity Student</span>
            <h1 style={{
              fontSize: isMobile ? 'clamp(2rem, 9vw, 2.7rem)' : 'clamp(2.8rem, 6vw, 4rem)',
              marginBottom: '1rem',
              color: 'var(--text-primary)'
            }}>
              Hi, I am Jermaine Rateng.
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              style={{
                fontSize: isMobile ? '1rem' : '1.15rem',
                color: 'var(--text-secondary)',
                maxWidth: '550px',
                lineHeight: 1.75
              }}
            >
              I am new to networking and cybersecurity, currently learning core concepts step by step and building confidence through practice.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            style={{
              display: 'flex',
              gap: '0.8rem',
              marginTop: '1.4rem',
              flexWrap: 'wrap',
              justifyContent: isMobile ? 'center' : 'flex-start'
            }}
          >
            {['Beginner Learner', 'Networking Basics', 'Cybersecurity Foundations'].map((item) => (
              <span key={item} style={{
                border: '1px solid var(--border)',
                background: 'var(--surface)',
                color: 'var(--text-secondary)',
                padding: '0.45rem 0.8rem',
                borderRadius: '999px',
                fontSize: '0.84rem',
                transition: 'transform 0.2s ease, border-color 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.borderColor = 'var(--accent)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'var(--border)';
              }}>
                {item}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            style={{
              display: 'flex',
              gap: '0.8rem',
              marginTop: '1.3rem',
              flexWrap: 'wrap',
              justifyContent: isMobile ? 'center' : 'flex-start'
            }}
          >
            <a href="#contact" style={{
              background: 'var(--accent)',
              color: '#0b1220',
              fontWeight: 700,
              borderRadius: '10px',
              padding: '0.62rem 1rem',
              fontSize: '0.9rem',
              border: '1px solid var(--accent)'
            }}>
              Contact me
            </a>
            <a href="#skills" style={{
              background: 'transparent',
              color: 'var(--text-primary)',
              fontWeight: 600,
              borderRadius: '10px',
              padding: '0.62rem 1rem',
              fontSize: '0.9rem',
              border: '1px solid var(--border)'
            }}>
              View skills
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          style={{
            order: isMobile ? 1 : 2,
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <div style={{
            width: isMobile ? 'clamp(180px, 50vw, 220px)' : '320px',
            height: isMobile ? 'clamp(180px, 50vw, 220px)' : '380px',
            borderRadius: '18px',
            overflow: 'hidden',
            border: '1px solid var(--border)',
            background: 'var(--bg-secondary)'
          }}>
            <img
              src="profile.jpg"
              alt="Jermaine Rateng"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
