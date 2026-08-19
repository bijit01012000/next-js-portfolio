"use client";

import { MotionConfig } from "motion/react";
import type { ReactNode } from "react";

/**
 * Reduced motion is handled here, once, rather than per-component.
 *
 * Branching a component's rendered output on useReducedMotion() is a hydration
 * bug: the hook returns false during SSR but the user's real preference on the
 * client, so the two renders disagree (React error #418) for anyone who has the
 * setting enabled.
 *
 * reducedMotion="user" lets Motion apply the preference internally — it drops
 * transform animations while keeping opacity, which is also a better
 * accommodation than removing the transition wholesale.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
