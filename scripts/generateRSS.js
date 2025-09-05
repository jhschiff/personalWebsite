const fs = require('fs');
const path = require('path');

// Import blog posts and Feed directly since we need CommonJS
const { Feed } = require('feed');
const { BLOG_POSTS } = require('./blogConstants.cjs');

function generateRSSFeed() {
  const feed = new Feed({
    title: 'Jordan Schiff - Blog',
    description: 'Software engineering insights, technology trends, and lessons learned building scalable applications.',
    id: 'https://jordanschiff.com/',
    link: 'https://jordanschiff.com/',
    language: 'en',
    image: 'https://jordanschiff.com/favicon.ico',
    favicon: 'https://jordanschiff.com/favicon.ico',
    copyright: `All rights reserved ${new Date().getFullYear()}, Jordan Schiff`,
    updated: new Date(),
    generator: 'Jordan Schiff Personal Website',
    feedLinks: {
      json: 'https://jordanschiff.com/feed.json',
      atom: 'https://jordanschiff.com/feed.xml',
      rss: 'https://jordanschiff.com/rss.xml',
    },
    author: {
      name: 'Jordan Schiff',
      email: 'jordan41schiff@gmail.com',
      link: 'https://jordanschiff.com',
    },
  });

  BLOG_POSTS.forEach((post) => {
    feed.addItem({
      title: post.title,
      id: `https://jordanschiff.com/blog/${post.slug}`,
      link: `https://jordanschiff.com/blog/${post.slug}`,
      description: post.excerpt,
      content: post.content,
      author: [
        {
          name: 'Jordan Schiff',
          email: 'jordan41schiff@gmail.com',
          link: 'https://jordanschiff.com',
        },
      ],
      date: new Date(),
      category: [
        {
          name: post.category,
        },
      ],
      image: post.ogImage ? `https://jordanschiff.com${post.ogImage}` : undefined,
    });
  });

  return {
    rss: feed.rss2(),
    atom: feed.atom1(),
    json: feed.json1(),
  };
}

// Generate feeds
const { rss, atom, json } = generateRSSFeed();

// Write to public directory
const publicDir = path.join(__dirname, '..', 'public');

// Ensure public directory exists
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Write RSS feed
fs.writeFileSync(path.join(publicDir, 'rss.xml'), rss);
console.log('✅ RSS feed generated at public/rss.xml');

// Write Atom feed
fs.writeFileSync(path.join(publicDir, 'feed.xml'), atom);
console.log('✅ Atom feed generated at public/feed.xml');

// Write JSON feed
fs.writeFileSync(path.join(publicDir, 'feed.json'), json);
console.log('✅ JSON feed generated at public/feed.json');

// Generate individual markdown files for each blog post
const postsDir = path.join(publicDir, 'posts');
if (!fs.existsSync(postsDir)) {
  fs.mkdirSync(postsDir, { recursive: true });
}

BLOG_POSTS.forEach(post => {
  const markdown = `# ${post.title}

${post.excerpt}

**Category:** ${post.category}
**Tags:** ${post.tags.join(', ')}

${post.content}
`;
  
  fs.writeFileSync(path.join(postsDir, `${post.slug}.md`), markdown);
  console.log(`✅ Generated markdown for ${post.slug}.md`);
});

console.log('🎉 All feeds and markdown files generated successfully!');