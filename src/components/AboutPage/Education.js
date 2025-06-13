import React from 'react';
import { motion } from 'framer-motion';
import '../../styles/About.css';

const Education = () => {
  return (
    <div className="about-container">
      <div className="about-me-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="about-title"
        >
          Education
        </motion.h2>
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
              transition={{ delay: 0.1 }}
            >
              🎓 University of Michigan
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              📚 B.S.E. Computer Science
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              ➕ Minor in Mathematics
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              📅 2019 - 2023
            </motion.p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="about-content"
          >
            <p className="about-intro">
              Graduated from the University of Michigan's College of Engineering with a Bachelor's degree in Computer Science and a minor in Mathematics. During my time at Michigan, I was actively involved in various tech clubs and hackathons, which helped me develop both technical and leadership skills.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Education; 