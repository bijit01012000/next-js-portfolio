"use client";

import { useEffect, useRef } from "react";

/**
 * Lightweight canvas constellation for the hero.
 *
 * Hand-rolled rather than pulling in @react-three/fiber — this is a decorative
 * background, and a WebGL renderer would cost more than the whole rest of the
 * page. Roughly 3KB of logic, no dependencies.
 *
 * Cost controls:
 *  - skipped entirely under prefers-reduced-motion and on coarse pointers
 *  - DPR capped at 2
 *  - particle count scales with viewport area, hard-capped
 *  - rAF loop pauses when the hero scrolls out of view
 *  - link lines use a squared-distance check, so no sqrt in the inner loop
 */

type Particle = { x: number; y: number; vx: number; vy: number; r: number };

const LINK_DISTANCE = 130;
const LINK_DISTANCE_SQ = LINK_DISTANCE * LINK_DISTANCE;

export function ParticleField({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const coarsePointer = window.matchMedia("(pointer: coarse)").matches;
    if (prefersReduced || coarsePointer) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let particles: Particle[] = [];
    let rafId = 0;
    let running = false;

    // Read the accent colour from the theme rather than hardcoding it, so the
    // field recolours correctly in light mode.
    const accent = () => {
      const v = getComputedStyle(document.documentElement)
        .getPropertyValue("--primary")
        .trim();
      return v || "#10b981";
    };
    let strokeColor = accent();

    function resize() {
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.min(Math.round((width * height) / 18000), 70);
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
        r: Math.random() * 1.4 + 0.7,
      }));
    }

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;

        // Wrap rather than bounce — avoids particles clustering at edges
        if (p.x < 0) p.x = width;
        else if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        else if (p.y > height) p.y = 0;
      }

      // Link lines
      ctx.strokeStyle = strokeColor;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distSq = dx * dx + dy * dy;
          if (distSq > LINK_DISTANCE_SQ) continue;

          ctx.globalAlpha = (1 - distSq / LINK_DISTANCE_SQ) * 0.16;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }

      // Nodes
      ctx.fillStyle = strokeColor;
      ctx.globalAlpha = 0.5;
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalAlpha = 1;
      rafId = requestAnimationFrame(draw);
    }

    function start() {
      if (running) return;
      running = true;
      rafId = requestAnimationFrame(draw);
    }

    function stop() {
      running = false;
      cancelAnimationFrame(rafId);
    }

    resize();
    start();

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);

    // Pause when the hero leaves the viewport
    const visibility = new IntersectionObserver(
      ([entry]) => (entry.isIntersecting ? start() : stop()),
      { threshold: 0 },
    );
    visibility.observe(canvas);

    // Pause on background tabs
    const onVisibility = () =>
      document.hidden ? stop() : start();
    document.addEventListener("visibilitychange", onVisibility);

    // Recolour when the theme class flips
    const themeObserver = new MutationObserver(() => {
      strokeColor = accent();
    });
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      stop();
      resizeObserver.disconnect();
      visibility.disconnect();
      themeObserver.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className={className}
      // Canvas is purely decorative and sits behind content
      style={{ pointerEvents: "none" }}
    />
  );
}
