import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import ProjectCard from './components/ProjectCard';
import Resume from './components/Resume';

const projects = [
  {
    title: "Project One",
    description: "A full-stack web application built with React and Node.js that helps users manage their daily tasks efficiently.",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    githubLink: "https://github.com/yourusername/project-one",
    demoLink: "https://project-one-demo.com"
  },
  {
    title: "Project Two",
    description: "An AI-powered image recognition system that can identify and classify objects in real-time.",
    technologies: ["Python", "TensorFlow", "OpenCV", "Flask"],
    githubLink: "https://github.com/yourusername/project-two",
    demoLink: "https://project-two-demo.com"
  },
  {
    title: "Project Three",
    description: "A mobile-first e-commerce platform with real-time inventory management and payment processing.",
    technologies: ["React Native", "Firebase", "Stripe", "Redux"],
    githubLink: "https://github.com/yourusername/project-three",
    demoLink: "https://project-three-demo.com"
  }
];

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed w-full bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold">Your Name</span>
            </div>
            <div className="flex items-center space-x-8">
              <Link to="home" smooth={true} duration={500} className="cursor-pointer hover:text-blue-600">Home</Link>
              <Link to="projects" smooth={true} duration={500} className="cursor-pointer hover:text-blue-600">Projects</Link>
              <Link to="resume" smooth={true} duration={500} className="cursor-pointer hover:text-blue-600">Resume</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl font-bold mb-4"
              >
                Hi, I'm Jordan
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-gray-600 mb-8"
              >
                A passionate software engineer focused on building impactful products and delivering exceptional user experiences.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex space-x-4"
              >
                <a href="/resume.pdf" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
                  View Resume
                </a>
                <a href="mailto:your.email@example.com" className="border border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50">
                  Contact Me
                </a>
              </motion.div>
            </div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              className="md:w-1/2 mt-8 md:mt-0"
            >
              <img 
                src="/your-headshot.jpg" 
                alt="Your Name" 
                className="rounded-full w-64 h-64 object-cover mx-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <Resume />
    </div>
  );
}

export default App;
