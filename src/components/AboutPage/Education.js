import React from 'react';
import { motion } from 'framer-motion';
import { COLLEGE } from '../../util/constants';
import blockM from '../../assets/BlockM.png';
import { FaGraduationCap, FaStar, FaBook, FaUsers } from 'react-icons/fa';
import '../../styles/About.css';

const Education = () => {
  const renderDetailCard = (icon, title, content) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="education-card"
    >
      <div className="education-card-header">
        {icon}
        <h4>{title}</h4>
      </div>
      <div className="education-card-content">
        {content}
      </div>
    </motion.div>
  );

  return (
    <div className="about-container">
      <div className="about-me-container">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="projects-title"
        >
          Education
        </motion.h3>
        <div className="about-columns">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="about-header"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="institution-row"
            >
              <img src={blockM} alt="University of Michigan Block M" className="block-m-inline" />
              {COLLEGE.institution}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              📚 {COLLEGE.degree}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              📅 {COLLEGE.period}
            </motion.p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="about-content"
          >
            <div className="education-cards">
              {renderDetailCard(
                <FaGraduationCap className="education-icon" />,
                "Minors",
                <p>{COLLEGE.details[0].replace('Minor: ', '')}</p>
              )}
              {renderDetailCard(
                <FaStar className="education-icon" />,
                "Academic Achievement",
                <p>{COLLEGE.details[1].replace('GPA: ', '')}</p>
              )}
              {renderDetailCard(
                <FaBook className="education-icon" />,
                "Relevant Coursework",
                <div className="coursework-grid">
                  {COLLEGE.details[2]
                    .replace('Relevant Coursework: ', '')
                    .split(', ')
                    .map((course, index) => (
                      <span key={index} className="course-pill">
                        {course}
                      </span>
                    ))}
                </div>
              )}
              {renderDetailCard(
                <FaUsers className="education-icon" />,
                "Activities & Societies",
                <div className="activities-grid">
                  {COLLEGE.details[3]
                    .replace('Activities & Societies: ', '')
                    .split(', ')
                    .map((activity, index) => (
                      <span key={index} className="activity-pill">
                        {activity}
                      </span>
                    ))}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Education; 