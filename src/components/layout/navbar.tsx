"use client";

import { useState } from "react";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import { Menu, X, FileText } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { useActiveSection } from "@/hooks/use-active-section";
import { navLinks, site } from "@/lib/site";
import { cn } from "@/lib/utils";

// Hero is observed but has no nav link, so scrolling back to the top clears
// the indicator rather than leaving a stale one highlighted.
const sectionIds = ["hero", ...navLinks.map((l) => l.href.replace("#", ""))];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(sectionIds);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    const next = y > 24;
    // Guarded so we only re-render on the transition, not every scroll frame.
    setScrolled((prev) => (prev === next ? prev : next));
  });

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/70 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8"
      >
        <Link
          href="#hero"
          className="group flex items-center gap-2 font-display text-sm font-bold tracking-tight"
        >
          <span className="grid size-7 place-items-center rounded-md bg-primary font-mono text-xs text-primary-foreground">
            BS
          </span>
          <span className="hidden sm:inline">{site.name}</span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = active === id;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "relative block rounded-full px-3.5 py-1.5 text-sm transition-colors",
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {isActive ? (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 -z-10 rounded-full bg-secondary"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 32,
                      }}
                    />
                  ) : null}
                  {link.title}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-1.5">
          <ThemeToggle />
          <Button
            asChild
            size="sm"
            variant="outline"
            className="hidden sm:inline-flex"
          >
            <a href={site.resume} download>
              <FileText aria-hidden />
              Resume
            </a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </nav>

      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="overflow-hidden border-b border-border bg-background/95 backdrop-blur-xl md:hidden"
          >
            <ul className="flex flex-col px-5 pb-4 pt-1">
              {navLinks.map((link) => {
                const id = link.href.replace("#", "");
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "block border-b border-border/50 py-3 text-base transition-colors last:border-0",
                        active === id
                          ? "text-primary"
                          : "text-muted-foreground hover:text-foreground",
                      )}
                    >
                      {link.title}
                    </Link>
                  </li>
                );
              })}
              <li className="pt-3">
                <Button asChild className="w-full" size="sm">
                  <a href={site.resume} download onClick={() => setOpen(false)}>
                    <FileText aria-hidden />
                    Download Resume
                  </a>
                </Button>
              </li>
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
