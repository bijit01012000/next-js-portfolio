"use client";

import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";

/**
 * Scroll-triggered reveal. Animates transform + opacity only, so it stays on
 * the compositor.
 *
 * Reduced motion is NOT branched on here — see MotionProvider. Rendering a
 * different element tree based on useReducedMotion() breaks hydration, because
 * the server always sees `false`. MotionConfig applies the preference
 * internally, so the DOM stays identical between server and client.
 *
 * These are below-the-fold only. The hero uses the CSS `.rise` utility instead,
 * because it is the LCP element and must not wait for hydration to be visible.
 */

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
  as?: "div" | "section" | "li" | "span";
};

export function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
  once = true,
  as = "div",
}: RevealProps) {
  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration: 0.5, delay, ease: EASE }}
    >
      {children}
    </MotionTag>
  );
}

/** Parent that staggers its <RevealItem> children. */
export function RevealGroup({
  children,
  className,
  stagger = 0.08,
  once = true,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
  once?: boolean;
  as?: "div" | "ul" | "section";
}) {
  const MotionTag = motion[as];

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: stagger } },
  };

  return (
    <MotionTag
      className={className}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: "-60px" }}
    >
      {children}
    </MotionTag>
  );
}

export const revealItemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: EASE },
  },
};

export function RevealItem({
  children,
  className,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "li" | "span";
}) {
  const MotionTag = motion[as];

  return (
    <MotionTag className={className} variants={revealItemVariants}>
      {children}
    </MotionTag>
  );
}
