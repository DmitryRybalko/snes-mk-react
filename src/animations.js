export const titleContainer = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 1.3,
      ease: "easeIn",
    },
  },
  exit: {
    opacity: 0,
    y: 50,
    transition: {
      duration: 1,
    },
  },
};

export const titleAnimation = {
  hidden: { opacity: 0, y: 35 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.3,
      ease: "anticipate",
    },
  },
  exit: {
    opacity: 0,
    y: 35,
    transition: {
      duration: 1,
    },
  },
};

export const characterAnimation = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 1.1,
      ease: "easeIn",
    },
  },
};
