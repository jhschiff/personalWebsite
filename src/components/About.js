import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import Resume from './Resume';
import { PROJECTS } from '../util/constants';
import './About.css';

// Icons
const CodeIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

const WebIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const ServerIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
  </svg>
);

const ToolsIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const About = () => {
  return (
    <div className="about-section">
      <section id="about" className="py-20">
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

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="expertise-title"
          >
            Technical Expertise
          </motion.h3>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="tech-stack-title"
          >
            My Tech Stack
          </motion.h3>

          <div className="tech-stack-grid">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="tech-stack-card"
            >
              <h4 className="tech-stack-card-title">
                <CodeIcon />
                Languages
              </h4>
              <ul className="tech-stack-list">
                <li>JavaScript</li>
                <li>Python</li>
                <li>C++/ C/ C#</li>
                <li>Java</li>
                <li>HTML/CSS</li>
              </ul>
              <p className="tech-stack-description">
                Proficient in multiple programming languages with a focus on modern web development and data analysis.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="tech-stack-card"
            >
              <h4 className="tech-stack-card-title">
                <WebIcon />
                Frontend
              </h4>
              <ul className="tech-stack-list">
                <li>React</li>
                <li>TypeScript</li>
                <li>Tailwind</li>
                <li>Vite</li>
              </ul>
              <p className="tech-stack-description">
                Building responsive, type-safe React applications with modern state management and smooth animations.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9 }}
              className="tech-stack-card"
            >
              <h4 className="tech-stack-card-title">
                <ServerIcon />
                Backend & Data
              </h4>
              <ul className="tech-stack-list">
                <li>FastAPI</li>
                <li>Node.js</li>
                <li>PostgreSQL</li>
                <li>Jupyter Notebook</li>
                <li>.NET Framework</li>
              </ul>
              <p className="tech-stack-description">
                Developing robust backend systems, APIs, and data solutions with modern frameworks and databases.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.0 }}
              className="tech-stack-card"
            >
              <h4 className="tech-stack-card-title">
                <ToolsIcon />
                DevOps & Tools
              </h4>
              <ul className="tech-stack-list">
                <li>Git</li>
                <li>Linux</li>
                <li>AWS</li>
                <li>Docker</li>
                <li>VS Code/ IntelliJ</li>
              </ul>
              <p className="tech-stack-description">
                Managing infrastructure, deployments, and development workflows with modern DevOps practices.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Projects
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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