import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE, EDUCATION } from '../util/constants';
import './Resume.css';

const Resume = () => {
  return (
    <section id="resume" className="resume-section">
      <div className="resume-container">
        <h2 className="resume-title">Resume</h2>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="resume-card"
        >
          <div className="prose max-w-none">
            <h3 className="section-title">Experience</h3>
            {EXPERIENCE.map((job, index) => (
              <div key={index} className="experience-item">
                <h4 className="job-title">{job.title}</h4>
                <p className="job-period">{job.company} • {job.location} • {job.period}</p>
                <ul className="list-disc list-inside">
                  {job.achievements.map((achievement, idx) => (
                    <li key={idx}>{achievement}</li>
                  ))}
                </ul>
              </div>
            ))}
            
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