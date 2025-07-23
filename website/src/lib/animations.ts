// Standard Framer Motion variants from the brief
export const fadeInUp = {
  initial: { y: 20 },
  animate: { y: 0 },
  transition: { duration: 0.5, ease: "easeOut" }
};

export const staggerContainer = {
  animate: {
    transition: { staggerChildren: 0.1 }
  }
};

export const scaleOnHover = {
  whileHover: { scale: 1.02 },
  transition: { duration: 0.2 }
};

// Additional animation variants for Hero section
export const slideInFromLeft = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

export const slideInFromRight = {
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut", delay: 0.2 }
};

export const bounceIn = {
  initial: { opacity: 0, scale: 0.3 },
  animate: { opacity: 1, scale: 1 },
  transition: { 
    duration: 0.6, 
    ease: "easeOut",
    type: "spring",
    stiffness: 260,
    damping: 20
  }
}; 