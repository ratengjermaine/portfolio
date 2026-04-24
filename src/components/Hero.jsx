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
      paddingTop: '80px',
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

      <div className="container hero-container">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
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

        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ marginBottom: '2rem' }}
          >
            <div className="mono hero-label">
              <Terminal size={14} />
              <span>STUDENT_ID // NETWORK_SECURITY_STUDENT</span>
            </div>
            
            <h1 className="hero-title">
              <span style={{ color: 'var(--text-dim)' }}>I'M </span> 
              <span className="glow-text-cyan">
                <Typewriter text={name} delay={120} />
              </span>
              <motion.span 
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="cursor"
              ></motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 1 }}
              className="hero-description"
            >
              I am a <span style={{ color: 'var(--accent-cyan)', fontWeight: 600 }}>Networking and Cybersecurity student</span> building resilient infrastructure and defending digital frontiers through technical excellence.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 0.8 }}
            className="hero-badges"
          >
            <div className="badge">
               <Network size={22} color="var(--accent-emerald)" />
               <span className="mono">NETWORKING</span>
            </div>
            <div className="badge">
               <Shield size={22} color="var(--accent-purple)" />
               <span className="mono">CYBER_DEFENSE</span>
            </div>
          </motion.div>
        </div>

      </div>

      <style>{`
        .hero-container {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          align-items: center;
          gap: 4rem;
          zIndex: 1;
          width: 100%;
        }

        .hero-image-wrapper {
          display: flex;
          justify-content: flex-start;
          order: 2;
        }

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

        .hero-title {
          font-size: clamp(2.5rem, 6vw, 4.5rem);
          margin-bottom: 2rem;
          color: var(--text-primary);
          letter-spacing: 2px;
        }

        .hero-label {
          color: var(--accent-cyan);
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
          font-size: 0.75rem;
        }

        .hero-description {
          font-size: clamp(1rem, 2vw, 1.25rem);
          color: var(--text-secondary);
          max-width: 550px;
          line-height: 1.7;
          font-family: var(--font-body);
        }

        .hero-badges {
          display: flex;
          gap: 2rem;
          margin-top: 3rem;
        }

        .badge {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .badge span {
          font-weight: 700;
          font-size: 0.8rem;
          color: var(--text-primary);
        }

        .cursor {
          margin-left: 4px;
          border-left: 4px solid var(--accent-cyan);
        }

        @media (max-width: 992px) {
          .hero-container { 
            grid-template-columns: 1fr; 
            text-align: center; 
            gap: 3rem;
          }
          
          .hero-content { 
            display: flex; 
            flex-direction: column; 
            align-items: center; 
            order: 2;
          }

          .hero-image-wrapper { 
            justify-content: center;
            order: 1;
            margin-bottom: 1rem;
          }

          .hero-image-container { 
            width: 220px; 
            height: 220px; 
            border-radius: 50%;
          }

          .hero-description {
             max-width: 100%;
          }

          .hero-badges {
            justify-content: center;
            flex-wrap: wrap;
            gap: 1.5rem;
          }
        }

        @media (max-width: 480px) {
          .hero-image-container { 
            width: 180px; 
            height: 180px; 
          }
          .hero-title {
            font-size: 2.2rem;
          }
          .hero-label {
            font-size: 0.65rem;
            flex-direction: column;
            gap: 0.4rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
