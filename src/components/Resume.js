import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS, EXPERIENCE, EDUCATION } from '../util/constants';
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
          <div className="download-button">
            <a
              href="/resume.pdf"
              className="download-link"
            >
              <span>Download PDF</span>
              <svg
                className="download-icon"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
            </a>
          </div>
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

            <h3 className="section-title">Skills</h3>
            <div className="skills-section">
              <div className="skills-category">
                <h4 className="skills-category-title">Languages</h4>
                <div className="skills-container">
                  {SKILLS.languages.map((skill, index) => (
                    <span key={index} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="skills-category">
                <h4 className="skills-category-title">Technologies</h4>
                <div className="skills-container">
                  {SKILLS.technologies.map((skill, index) => (
                    <span key={index} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume; 