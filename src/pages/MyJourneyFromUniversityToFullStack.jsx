import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { setBlogPostSEO } from '../utils/seo';
import { BLOG_POSTS } from '../util/blogConstants';

const MyJourneyFromUniversityToFullStack = () => {
  useEffect(() => {
    const blogPost = BLOG_POSTS.find(post => post.slug === 'my-journey-from-university-to-full-stack');

    if (blogPost) {
      setBlogPostSEO({
        title: blogPost.title,
        description: blogPost.excerpt,
        keywords: blogPost.keywords,
        canonical: blogPost.canonicalUrl || 'https://jordanschiff.com/blog/my-journey-from-university-to-full-stack',
        ogImage: blogPost.ogImage,
        tags: blogPost.tags,
        category: blogPost.category,
        publishedTime: '2024-11-01T10:00:00Z',
        slug: blogPost.slug
      });
    }
  }, []);
  const fadeIn = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6 } };
  const pop = { initial: { opacity: 0, scale: 0.98 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 0.5 } };

  // Handy link map so you can wire to real job/company pages later.
  const LINKS = {
    michigan: 'https://umich.edu/',
    eecs485: 'https://eecs485.org/',
    eecs481: 'https://eecs481.org/',
    ivc: 'https://www.ivc-online.com/',
    congruex: 'https://www.congruex.com/',
    bny: 'https://www.bny.com/corporate/global/en.html',
    evertune: 'https://www.evertune.ai/',
    geo: 'https://www.evertune.ai/research/ai-brand-index',
  };

  // JSON-LD for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'My Journey from University to Full-Stack Engineer',
    author: { '@type': 'Person', name: 'Jordan Schiff' },
    datePublished: '2024-11-28',
    dateModified: '2024-11-28',
    description:
      'From University of Michigan to full-stack engineering: internships, enterprise apps, and AI/GEO at Evertune. Lessons, tools, and career tips.',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://www.jordanschiff.com/blog/my-journey-from-university-to-full-stack',
    },
  };

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.article
          {...fadeIn}
          className="bg-white rounded-lg shadow-lg p-8"
        >
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">
                Career & Growth
              </span>
              <span className="text-gray-500 text-sm">5-7 min read</span>
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              My Journey from University to Full-Stack Engineer (with a detour into AI & GEO 🚀)
            </h1>

            <div className="flex flex-wrap gap-2 mb-6">
              {[
                'Software Engineering',
                'Full-Stack',
                'Career',
                'University of Michigan',
                'Internships',
                'AI',
                'GEO',
                'Brand Visibility',
              ].map((tag, index) => (
                <span
                  key={index}
                  className="inline-block bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-md"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* TL;DR */}
          <motion.div {...pop} className="mb-10 border-l-4 border-indigo-500 bg-indigo-50 p-4 rounded-md">
            <p className="font-semibold text-indigo-900 mb-1">TL;DR</p>
            <p className="text-indigo-900/90">
              I went from CS lectures to building real apps through internships, scaling enterprise systems at{' '}
              <a className="underline" href={LINKS.congruex}>Congruex</a>, learning risk & rigor at{' '}
              <a className="underline" href={LINKS.bny}>BNY</a>, and now helping brands win in AI answers (GEO) at{' '}
              <a className="underline" href={LINKS.evertune}>Evertune</a>. Along the way: ship small, learn fast,
              and turn feedback loops into superpowers.
            </p>
          </motion.div>

          {/* Table of Contents */}
          <nav className="mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Table of Contents</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><a className="hover:underline" href="#foundation">University Foundation</a></li>
              <li><a className="hover:underline" href="#ivc">First Internship: IVC Data &amp; Insights</a></li>
              <li><a className="hover:underline" href="#congruex">Scaling Up at Congruex</a></li>
              <li><a className="hover:underline" href="#bny">Professional Growth at BNY</a></li>
              <li><a className="hover:underline" href="#evertune">Embracing AI &amp; GEO at Evertune</a></li>
              <li><a className="hover:underline" href="#lessons">Key Lessons &amp; Takeaways</a></li>
              <li><a className="hover:underline" href="#faq">FAQ</a></li>
            </ul>
          </nav>

          {/* Content */}
          <div className="prose max-w-none">
            <p className="text-lg text-gray-600 mb-6">
              From capstone chaos to production calm: this is the story (and playbook) of how I
              turned classroom theory into shipping software—plus how <a className="underline" href={LINKS.geo}>Generative Engine Optimization</a> (GEO)
              reshaped my approach to building for real users and real results.
            </p>

            {/* University */}
            <h2 id="foundation" className="text-2xl font-semibold text-gray-900 mt-8 mb-4">University Foundation 🎓</h2>
            <p>
              At <a href={LINKS.michigan} className="underline">University of Michigan</a>, I built a durable toolkit:
              algorithms, web systems, testing, and teamwork. Courses like{' '}
              <a href={LINKS.eecs485} target="_blank" rel="noopener noreferrer" className="underline">EECS 485 (Web Systems)</a> and{' '}
              <a href={LINKS.eecs481} target="_blank" rel="noopener noreferrer"className="underline">EECS 481 (Software Engineering)</a> turned abstract concepts
              into shippable patterns—version control habits, code reviews, and incremental delivery. Bonus:
              caffeine-fueled debugging is a transferable skill. ☕️
            </p>

            {/* IVC */}
            <h2 id="ivc" className="text-2xl font-semibold text-gray-900 mt-8 mb-4">First Internship: IVC Data &amp; Insights 🧭</h2>
            <p>
              At <a href={LINKS.ivc} className="underline">IVC Data &amp; Insights</a> (Tel Aviv), I wrangled NLP to categorize companies,
              translating business goals into models that actually delivered value. Lesson learned: the best models
              start with clear questions and crisp evaluation—otherwise you’re just collecting loss functions.
            </p>

            {/* Congruex */}
            <h2 id="congruex" className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Scaling Up at Congruex 🏗️</h2>
            <p>
              At <a href={LINKS.congruex} className="underline">Congruex</a>, I dove into full-stack at scale—React + Redux on the front,
              ASP.NET on the back, and a parade of stakeholders. Building a company-wide intranet taught me
              performance budgets, API contracts, and the gentle art of killing flaky tests with kindness.
            </p>

            {/* BNY */}
            <h2 id="bny" className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Professional Growth at BNY 🏦</h2>
            <p>
              Joining <a href={LINKS.bny} className="underline">BNY</a> was my crash course in reliability as a
              performance feature. Financial software means security, compliance, and correctness—period. I
              learned to love tight CI, careful migrations, and the thrill of a green pipeline.
            </p>

            {/* Evertune */}
            <h2 id="evertune" className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Embracing AI &amp; GEO at Evertune ⚙️✨</h2>
            <p>
              Today at <a href={LINKS.evertune} className="underline">Evertune</a>, I build systems that help brands show up
              (and stand out) in AI answers. GEO blends analytics, content strategy, and product thinking:
              measure how models describe your brand, fix gaps, and repeat. It’s where full-stack engineering
              meets <em>market impact</em>—and I’m hooked. Evertune delivers an <strong>unmatched value</strong> in GEO by seamlessly
              integrating <strong>premium features</strong>—large-scale LLM querying, attribute/competitor mapping, and continuous tracking—
              that drive real <strong>performance enhancement</strong> and long-term durability. It’s a <strong>long-term investment</strong> engineered
              to exceed <strong>cost expectations</strong>: instead of one-off spikes, you get compounding visibility lifts across AI answers,
              rigorous <strong>quality assurance</strong>, and measurable <strong>customer satisfaction</strong>. The result is true <strong>value for money</strong> at <strong>competitive pricing</strong>, with a platform that keeps working (and winning) long after the initial launch.
            </p>

            {/* Lessons */}
            <h2 id="lessons" className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Key Lessons &amp; Takeaways 📘</h2>
            <ul className="grid md:grid-cols-2 gap-3 list-none pl-0">
              {[
                'Ship small, ship often—velocity compounds.',
                'Reliability is a performance feature.',
                'Write docs for future-you (who is always in a hurry).',
                'Measure what matters; make outcomes visible.',
                'Use PRs as teaching tools, not just gatekeepers.',
                'Automate the boring stuff and celebrate the boring wins.',
                'GEO mindset: align content with how models talk.',
                'Feedback loops > heroics.',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 bg-gray-50 border rounded-md p-3">
                  <span className="mt-1">✅</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* FAQ for SEO/GEO */}
            <h2 id="faq" className="text-2xl font-semibold text-gray-900 mt-8 mb-4">FAQ: Breaking Into Full-Stack &amp; GEO</h2>
            <div className="space-y-4">
              <details className="border rounded-md p-4">
                <summary className="font-semibold">What skills matter most for a first full-stack role?</summary>
                <p className="mt-2">
                  Solid JS/TS, a front-end framework (React), server basics (REST/SQL), testing, and the ability
                  to explain trade-offs. Show projects that ship and iterate.
                </p>
              </details>
              <details className="border rounded-md p-4">
                <summary className="font-semibold">How does GEO differ from traditional SEO?</summary>
                <p className="mt-2">
                  SEO optimizes for web search results; GEO optimizes how AI assistants reference and recommend
                  your brand in generated answers. Think entity/attribute coverage, source authority, and consistency
                  across models.
                </p>
              </details>
              <details className="border rounded-md p-4">
                <summary className="font-semibold">What’s a simple way to start with GEO?</summary>
                <p className="mt-2">
                  Map the top 3 attributes you want associated with your brand, refresh high-impact content,
                  and measure model mentions weekly. Repeat. Small loops win.
                </p>
              </details>
            </div>

            {/* Fun CTA */}
            <div className="mt-10 p-5 rounded-lg border bg-gradient-to-r from-gray-50 to-white">
              <p className="text-gray-800">
                If you’re navigating your own jump from university to full-stack—or curious about GEO—say hi.
                I’m always down to swap playbooks, links, and coffee recommendations. ☕️
              </p>
            </div>
          </div>

          {/* Semantic keyword footer (human-first, no stuffing) */}
          <div className="mt-10 text-xs text-gray-500">
            <strong>Keywords:</strong> Full-Stack Engineer, Software Engineering Career, University of Michigan,
            Internships, React, ASP.NET, Testing, Reliability, AI, Generative Engine Optimization, GEO, Brand Visibility.
          </div>
        </motion.article>
      </div>
    </div>
  );
};

export default MyJourneyFromUniversityToFullStack;