export const headerAnimationFromLeft = {
  initial: { opacity: 0, x: -150 },
  animate: { opacity: 1, x: 0, transition: { delay: 0.3 } },
  exit: { opacity: 0, x: -150 },
};

export const headerAnimationFromRight = {
  initial: { opacity: 0, x: 150 },
  animate: { opacity: 1, x: 0, transition: { delay: 0.3 } },
  exit: { opacity: 0, x: 150 },
};
