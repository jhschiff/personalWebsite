// Runs after `vite build` + the SSR build: writes one static HTML file per route,
// plus 404.html, RSS/Atom/JSON feeds, sitemap.xml and a readable .md per post.
import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { Feed } from 'feed';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const out = path.join(root, 'build');
const { render, renderPostHtml, seoFor, headTags, ROUTES, SITE, BLOG_POSTS } = await import(
  pathToFileURL(path.join(root, 'build-ssr', 'entry-server.mjs')).href
);

const write = (file, content) => {
  fs.mkdirSync(path.dirname(path.join(out, file)), { recursive: true });
  fs.writeFileSync(path.join(out, file), content);
};

// --- HTML pages ---
const template = fs.readFileSync(path.join(out, 'index.html'), 'utf8');
assert(template.includes('<!--seo-->') && template.includes('<div id="root"></div>'), 'index.html is missing placeholders');

for (const route of [...ROUTES, '/404']) {
  const seo = seoFor(route);
  const body = render(route);
  assert(body.length > 500, `empty render for ${route}`);
  const html = template
    .replace('<!--seo-->', headTags(seo))
    .replace('<div id="root"></div>', `<div id="root">${body}</div>`);
  // Netlify serves /about from about.html and 404.html for unknown paths.
  write(route === '/' ? 'index.html' : `${route.slice(1)}.html`, html);
}

// --- Feeds ---
const author = { name: 'Jordan Schiff', email: 'jordan41schiff@gmail.com', link: SITE };
const feed = new Feed({
  title: 'Jordan Schiff - Blog',
  description: 'Software engineering insights, technology trends, and lessons learned building scalable applications.',
  id: `${SITE}/`,
  link: `${SITE}/blog`,
  language: 'en',
  image: `${SITE}/headshot.jpeg`,
  favicon: `${SITE}/favicon.ico`,
  copyright: `All rights reserved ${new Date().getFullYear()}, Jordan Schiff`,
  // Newest post date, not build time, so readers don't see churn on every deploy.
  updated: new Date(BLOG_POSTS[0].date),
  feedLinks: { json: `${SITE}/feed.json`, atom: `${SITE}/feed.xml`, rss: `${SITE}/rss.xml` },
  author,
});
for (const post of BLOG_POSTS) {
  const seo = seoFor(`/blog/${post.slug}`);
  feed.addItem({
    title: post.title,
    id: seo.url,
    link: seo.url,
    description: post.excerpt,
    content: renderPostHtml(post),
    author: [author],
    date: new Date(post.date),
    category: [{ name: post.category }],
    image: seo.image,
  });
}
write('rss.xml', feed.rss2());
write('feed.xml', feed.atom1());
write('feed.json', feed.json1());

// --- Sitemap ---
const lastmod = Object.fromEntries(BLOG_POSTS.map((p) => [`/blog/${p.slug}`, p.date]));
write(
  'sitemap.xml',
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${ROUTES.map((r) => `  <url><loc>${SITE}${r === '/' ? '/' : r}</loc>${lastmod[r] ? `<lastmod>${lastmod[r]}</lastmod>` : ''}</url>`).join('\n')}
</urlset>
`
);

// --- Readable markdown per post (MDX source minus frontmatter, JSX attrs made HTML-ish) ---
for (const post of BLOG_POSTS) {
  const source = fs.readFileSync(path.join(root, 'src', 'posts', `${post.slug}.mdx`), 'utf8');
  const body = source.replace(/^---\n[\s\S]*?\n---\n/, '').replace(/className=/g, 'class=').trim();
  write(
    `posts/${post.slug}.md`,
    `# ${post.heading || post.title}\n\n> ${post.excerpt}\n\n` +
      `Published ${post.date} · ${post.category} · ${post.tags.join(', ')}\n` +
      `Source: ${SITE}/blog/${post.slug}\n\n${body}\n`
  );
}

fs.rmSync(path.join(root, 'build-ssr'), { recursive: true, force: true });
console.log(`Prerendered ${ROUTES.length} routes + 404, feeds, sitemap, ${BLOG_POSTS.length} markdown posts.`);
