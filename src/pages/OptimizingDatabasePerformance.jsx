import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { setSEO } from '../utils/seo';
import { BLOG_POSTS } from '../util/blogConstants';

const OptimizingDatabasePerformance = () => {
  useEffect(() => {
    const blogPost = BLOG_POSTS.find(post => post.slug === 'optimizing-database-performance');
    
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
                Backend Development
              </span>
              <span className="text-gray-500 text-sm">12 min read</span>
            </div>
            
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Optimizing Database Performance in Spring Boot Applications
            </h1>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {['Java', 'Spring Boot', 'Database', 'Performance'].map((tag, index) => (
                <span 
                  key={index}
                  className="inline-block bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-md"
                >
                  #{tag}
                </span>
              ))}
            </div>
            
            <p className="text-gray-500 text-sm">
              Published on November 10, 2024
            </p>
          </div>

          {/* Content */}
          <div className="prose max-w-none">
            <p className="text-lg text-gray-600 mb-6">
              Practical strategies for improving database query performance and managing connections in enterprise Java applications.
            </p>

            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Working with large-scale applications at BNY taught me valuable lessons about database optimization. 
                In this technical deep-dive, I share practical strategies for improving query performance, connection 
                pooling, and data modeling in Spring Boot applications.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Query Optimization Fundamentals</h2>
              <p>
                The foundation of database performance lies in writing efficient queries. Understanding how to leverage 
                indexes, avoid N+1 queries, and write optimized JPA queries can dramatically improve application response times.
              </p>
              <p>
                In Spring Boot applications, the @Query annotation provides powerful ways to optimize data access. 
                By writing custom JPQL or native SQL queries, you can ensure your application fetches only the data it needs.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Connection Pool Management</h2>
              <p>
                Proper connection pool configuration is crucial for handling concurrent requests efficiently. 
                HikariCP, the default connection pool in Spring Boot, offers excellent performance when configured correctly.
              </p>
              <p>
                Key metrics to monitor include connection acquisition time, active connections, and pool exhaustion events. 
                These insights help you tune your pool size and timeout settings for optimal performance.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">JPA Performance Best Practices</h2>
              <p>
                Hibernate and JPA provide powerful abstraction layers, but they require careful consideration to avoid 
                performance pitfalls. Lazy loading strategies, fetch types, and batch processing can significantly 
                impact your application's performance.
              </p>
              <p>
                The @BatchSize annotation and proper entity relationship mapping are essential tools for optimizing 
                data fetching patterns in complex domain models.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Monitoring and Profiling</h2>
              <p>
                What gets measured gets managed. Implementing proper monitoring for your database interactions helps 
                identify bottlenecks before they impact users. Tools like Spring Boot Actuator, Micrometer, and 
                database-specific monitoring solutions provide valuable insights.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Caching Strategies</h2>
              <p>
                Strategic caching can reduce database load significantly. Spring's caching abstraction, combined with 
                providers like Redis or Caffeine, allows you to implement sophisticated caching strategies with minimal code changes.
              </p>
            </div>
          </div>
        </motion.article>
      </div>
    </div>
  );
};

export default OptimizingDatabasePerformance;