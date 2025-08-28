import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { setBlogPostSEO } from '../utils/seo';
import { BLOG_POSTS } from '../util/blogConstants';

const OptimizingDatabasePerformance = () => {
  useEffect(() => {
    const blogPost = BLOG_POSTS.find(post => post.slug === 'optimizing-database-performance');
    
    if (blogPost) {
      setBlogPostSEO({
        title: blogPost.title,
        description: blogPost.excerpt,
        keywords: blogPost.keywords,
        canonical: blogPost.canonicalUrl || 'https://jordanschiff.com/blog/optimizing-database-performance',
        ogTitle: blogPost.title,
        ogDescription: blogPost.excerpt,
        ogImage: blogPost.ogImage,
        tags: blogPost.tags,
        category: blogPost.category,
        publishedTime: '2024-11-15T10:00:00Z',
        slug: blogPost.slug
      });
    }
  }, []);

  const fadeIn = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6 } };
  const pop = { initial: { opacity: 0, scale: 0.98 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 0.5 } };

  // Optional JSON-LD for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Optimizing Database Performance in Spring Boot Applications',
    author: { '@type': 'Person', name: 'Jordan Schiff' },
    datePublished: '2024-11-15',
    dateModified: '2024-11-15',
    description:
      'Hands-on strategies to speed up Spring Boot: JPA query tuning, HikariCP pool settings, indexes, profiling, and caching with Redis/Caffeine.',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://www.jordanschiff.com/blog/optimizing-database-performance'
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.article
          {...fadeIn}
          className="relative bg-white rounded-2xl shadow-lg p-8 overflow-hidden"
        >
          {/* Header */}
          <div className="relative mb-8">
            <div className="flex items-center gap-4 mb-4">
              <span className="inline-block bg-emerald-100 text-emerald-800 text-sm font-semibold px-3 py-1 rounded-full">
                Backend Development
              </span>
              <span className="text-gray-500 text-sm">9–11 min read</span>
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-3">
              Optimizing Database Performance in Spring Boot Applications
            </h1>

            <p className="text-gray-600">
              Make your JVM fly: fix N+1s, tune HikariCP like a pro, measure what matters, and cache the right things—without shipping footguns. ✈️
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {['Java', 'Spring Boot', 'Hibernate', 'JPA', 'PostgreSQL', 'HikariCP', 'Performance'].map((tag, i) => (
                <span key={i} className="inline-block bg-gray-100 text-gray-700 text-xs md:text-sm px-3 py-1 rounded-md">
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* TL;DR */}
          <motion.div {...pop} className="mb-10 border-l-4 border-indigo-500 bg-indigo-50 p-4 rounded-md">
            <p className="font-semibold text-indigo-900 mb-1">TL;DR</p>
            <p className="text-indigo-900/90">
              Profile first, index what queries actually use, eliminate N+1s, tune HikariCP for your traffic shape,
              keep JPA smart (fetch plans/batching), watch DB & pool metrics, and add caching where reads dominate.
            </p>
          </motion.div>

          {/* Table of Contents */}
          <nav className="mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Table of Contents</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><a className="hover:underline" href="#queries">Query Optimization Fundamentals</a></li>
              <li><a className="hover:underline" href="#n-plus-one">Killing the N+1 Problem</a></li>
              <li><a className="hover:underline" href="#pooling">Connection Pool Management (HikariCP)</a></li>
              <li><a className="hover:underline" href="#jpa">JPA/Hibernate Performance Patterns</a></li>
              <li><a className="hover:underline" href="#observability">Monitoring & Profiling</a></li>
              <li><a className="hover:underline" href="#caching">Caching Strategies</a></li>
              <li><a className="hover:underline" href="#checklist">Quick Checklist</a></li>
            </ul>
          </nav>

          {/* Content */}
          <div className="prose max-w-none prose-headings:scroll-mt-24">
            <p className="text-lg text-gray-700 mb-6">
              Most “slow database” stories are actually “slow queries + sad pool settings + unobserved hotspots.” Let’s fix those—systematically.
            </p>

            {/* Query Optimization */}
            <h2 id="queries" className="text-2xl font-semibold text-gray-900 mt-10">Query Optimization Fundamentals</h2>
            <p>
              Start with real traffic. Capture slow queries (&gt; p95) and run <code>EXPLAIN (ANALYZE, BUFFERS)</code>.
              Add only the indexes your workload needs; remove dead ones. Prefer narrow covering indexes over kitchen-sink composites.
            </p>
            <div className="bg-gray-50 border rounded-lg p-4 not-prose mb-6">
              <p className="font-mono text-sm text-gray-800 mb-2">Example: Postgres index + targeted query</p>
              <pre className="whitespace-pre-wrap overflow-x-auto text-sm">{`-- Index tuned for lookup by (status, created_at DESC)
CREATE INDEX CONCURRENTLY IF NOT EXISTS idx_orders_status_created_at
ON orders (status, created_at DESC);

-- Query only what you need (avoid SELECT *)
SELECT id, total, created_at
FROM orders
WHERE status = 'PAID'
ORDER BY created_at DESC
LIMIT 50;`}</pre>
            </div>

            {/* N+1 */}
            <h2 id="n-plus-one" className="text-2xl font-semibold text-gray-900 mt-10">Killing the N+1 Problem</h2>
            <p>
              N+1s hide behind convenient abstractions. Detect them with SQL logs or Hibernate statistics, then eliminate with
              <strong> fetch joins</strong>, <strong>@EntityGraph</strong>, or batched queries.
            </p>
            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 mb-6">
              <p className="font-semibold text-emerald-900 mb-1">Pro tip</p>
              <p className="text-emerald-900/90">
                “Lazy” doesn’t mean “later is faster.” Use explicit fetch plans for hot paths; keep defaults conservative elsewhere.
              </p>
            </div>
            <div className="bg-gray-50 border rounded-lg p-4 not-prose mb-6">
              <p className="font-mono text-sm text-gray-800 mb-2">JPQL fetch join</p>
              <pre className="whitespace-pre-wrap overflow-x-auto text-sm">{`@Query("SELECT o FROM Order o JOIN FETCH o.items WHERE o.id IN :ids")
List<Order> findWithItems(@Param("ids") List<Long> ids);`}</pre>
            </div>

            {/* Pooling */}
            <h2 id="pooling" className="text-2xl font-semibold text-gray-900 mt-10">Connection Pool Management (HikariCP)</h2>
            <p>
              Right-size the pool to match DB concurrency and app threads. Too small = contention; too large = DB thrash.
              Measure borrow times, active/idle counts, and timeouts under load.
            </p>
            <div className="bg-gray-50 border rounded-lg p-4 not-prose mb-6">
              <p className="font-mono text-sm text-gray-800 mb-2">application.yml (sane starting point)</p>
              <pre className="whitespace-pre-wrap overflow-x-auto text-sm">{`spring:
  datasource:
    hikari:
      maximum-pool-size: 20       # start near DB core count; load test to confirm
      minimum-idle: 5
      connection-timeout: 2500    # ms to wait for a connection before failing fast
      idle-timeout: 600000        # 10m
      max-lifetime: 1800000       # 30m < DB wait_timeout
  jpa:
    properties:
      hibernate.hikari.metricsEnabled: true`}</pre>
            </div>

            {/* JPA */}
            <h2 id="jpa" className="text-2xl font-semibold text-gray-900 mt-10">JPA/Hibernate Performance Patterns</h2>
            <ul className="list-disc pl-6">
              <li><strong>Fetch plans</strong>: use <code>@EntityGraph</code> or fetch joins on read-heavy endpoints.</li>
              <li><strong>Batching</strong>: enable <code>hibernate.jdbc.batch_size</code> for inserts/updates.</li>
              <li><strong>DTO projections</strong>: avoid loading full aggregates for list views.</li>
              <li><strong>Pagination</strong>: always page list endpoints; avoid giant <code>IN</code> clauses.</li>
              <li><strong>Second-level cache</strong>: use sparingly for immutable reference data.</li>
            </ul>
            <div className="bg-gray-50 border rounded-lg p-4 not-prose mb-6 mt-4">
              <p className="font-mono text-sm text-gray-800 mb-2">Batching & projections</p>
              <pre className="whitespace-pre-wrap overflow-x-auto text-sm">{`# application.yml
spring:
  jpa:
    properties:
      hibernate.jdbc.batch_size: 50
      hibernate.order_inserts: true
      hibernate.order_updates: true

// Repository projection example
public interface OrderSummary {
  Long getId();
  BigDecimal getTotal();
  Instant getCreatedAt();
}

@Query("SELECT o.id AS id, o.total AS total, o.createdAt AS createdAt FROM Order o WHERE o.status=:status")
Page<OrderSummary> findSummaries(@Param("status") Status status, Pageable pageable);`}</pre>
            </div>

            {/* Observability */}
            <h2 id="observability" className="text-2xl font-semibold text-gray-900 mt-10">Monitoring &amp; Profiling</h2>
            <p>
              What gets measured gets faster. Expose pool/DB metrics via Micrometer; graph them in Grafana.
              Enable slow query logs and use sampling profilers to catch CPU hogs.
            </p>
            <ul className="list-disc pl-6">
              <li><strong>Pool:</strong> borrow time p95/p99, active vs. max, timeout count.</li>
              <li><strong>DB:</strong> slow query count, buffer/cache hit ratio, lock waits.</li>
              <li><strong>App:</strong> endpoint latency, GC pauses, heap pressure.</li>
            </ul>

            {/* Caching */}
            <h2 id="caching" className="text-2xl font-semibold text-gray-900 mt-10">Caching Strategies</h2>
            <p>
              Cache reads with stable keys and clear TTLs. Keep caches coherent (evict on write) and observable.
              Start at the application layer; add HTTP/CDN when it helps.
            </p>
            <div className="bg-gray-50 border rounded-lg p-4 not-prose mb-6">
              <p className="font-mono text-sm text-gray-800 mb-2">Spring Cache + Redis</p>
              <pre className="whitespace-pre-wrap overflow-x-auto text-sm">{`@Cacheable(value = "product", key = "#id", unless = "#result == null")
public ProductDto getProduct(Long id) { ... }

@CacheEvict(value = "product", key = "#id")
public void updateProduct(Long id, UpdateCmd cmd) { ... }`}</pre>
            </div>

            {/* Checklist */}
            <h2 id="checklist" className="text-2xl font-semibold text-gray-900 mt-10">Quick Checklist ✅</h2>
            <ul className="grid md:grid-cols-2 gap-3 list-none pl-0">
              {[
                'Capture p95/p99 slow queries from prod-like traffic',
                'Add the 1–2 missing indexes that matter; drop dead ones',
                'Eliminate N+1s with fetch joins or @EntityGraph',
                'Right-size HikariCP (verify with load tests)',
                'Enable batching for writes; use projections for reads',
                'Add Micrometer + dashboards for pool/DB metrics',
                'Introduce cache for hot reads with clear TTLs/evictions',
                'Page everything; avoid SELECT * and giant IN lists'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 bg-gray-50 border rounded-md p-3">
                  <span className="mt-1">⚡</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Wrap-up */}
            <div className="mt-10 p-5 rounded-lg border bg-gradient-to-r from-gray-50 to-white">
              <p className="text-gray-800">
                Performance isn’t a mystery—it’s a habit. Measure, tune, validate, and repeat until the speed
                you need becomes the speed you keep. Future incidents will thank you. 🙌
              </p>
            </div>
          </div>
        </motion.article>
      </div>
    </div>
  );
};

export default OptimizingDatabasePerformance;