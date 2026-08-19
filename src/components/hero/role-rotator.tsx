"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

/**
 * Cycles through role labels with a fade + rise.
 *
 * The reduced-motion check lives inside the effect, never in render. Branching
 * the returned tree on a media query breaks hydration, because the server
 * cannot know the user's preference — so the first render is always identical
 * and only the timer is conditional. A rotating label IS the motion, so when
 * the preference is set the rotation simply never starts.
 */
export function RoleRotator({
  roles,
  interval = 2600,
  className,
}: {
  roles: readonly string[];
  interval?: number;
  className?: string;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (roles.length <= 1) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const id = window.setInterval(
      () => setIndex((i) => (i + 1) % roles.length),
      interval,
    );
    return () => window.clearInterval(id);
  }, [roles.length, interval]);

  const longest = roles.reduce((a, b) => (a.length >= b.length ? a : b));

  return (
    <span
      className={className}
      // Reserve the row so the headline below never shifts as labels swap.
      style={{ display: "inline-grid", gridTemplateAreas: '"slot"' }}
    >
      {/* Invisible sizer: reserves the space the longest role needs.
          Deliberately allowed to wrap — with whitespace-nowrap it forced a
          400px min-width inside a 390px viewport, clipping the label on
          phones. Wrapping reserves height instead of width, which is what
          actually prevents the layout shifting as labels swap. */}
      <span aria-hidden className="invisible" style={{ gridArea: "slot" }}>
        {longest}
      </span>

      <span
        style={{ gridArea: "slot" }}
        className="relative flex items-start"
        aria-live="polite"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={roles[index]}
            initial={{ opacity: 0, y: "0.4em" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-0.4em" }}
            transition={{ duration: 0.32, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            {roles[index]}
          </motion.span>
        </AnimatePresence>
      </span>
    </span>
  );
}
