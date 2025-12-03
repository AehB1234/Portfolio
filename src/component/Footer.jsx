import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaArrowUp, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: <FaGithub />, href: 'https://github.com' },
    { icon: <FaLinkedin />, href: 'https://linkedin.com' },
    { icon: <FaTwitter />, href: 'https://twitter.com' },
  ];

  const styles = {
    footer: {
      backgroundColor: '#0a192f',
      paddingTop: '3rem',
      paddingBottom: '2rem',
      paddingLeft: '1rem',
      paddingRight: '1rem'
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto'
    }
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem' }}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <a href="#home" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#64ffda' }}>
              Portfolio
            </a>
          </motion.div>

          <div style={{ display: 'flex', gap: '1.5rem', margin: '1.5rem 0' }}>
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#8892b0', fontSize: '1.25rem' }}
                whileHover={{ scale: 1.2, rotate: 5, color: '#64ffda' }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>

          <motion.button
            onClick={scrollToTop}
            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#64ffda', fontWeight: 600, background: 'none', border: 'none' }}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <span>Back to Top</span>
            <FaArrowUp />
          </motion.button>
        </div>

        <div style={{ borderTop: '1px solid #233554', paddingTop: '2rem', textAlign: 'center' }}>
          <motion.p
            style={{ color: '#8892b0' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Made with <FaHeart style={{ display: 'inline', color: '#ff6b6b', margin: '0 0.25rem' }} /> Bhea Marie Cervantes
          </motion.p>
          <motion.p
            style={{ color: '#495670', fontSize: '0.875rem', marginTop: '0.5rem' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            © {new Date().getFullYear()} All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;