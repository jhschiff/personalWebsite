import React from 'react';
import { motion } from 'framer-motion';
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
            className="about-header"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              🖥️ Full Stack Engineer at BNY
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              🏫 University of Michigan College of Engineering
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              📚 B.S.E. Computer Science & Minor in Mathematics
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              📞 (720) 626-9100
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
              I'm Jordan, a passionate software engineer with extensive experience in full-stack development and a drive to build products that make a meaningful impact. Currently based in Pittsburgh, but looking to move to NYC.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe; 