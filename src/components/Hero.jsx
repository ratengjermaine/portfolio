import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, Network } from 'lucide-react';

const Typewriter = ({ text, delay = 100 }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  return <span>{currentText}</span>;
};

const Hero = () => {
  const name = "Jermaine Rateng'";
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
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--bg-primary)'
    }}>
      {/* Background Glow */}
      <div style={{
        position: 'absolute',
        top: '10%',
        right: '-5%',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(0, 242, 255, 0.04) 0%, transparent 70%)',
        borderRadius: '50%',
        zIndex: 0
      }}></div>

      <div style={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: isMobile ? '2rem' : '4rem',
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        zIndex: 1,
        textAlign: isMobile ? 'center' : 'left'
      }}>
        
        {/* Photo Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          style={{
            order: isMobile ? 1 : 2,
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <div style={{
            width: isMobile ? 'clamp(180px, 50vw, 220px)' : '420px',
            height: isMobile ? 'clamp(180px, 50vw, 220px)' : '420px',
            borderRadius: isMobile ? '50%' : '20px',
            overflow: 'hidden',
            boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
            border: '1px solid var(--glass-border)',
            background: 'var(--bg-secondary)'
          }}>
            <img 
              src="profile.jpg" 
              alt="Jermaine Rateng'" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </motion.div>

        {/* Content Section */}
        <div style={{
          order: isMobile ? 2 : 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: isMobile ? 'center' : 'flex-start',
          maxWidth: isMobile ? '100%' : '600px'
        }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 style={{ 
              fontSize: isMobile ? 'clamp(1.8rem, 8vw, 2.5rem)' : 'clamp(2.5rem, 6vw, 4.5rem)', 
              marginBottom: '1.5rem', 
              color: 'var(--text-primary)', 
              letterSpacing: '2px',
              lineHeight: 1.2
            }}>
              <span style={{ color: 'var(--text-dim)' }}>I'M </span> 
              <span className="glow-text-cyan">
                <Typewriter text={name} delay={120} />
              </span>
              <motion.span 
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                style={{ marginLeft: '4px', borderLeft: '4px solid var(--accent-cyan)' }}
              ></motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 1 }}
              style={{ 
                fontSize: isMobile ? '1rem' : '1.25rem', 
                color: 'var(--text-secondary)', 
                maxWidth: '550px',
                lineHeight: 1.7,
                fontFamily: 'var(--font-body)'
              }}
            >
              <span style={{ color: 'var(--accent-cyan)', fontWeight: 600 }}>A Networking and Cybersecurity student</span> building resilient infrastructure and defending digital frontiers through technical excellence.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 0.8 }}
            style={{ 
              display: 'flex', 
              gap: isMobile ? '1.5rem' : '2.5rem', 
              marginTop: '2.5rem',
              flexWrap: 'wrap',
              justifyContent: 'center'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
               <Network size={22} color="var(--accent-emerald)" />
               <span className="mono" style={{ fontWeight: 700, fontSize: '0.8rem', color: 'var(--text-primary)' }}>NETWORKING</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
               <Shield size={22} color="var(--accent-purple)" />
               <span className="mono" style={{ fontWeight: 700, fontSize: '0.8rem', color: 'var(--text-primary)' }}>CYBER_DEFENSE</span>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
