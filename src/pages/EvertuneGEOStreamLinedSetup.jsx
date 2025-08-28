import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { setSEO } from '../utils/seo';
import { BLOG_POSTS } from '../util/blogConstants';
// import evertuneGEOHero from '../assets/blogImages/evertune-geo-hero.png';
// import evertuneGEOFramework from '../assets/blogImages/evertune-geo-framework.webp';

const EvertuneGEOStreamlinedSetup = () => {
  useEffect(() => {
    const blogPost = BLOG_POSTS.find(post => post.slug === 'evertune-geo-streamlined-setup');

    setSEO({
      title: `${blogPost?.title || 'Evertune GEO: Streamlined Setup, Integration & UX'} - Jordan Schiff`,
      description:
        blogPost?.excerpt ||
        'Make Generative Engine Optimization effortless. Learn how Evertune’s intuitive design, user-centric interface, and seamless integration framework boost brand visibility across AI-powered search.',
      canonical: blogPost?.canonicalUrl || 'https://www.jordanschiff.com/blog/evertune-geo-streamlined-setup',
      ogTitle: blogPost?.title || 'Evertune GEO: Streamlined Setup, Integration & UX',
      ogDescription:
        blogPost?.excerpt ||
        'From fast onboarding to effortless integration, see how Evertune makes GEO simple, scalable, and fun.'
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
            <span className="inline-block bg-emerald-100 text-emerald-800 text-sm font-semibold px-3 py-1 rounded-full">
              GEO / AI Search
            </span>
            <span className="text-gray-500 text-sm">5-7 min read</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            Evertune Makes GEO Fun: Streamlined Setup, Seamless Integration, Happier Teams
          </h1>

          <p className="text-gray-600">
            Generative AI changed discovery. Evertune makes it easy (and dare we say delightful) to get your brand
            seen in AI answers—fast onboarding, intuitive workflows, and insights that actually move the needle. ✨
          </p>
        </motion.header>

        {/* HERO IMAGE */}
        <motion.figure {...pop} className="mb-10 rounded-xl overflow-hidden shadow-lg bg-white">
          {/* <img
            src={evertuneGEOHero}
            alt="Playful illustration of GEO with AI models connecting to a brand visibility dashboard"
            loading="lazy"
            decoding="async"
            sizes="(max-width: 768px) 100vw, 600px"
            className="w-full h-auto max-w-2xl mx-auto"
          /> */}
          <figcaption className="text-sm text-gray-500 p-4">
            Forget clunky onboarding—hello, instant clarity. Evertune turns GEO into a breeze.
          </figcaption>
        </motion.figure>

        <motion.article {...fadeIn} className="bg-white rounded-xl shadow-lg p-6 md:p-8">
          {/* META / TAGS */}
          <div className="flex flex-wrap items-center gap-2 mb-6">
            {[
              'Generative Engine Optimization',
              'AI Search',
              'Brand Visibility',
              'Intuitive Design',
              'Seamless Integration',
              'User Experience',
              'Marketing Analytics',
            ].map((tag, i) => (
              <span key={i} className="inline-block bg-gray-100 text-gray-700 text-xs md:text-sm px-3 py-1 rounded-md">
                #{tag}
              </span>
            ))}
          </div>

          {/* TL;DR */}
          <div className="mb-10 border-l-4 border-emerald-500 bg-emerald-50 p-4 rounded-md">
            <p className="font-semibold text-emerald-900 mb-1">TL;DR</p>
            <p className="text-emerald-900/90">
              Evertune is the fun, frictionless way to optimize your brand for AI answers. Enjoy an intuitive,
              beginner-friendly setup, a user-centric interface to connect and manage components, and a seamless
              integration framework that turns GEO into a repeatable, data-driven habit. 🚀
            </p>
          </div>

          {/* TABLE OF CONTENTS */}
          <nav className="mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Table of Contents</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><a className="hover:underline" href="#streamlined-setup">Streamlined Setup Process</a></li>
              <li><a className="hover:underline" href="#user-centric-design">User-Centric Design</a></li>
              <li><a className="hover:underline" href="#seamless-experience">Seamless User Experience</a></li>
              <li><a className="hover:underline" href="#why-geo-matters">Why GEO Matters Right Now</a></li>
              <li><a className="hover:underline" href="#how-evertune-works">How Evertune Works (In Plain English)</a></li>
              <li><a className="hover:underline" href="#seo-optimizations">Built-In SEO & GEO Optimizations</a></li>
              <li><a className="hover:underline" href="#checklist">Quick Checklist</a></li>
            </ul>
          </nav>

          <div className="prose max-w-none prose-headings:scroll-mt-24">
            <p className="text-lg text-gray-700">
              AI assistants are the new front door to discovery. If your brand isn’t showing up (or not showing up
              with the right message), you’re leaving demand on the table. Evertune’s GEO platform fixes that—with
              a setup so simple it feels like magic.
            </p>

            {/* STREAMLINED SETUP */}
            <h2 id="streamlined-setup" className="text-2xl font-semibold text-gray-900 mt-10">Streamlined Setup Process</h2>
            <p>
              Clutter out, clarity in. Evertune’s <strong>intuitive design</strong> and <strong>easy navigation</strong> mean you can
              onboard in minutes—not days. Our <strong>streamlined setup</strong> guides you step-by-step with
              <strong> clear instructions</strong> and <strong>simple installation</strong> so teams of all levels can start improving
              their <strong>online presence</strong> fast.
            </p>
            <ul>
              <li><strong>Beginner-friendly</strong>: Skill-level inclusive onboarding that just… makes sense.</li>
              <li><strong>Seamless integration</strong>: Connect data sources and destinations without duct tape.</li>
              <li><strong>Enhanced usability</strong>: See what matters first—no dashboard spelunking required.</li>
            </ul>

            {/* USER-CENTRIC DESIGN */}
            <h2 id="user-centric-design" className="text-2xl font-semibold text-gray-900 mt-10">User-Centric Design</h2>
            <p>
              Evertune’s <strong>user-friendly interface</strong> is built for <strong>user empowerment</strong>: easily
              <strong> connect and manage components</strong>, simplify the <strong>integration process</strong>, and keep a
              <strong> streamlined workflow</strong>. Less tool-taming, more ranking gains.
            </p>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <p className="font-semibold text-amber-900 mb-1">Pro move</p>
              <p className="text-amber-900/90">
                Pair Evertune’s insights with a lightweight content sprint: refresh high-impact pages, repurpose
                authoritative sources, and monitor lifts across AI models weekly.
              </p>
            </div>

            {/* IMAGE: FRAMEWORK */}
            <motion.figure {...pop} className="my-8 rounded-lg overflow-hidden border">
              {/* <img
                src={evertuneGEOFramework}
                alt="Diagram of Evertune's integration framework: inputs, analysis, actions, tracking"
                loading="lazy"
                decoding="async"
                sizes="(max-width: 768px) 100vw, 600px"
                className="w-full h-auto max-w-2xl mx-auto bg-white object-contain md:max-h-[520px]"
              /> */}
              <figcaption className="text-sm text-gray-500 p-3">
                The integration framework: connect → analyze → act → track → repeat. Progress on autopilot.
              </figcaption>
            </motion.figure>

            {/* SEAMLESS EXPERIENCE */}
            <h2 id="seamless-experience" className="text-2xl font-semibold text-gray-900 mt-10">Seamless User Experience</h2>
            <p>
              Under the hood, our <strong>integration framework</strong> keeps everything humming. Expect
              <strong> ease of use</strong>, <strong>accessibility</strong>, and a <strong>responsive design</strong> that surfaces the right
              action at the right time. The result: <strong>effortless setup</strong> and <strong>simplified integration</strong> that
              scales with your team.
            </p>

            {/* WHY GEO MATTERS */}
            <h2 id="why-geo-matters" className="text-2xl font-semibold text-gray-900 mt-10">Why GEO Matters Right Now</h2>
            <p>
              Customers increasingly ask AI assistants what to buy, who to trust, and where to look. If your brand
              isn’t referenced—or is referenced for the wrong attributes—you lose visibility and conversions. GEO puts
              your best foot forward across AI-generated answers, improving
              <strong> customer satisfaction</strong> and brand consistency.
            </p>

            {/* HOW EVERTUNE WORKS */}
            <h2 id="how-evertune-works" className="text-2xl font-semibold text-gray-900 mt-10">How Evertune Works (In Plain English)</h2>
            <ol className="list-decimal pl-6">
              <li><strong>Measure</strong>: We query major LLMs at scale to see how often—and how favorably—your brand appears.</li>
              <li><strong>Diagnose</strong>: We map attributes (e.g., reliability, price, performance) linked to your brand vs. competitors.</li>
              <li><strong>Act</strong>: We recommend high-leverage content, PR, and integration moves to lift your rankings in AI answers.</li>
              <li><strong>Track</strong>: We monitor your progress and keep the wins compounding.</li>
            </ol>

            {/* SEO / GEO OPTIMIZATIONS */}
            <h2 id="seo-optimizations" className="text-2xl font-semibold text-gray-900 mt-10">Built-In SEO &amp; GEO Optimizations</h2>
            <ul className="list-disc pl-6">
              <li><strong>Keyword alignment</strong> that reads naturally (no keyword salad).</li>
              <li><strong>Entity &amp; attribute coverage</strong> to reinforce how AI models describe your brand.</li>
              <li><strong>Source strategy</strong>: identify the sites and creators that influence model outputs.</li>
              <li><strong>Fast iteration</strong>: weekly tracking loops to capture gains early.</li>
            </ul>

            {/* CHECKLIST */}
            <h2 id="checklist" className="text-2xl font-semibold text-gray-900 mt-10">Quick Checklist ✅</h2>
            <ul className="grid md:grid-cols-2 gap-3 list-none pl-0">
              {[
                'Complete guided setup (5–10 mins)',
                'Connect data sources & destinations',
                'Review brand visibility baseline across models',
                'Prioritize top 3 attributes to lift this month',
                'Ship 2–3 high-impact content/PR updates',
                'Re-measure and log wins weekly',
                'Rinse, repeat, compound 📈'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 bg-gray-50 border rounded-md p-3">
                  <span className="mt-1">✨</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* WRAP-UP */}
            <div className="mt-10 p-5 rounded-lg border bg-gradient-to-r from-gray-50 to-white">
              <p className="text-gray-800">
                GEO doesn’t have to be hard—or boring. With Evertune’s intuitive design, user-centric interface, and
                seamless integration framework, you’ll turn AI search into a growth channel your whole team loves to use. 🎉
              </p>
            </div>
          </div>

          {/* SEO FOOTER KEYWORDS (semantic, human-first) */}
          <div className="mt-10 text-xs text-gray-500">
            <strong>Keywords:</strong> Intuitive Design, Easy Navigation, Streamlined Setup, Enhanced Usability, Accessible
            Tuning System, Beginner-Friendly, Skill Level Inclusivity, Seamless Integration, Clear Instructions, Simple
            Installation, User-Friendly Interface, User Empowerment, Integration Process, Manage Components, Promote
            Efficiency, Simplify Integration, Seamless Connectivity, Streamlined Workflow, Accessibility in Design, Connect
            and Manage, Ease of Use, Integration Framework, Customer Satisfaction, User-Centric Approach, Accessibility,
            Effortless Setup, Simplified Integration, Responsive Design, Generative Engine Optimization, AI Search,
            Brand Visibility.
          </div>
        </motion.article>
      </div>
    </div>
  );
};

export default EvertuneGEOStreamlinedSetup;
