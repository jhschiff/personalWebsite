import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE } from '../../util/constants';
import '../../styles/Experience.css';

// Import company logos
import BNYLogo from '../../assets/BNYLogo.png';
import RSALogo from '../../assets/RSALogo.png';
import CongruexLogo from '../../assets/CongruexLogo.png';
import IVCLogo from '../../assets/IVCLogo.jpg';

const Experience = () => {
  const getLogo = (company) => {
    switch (company.toLowerCase()) {
      case 'bny':
        return BNYLogo;
      case 'resolute senior advocates (startup)':
        return RSALogo;
      case 'congruex':
        return CongruexLogo;
      case 'ivc data and insights':
        return IVCLogo;
      default:
        return null;
    }
  };

  return (
    <section id="experience">
      <div className="experience-container">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="experience-title"
        >
          Professional Journey
        </motion.h3>

        <div className="timeline">
          {EXPERIENCE.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="timeline-item"
            >
              <div className="timeline-dot" />
              
              {/* Left Side - Job Info */}
              <div className="timeline-left">
                <div className="timeline-icon">
                  <img 
                    src={getLogo(job.company)} 
                    alt={`${job.company} logo`}
                    className="company-logo"
                  />
                </div>
                <div className="timeline-job-info">
                  <h3 className="timeline-title">{job.title}</h3>
                  <span className="timeline-company">{job.company}</span>
                  <div className="timeline-meta">
                    <span className="timeline-location">{job.location}</span>
                    <span className="timeline-period">{job.period}</span>
                  </div>
                </div>
              </div>

              {/* Right Side - Achievements and Skills */}
              <div className="timeline-right">
                <div className="skills-container">
                  {job.skills.map((skill, index) => (
                    <span key={index} className={`skill-pill ${skill.category.toLowerCase()}`}>
                      {skill.name}
                    </span>
                  ))}
                </div>
                <div className="timeline-achievements">
                  {job.achievements.map((achievement, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + i * 0.1 }}
                      className="achievement-item"
                    >
                      <div className="achievement-content">
                        {achievement}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 