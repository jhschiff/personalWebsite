import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import TechStack from './AboutPage/TechStack';
import Experience from './AboutPage/Experience';
import AboutMe from './AboutPage/AboutMe';
import Education from './AboutPage/Education';
import { PROJECTS } from '../util/constants';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about-section">
      <section id="about">
        <div className="about-container">
          <AboutMe />
          <TechStack />
        </div>
      </section>

      <Experience />

      <section id="projects">
        <div className="projects-container">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="projects-title"
          >
            Projects
          </motion.h3>
          
          <div className="projects-grid">
            {PROJECTS.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      <Education />
    </div>
  );
};

export default About; 