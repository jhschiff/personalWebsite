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
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="education-header-block"
        >
          <div className="education-header-content">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="block-m-container"
            >
              <img src={blockM} alt="University of Michigan Block M" className="block-m" />
            </motion.div>
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              {COLLEGE.institution}
            </motion.h4>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              📚 {COLLEGE.degree}
            </motion.p>
          </div>
        </motion.div>

        <div className="education-details-grid">
          <div className="education-details-column">
            {renderDetailCard(
              <FaGraduationCap className="education-icon" />,
              "Minors",
              <div className="minors-list">
                {COLLEGE.minors.map((minor, index) => (
                  <span key={index} className="minor-pill">
                    {minor}
                  </span>
                ))}
              </div>
            )}
            {renderDetailCard(
              <FaBook className="education-icon" />,
              "Relevant Coursework",
              <div className="coursework-grid">
                {COLLEGE.coursework.map((course, index) => (
                  <span key={index} className="course-pill">
                    {course.name} ({course.code})
                  </span>
                ))}
              </div>
            )}
          </div>
          <div className="education-details-column">
            {renderDetailCard(
              <FaStar className="education-icon" />,
              "Academic Achievement",
              <div className="achievement-content">
                <div className="honors-list">
                  {COLLEGE.academicAchievement.map((achievement, index) => (
                    <span key={index} className="honor-pill">
                      {achievement}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {renderDetailCard(
              <FaUsers className="education-icon" />,
              "Activities & Societies",
              <div className="activities-grid">
                {COLLEGE.activities.map((activity, index) => (
                  <span key={index} className="activity-pill">
                    {activity}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education; 