"use client";

import { motion, useScroll, useSpring } from "motion/react";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  // Spring smooths the raw scroll value. Reduced motion is handled globally by
  // MotionConfig rather than branched on here, which would break hydration.
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 260,
    damping: 40,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-100 h-0.5 origin-left bg-primary"
    />
  );
}
