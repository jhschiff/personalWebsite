import React from 'react';
import { motion } from 'framer-motion';
import ContactButtons from './HomePage/ContactButtons';
import headshot from '../assets/headshot.jpeg';
import blockM from '../assets/BlockM.png';

const HomePage = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6"
            >
              Hi, I'm Jordan
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl sm:text-2xl text-gray-600 mb-8"
            >
              A passionate software engineer focused on building impactful products and delivering exceptional user experiences.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col gap-2 mb-8"
            >
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-gray-600"
              >
                🖥️ Full Stack Engineer at BNY
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex items-center gap-2 text-gray-600"
              >
                <img 
                  src={blockM} 
                  alt="University of Michigan Block M" 
                  className="w-8 h-8 object-contain"
                />
                <span>University of Michigan College of Engineering</span>
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="text-gray-600"
              >
                📚 B.S.E. Computer Science & Minor in Mathematics, Graduated Magna Cum Laude
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="text-gray-600"
              >
                📞 (720) 626-9100
              </motion.p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex gap-4"
            >
              <ContactButtons />
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="md:w-1/2 mt-8 md:mt-0"
          >
            <img
              src={headshot}
              alt="Jordan's Headshot"
              className="rounded-full w-64 h-64 object-cover mx-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomePage; 