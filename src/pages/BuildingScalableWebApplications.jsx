import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { setSEO } from '../utils/seo';
import { BLOG_POSTS } from '../util/blogConstants';
import reactArchitectureHero from '../assets/blogImages/react-architecture-hero.png';
import reactArchitectureDiagram from '../assets/blogImages/react-architecture-diagram.webp';

const BuildingScalableWebApplications = () => {
  useEffect(() => {
    const blogPost = BLOG_POSTS.find(post => post.slug === 'building-scalable-web-applications');

    setSEO({
      title: `${blogPost?.title} - Jordan Schiff`,
      description: blogPost?.excerpt,
      canonical: blogPost?.canonicalUrl,
      ogTitle: blogPost?.title,
      ogDescription: blogPost?.excerpt
    });
  }, []);

  const fadeIn = { initial: { opacity: 0, y: 16 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6 } };
  const pop = { initial: { opacity: 0, scale: 0.98 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 0.5 } };

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HERO */}
        <motion.header {...fadeIn} className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">
              Frontend Development
            </span>
            <span className="text-gray-500 text-sm">10–12 min read</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            Building Scalable Web Applications with React and Modern Architecture
          </h1>

          <p className="text-gray-600">
            Exploring pragmatic patterns for React at scale—from component design and state strategy
            to performance, testing, and developer experience. Fewer footguns, more flow. 🚀
          </p>
        </motion.header>

        {/* HERO IMAGE */}
        <motion.figure {...pop} className="mb-10 rounded-xl overflow-hidden shadow-lg bg-white">
          <img
            src={reactArchitectureHero}
            alt="Abstract architecture diagram representing scalable React app structure"
            loading="lazy"
            decoding="async"
            sizes="(max-width: 768px) 100vw, 600px"
            className="w-full h-auto max-w-2xl mx-auto"
          />
          <figcaption className="text-sm text-gray-500 p-4">
            Great architecture is less about clever tricks—and more about consistent, boring excellence.
          </figcaption>
        </motion.figure>

        <motion.article
          {...fadeIn}
          className="bg-white rounded-xl shadow-lg p-6 md:p-8"
        >
          {/* META / TAGS */}
          <div className="flex flex-wrap items-center gap-2 mb-6">
            {['React', 'Architecture', 'JavaScript', 'Best Practices', 'Performance', 'Testing'].map((tag, i) => (
              <span
                key={i}
                className="inline-block bg-gray-100 text-gray-700 text-xs md:text-sm px-3 py-1 rounded-md"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* TL;DR */}
          <div className="mb-10 border-l-4 border-blue-500 bg-blue-50 p-4 rounded-md">
            <p className="font-semibold text-blue-900 mb-1">TL;DR</p>
            <p className="text-blue-900/90">
              Keep components small and composable, isolate domain state, streamline data fetching,
              and invest early in performance and tests. Automate the boring stuff; celebrate the
              consistent stuff. 🧰
            </p>
          </div>

          {/* TABLE OF CONTENTS */}
          <nav className="mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Table of Contents</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><a className="hover:underline" href="#component-architecture">Component Architecture</a></li>
              <li><a className="hover:underline" href="#state-management">State Management at Scale</a></li>
              <li><a className="hover:underline" href="#data-fetching">Data Fetching & Caching</a></li>
              <li><a className="hover:underline" href="#performance">Performance Considerations</a></li>
              <li><a className="hover:underline" href="#testing">Testing Strategy</a></li>
              <li><a className="hover:underline" href="#dx">Developer Experience (DX)</a></li>
              <li><a className="hover:underline" href="#monitoring">Monitoring & Reliability</a></li>
              <li><a className="hover:underline" href="#checklist">Practical Checklist</a></li>
            </ul>
          </nav>

          <div className="prose max-w-none prose-headings:scroll-mt-24">
            <p className="text-lg text-gray-700">
              As teams and codebases grow, the challenge isn’t merely “building features”—it’s building
              features that remain easy to change. Let’s look at concrete patterns that keep your React app
              resilient and your team happy.
            </p>

            {/* COMPONENT ARCHITECTURE */}
            <h2 id="component-architecture" className="text-2xl font-semibold text-gray-900 mt-10">Component Architecture</h2>
            <p>
              Prefer composition over inheritance. Model components around <em>capabilities</em> and
              <em>responsibilities</em> rather than pages. Keep UI components dumb, and extract domain logic
              into hooks or services.
            </p>

            <div className="bg-gray-50 border rounded-lg p-4 not-prose mb-6">
              <p className="font-mono text-sm text-gray-800 mb-2">Example: “Headless” UI hook + presentational component</p>
              <pre className="whitespace-pre-wrap overflow-x-auto text-sm">
                {`// useCounter.js
import { useState } from 'react';
export function useCounter({ initial = 0 } = {}) {
  const [count, set] = useState(initial);
  const inc = () => set(c => c + 1);
  const dec = () => set(c => c - 1);
  return { count, inc, dec };
}

// Counter.jsx
export function Counter({ initial }) {
  const { count, inc, dec } = useCounter({ initial });
  return (
    <div className="inline-flex items-center gap-3">
      <button onClick={dec} className="px-2 py-1 border rounded">-</button>
      <span>{count}</span>
      <button onClick={inc} className="px-2 py-1 border rounded">+</button>
    </div>
  );
}`}
              </pre>
            </div>

            {/* STATE MANAGEMENT */}
            <h2 id="state-management" className="text-2xl font-semibold text-gray-900 mt-10">State Management at Scale</h2>
            <p>
              Separate <strong>server cache</strong> (data from your API) from <strong>client state</strong> (form values,
              UI flags). Use simple local state first; reach for libraries when patterns repeat.
            </p>
            <ul>
              <li><strong>Redux Toolkit</strong>: Opinionated, great for complex domain logic, middleware, devtools.</li>
              <li><strong>Zustand</strong>: Minimal, ergonomic for feature-scoped stores; easy to keep code local.</li>
              <li><strong>Context</strong>: Fine for stable, low-frequency values (theme, auth user), not for hot data.</li>
            </ul>

            {/* IMAGE: ARCHITECTURE DIAGRAM */}
            <motion.figure {...pop} className="my-8 rounded-lg overflow-hidden border">
              <img
                src={reactArchitectureDiagram}
                alt="Component layers and data flow: UI, hooks, services, API"
                loading="lazy"
                decoding="async"
                sizes="(max-width: 768px) 100vw, 600px"
                className="w-full h-auto max-w-2xl mx-auto bg-white object-contain md:max-h-[520px]"
              />
              <figcaption className="text-sm text-gray-500 p-3">
                Keep domain state close to where it’s used. Push server data management to a caching layer.
              </figcaption>
            </motion.figure>

            {/* DATA FETCHING */}
            <h2 id="data-fetching" className="text-2xl font-semibold text-gray-900 mt-10">Data Fetching &amp; Caching</h2>
            <p>
              Libraries like <strong>TanStack Query (React Query)</strong> or <strong>RTK Query</strong> centralize network logic,
              cache results, and simplify retries, background refetching, and pagination.
            </p>
            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
              <p className="font-semibold text-emerald-900 mb-1">Pro tip</p>
              <p className="text-emerald-900/90">
                Treat server data as a cache—<em>not</em> state. Co-locate queries with components,
                and keep mutations declarative.
              </p>
            </div>

            {/* PERFORMANCE */}
            <h2 id="performance" className="text-2xl font-semibold text-gray-900 mt-10">Performance Considerations</h2>
            <ul className="list-disc pl-6">
              <li><strong>Code splitting</strong> with dynamic <code>import()</code> for heavy routes/widgets.</li>
              <li><strong>Memoization</strong> via <code>useMemo</code>/<code>useCallback</code> for hot paths (measure first!).</li>
              <li><strong>Virtualization</strong> for big lists (e.g., react-window).</li>
              <li><strong>Debounce/throttle</strong> chatty inputs and scroll handlers.</li>
              <li><strong>Images</strong>: lazy-load, use modern formats (WebP/AVIF), and proper sizes.</li>
            </ul>

            {/* TESTING */}
            <h2 id="testing" className="text-2xl font-semibold text-gray-900 mt-10">Testing Strategy</h2>
            <p>
              Aim for a healthy mix: unit tests for logic, integration tests for components/hooks,
              and a sprinkle of E2E for critical flows.
            </p>
            <ul className="list-disc pl-6">
              <li><strong>Unit</strong>: Vitest/Jest for pure functions and hooks.</li>
              <li><strong>Integration</strong>: React Testing Library—test behavior, not implementation.</li>
              <li><strong>E2E</strong>: Playwright or Cypress for happy paths and auth.</li>
            </ul>

            {/* DX */}
            <h2 id="dx" className="text-2xl font-semibold text-gray-900 mt-10">Developer Experience (DX)</h2>
            <p>
              Fast feedback loops keep teams shipping. Add ESLint + Prettier, type-checking, commit hooks,
              and a robust CI that runs tests and builds on PR.
            </p>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-6">
              <p className="font-semibold text-purple-900 mb-1">Quality gates you’ll actually love:</p>
              <ul className="list-disc pl-6 text-purple-900/90">
                <li>Type-check + lint on pre-commit (Husky + lint-staged).</li>
                <li>PR runs unit + integration tests, reports coverage.</li>
                <li>Preview deployments per PR.</li>
              </ul>
            </div>

            {/* MONITORING */}
            <h2 id="monitoring" className="text-2xl font-semibold text-gray-900 mt-10">Monitoring &amp; Reliability</h2>
            <p>
              Add error tracking (e.g., Sentry) and web vitals (CLS, LCP, TTFB) dashboards.
              Alert on user-impacting regressions, not just console noise.
            </p>

            {/* CHECKLIST */}
            <h2 id="checklist" className="text-2xl font-semibold text-gray-900 mt-10">Practical Checklist ✅</h2>
            <ul className="grid md:grid-cols-2 gap-3 list-none pl-0">
              {[
                'Feature-first folders (co-locate UI, hooks, tests)',
                'Server cache via React Query or RTK Query',
                'Local UI state stays local (no global everything)',
                'Code splitting for heavy routes',
                'Lazy-load images; provide width/height',
                'Test pyramid: unit > integration > E2E',
                'ESLint + Prettier + TypeScript (or JSDoc types)',
                'CI with build + test + preview deploys',
                'Sentry (errors) + Web Vitals monitoring',
                'Document decisions in ADRs (lightweight!)'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 bg-gray-50 border rounded-md p-3">
                  <span className="mt-1">🧩</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* WRAP-UP */}
            <div className="mt-10 p-5 rounded-lg border bg-gradient-to-r from-gray-50 to-white">
              <p className="text-gray-800">
                Scaling isn’t a single silver bullet—it’s the accumulation of small, boring, excellent
                decisions. Start with composition, clarify your state story, measure performance early,
                and keep the feedback loop fast. Future-you (and your teammates) will thank you. 🙌
              </p>
            </div>
          </div>
        </motion.article>
      </div>
    </div>
  );
};

export default BuildingScalableWebApplications;