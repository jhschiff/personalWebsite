// Each ./<slug>.mdx file is a post; its YAML frontmatter is the metadata.
const modules = import.meta.glob('./*.mdx', { eager: true });

export const BLOG_POSTS = Object.entries(modules)
  .map(([file, mod]) => ({ ...mod.frontmatter, slug: file.slice(2, -4), Content: mod.default }))
  .sort((a, b) => b.date.localeCompare(a.date));
