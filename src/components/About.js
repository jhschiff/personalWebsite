import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import Resume from './Resume';
import TechStack from './TechStack';
import Experience from './Experience';
import { PROJECTS } from '../util/constants';
import './About.css';

const About = () => {
  return (
    <div className="about-section">
      <section id="about">
        <div className="about-container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="about-title"
          >
            About Me
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="about-intro"
          >
            I'm Jordan, a passionate software engineer with extensive experience in full-stack development and a drive to build products that make a meaningful impact. Currently based in Pittsburgh, but looking to move to NYC.
          </motion.p>
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
      <Resume />
    </div>
  );
};

export default About; 