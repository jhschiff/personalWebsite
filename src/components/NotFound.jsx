import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
    <h1 className="text-5xl font-bold text-gray-900 mb-4">Page not found</h1>
    <p className="text-gray-600 mb-8">That page doesn't exist or has moved.</p>
    <div className="flex gap-6">
      <Link to="/" className="text-blue-600 hover:text-blue-800 font-medium">Home</Link>
      <Link to="/blog" className="text-blue-600 hover:text-blue-800 font-medium">Blog</Link>
    </div>
  </div>
);

export default NotFound;
