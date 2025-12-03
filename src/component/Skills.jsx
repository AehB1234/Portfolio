import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaReact, FaNodeJs, FaJs, FaPython, FaDatabase, FaGitAlt, 
  FaFigma, FaSass, FaAws, FaDocker, FaVuejs, FaAngular
} from 'react-icons/fa';
import { 
  SiTypescript, SiTailwindcss, SiMongodb, SiFirebase, SiNextdotjs, 
  SiGraphql, SiRedux, SiJest, SiCypress, SiPostgresql, SiExpress, 
  SiNestjs, SiPrisma, SiVercel, SiNetlify
} from 'react-icons/si';

const Skills = () => {
  // Frontend Skills
  const frontendSkills = [
    { icon: <FaReact />, name: "React", level: 95, color: "#61DAFB", category: "Frontend" },
    { icon: <SiNextdotjs />, name: "Next.js", level: 88, color: "#000000", category: "Frontend" },
    { icon: <SiTypescript />, name: "TypeScript", level: 90, color: "#3178C6", category: "Frontend" },
    { icon: <FaJs />, name: "JavaScript", level: 95, color: "#F7DF1E", category: "Frontend" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS", level: 92, color: "#06B6D4", category: "Frontend" },
    { icon: <FaVuejs />, name: "Vue.js", level: 80, color: "#4FC08D", category: "Frontend" },
    { icon: <SiRedux />, name: "Redux", level: 88, color: "#764ABC", category: "Frontend" },
  ];

  // Backend Skills
  const backendSkills = [
    { icon: <FaNodeJs />, name: "Node.js", level: 88, color: "#339933", category: "Backend" },
    { icon: <SiExpress />, name: "Express.js", level: 85, color: "#000000", category: "Backend" },
    { icon: <SiNestjs />, name: "NestJS", level: 82, color: "#E0234E", category: "Backend" },
    { icon: <FaPython />, name: "Python", level: 85, color: "#3776AB", category: "Backend" },
  ];

  // Database Skills
  const databaseSkills = [
    { icon: <SiMongodb />, name: "MongoDB", level: 85, color: "#47A248", category: "Database" },
    { icon: <SiPostgresql />, name: "PostgreSQL", level: 82, color: "#336791", category: "Database" },
    { icon: <FaDatabase />, name: "MySQL", level: 80, color: "#4479A1", category: "Database" },
    { icon: <SiFirebase />, name: "Firebase", level: 78, color: "#FFCA28", category: "Database" },
  ];

  // Tools & DevOps
  const toolsSkills = [
    { icon: <FaGitAlt />, name: "Git", level: 90, color: "#F05032", category: "Tools" },
    { icon: <FaDocker />, name: "Docker", level: 75, color: "#2496ED", category: "Tools" },
    { icon: <SiVercel />, name: "Vercel", level: 90, color: "#000000", category: "Tools" },
    { icon: <SiNetlify />, name: "Netlify", level: 85, color: "#00C7B7", category: "Tools" },
  ];

  const skillCategories = [
    { title: "Frontend", skills: frontendSkills, color: "#64ffda" },
    { title: "Backend", skills: backendSkills, color: "#4299e1" },
    { title: "Database", skills: databaseSkills, color: "#ed8936" },
    { title: "Tools & DevOps", skills: toolsSkills, color: "#9f7aea" },
  ];

  const styles = {
    section: {
      padding: '3rem 1rem', // Reduced from '6rem 1rem' to '3rem 1rem'
      backgroundColor: '#0a192f',
      position: 'relative',
      overflow: 'hidden'
    },
    container: {
      maxWidth: '1400px',
      margin: '0 auto',
      position: 'relative',
      zIndex: 1
    },
    skillCard: {
      backgroundColor: 'rgba(23, 42, 69, 0.7)',
      padding: '1.25rem', // Reduced from '1.5rem'
      borderRadius: '10px', // Reduced from '12px'
      border: '1px solid rgba(100, 255, 218, 0.1)',
      transition: 'all 0.3s ease'
    },
    accentText: {
      background: 'linear-gradient(45deg, #64ffda, #4299e1)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      fontWeight: 'bold'
    },
    progressBar: {
      height: '6px', // Reduced from '8px'
      backgroundColor: '#112240',
      borderRadius: '3px', // Reduced from '4px'
      overflow: 'hidden',
      position: 'relative'
    },
    progressFill: (color, width) => ({
      height: '100%',
      borderRadius: '3px', // Reduced from '4px'
      backgroundColor: color,
      width: `${width}%`,
      position: 'relative',
      overflow: 'hidden'
    }),
    progressGlow: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
      animation: 'shimmer 2s infinite'
    }
  };

  return (
    <section id="skills" style={styles.section}>
      {/* Animated Background */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at 20% 80%, rgba(100, 255, 218, 0.05) 0%, transparent 50%)',
        zIndex: 0
      }}></div>

      <div style={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          style={{ textAlign: 'center', marginBottom: '3rem' }} // Reduced from '5rem' to '3rem'
        >
          
          <h2 style={{ 
            fontSize: 'clamp(2.25rem, 5vw, 3rem)', // Reduced sizes
            fontWeight: 'bold', 
            marginBottom: '1rem', // Reduced from '1.5rem'
            lineHeight: 1.2
          }}>
            Tech <span style={styles.accentText}>Stack & Skills</span>
          </h2>
          
          <p style={{ 
            color: '#a8b2d1', 
            fontSize: '1rem', // Reduced from '1.1rem'
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: 1.6
          }}>
            A comprehensive toolkit for building modern, scalable, and performant web applications.
            Continuously evolving to stay ahead in the fast-paced world of web development.
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem' }}> {/* Reduced from '4rem' to '3rem' */}
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: categoryIndex * 0.2 }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}> {/* Reduced from '2rem' */}
                <div style={{
                  width: '35px', // Reduced from '40px'
                  height: '35px', // Reduced from '40px'
                  borderRadius: '8px', // Reduced from '10px'
                  backgroundColor: `${category.color}20`,
                  border: `2px solid ${category.color}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: category.color,
                  fontSize: '1.1rem', // Reduced from '1.25rem'
                  fontWeight: 'bold'
                }}>
                  {categoryIndex + 1}
                </div>
                <h3 style={{ 
                  fontSize: '1.5rem', // Reduced from '1.75rem'
                  fontWeight: 'bold',
                  color: '#e6f1ff'
                }}>
                  {category.title}
                </h3>
              </div>

              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', // Reduced min width from 300px to 280px
                gap: '1rem' // Reduced from '1.5rem'
              }}>
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    style={styles.skillCard}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ 
                      y: -5,
                      borderColor: `${skill.color}40`,
                      boxShadow: `0 10px 30px ${skill.color}20`
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}> {/* Reduced from '1rem' */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <div style={{ 
                          fontSize: '1.5rem', // Reduced from '1.75rem'
                          color: skill.color
                        }}>
                          {skill.icon}
                        </div>
                        <span style={{ 
                          fontWeight: 600,
                          fontSize: '1rem', // Reduced from '1.1rem'
                          color: '#e6f1ff'
                        }}>
                          {skill.name}
                        </span>
                      </div>
                      <span style={{ 
                        fontWeight: 700,
                        fontSize: '0.95rem', // Reduced from '1rem'
                        color: skill.color
                      }}>
                        {skill.level}%
                      </span>
                    </div>

                    {/* Animated Progress Bar */}
                    <div style={styles.progressBar}>
                      <motion.div
                        style={styles.progressFill(skill.color, skill.level)}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 1.5,
                          delay: 0.5 + (index * 0.1),
                          ease: "easeOut"
                        }}
                      >
                        <div style={styles.progressGlow}></div>
                      </motion.div>
                    </div>

                    <div style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between', 
                      marginTop: '0.5rem',
                      fontSize: '0.8rem', // Reduced from '0.85rem'
                      color: '#8892b0'
                    }}>
                      <span>Beginner</span>
                      <span>Intermediate</span>
                      <span>Advanced</span>
                      <span>Expert</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

  
      </div>
    </section>
  );
};

export default Skills;