import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Shield, Network } from 'lucide-react';

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
  
  return (
    <section id="home" className="hero" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: '100px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Subtle background glow */}
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

      <div className="container" style={{
        display: 'grid',
        gridTemplateColumns: '1.1fr 0.9fr',
        alignItems: 'center',
        gap: '4rem',
        zIndex: 1
      }}>
        
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            style={{ marginBottom: '2rem' }}
          >
            <div className="mono" style={{ color: 'var(--accent-cyan)', display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', fontSize: '0.75rem' }}>
              <Terminal size={14} />
              <span>STUDENT_ID // NETWORK_SECURITY_STUDENT</span>
            </div>
            
            <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', marginBottom: '2rem', color: 'var(--text-primary)', letterSpacing: '2px' }}>
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
                fontSize: 'clamp(1rem, 2vw, 1.25rem)', 
                color: 'var(--text-secondary)', 
                maxWidth: '550px',
                lineHeight: 1.7,
                fontFamily: 'var(--font-body)',
                fontWeight: 400
              }}
            >
              I am a <span style={{ color: 'var(--accent-cyan)', fontWeight: 600 }}>Networking and Cybersecurity student</span> building resilient infrastructure and defending digital frontiers through technical excellence.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 0.8 }}
            style={{ display: 'flex', gap: '2rem', marginTop: '3rem' }}
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

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          style={{ display: 'flex', justifyContent: 'center' }}
          className="hero-image-wrapper"
        >
          <div className="hero-image-container">
            <img 
              src="profile.jpg" 
              alt="Jermaine Rateng'" 
              className="hero-profile-img"
            />
          </div>
        </motion.div>

      </div>

      <style>{`
        .hero-image-container {
          width: 420px;
          height: 420px;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 50px rgba(0,0,0,0.5);
          background: var(--bg-secondary);
          border: 1px solid var(--glass-border);
        }

        .hero-profile-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        @media (max-width: 992px) {
          .hero .container { 
            grid-template-columns: 1fr; 
            text-align: center; 
            justify-items: center; 
            gap: 2rem;
          }
          .hero-content { 
            display: flex; 
            flex-direction: column; 
            align-items: center; 
          }
          .hero-image-wrapper { 
            order: -1; 
          }
          .hero-image-container { 
            width: 220px; 
            height: 220px; 
            border-radius: 50%;
            margin-bottom: 1rem;
          }
        }

        @media (max-width: 480px) {
          .hero-image-container { 
            width: 180px; 
            height: 180px; 
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
