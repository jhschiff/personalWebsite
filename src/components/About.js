import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import ProjectCard from './AboutPage/ProjectCard';
import TechStack from './AboutPage/TechStack';
import Experience from './AboutPage/Experience';
import AboutMe from './AboutPage/AboutMe';
import Education from './AboutPage/Education';
import { PROJECTS } from '../util/constants';
import '../styles/About.css';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Jordan Schiff - Software Engineer | Experience & Projects</title>
        <meta name="description" content="Learn about Jordan Schiff's software engineering experience, projects, and technical skills. Full Stack Engineer with expertise in React, JavaScript, and modern web development." />
        <link rel="canonical" href="https://jordanschiff.com/about" />
      </Helmet>
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
    </>
  );
};

export default About; 