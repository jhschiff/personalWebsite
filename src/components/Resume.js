import React from 'react';
import { motion } from 'framer-motion';
import { EDUCATION } from '../util/constants';
import './Resume.css';

const Resume = () => {
  return (
    <section id="resume" className="resume-section">
      <div className="resume-container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="resume-card"
        >
          <div className="prose max-w-none">           
            <h3 className="section-title">Education</h3>
            {EDUCATION.map((edu, index) => (
              <div key={index} className="experience-item">
                <h4 className="job-title">{edu.degree}</h4>
                <p className="job-period">{edu.institution} • {edu.location} • {edu.period}</p>
                <ul className="list-disc list-inside">
                  {edu.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume; 