"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

/**
 * Cycles through role labels with a fade + rise.
 *
 * Under reduced motion this renders the first role statically — a rotating
 * label is itself the motion, so shortening the transition would not help.
 * The live region is polite so the rotation never interrupts a screen reader.
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
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduce || roles.length <= 1) return;
    const id = window.setInterval(
      () => setIndex((i) => (i + 1) % roles.length),
      interval,
    );
    return () => window.clearInterval(id);
  }, [reduce, roles.length, interval]);

  if (reduce) {
    return <span className={className}>{roles[0]}</span>;
  }

  return (
    <span
      className={className}
      // Reserve the row so the headline below never shifts as labels swap.
      style={{ display: "inline-grid", gridTemplateAreas: '"slot"' }}
    >
      {/* Invisible sizer: holds the width of the longest role. */}
      <span
        aria-hidden
        className="invisible whitespace-nowrap"
        style={{ gridArea: "slot" }}
      >
        {roles.reduce((a, b) => (a.length >= b.length ? a : b))}
      </span>

      <span
        style={{ gridArea: "slot" }}
        className="relative flex items-center"
        aria-live="polite"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={roles[index]}
            initial={{ opacity: 0, y: "0.4em" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-0.4em" }}
            transition={{ duration: 0.32, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="whitespace-nowrap"
          >
            {roles[index]}
          </motion.span>
        </AnimatePresence>
      </span>
    </span>
  );
}
