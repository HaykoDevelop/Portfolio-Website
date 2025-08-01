import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ScrollAnimationWrapper = ({ 
  children, 
  className = "",
  animationType = "fade",
  threshold = 0.3,
  delay = 0,
  duration = 0.6
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    amount: threshold 
  });

  const getAnimationVariants = () => {
    switch (animationType) {
      case "slide-up":
        return {
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 }
        };
      case "slide-down":
        return {
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 }
        };
      case "scale":
        return {
          hidden: { opacity: 0, scale: 0.8 },
          visible: { opacity: 1, scale: 1 }
        };
      case "fade":
      default:
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 }
        };
    }
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={getAnimationVariants()}
      transition={{ 
        duration, 
        delay,
        ease: "easeOut" 
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimationWrapper;