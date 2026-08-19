"use client";

import { useEffect, useRef } from "react";

/**
 * Soft spotlight that trails the cursor.
 *
 * Position is written straight to a transform inside a rAF tick rather than
 * through React state — a state update per mousemove would re-render the tree
 * dozens of times a second for a purely decorative effect.
 *
 * Disabled on coarse pointers (no cursor to follow) and under reduced motion.
 */
export function CursorGlow() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const coarsePointer = window.matchMedia("(pointer: coarse)").matches;
    if (prefersReduced || coarsePointer) return;

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;
    let rafId = 0;
    let visible = false;

    function onMove(e: MouseEvent) {
      targetX = e.clientX;
      targetY = e.clientY;
      if (!visible && el) {
        visible = true;
        el.style.opacity = "1";
      }
    }

    function onLeave() {
      visible = false;
      if (el) el.style.opacity = "0";
    }

    function tick() {
      // Exponential smoothing — the lag is what makes it feel like a glow
      // rather than a cursor replacement.
      currentX += (targetX - currentX) * 0.12;
      currentY += (targetY - currentY) * 0.12;
      if (el) {
        el.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;
      }
      rafId = requestAnimationFrame(tick);
    }

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      // -z-10 keeps it behind all section content but above the page
      // background, so it reads as ambient light rather than an overlay.
      className="pointer-events-none fixed left-0 top-0 -z-10 hidden size-[380px] rounded-full opacity-0 transition-opacity duration-500 md:block"
      style={{
        background:
          "radial-gradient(circle, color-mix(in oklab, var(--primary) 12%, transparent) 0%, transparent 65%)",
        willChange: "transform",
      }}
    />
  );
}
