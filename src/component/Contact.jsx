import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaCheck, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    { icon: <FaEnvelope />, text: 'bheamariecervantes9@gmail.com', href: 'mailto:bheamariecervantes9@gmail.com' },
    { icon: <FaPhone />, text: '09097686919', href: 'tel:09097686919' },
    { icon: <FaMapMarkerAlt />, text: 'Parañaque City, Philippines', href: '#' },
  ];

  const styles = {
    section: {
      padding: '2rem 1rem 4rem 1rem', // Reduced top padding from 5rem to 2rem
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
    header: {
      textAlign: 'center',
      marginBottom: '3rem' // Reduced from 4rem to 3rem
    },
    title: {
      fontSize: 'clamp(2.25rem, 5vw, 3rem)', // Reduced font size
      fontWeight: 'bold',
      marginBottom: '1rem',
      color: '#e6f1ff'
    },
    divider: {
      width: '5rem',
      height: '2px',
      backgroundColor: '#64ffda',
      margin: '0 auto 1rem auto' // Reduced margin
    },
    subTitle: {
      color: '#a8b2d1',
      maxWidth: '700px',
      margin: '0 auto',
      fontSize: '1rem', // Reduced font size
      lineHeight: '1.6'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '2rem' // Reduced from 3rem to 2rem
    },
    '@media (min-width: 768px)': {
      grid: {
        gridTemplateColumns: '1fr 1fr'
      }
    },
    formCard: {
      backgroundColor: 'rgba(23, 42, 69, 0.7)',
      padding: '2rem', // Reduced from 2.5rem to 2rem
      borderRadius: '16px', // Reduced from 20px
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(100, 255, 218, 0.1)'
    },
    contactCard: {
      backgroundColor: 'rgba(23, 42, 69, 0.7)',
      padding: '1.25rem', // Reduced from 1.5rem
      borderRadius: '14px', // Reduced from 16px
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(100, 255, 218, 0.1)',
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      textDecoration: 'none',
      color: '#a8b2d1',
      transition: 'all 0.3s ease'
    },
    input: {
      width: '100%',
      padding: '0.875rem', // Reduced from 1rem
      backgroundColor: 'rgba(23, 42, 69, 0.9)',
      border: '1px solid rgba(100, 255, 218, 0.2)',
      borderRadius: '8px',
      color: '#e6f1ff',
      fontSize: '0.95rem', // Reduced font size
      marginTop: '0.5rem'
    },
    label: {
      display: 'block',
      color: '#64ffda',
      fontWeight: '600',
      marginBottom: '0.5rem',
      fontSize: '0.9rem' // Reduced font size
    },
    textarea: {
      width: '100%',
      padding: '0.875rem', // Reduced from 1rem
      backgroundColor: 'rgba(23, 42, 69, 0.9)',
      border: '1px solid rgba(100, 255, 218, 0.2)',
      borderRadius: '8px',
      color: '#e6f1ff',
      fontSize: '0.95rem', // Reduced font size
      marginTop: '0.5rem',
      resize: 'vertical',
      minHeight: '140px' // Reduced from 150px
    },
    submitButton: {
      width: '100%',
      padding: '0.875rem', // Reduced from 1rem
      background: 'linear-gradient(90deg, #64ffda, #4299e1)',
      color: '#0a192f',
      fontWeight: '600',
      fontSize: '0.95rem', // Reduced font size
      borderRadius: '8px',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.5rem', // Reduced from 0.75rem
      transition: 'all 0.3s ease'
    }
  };

  return (
    <section id="contact" style={styles.section}>
      <div style={styles.container}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={styles.header}
        >
          <h2 style={styles.title}>Get In Touch</h2>
          <div style={styles.divider}></div>
          <p style={styles.subTitle}>
            Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </motion.div>

        <div style={styles.grid}>
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={styles.formCard}
          >
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}> {/* Reduced from 1.5rem */}
              <div>
                <label style={styles.label}>Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={styles.input}
                  placeholder="Your name"
                />
              </div>

              <div>
                <label style={styles.label}>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={styles.input}
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label style={styles.label}>Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5" // Reduced from 6
                  style={styles.textarea}
                  placeholder="Your message here..."
                />
              </div>

              <motion.button
                type="submit"
                style={styles.submitButton}
                whileHover={{ 
                  scale: 1.02, 
                  boxShadow: '0 10px 30px rgba(100, 255, 218, 0.4)'
                }}
                whileTap={{ scale: 0.98 }}
                disabled={submitted}
              >
                {submitted ? (
                  <>
                    <FaCheck style={{ fontSize: '1.1rem' }} /> {/* Reduced from 1.25rem */}
                    <span>Message Sent!</span>
                  </>
                ) : (
                  <>
                    <FaPaperPlane style={{ fontSize: '1.1rem' }} /> {/* Reduced from 1.25rem */}
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }} // Reduced from 1.5rem
          >
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.text}
                href={info.href}
                style={{
                  ...styles.contactCard,
                  textDecoration: 'none'
                }}
                whileHover={{ 
                  x: 10,
                  backgroundColor: 'rgba(100, 255, 218, 0.1)',
                  borderColor: 'rgba(100, 255, 218, 0.3)'
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div style={{ 
                  color: '#64ffda',
                  fontSize: '1.25rem' // Reduced from 1.5rem
                }}>
                  {info.icon}
                </div>
                <span style={{ 
                  fontSize: '1rem', // Reduced from 1.1rem
                  color: '#e6f1ff',
                  fontWeight: '500'
                }}>
                  {info.text}
                </span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;