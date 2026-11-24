import React from 'react';
import { motion } from '../../util/motion';
import { useParams } from 'react-router-dom';
import { BLOG_POSTS } from '../../posts';
import mdxComponents from './MdxComponents';
import NotFound from '../NotFound';

const BlogPost = () => {
  const { slug } = useParams();
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return <NotFound />;
  const { Content } = post;

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl shadow-lg p-6 md:p-8"
        >
          <header className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">
                {post.label || post.category}
              </span>
              <span className="text-gray-500 text-sm">{post.readTime}</span>
              <time className="text-gray-500 text-sm" dateTime={post.date}>
                {new Date(`${post.date}T12:00:00Z`).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' })}
              </time>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{post.heading || post.title}</h1>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span key={tag} className="inline-block bg-gray-100 text-gray-700 text-xs md:text-sm px-3 py-1 rounded-md">
                  #{tag}
                </span>
              ))}
            </div>
          </header>
          <div className="prose max-w-none prose-headings:scroll-mt-24">
            <Content components={mdxComponents} />
          </div>
        </motion.article>
      </div>
    </div>
  );
};

export default BlogPost;
