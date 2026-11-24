import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from './App';
import mdxComponents from './components/BlogPage/MdxComponents';

export { BLOG_POSTS } from './posts';
export { ROUTES, SITE, seoFor, headTags } from './util/seo';

export const render = (url) =>
  renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>
  );

// Post body only, for full-content RSS/Atom items.
export const renderPostHtml = (post) => renderToString(<post.Content components={mdxComponents} />);
