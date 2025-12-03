import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './component/Header';
import Hero from './component/Hero';
import About from './component/About';
import Projects from './component/Projects';
import Skills from './component/Skills';
import Contact from './component/Contact';
import Footer from './component/Footer';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <div className="App" style={{ backgroundColor: '#0a192f', color: '#e6f1ff', minHeight: '100vh' }}>
      <AnimatePresence>
        {loading ? (
          <motion.div
            key="loader"
            style={{
              position: 'fixed',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#0a192f',
              zIndex: 50
            }}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div style={{ textAlign: 'center' }}>
              <motion.div
                style={{
                  width: '64px',
                  height: '64px',
                  border: '4px solid #64ffda',
                  borderTop: 'transparent',
                  borderRadius: '50%',
                  margin: '0 auto'
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
              <motion.p 
                style={{ marginTop: '1rem', fontSize: '1.25rem', fontWeight: 600 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Loading Portfolio...
              </motion.p>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Header />
            <main>
              <Hero />
              <About />
              <Projects />
              <Skills />
              <Contact />
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;