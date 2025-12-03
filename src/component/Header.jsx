import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaHome, FaUser, FaCode, FaTools, FaEnvelope } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', icon: <FaHome />, href: '#home' },
    { name: 'About', icon: <FaUser />, href: '#about' },
    { name: 'Projects', icon: <FaCode />, href: '#projects' },
    { name: 'Skills', icon: <FaTools />, href: '#skills' },
    { name: 'Contact', icon: <FaEnvelope />, href: '#contact' },
  ];

  return (
    <motion.header 
      style={{
        position: 'fixed',
        width: '100%',
        zIndex: 40,
        padding: '1rem 1.5rem',
        backgroundColor: 'rgba(10, 25, 47, 0.9)',
        backdropFilter: 'blur(10px)'
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <a href="#home" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#64ffda' }}>
            Portfolio
          </a>
        </motion.div>

        {/* Desktop Navigation */}
        <nav style={{ display: 'none', gap: '2rem', alignItems: 'center' }} className="desktop-nav">
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#8892b0' }}
              className="nav-link"
              whileHover={{ scale: 1.1, y: -2, color: '#64ffda' }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <span>{item.icon}</span>
              <span>{item.name}</span>
            </motion.a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          style={{ display: 'block', fontSize: '1.5rem', color: '#64ffda', background: 'none', border: 'none' }}
          className="mobile-menu-btn"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              width: '100%',
              backgroundColor: 'rgba(17, 34, 64, 0.95)',
              backdropFilter: 'blur(10px)'
            }}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div style={{ padding: '1rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.5rem 0', color: '#8892b0' }}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <span>{item.icon}</span>
                  <span>{item.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        @media (min-width: 768px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
        }
        
        .nav-link:hover {
          color: #64ffda !important;
        }
      `}</style>
    </motion.header>
  );
};

export default Header;