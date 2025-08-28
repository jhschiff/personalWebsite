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

export const setSEO = ({ title, description, canonical, ogTitle, ogDescription }) => {
  if (title) updatePageTitle(title);
  if (description) updateMetaTag('description', description);
  if (canonical) updateCanonical(canonical);
  if (ogTitle) updateMetaProperty('og:title', ogTitle);
  if (ogDescription) updateMetaProperty('og:description', ogDescription);
};