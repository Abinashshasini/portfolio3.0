export const slideUpContainer = {
  initial: {
    y: 400,
  },
  enter: {
    y: 0,
    transition: {
      duration: 1.2,
      ease: [0.33, 1, 0.68, 1],
      delay: 3.1,
    },
  },
};

export const opacity = {
  initial: {
    opacity: 0,
    y: 50,
  },
  enter: {
    y: 0,
    opacity: 1,
    transition: { duration: 1, delay: 4.3 },
  },
};
