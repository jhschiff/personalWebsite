import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { setBlogPostSEO } from '../utils/seo';
import { BLOG_POSTS } from '../util/blogConstants';

const TheFutureOfAI = () => {
  useEffect(() => {
    const blogPost = BLOG_POSTS.find(post => post.slug === 'the-future-of-ai');
    
    if (blogPost) {
      setBlogPostSEO({
        title: blogPost.title,
        description: blogPost.excerpt,
        keywords: blogPost.keywords,
        canonical: blogPost.canonicalUrl || 'https://jordanschiff.com/blog/the-future-of-ai',
        ogImage: blogPost.ogImage,
        tags: blogPost.tags,
        category: blogPost.category,
        publishedTime: '2024-11-25T10:00:00Z',
        slug: blogPost.slug
      });
    }
  }, []);
  const fadeIn = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6 } };
  const pop = { initial: { opacity: 0, scale: 0.98 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 0.5 } };

  // Internal links (swap to real routes/URLs)
  const LINKS = {
    aiIndex: 'https://www.evertune.ai/research/ai-brand-index',
    whyEvertune: 'https://www.evertune.ai/why-evertune',
    demo: 'https://www.evertune.ai/products/brand-monitoring',
    careers: 'https://www.evertune.ai/about-us/careers',
    geoGuide: 'https://www.evertune.ai/products/geo-site-audit',
  };

  // Blog + FAQ schema for better SEO/GEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'The Future of AI Answers: GEO & Brand Visibility',
    author: { '@type': 'Person', name: 'Jordan Schiff' },
    datePublished: '2024-10-22',
    dateModified: '2024-10-22',
    description:
      'AI assistants are the new front door to discovery. Learn the shift from SEO to GEO and how Evertune helps brands win visibility in AI answers.',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://www.jordanschiff.com/blog/the-future-of-ai',
    },
  };

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is Generative Engine Optimization (GEO)?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'GEO is the practice of improving how AI assistants reference and recommend your brand in generated answers by aligning entities, attributes, and sources that influence model outputs.',
        },
      },
      {
        '@type': 'Question',
        name: 'How is GEO different from SEO?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'SEO optimizes for ranked web results; GEO optimizes for conversational answers. GEO focuses on entity coverage, attribute relevance, and model consistency across LLMs.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does Evertune help with GEO?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Evertune measures brand visibility across major LLMs, diagnoses attribute gaps vs. competitors, recommends high-leverage content/PR moves, and tracks gains over time.',
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      {/* JSON-LD for SEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.article {...fadeIn} className="bg-white rounded-lg shadow-lg p-8">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <span className="inline-block bg-emerald-100 text-emerald-800 text-sm font-semibold px-3 py-1 rounded-full">
                AI Search & GEO
              </span>
              <span className="text-gray-500 text-sm">4-6 min read</span>
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              The Future of AI Answers: Why GEO Matters (and Where Evertune Fits) 🚀
            </h1>

            <div className="flex flex-wrap gap-2 mb-6">
              {[
                'GEO',
                'AI Answers',
                'Brand Visibility',
                'LLMs',
                'Marketing Analytics',
                'SEO vs GEO',
              ].map((tag, index) => (
                <span key={index} className="inline-block bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-md">
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* TL;DR */}
          <motion.div {...pop} className="mb-10 border-l-4 border-emerald-500 bg-emerald-50 p-4 rounded-md">
            <p className="font-semibold text-emerald-900 mb-1">TL;DR</p>
            <p className="text-emerald-900/90">
              AI assistants are the new SERP. GEO (Generative Engine Optimization) is how brands show up in those answers.
              <a className="underline ml-1" href={LINKS.whyEvertune}>Evertune</a> makes GEO practical: measure visibility across LLMs, fix attribute gaps,
              ship content/PR plays, and track lifts over time.
            </p>
          </motion.div>

          {/* Table of Contents */}
          <nav className="mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Table of Contents</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><a className="hover:underline" href="#new-serp">AI Answers Are the New SERP</a></li>
              <li><a className="hover:underline" href="#seo-geo">From SEO to GEO</a></li>
              <li><a className="hover:underline" href="#ship-it">What to Ship (Dev + Marketing)</a></li>
              <li><a className="hover:underline" href="#evertune">How Evertune Helps</a></li>
              <li><a className="hover:underline" href="#playbook">30/60/90 GEO Playbook</a></li>
              <li><a className="hover:underline" href="#metrics">Metrics That Matter</a></li>
              <li><a className="hover:underline" href="#faq">FAQ</a></li>
            </ul>
          </nav>

          {/* Content */}
          <div className="prose max-w-none">
            <p className="text-lg text-gray-600 mb-6">
              The future of software and marketing converges in one place: <strong>AI answers</strong>. If your brand
              isn’t referenced—accurately and often—you’re invisible in a channel where intent is sky-high. That’s
              what GEO solves.
            </p>

            <h2 id="new-serp" className="text-2xl font-semibold text-gray-900 mt-8 mb-4">AI Answers Are the New SERP</h2>
            <p>
              People increasingly ask assistants what to buy, who to trust, and which product fits their needs.
              Unlike blue links, answers compress choices into recommendations. Entity coverage, attribute relevance,
              and source authority drive those answers.
            </p>

            <h2 id="seo-geo" className="text-2xl font-semibold text-gray-900 mt-8 mb-4">From SEO to GEO</h2>
            <ul className="list-disc pl-6">
              <li><strong>Unit:</strong> pages → entities & attributes</li>
              <li><strong>Signal:</strong> backlinks → source/author authority that models ingest</li>
              <li><strong>Goal:</strong> rank position → answer inclusion & share of recommendation</li>
              <li><strong>Measurement:</strong> impressions & CTR → model coverage, sentiment, and consistency</li>
            </ul>
            <p className="mt-4">
              GEO isn’t “more keywords.” It’s structured, repeatable work to align how models describe your brand
              with what customers should hear.
            </p>

            <h2 id="ship-it" className="text-2xl font-semibold text-gray-900 mt-8 mb-4">What to Ship (Dev + Marketing)</h2>
            <ul className="list-disc pl-6">
              <li>Structured content that reinforces target attributes (e.g., “reliability,” “value”).</li>
              <li>Authoritative sources and partners that models are likely to trust.</li>
              <li>Clear product/feature pages that map to real-world comparisons.</li>
              <li>Lightweight PR/affiliate playbooks to seed high-signal coverage.</li>
            </ul>

            {/* Evertune */}
            <h2 id="evertune" className="text-2xl font-semibold text-gray-900 mt-8 mb-4">How Evertune Helps ⚙️✨</h2>
            <p>
              <a href={LINKS.whyEvertune} target="_blank" rel="noopener noreferrer" className="underline">Evertune</a> operationalizes GEO. It measures your brand’s presence across major LLMs,
              diagnoses attribute and sentiment gaps vs. competitors, recommends high-leverage actions, and tracks
              progress. Check your category in the{' '}
              <a href={LINKS.aiIndex} target="_blank" rel="noopener noreferrer" className="underline">AI Brand Index</a> and turn insights into a plan.
            </p>

            <h2 id="playbook" className="text-2xl font-semibold text-gray-900 mt-8 mb-4">30/60/90 GEO Playbook</h2>
            <ol className="list-decimal pl-6">
              <li><strong>Days 1–30:</strong> Baseline visibility, pick 3 target attributes, identify top influencing sources.</li>
              <li><strong>Days 31–60:</strong> Refresh priority pages, brief PR/partners, ship 2–3 high-signal assets.</li>
              <li><strong>Days 61–90:</strong> Re-measure across models, expand what’s working, retire what’s not.</li>
            </ol>

            <h2 id="metrics" className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Metrics That Matter</h2>
            <ul className="list-disc pl-6">
              <li><strong>Model coverage:</strong> where your brand appears across LLMs.</li>
              <li><strong>Share of recommendation:</strong> how often you’re named in answers.</li>
              <li><strong>Attribute alignment:</strong> relevance of target attributes in generated text.</li>
              <li><strong>Sentiment/positioning:</strong> positive vs. negative associations.</li>
              <li><strong>Consistency over time:</strong> durability of gains across releases and prompts.</li>
            </ul>

            {/* CTA */}
            <div className="mt-10 p-5 rounded-lg border bg-gradient-to-r from-gray-50 to-white">
              <p className="text-gray-800">
                Ready to make AI answers work for you? Start with the{' '}
                <a className="underline" href={LINKS.aiIndex} target="_blank" rel="noopener noreferrer">AI Brand Index</a>, then book a{' '}
                <a className="underline" href={LINKS.demo} target="_blank" rel="noopener noreferrer">demo</a>. Prefer building the future with us? We’re hiring—see{' '}
                <a className="underline" href={LINKS.careers} target="_blank" rel="noopener noreferrer">careers</a>.
              </p>
            </div>

            {/* FAQ */}
            <h2 id="faq" className="text-2xl font-semibold text-gray-900 mt-8 mb-4">FAQ: GEO &amp; Evertune</h2>
            <div className="space-y-4">
              <details className="border rounded-md p-4">
                <summary className="font-semibold">Does GEO replace SEO?</summary>
                <p className="mt-2">
                  No—SEO still matters for web results. GEO complements it by improving how AI assistants talk about
                  your brand in generated answers.
                </p>
              </details>
              <details className="border rounded-md p-4">
                <summary className="font-semibold">How quickly can we see movement?</summary>
                <p className="mt-2">
                  Timelines vary by category and source authority. The key is steady iteration: measure, ship, re-measure.
                </p>
              </details>
              <details className="border rounded-md p-4">
                <summary className="font-semibold">What teams use Evertune?</summary>
                <p className="mt-2">
                  Growth, brand, comms/PR, and product marketing—often in partnership with content and analytics.
                </p>
              </details>
            </div>
          </div>

          {/* Semantic keyword footer (human-first, non-stuffy) */}
          <div className="mt-10 text-xs text-gray-500">
            <strong>Keywords:</strong> Generative Engine Optimization, GEO, AI Answers, Brand Visibility, LLMs,
            Entity Coverage, Attribute Relevance, SEO vs GEO, Marketing Analytics, Evertune.
          </div>
        </motion.article>
      </div>
    </div>
  );
};

export default TheFutureOfAI;