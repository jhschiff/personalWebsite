// Components available to every .mdx post without importing them.
const TLDR_COLORS = {
  emerald: 'border-emerald-500 bg-emerald-50 text-emerald-900',
  indigo: 'border-indigo-500 bg-indigo-50 text-indigo-900',
  blue: 'border-blue-500 bg-blue-50 text-blue-900',
};

const CALLOUT_COLORS = {
  blue: 'bg-blue-50 border-blue-200 text-blue-900',
  amber: 'bg-amber-50 border-amber-200 text-amber-900',
  emerald: 'bg-emerald-50 border-emerald-200 text-emerald-900',
  purple: 'bg-purple-50 border-purple-200 text-purple-900',
};

export const Tldr = ({ color = 'emerald', children }) => (
  <div className={`not-prose mb-10 border-l-4 p-4 rounded-md ${TLDR_COLORS[color]}`}>
    <p className="font-semibold mb-1">TL;DR</p>
    <div className="opacity-90 [&_a]:underline">{children}</div>
  </div>
);

export const Callout = ({ title, color = 'blue', children }) => (
  <div className={`not-prose border rounded-lg p-4 my-6 ${CALLOUT_COLORS[color]}`}>
    {title && <p className="font-semibold mb-1">{title}</p>}
    <div className="opacity-90 [&_ul]:list-disc [&_ul]:pl-6">{children}</div>
  </div>
);

export const Checklist = ({ icon = '✅', children }) => (
  <div className="checklist not-prose" style={{ '--icon': `"${icon}"` }}>{children}</div>
);

export const Cta = ({ children }) => (
  <div className="not-prose mt-10 p-5 rounded-lg border bg-gradient-to-r from-gray-50 to-white text-gray-800 [&_a]:underline [&_p+p]:mt-2">
    {children}
  </div>
);

export const Figure = ({ src, alt, caption }) => (
  <figure className="not-prose my-8 rounded-lg overflow-hidden border bg-white">
    <img src={src} alt={alt} loading="lazy" decoding="async" className="w-full h-auto max-w-2xl mx-auto object-contain md:max-h-[520px]" />
    {caption && <figcaption className="text-sm text-gray-500 p-3">{caption}</figcaption>}
  </figure>
);

export const Keywords = ({ children }) => (
  <p className="not-prose mt-10 text-xs text-gray-500"><strong>Keywords:</strong> {children}</p>
);

const mdxComponents = { Tldr, Callout, Checklist, Cta, Figure, Keywords };
export default mdxComponents;
