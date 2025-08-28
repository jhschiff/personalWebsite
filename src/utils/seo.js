// SEO utility functions for React 19 compatibility
export const updatePageTitle = (title) => {
  document.title = title;
};

export const updateMetaTag = (name, content) => {
  let meta = document.querySelector(`meta[name="${name}"]`);
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute('name', name);
    document.head.appendChild(meta);
  }
  meta.setAttribute('content', content);
};

export const updateMetaProperty = (property, content) => {
  let meta = document.querySelector(`meta[property="${property}"]`);
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute('property', property);
    document.head.appendChild(meta);
  }
  meta.setAttribute('content', content);
};

export const updateCanonical = (href) => {
  let link = document.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', href);
};

export const updateStructuredData = (data) => {
  // Remove existing blog structured data
  const existingScript = document.querySelector('script[type="application/ld+json"][data-blog="true"]');
  if (existingScript) {
    existingScript.remove();
  }

  // Add new structured data
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.setAttribute('data-blog', 'true');
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
};

const normalizeImageUrl = (imageUrl) => {
  return imageUrl?.startsWith('http') ? imageUrl : `https://jordanschiff.com${imageUrl}`;
};

export const setBlogPostSEO = ({ 
  title, 
  description, 
  keywords,
  canonical, 
  ogImage,
  tags = [],
  category,
  publishedTime,
  slug
}) => {
  // Basic meta tags
  if (title) updatePageTitle(`${title} | Jordan Schiff`);
  if (description) updateMetaTag('description', description);
  if (keywords) updateMetaTag('keywords', keywords);
  if (canonical) updateCanonical(canonical);
  
  // Open Graph tags
  if (title) updateMetaProperty('og:title', title);
  if (description) updateMetaProperty('og:description', description);
  if (canonical) updateMetaProperty('og:url', canonical);
  updateMetaProperty('og:type', 'article');
  if (ogImage) {
    updateMetaProperty('og:image', normalizeImageUrl(ogImage));
  }
  
  // Twitter Card tags
  updateMetaTag('twitter:card', 'summary_large_image');
  if (title) updateMetaTag('twitter:title', title);
  if (description) updateMetaTag('twitter:description', description);
  if (ogImage) {
    updateMetaTag('twitter:image', normalizeImageUrl(ogImage));
  }
  
  // Article specific meta tags
  if (publishedTime) updateMetaProperty('article:published_time', publishedTime);
  updateMetaProperty('article:author', 'Jordan Schiff');
  if (tags.length > 0) {
    updateMetaProperty('article:tag', tags.join(', '));
  }
  
  // Structured data for articles
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "url": canonical || `https://jordanschiff.com/blog/${slug}`,
    "author": {
      "@type": "Person",
      "name": "Jordan Schiff",
      "url": "https://jordanschiff.com"
    },
    "publisher": {
      "@type": "Person",
      "name": "Jordan Schiff",
      "url": "https://jordanschiff.com"
    }
  };
  
  if (publishedTime) {
    structuredData.datePublished = publishedTime;
    structuredData.dateModified = publishedTime;
  }
  
  if (ogImage) {
    structuredData.image = normalizeImageUrl(ogImage);
  }
  
  if (tags.length > 0) {
    structuredData.keywords = tags.join(', ');
  }
  
  if (category) {
    structuredData.articleSection = category;
  }
  
  updateStructuredData(structuredData);
};

export const setSEO = ({ title, description, canonical, ogTitle, ogDescription }) => {
  if (title) updatePageTitle(title);
  if (description) updateMetaTag('description', description);
  if (canonical) updateCanonical(canonical);
  if (ogTitle) updateMetaProperty('og:title', ogTitle);
  if (ogDescription) updateMetaProperty('og:description', ogDescription);
};