import { Feed } from 'feed';
import { BLOG_POSTS } from '../util/blogConstants';

export function generateRSSFeed() {
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
      date: new Date(), // You might want to add actual publish dates to your blog posts
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