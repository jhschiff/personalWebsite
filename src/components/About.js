import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import Resume from './Resume';
import { PROJECTS } from '../util/constants';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
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