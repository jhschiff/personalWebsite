import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { setSEO } from '../utils/seo';
import { BLOG_POSTS } from '../util/blogConstants';

const TheFutureOfAI = () => {
  useEffect(() => {
    const blogPost = BLOG_POSTS.find(post => post.slug === 'the-future-of-ai');
    
    setSEO({
      title: `${blogPost?.title} - Jordan Schiff`,
      description: blogPost?.excerpt,
      canonical: blogPost?.canonicalUrl,
      ogTitle: blogPost?.title,
      ogDescription: blogPost?.excerpt
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-lg shadow-lg p-8"
        >
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">
                Technology Trends
              </span>
              <span className="text-gray-500 text-sm">10 min read</span>
            </div>
            
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              The Future of AI in Software Development
            </h1>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {['AI', 'Machine Learning', 'Software Development', 'Future Tech'].map((tag, index) => (
                <span 
                  key={index}
                  className="inline-block bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-md"
                >
                  #{tag}
                </span>
              ))}
            </div>
            
            <p className="text-gray-500 text-sm">
              Published on October 22, 2024
            </p>
          </div>

          {/* Content */}
          <div className="prose max-w-none">
            <p className="text-lg text-gray-600 mb-6">
              Exploring how artificial intelligence is transforming the way we write, test, and deploy software applications.
            </p>

            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                As a Full Stack Engineer at Evertune AI, I've witnessed firsthand how AI is revolutionizing software development. 
                From code generation to automated testing, AI tools are becoming indispensable for modern developers.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">AI-Powered Code Generation</h2>
              <p>
                Tools like GitHub Copilot and GPT-based code assistants are transforming how we write code. These AI systems 
                can generate entire functions, suggest optimizations, and even help with debugging. However, the key is learning 
                how to collaborate effectively with AI while maintaining code quality and understanding.
              </p>
              <p>
                The most successful developers I've observed don't just accept AI suggestions blindly—they use AI as a powerful 
                pair programming partner that can accelerate development while they focus on architecture and business logic.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Automated Testing and Quality Assurance</h2>
              <p>
                AI is making significant strides in automated testing. From generating test cases based on code analysis to 
                identifying edge cases that human testers might miss, AI-powered testing tools are improving software quality 
                and reducing the time needed for comprehensive testing.
              </p>
              <p>
                Machine learning models can analyze code changes and predict which areas are most likely to contain bugs, 
                allowing teams to focus their testing efforts more effectively.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Intelligent DevOps and Deployment</h2>
              <p>
                AI is also transforming DevOps practices. Intelligent monitoring systems can predict system failures before 
                they occur, automatically scale resources based on usage patterns, and optimize deployment strategies for 
                maximum reliability and performance.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">The Human Element</h2>
              <p>
                Despite all these advances, the human element remains crucial. AI tools are powerful accelerators, but they 
                require human insight for proper direction, ethical considerations, and creative problem-solving. The future 
                of software development isn't about AI replacing developers—it's about developers becoming more effective 
                by partnering with AI.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Looking Ahead</h2>
              <p>
                As we look to the future, I believe we'll see even more sophisticated AI tools that can understand business 
                requirements, suggest architectural improvements, and help with complex system design decisions. The key for 
                developers is to embrace these tools while continuing to develop strong fundamental skills in problem-solving 
                and system design.
              </p>
            </div>
          </div>
        </motion.article>
      </div>
    </div>
  );
};

export default TheFutureOfAI;