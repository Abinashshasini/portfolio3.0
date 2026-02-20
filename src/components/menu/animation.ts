const easing = [0.76, 0, 0.24, 1] as const;

export const menuSlide = {
  initial: { x: '-100%' },
  enter: { x: '0', transition: { duration: 0.8, ease: easing } },
  exit: {
    x: '-100%',
    transition: { duration: 0.8, ease: easing },
  },
};

export const slide = {
  initial: { x: -80 },
  enter: (i: number) => ({
    x: 0,
    transition: { duration: 0.8, ease: easing, delay: 0.05 * i },
  }),
  exit: (i: number) => ({
    x: -80,
    transition: { duration: 0.8, ease: easing, delay: 0.05 * i },
  }),
};

export const scale = {
  open: { scale: 1, transition: { duration: 0.3 } },
  closed: { scale: 0, transition: { duration: 0.4 } },
};
