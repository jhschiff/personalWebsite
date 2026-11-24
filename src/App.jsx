import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './components/HomePage';
import Navigation from './components/Navigation';
import About from './components/About';
import Blog from './components/Blog';
import BlogPost from './components/BlogPage/BlogPost';
import NotFound from './components/NotFound';
import { applySeo, seoFor } from './util/seo';

// Keeps <head> tags in sync on client-side navigation; the first page load already has them from prerendering.
function SeoSync() {
  const { pathname } = useLocation();
  useEffect(() => applySeo(seoFor(pathname)), [pathname]);
  return null;
}

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SeoSync />
      <Navigation />
      <div className="pt-16">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
