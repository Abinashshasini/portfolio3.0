export const slideUpDefaultAnimation = {
  initial: {
    y: '100%',
  },
  open: (i: number) => ({
    y: '0%',
    transition: { duration: 0.5, delay: 0.01 * i },
    delay: 1,
  }),
  closed: {
    y: '100%',
    transition: { duration: 0.5 },
  },
};
