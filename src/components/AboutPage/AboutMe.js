import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaBasketballBall, 
  FaHiking, 
  FaSkiing, 
  FaPlane, 
  FaUtensils,
  FaBolt,
  FaLightbulb,
  FaStar,
  FaEnvelope,
  FaHandshake,
  FaCode
} from 'react-icons/fa';
import '../../styles/About.css';

const AboutMe = () => {
  return (
    <div className="about-container">
      <div className="about-me-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="about-title"
        >
          About Me
        </motion.h2>
        <div className="about-columns">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="about-content"
          >
            <div className="flex gap-4 mb-2">
              <FaCode className="text-2xl text-gray-700" />
              <FaLightbulb className="text-2xl text-gray-700" />
              <FaStar className="text-2xl text-gray-700" />
            </div>
            <p className="about-intro">
              I'm Jordan, a passionate software engineer with extensive experience in full-stack development and a drive to build products that make a meaningful impact. Based in Pittsburgh with plans to relocate to NYC, I bring both technical expertise and a collaborative mindset to every project.
            </p>
            <div className="flex gap-4 my-2">
              <FaBasketballBall className="text-2xl text-gray-700" />
              <FaHiking className="text-2xl text-gray-700" />
              <FaSkiing className="text-2xl text-gray-700" />
              <FaPlane className="text-2xl text-gray-700" />
              <FaUtensils className="text-2xl text-gray-700" />
            </div>
            <p className="about-intro">
              When I'm not coding, I enjoy embracing an active lifestyle through basketball, hiking, and skiing. I'm also an avid traveler and love trying new restaurants, always seeking new experiences and flavors.
            </p>
            <div className="flex gap-4 my-2">
              <FaEnvelope className="text-2xl text-gray-700" />
              <FaHandshake className="text-2xl text-gray-700" />
              <FaBolt className="text-2xl text-gray-700" />
            </div>
            <p className="about-intro">
              Let's connect and talk about a project, job opportunity, or just shoot some hoops!
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe; 