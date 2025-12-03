import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Hero = () => {
  const socialLinks = [
    { 
      icon: <FaGithub />, 
      href: 'https://github.com/AehB1234',
      label: 'GitHub Profile',
      color: '#f0f6fc' 
    },
    { 
      icon: <FaLinkedin />, 
      href: 'https://www.linkedin.com/in/bhea-marie-cervantes-916524376',
      label: 'LinkedIn Profile',
      color: '#0a66c2' 
    },
    { 
      icon: <FaInstagram />,
      href: 'https://www.instagram.com/_bheayah?igsh=MjNvb3F2YWk3dmdu',
      label: 'Instagram Profile',
      color: '#E1306C'
    },
  ];
  const skills = ["React", "JavaScript", "TypeScript", "Node.js", "Framer Motion", "UI/UX Design"];

  // Bubble data for different sizes and colors
  const bubbles = Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    size: Math.random() * 60 + 20, // Random size between 20-80px
    x: Math.random() * 100, // Random horizontal position
    y: Math.random() * 100, // Random vertical position
    opacity: Math.random() * 0.1 + 0.05, // Random opacity
    color: i % 3 === 0 ? '#64ffda' : i % 3 === 1 ? '#4299e1' : '#8B5CF6', // Different colors
    delay: Math.random() * 5, // Random delay
    duration: Math.random() * 20 + 10, // Random duration
  }));

  // Floating icons (tech stack icons)
  const floatingIcons = [
    { icon: '⚛️', delay: 0, size: 32, x: 10, y: 20 },
    { icon: '💎', delay: 1, size: 28, x: 85, y: 15 },
    { icon: '🎨', delay: 2, size: 36, x: 15, y: 80 },
    { icon: '🚀', delay: 3, size: 30, x: 90, y: 70 },
    { icon: '🔧', delay: 4, size: 26, x: 5, y: 40 },
    { icon: '✨', delay: 5, size: 24, x: 95, y: 45 },
  ];

  const styles = {
    section: {
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 1rem',
      paddingTop: '5rem',
      position: 'relative',
      background: 'linear-gradient(135deg, #0a192f 0%, #0d1f3a 100%)',
      overflow: 'hidden'
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      textAlign: 'center',
      position: 'relative',
      zIndex: 2
    },
    backgroundBubble: {
      position: 'absolute',
      backgroundColor: 'rgba(100, 255, 218, 0.1)',
      borderRadius: '50%',
      filter: 'blur(40px)'
    },
    skillTag: {
      display: 'inline-block',
      padding: '0.5rem 1rem',
      backgroundColor: 'rgba(100, 255, 218, 0.1)',
      color: '#64ffda',
      borderRadius: '20px',
      fontSize: '0.875rem',
      fontWeight: 500,
      margin: '0.25rem',
      border: '1px solid rgba(100, 255, 218, 0.2)'
    },
    floatingBubble: {
      position: 'absolute',
      borderRadius: '50%',
      pointerEvents: 'none',
      zIndex: 1
    },
    floatingIcon: {
      position: 'absolute',
      fontSize: '1.5rem',
      opacity: 0.3,
      pointerEvents: 'none',
      zIndex: 1
    }
  };

  return (
    <section id="home" style={styles.section}>
      {/* Large Background Bubbles */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', zIndex: 0 }}>
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`large-${i}`}
            style={{
              ...styles.backgroundBubble,
              width: '256px',
              height: '256px',
              top: `${20 + i * 15}%`,
              left: `${10 + i * 20}%`,
            }}
            initial={{ 
              x: Math.random() * 100 - 50,
              y: Math.random() * 100 - 50,
              scale: 0 
            }}
            animate={{ 
              x: Math.random() * 200 - 100,
              y: Math.random() * 200 - 100,
              scale: [0, 1, 0.5, 1],
              rotate: 360 
            }}
            transition={{ 
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Animated Small Bubbles */}
      {bubbles.map((bubble) => (
        <motion.div
          key={`bubble-${bubble.id}`}
          style={{
            ...styles.floatingBubble,
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            left: `${bubble.x}%`,
            top: `${bubble.y}%`,
            backgroundColor: bubble.color,
            opacity: bubble.opacity,
            filter: 'blur(10px)'
          }}
          initial={{ 
            y: 0,
            x: 0,
            scale: 0 
          }}
          animate={{ 
            y: [0, -100, 0],
            x: [0, Math.random() * 100 - 50, 0],
            scale: [0, 1, 0.5, 1]
          }}
          transition={{ 
            duration: bubble.duration,
            repeat: Infinity,
            delay: bubble.delay,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Floating Tech Icons */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={`icon-${index}`}
          style={{
            ...styles.floatingIcon,
            fontSize: `${item.size}px`,
            left: `${item.x}%`,
            top: `${item.y}%`,
          }}
          initial={{ 
            y: 0,
            rotate: 0,
            opacity: 0 
          }}
          animate={{ 
            y: [0, -30, 0],
            rotate: [0, 180, 360],
            opacity: [0, 0.3, 0]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            delay: item.delay,
            ease: "easeInOut"
          }}
        >
          {item.icon}
        </motion.div>
      ))}

      {/* Particle Effect Lines */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`line-${i}`}
          style={{
            position: 'absolute',
            width: '1px',
            height: '100px',
            background: `linear-gradient(to top, transparent, #64ffda, transparent)`,
            left: `${Math.random() * 100}%`,
            top: '-100px',
            opacity: 0.3
          }}
          initial={{ y: -100 }}
          animate={{ y: '100vh' }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear"
          }}
        />
      ))}

      {/* Pulsing Rings */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`ring-${i}`}
          style={{
            position: 'absolute',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            border: `1px solid rgba(100, 255, 218, 0.${10 + i * 5})`,
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 0
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: [0, 1 + (i * 0.3)],
            opacity: [0, 0.2, 0] 
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: i * 2,
            ease: "easeOut"
          }}
        />
      ))}

      {/* Main Content */}
      <div style={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            style={{ color: '#64ffda', fontSize: '1.125rem', marginBottom: '1rem', fontWeight: 500 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Hello, I'm
          </motion.p>
          
          <motion.h1
            style={{ 
              fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
              fontWeight: 'bold', 
              marginBottom: '1rem',
              background: 'linear-gradient(45deg, #64ffda, #e6f1ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              position: 'relative',
              display: 'inline-block'
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
          >
            Bhea
            {/* Name glow effect */}
            <motion.div
              style={{
                position: 'absolute',
                inset: '-10px',
                background: 'linear-gradient(45deg, #64ffda, #4299e1)',
                filter: 'blur(20px)',
                opacity: 0.3,
                zIndex: -1,
                borderRadius: '10px'
              }}
              animate={{ 
                opacity: [0.3, 0.5, 0.3],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.h1>
          
          <motion.h2
            style={{ 
              fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', 
              color: '#8892b0', 
              fontWeight: 'bold', 
              marginBottom: '1.5rem' 
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Frontend Developer & UI/UX Enthusiast
          </motion.h2>
          
          <motion.p
            style={{ 
              maxWidth: '42rem', 
              margin: '0 auto', 
              color: '#a8b2d1', 
              fontSize: '1.125rem', 
              marginBottom: '2rem',
              lineHeight: '1.8'
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            I specialize in creating beautiful, functional, and user-centered digital experiences. 
            With a passion for clean code and intuitive design, I transform complex problems into 
            simple, elegant solutions. Currently crafting amazing experiences with React, TypeScript, 
            and modern web technologies.
          </motion.p>

          {/* Skills Tags with floating animation */}
          <motion.div 
            style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.5rem', marginBottom: '3rem' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {skills.map((skill, index) => (
              <motion.span
                key={skill}
                style={styles.skillTag}
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  y: [0, -5, 0]
                }}
                transition={{ 
                  delay: 0.6 + (index * 0.1),
                  y: {
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.5
                  }
                }}
                whileHover={{ 
                  scale: 1.1,
                  backgroundColor: 'rgba(100, 255, 218, 0.2)',
                  boxShadow: '0 5px 15px rgba(100, 255, 218, 0.3)',
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* Social Links with enhanced animation */}
        <motion.div 
          style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '1.5rem', 
            marginBottom: '3rem',
            flexWrap: 'wrap',
            position: 'relative'
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              style={{ 
                fontSize: '1.5rem', 
                color: '#8892b0',
                padding: '0.75rem',
                borderRadius: '50%',
                backgroundColor: 'rgba(136, 146, 176, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '3.5rem',
                height: '3.5rem',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                position: 'relative',
                zIndex: 2
              }}
              whileHover={{ 
                scale: 1.2, 
                rotate: 10, 
                color: link.color,
                backgroundColor: 'rgba(100, 255, 218, 0.15)',
                boxShadow: `0 0 25px ${link.color}60`
              }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 20, scale: 0 }}
              animate={{ 
                opacity: 1, 
                y: 0, 
                scale: 1,
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                delay: 0.8 + (index * 0.1),
                rotate: {
                  duration: 5,
                  repeat: Infinity,
                  delay: index * 0.5
                }
              }}
            >
              {link.icon}
              {/* Pulsing circle behind icon */}
              <motion.div
                style={{
                  position: 'absolute',
                  inset: '-5px',
                  borderRadius: '50%',
                  border: `2px solid ${link.color}`,
                  zIndex: -1,
                  opacity: 0
                }}
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 0, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.3
                }}
              />
            </motion.a>
          ))}
        </motion.div>

        {/* CTA Buttons with enhanced effects */}
        <motion.div 
          style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            justifyContent: 'center', 
            gap: '1rem', 
            marginBottom: '3rem',
            position: 'relative',
            zIndex: 2
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
        >
          <motion.a
            href="#projects"
            style={{
              padding: '0.875rem 2rem',
              backgroundColor: '#64ffda',
              color: '#0a192f',
              borderRadius: '50px',
              fontWeight: 600,
              fontSize: '1rem',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              border: '2px solid transparent',
              transition: 'all 0.3s ease',
              position: 'relative',
              overflow: 'hidden'
            }}
            whileHover={{ 
              scale: 1.05, 
              boxShadow: '0 10px 30px rgba(100, 255, 218, 0.4)',
              backgroundColor: '#52d9c0'
            }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Button shine effect */}
            <motion.div
              style={{
                position: 'absolute',
                top: 0,
                left: '-100%',
                width: '100%',
                height: '100%',
                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)'
              }}
              animate={{ left: '100%' }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity,
                delay: 1
              }}
            />
            <span>View My Work</span>
            <motion.svg 
              width="20" 
              height="20" 
              viewBox="0 0 20 20" 
              fill="none"
              animate={{ x: [0, 5, 0] }}
              transition={{ 
                duration: 1,
                repeat: Infinity
              }}
            >
              <path d="M10 4L16 10L10 16L8.5 14.5L13 10L8.5 5.5L10 4Z" fill="currentColor"/>
            </motion.svg>
          </motion.a>
          
          <motion.a
            href="#contact"
            style={{
              padding: '0.875rem 2rem',
              border: '2px solid #64ffda',
              color: '#64ffda',
              borderRadius: '50px',
              fontWeight: 600,
              fontSize: '1rem',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'all 0.3s ease',
              position: 'relative',
              overflow: 'hidden'
            }}
            whileHover={{ 
              scale: 1.05, 
              backgroundColor: 'rgba(100, 255, 218, 0.1)',
              boxShadow: '0 10px 30px rgba(100, 255, 218, 0.2)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Button border animation */}
            <motion.div
              style={{
                position: 'absolute',
                inset: 0,
                borderRadius: '50px',
                border: '2px solid transparent',
                background: 'linear-gradient(45deg, #64ffda, #4299e1, #64ffda) border-box',
                WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
                maskComposite: 'exclude',
                opacity: 0.5
              }}
              animate={{ rotate: 360 }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <span>Get In Touch</span>
            <motion.svg 
              width="20" 
              height="20" 
              viewBox="0 0 20 20" 
              fill="none"
              animate={{ y: [0, -3, 0] }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity
              }}
            >
              <path d="M2.5 5L9.511 10.427C9.806 10.659 10.194 10.659 10.489 10.427L17.5 5M3.333 15H16.667C17.126 15 17.5 14.626 17.5 14.167V5.833C17.5 5.374 17.126 5 16.667 5H3.333C2.874 5 2.5 5.374 2.5 5.833V14.167C2.5 14.626 2.874 15 3.333 15Z" 
                stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </motion.svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;