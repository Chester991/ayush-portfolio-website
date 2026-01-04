import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  aboutMe,
  educationDetails,
  workDetails,
  skills,
  projects,
  achievements,
  socialLinks
} from './data';

// Utility function for smooth scrolling
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

// Animation variants
const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay, ease: "easeOut" }
  }
});

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

// Header Component
const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', id: 'about' },
    { label: 'Education', id: 'education' },
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' }
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: 'white',
        boxShadow: scrolled ? '0 2px 10px rgba(0,0,0,0.1)' : 'none',
        transition: 'box-shadow 0.3s'
      }}
    >
      <nav style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '1rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: '#286F6C',
            cursor: 'pointer'
          }}
        >
          AB
        </div>

        <ul style={{
          display: 'flex',
          gap: '2rem',
          listStyle: 'none',
          margin: 0,
          padding: 0
        }}>
          {navItems.map(item => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  textDecoration: 'none',
                  color: '#0D2F3F',
                  fontWeight: 500,
                  fontSize: '1rem',
                  cursor: 'pointer',
                  transition: 'color 0.3s'
                }}
                onMouseEnter={(e) => e.target.style.color = '#286F6C'}
                onMouseLeave={(e) => e.target.style.color = '#0D2F3F'}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
};

// Hero Component
const Hero = () => {
  return (
    <motion.section
      initial="hidden"
      animate="show"
      variants={staggerContainer}
      style={{
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        background: 'linear-gradient(135deg, #F8F7F1 0%, #E7E7E7 100%)'
      }}
    >
      <div style={{
        maxWidth: '1200px',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '4rem',
        alignItems: 'center'
      }}>
        <motion.div variants={fadeIn(0)}>
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem', color: '#0D2F3F' }}>
            Hey, I'm <span style={{ color: '#286F6C' }}>Ayush Balwani</span>
          </h1>
          <h2 style={{ fontSize: '2rem', color: '#286F6C', marginBottom: '1.5rem' }}>
            Backend Developer & Problem Solver
          </h2>
          <p style={{ fontSize: '1.2rem', color: '#666', lineHeight: '1.8', marginBottom: '2rem' }}>
            A passionate Computer Science student crafting scalable backend solutions and tackling algorithmic challenges.
          </p>
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
            <button
              onClick={() => scrollToSection('contact')}
              style={{
                padding: '1rem 2rem',
                background: '#286F6C',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontWeight: 'bold',
                fontSize: '1rem',
                cursor: 'pointer',
                transition: 'transform 0.3s'
              }}
              onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
            >
              Get In Touch
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              style={{
                padding: '1rem 2rem',
                border: '2px solid #286F6C',
                background: 'transparent',
                color: '#286F6C',
                borderRadius: '8px',
                fontWeight: 'bold',
                fontSize: '1rem',
                cursor: 'pointer',
                transition: 'all 0.3s'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = '#286F6C';
                e.target.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'transparent';
                e.target.style.color = '#286F6C';
              }}
            >
              View Work
            </button>
          </div>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <span style={{ color: '#666' }}>📍 Bengaluru, India</span>
            <span style={{ color: '#666' }}>•</span>
            <a href="mailto:ayushbalwani1902@gmail.com" style={{ color: '#286F6C', textDecoration: 'none' }}>
              ayushbalwani1902@gmail.com
            </a>
          </div>
        </motion.div>

        <motion.div variants={fadeIn(0.2)} style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{
            width: '350px',
            height: '350px',
            borderRadius: '50%',
            overflow: 'hidden',
            border: '8px solid #286F6C',
            boxShadow: '0 20px 60px rgba(0,0,0,0.2)',
            background: '#286F6C'
          }}>
            <img
              src="/ayush.jpg"
              alt="Ayush Balwani"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

// About Component
const About = () => {
  return (
    <motion.section
      id="about"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer}
      style={{ padding: '6rem 2rem', background: 'white' }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.h2 variants={fadeIn()} style={{
          fontSize: '3rem',
          marginBottom: '3rem',
          color: '#0D2F3F',
          textAlign: 'center'
        }}>
          About Me
        </motion.h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '3rem',
          alignItems: 'center'
        }}>
          <motion.div variants={fadeIn(0.2)}>
            {aboutMe.map((para, idx) => (
              <p key={idx} style={{
                fontSize: '1.1rem',
                lineHeight: '1.8',
                color: '#666',
                marginBottom: '1.5rem',
                textAlign: 'justify'
              }}>
                {para}
              </p>
            ))}
          </motion.div>
          <motion.div variants={fadeIn(0.4)} style={{
            background: 'linear-gradient(135deg, #286F6C 0%, #0D2F3F 100%)',
            padding: '2rem',
            borderRadius: '16px',
            color: 'white'
          }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Quick Stats</h3>
            {achievements.map((achievement, idx) => (
              <div key={idx} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginBottom: '1rem'
              }}>
                <span style={{ color: '#EEC048', fontSize: '1.2rem' }}>✓</span>
                <span>{achievement}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

// Education Component
const Education = () => {
  return (
    <motion.section
      id="education"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer}
      style={{ padding: '6rem 2rem', background: '#F8F7F1' }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.h2 variants={fadeIn()} style={{
          fontSize: '3rem',
          marginBottom: '3rem',
          color: '#0D2F3F',
          textAlign: 'center'
        }}>
          Education
        </motion.h2>
        {educationDetails.map((edu, idx) => (
          <motion.div
            key={idx}
            variants={fadeIn(0.2)}
            style={{
              background: 'white',
              padding: '2rem',
              borderRadius: '16px',
              borderLeft: `6px solid ${edu.color}`,
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
            }}
          >
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '1rem',
              flexWrap: 'wrap',
              gap: '1rem'
            }}>
              <h3 style={{ fontSize: '1.5rem', color: '#0D2F3F' }}>{edu.institute}</h3>
              <span style={{ color: '#666', fontWeight: 'bold' }}>{edu.duration}</span>
            </div>
            <h4 style={{ fontSize: '1.2rem', color: '#286F6C', marginBottom: '1rem' }}>
              {edu.course}
            </h4>
            {edu.details.map((detail, i) => (
              <p key={i} style={{ color: '#666', marginBottom: '0.5rem' }}>{detail}</p>
            ))}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

// Experience Component
const Experience = () => {
  return (
    <motion.section
      id="experience"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer}
      style={{ padding: '6rem 2rem', background: 'white' }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.h2 variants={fadeIn()} style={{
          fontSize: '3rem',
          marginBottom: '3rem',
          color: '#0D2F3F',
          textAlign: 'center'
        }}>
          Work Experience
        </motion.h2>
        {workDetails.map((work, idx) => (
          <motion.div
            key={idx}
            variants={fadeIn(0.2)}
            style={{
              background: '#F8F7F1',
              padding: '2rem',
              borderRadius: '16px',
              borderLeft: `6px solid ${work.color}`,
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
            }}
          >
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '1rem',
              flexWrap: 'wrap',
              gap: '1rem'
            }}>
              <h3 style={{ fontSize: '1.5rem', color: '#0D2F3F' }}>{work.organization}</h3>
              <span style={{ color: '#666', fontWeight: 'bold' }}>{work.duration}</span>
            </div>
            <h4 style={{ fontSize: '1.2rem', color: '#286F6C', marginBottom: '1rem' }}>
              {work.role}
            </h4>
            <ul style={{ paddingLeft: '1.5rem' }}>
              {work.details.map((detail, i) => (
                <li key={i} style={{
                  color: '#666',
                  marginBottom: '0.5rem',
                  lineHeight: '1.6'
                }}>
                  {detail}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

// Skills Component
const Skills = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer}
      style={{ padding: '6rem 2rem', background: '#F8F7F1' }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.h2 variants={fadeIn()} style={{
          fontSize: '3rem',
          marginBottom: '3rem',
          color: '#0D2F3F',
          textAlign: 'center'
        }}>
          Technologies & Tools
        </motion.h2>
        <motion.div
          variants={fadeIn(0.2)}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
            gap: '2rem',
            justifyItems: 'center'
          }}
        >
          {skills.map((skill, idx) => (
            <div
              key={idx}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.5rem',
                cursor: 'pointer'
              }}
            >
              <img
                src={skill.imageUrl}
                alt={skill.name}
                style={{
                  width: '80px',
                  height: '80px',
                  transition: 'transform 0.3s',
                  filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))'
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
              />
              <span style={{ color: '#666', fontSize: '0.9rem', fontWeight: '500' }}>
                {skill.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

// Projects Component
const Projects = () => {
  return (
    <motion.section
      id="projects"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer}
      style={{ padding: '6rem 2rem', background: 'white' }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.h2 variants={fadeIn()} style={{
          fontSize: '3rem',
          marginBottom: '3rem',
          color: '#0D2F3F',
          textAlign: 'center'
        }}>
          Featured Projects
        </motion.h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '2rem'
        }}>
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={fadeIn(0.1 * idx)}
              style={{
                background: '#F8F7F1',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s, box-shadow 0.3s',
                cursor: 'pointer'
              }}
              whileHover={{ y: -10, boxShadow: '0 8px 30px rgba(0,0,0,0.15)' }}
              onClick={() => window.open(project.link, '_blank')}
            >
              <div style={{
                width: '100%',
                height: '200px',
                background: 'linear-gradient(135deg, #286F6C 0%, #0D2F3F 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden'
              }}>
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `<div style="color: white; font-size: 3rem;">📱</div>`;
                  }}
                />
              </div>
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: '#0D2F3F' }}>
                  {project.title}
                </h3>
                <p style={{ color: '#666', marginBottom: '1rem', lineHeight: '1.6' }}>
                  {project.description}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {project.techStack.map((tech, i) => (
                    <span key={i} style={{
                      padding: '0.3rem 0.8rem',
                      background: '#286F6C',
                      color: 'white',
                      borderRadius: '20px',
                      fontSize: '0.85rem'
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

// Contact Component
const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setStatus('Thanks for reaching out! I\'ll get back to you soon.');
    setTimeout(() => setStatus(''), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <motion.section
      id="contact"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer}
      style={{ padding: '6rem 2rem', background: '#F8F7F1' }}
    >
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <motion.h2 variants={fadeIn()} style={{
          fontSize: '3rem',
          marginBottom: '1rem',
          color: '#0D2F3F',
          textAlign: 'center'
        }}>
          Let's Connect
        </motion.h2>
        <motion.p variants={fadeIn(0.1)} style={{
          textAlign: 'center',
          color: '#666',
          marginBottom: '3rem',
          fontSize: '1.2rem'
        }}>
          Have a project in mind or want to collaborate? Feel free to reach out!
        </motion.p>

        <motion.form
          variants={fadeIn(0.2)}
          onSubmit={handleSubmit}
          style={{
            background: 'white',
            padding: '2rem',
            borderRadius: '16px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
          }}
        >
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{
              display: 'block',
              marginBottom: '0.5rem',
              color: '#0D2F3F',
              fontWeight: 'bold'
            }}>
              Name
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={e => setFormData({ ...formData, name: e.target.value })}
              style={{
                width: '100%',
                padding: '0.8rem',
                border: '2px solid #E7E7E7',
                borderRadius: '8px',
                fontSize: '1rem',
                fontFamily: 'inherit'
              }}
            />
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{
              display: 'block',
              marginBottom: '0.5rem',
              color: '#0D2F3F',
              fontWeight: 'bold'
            }}>
              Email
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={e => setFormData({ ...formData, email: e.target.value })}
              style={{
                width: '100%',
                padding: '0.8rem',
                border: '2px solid #E7E7E7',
                borderRadius: '8px',
                fontSize: '1rem',
                fontFamily: 'inherit'
              }}
            />
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{
              display: 'block',
              marginBottom: '0.5rem',
              color: '#0D2F3F',
              fontWeight: 'bold'
            }}>
              Message
            </label>
            <textarea
              required
              rows={5}
              value={formData.message}
              onChange={e => setFormData({ ...formData, message: e.target.value })}
              style={{
                width: '100%',
                padding: '0.8rem',
                border: '2px solid #E7E7E7',
                borderRadius: '8px',
                fontSize: '1rem',
                resize: 'vertical',
                fontFamily: 'inherit'
              }}
            />
          </div>

          <button
            type="submit"
            style={{
              width: '100%',
              padding: '1rem',
              background: '#286F6C',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'background 0.3s'
            }}
            onMouseEnter={e => e.target.style.background = '#1f5952'}
            onMouseLeave={e => e.target.style.background = '#286F6C'}
          >
            Send Message
          </button>

          {status && (
            <p style={{
              marginTop: '1rem',
              color: '#286F6C',
              textAlign: 'center',
              fontWeight: 'bold'
            }}>
              {status}
            </p>
          )}
        </motion.form>

        <motion.div variants={fadeIn(0.3)} style={{ marginTop: '3rem', textAlign: 'center' }}>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
            fontSize: '2rem',
            flexWrap: 'wrap'
          }}>
            {socialLinks.map((social, idx) => (
              <a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                title={social.label}
                style={{
                  transition: 'transform 0.3s',
                  cursor: 'pointer',
                  textDecoration: 'none'
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.2)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer style={{
      background: '#0D2F3F',
      color: 'white',
      padding: '2rem',
      textAlign: 'center'
    }}>
      <p style={{ margin: 0 }}>
        © {new Date().getFullYear()} Ayush Balwani. Built with React & Framer Motion.
      </p>
    </footer>
  );
};

// Main App Component
export default function App() {
  return (
    <div style={{ fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }}>
      <Header />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}