/** @type {import('framer-motion').Variants} */
export const slideUp = {
  initial: {
    x: '0%',
  },
  exit: i => ({
    x: i === 0 ? '-100%' : '100%',
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
  }),
};

/** @type {import('framer-motion').Variants} */
export const fade = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 0.75,
    transition: { duration: 0.5, delay: 0.1 },
  },
};
