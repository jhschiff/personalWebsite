import React, { createContext, forwardRef, useContext, useEffect, useState } from 'react';
import { motion as fm } from 'framer-motion';

// Drop-in for framer-motion's `motion`: elements rendered on the first (prerendered) page load
// skip their entrance animation so the static HTML isn't stuck at opacity:0 until JS loads.
// Elements mounted later (client-side navigation) animate as usual.
const AnimateEntrances = createContext(false);

export function MotionGate({ children }) {
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => setHydrated(true), []);
  return <AnimateEntrances.Provider value={hydrated}>{children}</AnimateEntrances.Provider>;
}

const cache = {};
export const motion = new Proxy({}, {
  get(_, tag) {
    if (!cache[tag]) {
      const Comp = fm[tag];
      cache[tag] = forwardRef(function Motion(props, ref) {
        const animate = useContext(AnimateEntrances);
        const [skip] = useState(!animate); // decided once, at mount
        return <Comp ref={ref} {...props} initial={skip ? false : props.initial} />;
      });
    }
    return cache[tag];
  },
});
