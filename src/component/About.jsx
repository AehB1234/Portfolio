import React from 'react';
import { motion } from 'framer-motion';
import { FaPalette, FaLightbulb, FaGraduationCap, FaGlobeAmericas } from 'react-icons/fa';

const About = () => {
  const personalTraits = [
    {
      icon: <FaPalette />,
      title: "Design Thinker",
      description: "I believe great design solves problems. I create interfaces that are both beautiful and functional."
    },
    {
      icon: <FaLightbulb />,
      title: "Problem Solver",
      description: "I enjoy tackling complex challenges and finding innovative solutions that make a difference."
    },
    {
      icon: <FaGraduationCap />,
      title: "Lifelong Learner",
      description: "Constantly exploring new technologies and frameworks to stay at the forefront of web development."
    }
  ];

  const funFacts = [
    "Started coding by customizing MySpace profiles",
    "Believe in the power of good documentation",
    "Have strong opinions about fonts and color palettes",
    "Think good UI/UX is like good magic - invisible but powerful",
    "Believe console.log() is a developer's best friend",
  ];

  const styles = {
    section: {
      padding: '4rem 1rem 3rem 1rem', // Changed from '4rem 1rem 6rem 1rem' to '4rem 1rem 3rem 1rem' (reduced bottom padding)
      backgroundColor: 'rgba(10, 25, 47, 0.9)',
      position: 'relative',
      overflow: 'hidden'
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      position: 'relative',
      zIndex: 1
    },
    featureCard: {
      backgroundColor: 'rgba(23, 42, 69, 0.7)',
      padding: '2rem',
      borderRadius: '16px',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(100, 255, 218, 0.1)',
      transition: 'all 0.3s ease'
    },
    accentText: {
      background: 'linear-gradient(45deg, #64ffda, #4299e1)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    },
    funFact: {
      padding: '0.75rem 1.5rem',
      backgroundColor: 'rgba(100, 255, 218, 0.1)',
      borderRadius: '30px',
      border: '1px solid rgba(100, 255, 218, 0.2)',
      fontSize: '0.95rem',
      color: '#64ffda'
    },
    divider: {
      height: '1px',
      background: 'linear-gradient(90deg, transparent, rgba(100, 255, 218, 0.3), transparent)',
      margin: '3rem auto', // Reduced from 4rem to 3rem
      width: '80%'
    }
  };

  return (
    <section id="about" style={styles.section}>
      {/* Background Pattern */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(100, 255, 218, 0.05) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(66, 153, 225, 0.05) 0%, transparent 50%)',
        zIndex: 0
      }}></div>

      <div style={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          
          <h2 style={{ 
            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', 
            fontWeight: 'bold', 
            marginBottom: '1.5rem',
            lineHeight: 1.2
          }}>
            More Than <span style={styles.accentText}>Just Code</span>
          </h2>
          
          <div style={{ 
            width: '80px', 
            height: '4px', 
            background: 'linear-gradient(90deg, #64ffda, #4299e1)',
            margin: '0 auto',
            borderRadius: '2px'
          }}></div>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem' }}> {/* Reduced gap from 4rem to 3rem */}
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            style={{
              backgroundColor: 'rgba(17, 34, 64, 0.4)',
              padding: '2rem', // Reduced from 2.5rem to 2rem
              borderRadius: '20px',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(100, 255, 218, 0.1)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '2rem', marginBottom: '1.5rem' }}> {/* Reduced from 2rem to 1.5rem */}
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #64ffda, #4299e1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                color: '#0a192f',
                flexShrink: 0
              }}>
                <FaGlobeAmericas />
              </div>
              <div>
                <h3 style={{ 
                  fontSize: '1.75rem', 
                  fontWeight: 'bold', 
                  marginBottom: '1rem',
                  color: '#e6f1ff'
                }}>
                  {/* Title removed - this area is now empty */}
                </h3>
                <p style={{ 
                  color: '#a8b2d1', 
                  fontSize: '1.1rem',
                  lineHeight: '1.8',
                  marginBottom: '1.5rem'
                }}>
                  {/* Story content removed - this area is now empty */}
                </p>
                <p style={{ 
                  color: '#a8b2d1', 
                  fontSize: '1.1rem',
                  lineHeight: '1.8'
                }}>
                  {/* Story content removed - this area is now empty */}
                </p>
              </div>
            </div>

            {/* Fun Facts */}
            <div style={{ marginTop: '1.5rem' }}> {/* Reduced from 2rem to 1.5rem */}
              <h4 style={{ 
                fontSize: '1.25rem', 
                fontWeight: 'bold', 
                marginBottom: '1rem', // Reduced from 1.5rem to 1rem
                color: '#64ffda'
              }}>
                Fun Facts About Me
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}> {/* Reduced gap from 1rem to 0.75rem */}
                {funFacts.map((fact, index) => (
                  <motion.div
                    key={index}
                    style={styles.funFact}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                    whileHover={{ 
                      scale: 1.05,
                      backgroundColor: 'rgba(100, 255, 218, 0.15)',
                      borderColor: 'rgba(100, 255, 218, 0.3)'
                    }}
                  >
                    {fact}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Personal Traits Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}> {/* Reduced gap from 1.5rem to 1rem */}
            {personalTraits.map((trait, index) => (
              <motion.div
                key={trait.title}
                style={{
                  ...styles.featureCard,
                  padding: '1.5rem' // Reduced from 2rem to 1.5rem
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                whileHover={{ 
                  y: -10,
                  borderColor: 'rgba(100, 255, 218, 0.3)',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3), 0 0 30px rgba(100, 255, 218, 0.1)'
                }}
              >
                <div style={{ 
                  width: '60px', // Reduced from 70px to 60px
                  height: '60px', // Reduced from 70px to 60px
                  borderRadius: '16px',
                  background: 'linear-gradient(135deg, rgba(100, 255, 218, 0.2), rgba(66, 153, 225, 0.2))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem', // Reduced from 1.5rem to 1rem
                  fontSize: '1.5rem', // Reduced from 1.75rem to 1.5rem
                  color: '#64ffda'
                }}>
                  {trait.icon}
                </div>
                <h4 style={{ 
                  fontSize: '1.25rem', // Reduced from 1.35rem to 1.25rem
                  fontWeight: 'bold', 
                  marginBottom: '0.75rem', // Reduced from 1rem to 0.75rem
                  color: '#e6f1ff'
                }}>
                  {trait.title}
                </h4>
                <p style={{ 
                  color: '#a8b2d1', 
                  fontSize: '0.95rem', // Reduced from 1rem to 0.95rem
                  lineHeight: '1.6' // Reduced from 1.7 to 1.6
                }}>
                  {trait.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Second Divider - Optional: Remove or reduce further */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            style={{
              ...styles.divider,
              margin: '2rem auto', // Further reduced from 3rem to 2rem
              background: 'linear-gradient(90deg, transparent, rgba(100, 255, 218, 0.4), rgba(66, 153, 225, 0.4), transparent)'
            }}
          />

        </div>
      </div>
      
    </section>
  );
};

export default About;