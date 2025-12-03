import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode, FaMobileAlt, FaPalette, FaHotel } from 'react-icons/fa';

const projects = [
  {
    id: 1,
    title: "Alisto-Ph",
    description: "A web version of a disaster preparedness app that evaluates disaster risks by location and provides adaptive emergency preparedness tips to help users stay safe before, during, and after disasters.",
    detailedDescription: "Originally a mobile app converted to web, this platform uses geolocation to assess local disaster risks and provides personalized safety recommendations. Features include real-time risk assessments, emergency checklists, evacuation route planning, and community alert systems.",
    tags: ["React (JSX)", "Redux", "Node.js", "Express", "MongoDB", "Geolocation API", "Chart.js", "Map Integration"],
    image: "https://images.unsplash.com/photo-1589652717521-10c0d092dea9?w=400&h=300&fit=crop&q=80",
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
    icon: <FaMobileAlt />,
    color: "#EF4444", // Red for emergency/disaster
    status: "Completed"
  },
  {
    id: 2,
    title: "Artopia",
    description: "An e-commerce platform for selling and managing art products, allowing users to browse, search, filter, and purchase artworks and art materials with an intuitive cart and checkout system.",
    detailedDescription: "Full-featured art marketplace with artist profiles, artwork categorization, advanced search filters, secure payment processing, and an admin dashboard for inventory management. Includes features like wishlists, order tracking, and artist commissions.",
    tags: ["React Native", "Axios", "Node.js", "Express", "MongoDB", "Payment Gateway", "Redux", "JWT"],
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop&q=80",
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
    icon: <FaPalette />,
    color: "#8B5CF6", // Purple for art/creative
    status: "Completed"
  },
  {
    id: 3,
    title: "Kiaveha",
    description: "Hotel booking and management platform that allows users to search for hotels, view details, check availability, and make reservations conveniently in one place.",
    detailedDescription: "Comprehensive hotel reservation system with real-time availability checking, room type selection, booking management, and payment processing. Includes admin panel for hotel management, customer reviews, and rating system.",
    tags: ["MySQL", "PHP", "Bootstrap", "HTML5", "CSS3", "JavaScript", "jQuery", "REST API"],
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop&q=80",
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
    icon: <FaHotel />,
    color: "#0EA5E9", // Blue for travel/hotel
    status: "Completed"
  }
];

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.featured);

  const openProjectDetails = (project) => {
    setSelectedProject(project);
  };

  const closeProjectDetails = () => {
    setSelectedProject(null);
  };

  const styles = {
    section: {
      padding: '4rem 1rem 6rem 1rem',
      background: 'linear-gradient(135deg, #0a192f 0%, #172a45 100%)',
      position: 'relative',
      overflow: 'hidden'
    },
    container: {
      maxWidth: '1400px',
      margin: '0 auto',
      position: 'relative',
      zIndex: 1
    },
    projectCard: {
      backgroundColor: 'rgba(17, 34, 64, 0.7)',
      borderRadius: '1rem',
      overflow: 'hidden',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(100, 255, 218, 0.15)',
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    },
    modalOverlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.9)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      padding: '1rem'
    },
    modalContent: {
      backgroundColor: '#112240',
      borderRadius: '1rem',
      maxWidth: '800px',
      width: '100%',
      maxHeight: '90vh',
      overflowY: 'auto',
      border: '1px solid rgba(100, 255, 218, 0.3)',
      boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)'
    }
  };

  return (
    <section id="projects" style={styles.section}>
      {/* Decorative background elements */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `
          radial-gradient(circle at 10% 20%, rgba(239, 68, 68, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 90% 80%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 50% 50%, rgba(14, 165, 233, 0.05) 0%, transparent 70%)
        `,
        zIndex: 0
      }}></div>

      <div style={styles.container}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
        </motion.div>

        {/* Filter Buttons */}
        <motion.div 
          style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', marginBottom: '3rem' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {['all', 'featured'].map((filterType) => (
            <motion.button
              key={filterType}
              onClick={() => setFilter(filterType)}
              style={{
                padding: '0.75rem 2rem',
                borderRadius: '50px',
                fontWeight: 600,
                fontSize: '1rem',
                transition: 'all 0.3s',
                ...(filter === filterType 
                  ? { 
                      background: 'linear-gradient(90deg, #64ffda, #4299e1)', 
                      color: '#0a192f',
                      boxShadow: '0 4px 20px rgba(100, 255, 218, 0.3)'
                    } 
                  : { 
                      backgroundColor: 'rgba(17, 34, 64, 0.8)', 
                      color: '#a8b2d1',
                      border: '1px solid rgba(100, 255, 218, 0.2)'
                    })
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filterType.charAt(0).toUpperCase() + filterType.slice(1)} Projects
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', 
          gap: '2rem' 
        }}>
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                style={styles.projectCard}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ 
                  y: -15,
                  boxShadow: `0 25px 50px ${project.color}20`,
                  borderColor: `${project.color}40`
                }}
              >
                <div style={{ position: 'relative', overflow: 'hidden', height: '200px' }}>
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  />
                  <div style={{ 
                    position: 'absolute', 
                    inset: 0, 
                    background: `linear-gradient(to top, rgba(10, 25, 47, 0.95), transparent 70%)`,
                    opacity: 0.7 
                  }}></div>
                  
                  {/* Project Icon */}
                  <div style={{
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem',
                    width: '50px',
                    height: '50px',
                    backgroundColor: `${project.color}20`,
                    backdropFilter: 'blur(10px)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: project.color,
                    fontSize: '1.5rem',
                    border: `2px solid ${project.color}40`
                  }}>
                    {project.icon}
                  </div>

                  {project.featured && (
                    <motion.div
                      style={{
                        position: 'absolute',
                        top: '1rem',
                        right: '1rem',
                        background: `linear-gradient(90deg, ${project.color}, #64ffda)`,
                        color: '#ffffff',
                        padding: '0.5rem 1rem',
                        borderRadius: '50px',
                        fontSize: '0.875rem',
                        fontWeight: 600,
                        backdropFilter: 'blur(10px)'
                      }}
                      whileHover={{ scale: 1.1 }}
                    >
                      Featured
                    </motion.div>
                  )}
                </div>

                <div style={{ padding: '1.75rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                    <h3 style={{ 
                      fontSize: '1.5rem', 
                      fontWeight: 'bold',
                      color: '#e6f1ff',
                      margin: 0 
                    }}>
                      {project.title}
                    </h3>
                    <span style={{
                      padding: '0.25rem 0.75rem',
                      backgroundColor: `${project.color}15`,
                      color: project.color,
                      borderRadius: '50px',
                      fontSize: '0.75rem',
                      fontWeight: 600
                    }}>
                      {project.status}
                    </span>
                  </div>
                  
                  <p style={{ 
                    color: '#a8b2d1',
                    marginBottom: '1.5rem',
                    lineHeight: '1.6',
                    flex: 1
                  }}>
                    {project.description}
                  </p>
                  
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.75rem' }}>
                    {project.tags.map((tag, tagIndex) => (
                      <motion.span
                        key={tagIndex}
                        style={{
                          padding: '0.4rem 0.9rem',
                          backgroundColor: `${project.color}10`,
                          color: project.color,
                          borderRadius: '50px',
                          fontSize: '0.8rem',
                          fontWeight: 500,
                          border: `1px solid ${project.color}30`
                        }}
                        whileHover={{ 
                          scale: 1.05,
                          backgroundColor: `${project.color}20`
                        }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    marginTop: 'auto',
                    paddingTop: '1rem',
                    borderTop: '1px solid rgba(100, 255, 218, 0.1)'
                  }}>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ 
                          color: '#a8b2d1',
                          backgroundColor: 'rgba(17, 34, 64, 0.8)',
                          width: '40px',
                          height: '40px',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                        whileHover={{ 
                          scale: 1.15, 
                          color: project.color,
                          backgroundColor: `${project.color}15`
                        }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FaGithub style={{ fontSize: '1.25rem' }} />
                      </motion.a>
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ 
                          color: '#a8b2d1',
                          backgroundColor: 'rgba(17, 34, 64, 0.8)',
                          width: '40px',
                          height: '40px',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                        whileHover={{ 
                          scale: 1.15, 
                          color: project.color,
                          backgroundColor: `${project.color}15`
                        }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FaExternalLinkAlt style={{ fontSize: '1.25rem' }} />
                      </motion.a>
                    </div>
                    <motion.button
                      onClick={() => openProjectDetails(project)}
                      style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '0.5rem',
                        color: project.color, 
                        fontWeight: 600,
                        background: `${project.color}10`,
                        border: `1px solid ${project.color}30`,
                        padding: '0.6rem 1.5rem',
                        borderRadius: '50px',
                        fontSize: '0.95rem',
                        cursor: 'pointer'
                      }}
                      whileHover={{ 
                        scale: 1.05,
                        background: `${project.color}20`
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View Details <FaCode />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Project Details Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              style={styles.modalOverlay}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeProjectDetails}
            >
              <motion.div
                style={styles.modalContent}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div style={{ position: 'relative' }}>
                  {/* Modal Header */}
                  <div style={{
                    padding: '2rem',
                    borderBottom: '1px solid rgba(100, 255, 218, 0.2)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <div style={{
                        width: '60px',
                        height: '60px',
                        backgroundColor: `${selectedProject.color}20`,
                        borderRadius: '15px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: selectedProject.color,
                        fontSize: '1.75rem'
                      }}>
                        {selectedProject.icon}
                      </div>
                      <div>
                        <h3 style={{ 
                          fontSize: '2rem', 
                          fontWeight: 'bold',
                          color: '#e6f1ff',
                          margin: 0 
                        }}>
                          {selectedProject.title}
                        </h3>
                        <p style={{ color: selectedProject.color, margin: 0 }}>
                          {selectedProject.status}
                        </p>
                      </div>
                    </div>
                    <motion.button
                      onClick={closeProjectDetails}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: '#a8b2d1',
                        fontSize: '1.5rem',
                        cursor: 'pointer'
                      }}
                      whileHover={{ scale: 1.2, color: selectedProject.color }}
                    >
                      ×
                    </motion.button>
                  </div>

                  {/* Modal Body */}
                  <div style={{ padding: '2rem' }}>
                    <div style={{ marginBottom: '2rem' }}>
                      <h4 style={{ 
                        color: '#64ffda',
                        fontSize: '1.25rem',
                        marginBottom: '1rem'
                      }}>
                        Project Description
                      </h4>
                      <p style={{ 
                        color: '#a8b2d1',
                        lineHeight: '1.7',
                        fontSize: '1.1rem'
                      }}>
                        {selectedProject.detailedDescription}
                      </p>
                    </div>

                    <div style={{ marginBottom: '2rem' }}>
                      <h4 style={{ 
                        color: '#64ffda',
                        fontSize: '1.25rem',
                        marginBottom: '1rem'
                      }}>
                        Technologies Used
                      </h4>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                        {selectedProject.tags.map((tag, index) => (
                          <span
                            key={index}
                            style={{
                              padding: '0.5rem 1rem',
                              backgroundColor: `${selectedProject.color}10`,
                              color: selectedProject.color,
                              borderRadius: '50px',
                              fontSize: '0.9rem',
                              fontWeight: 500,
                              border: `1px solid ${selectedProject.color}30`
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                      <motion.a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          padding: '0.75rem 2rem',
                          backgroundColor: selectedProject.color,
                          color: '#0a192f',
                          borderRadius: '50px',
                          fontWeight: 600,
                          textDecoration: 'none'
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaGithub /> View Code
                      </motion.a>
                      <motion.a
                        href={selectedProject.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          padding: '0.75rem 2rem',
                          backgroundColor: 'transparent',
                          color: selectedProject.color,
                          borderRadius: '50px',
                          fontWeight: 600,
                          textDecoration: 'none',
                          border: `2px solid ${selectedProject.color}`
                        }}
                        whileHover={{ 
                          scale: 1.05,
                          backgroundColor: `${selectedProject.color}20`
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaExternalLinkAlt /> Live Demo
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;