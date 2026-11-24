import { BLOG_POSTS } from '../posts';

export const SITE = 'https://jordanschiff.com';
const AUTHOR = 'Jordan Schiff';
const DEFAULT_IMAGE = `${SITE}/headshot.jpeg`;

const PAGES = {
  '/': {
    title: 'Jordan Schiff - Full Stack Software Engineer | Portfolio',
    description: 'Jordan Schiff - Full Stack Software Engineer at Evertune AI. University of Michigan Computer Science graduate specializing in building impactful products and exceptional user experiences.',
  },
  '/about': {
    title: 'About Jordan Schiff - Software Engineer | Experience & Projects',
    description: "Learn about Jordan Schiff's software engineering experience, projects, and technical skills. Full Stack Engineer with expertise in React, JavaScript, and modern web development.",
  },
  '/blog': {
    title: 'Blog - Jordan Schiff | Software Engineering Insights & Tech Articles',
    description: "Read Jordan Schiff's blog posts about software engineering, React development, career insights, and technology trends. Learn from a Full Stack Engineer's experiences.",
  },
};

const absolute = (url) => (url.startsWith('http') ? url : `${SITE}${url}`);

// Every indexable path; the prerender step writes one HTML file per entry.
export const ROUTES = [...Object.keys(PAGES), ...BLOG_POSTS.map((p) => `/blog/${p.slug}`)];

export function seoFor(pathname) {
  const path = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;
  const page = PAGES[path];
  if (page) return { ...page, url: `${SITE}${path}`, type: 'website', image: DEFAULT_IMAGE };

  const post = BLOG_POSTS.find((p) => `/blog/${p.slug}` === path);
  if (!post) return { title: 'Page not found | Jordan Schiff', description: 'This page does not exist.', noindex: true };

  const url = `${SITE}/blog/${post.slug}`;
  const image = post.ogImage ? absolute(post.ogImage) : DEFAULT_IMAGE;
  const jsonLd = [{
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image,
    url,
    datePublished: post.date,
    dateModified: post.date,
    author: { '@type': 'Person', name: AUTHOR, url: SITE },
    publisher: { '@type': 'Person', name: AUTHOR },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    keywords: post.keywords || post.tags.join(', '),
    articleSection: post.category,
  }];
  if (post.faq) {
    jsonLd.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: post.faq.map(({ q, a }) => ({
        '@type': 'Question',
        name: q,
        acceptedAnswer: { '@type': 'Answer', text: a },
      })),
    });
  }
  return {
    title: `${post.title} | Jordan Schiff`,
    description: post.excerpt,
    keywords: post.keywords,
    url,
    image,
    type: 'article',
    publishedTime: post.date,
    tags: post.tags,
    jsonLd,
  };
}

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// Returns the per-page <head> tags as an HTML string; tagged data-seo so client navigation can swap them.
export function headTags(seo) {
  const meta = (attr, key, value) => (value ? `<meta data-seo ${attr}="${key}" content="${esc(value)}">` : '');
  return [
    `<title data-seo>${esc(seo.title)}</title>`,
    meta('name', 'description', seo.description),
    meta('name', 'keywords', seo.keywords),
    seo.noindex ? meta('name', 'robots', 'noindex') : '',
    seo.url ? `<link data-seo rel="canonical" href="${esc(seo.url)}">` : '',
    meta('property', 'og:title', seo.title),
    meta('property', 'og:description', seo.description),
    meta('property', 'og:url', seo.url),
    meta('property', 'og:type', seo.type),
    meta('property', 'og:image', seo.image),
    meta('name', 'twitter:card', seo.image ? 'summary_large_image' : ''),
    meta('name', 'twitter:title', seo.title),
    meta('name', 'twitter:description', seo.description),
    meta('name', 'twitter:image', seo.image),
    meta('property', 'article:published_time', seo.publishedTime),
    seo.type === 'article' ? meta('property', 'article:author', AUTHOR) : '',
    ...(seo.tags || []).map((t) => meta('property', 'article:tag', t)),
    // Escape "<" so post text can never close the script tag.
    ...(seo.jsonLd || []).map((d) => `<script data-seo type="application/ld+json">${JSON.stringify(d).replace(/</g, '\\u003c')}</script>`),
  ].filter(Boolean).join('\n    ');
}

export function applySeo(seo) {
  document.head.querySelectorAll('[data-seo]').forEach((el) => el.remove());
  document.head.insertAdjacentHTML('beforeend', headTags(seo));
}
