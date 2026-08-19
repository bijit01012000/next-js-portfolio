import { ScrollProgress } from "@/components/scroll-progress";
import { ThemeToggle } from "@/components/theme-toggle";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

/**
 * Foundation smoke-test page — verifies tokens, fonts, theming, motion and
 * button primitives all resolve. Replaced by real sections in Phase 2.
 */
export default function Home() {
  return (
    <>
      <ScrollProgress />
      <main id="main" className="relative min-h-screen">
        <div className="pointer-events-none absolute inset-0 grid-bg" />
        <div className="absolute inset-0 grain" />

        <div className="relative mx-auto flex min-h-screen max-w-3xl flex-col items-start justify-center gap-6 px-6">
          <div className="flex w-full items-center justify-between">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Foundation OK
            </span>
            <ThemeToggle />
          </div>

          <Reveal>
            <h1 className="text-5xl font-bold sm:text-7xl">
              <span className="text-gradient">{site.name}</span>
            </h1>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="font-mono text-sm text-primary">{site.role}</p>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="max-w-xl text-lg text-muted-foreground">
              {site.tagline}
            </p>
          </Reveal>

          <Reveal delay={0.24} className="flex flex-wrap gap-3">
            <Button>View Work</Button>
            <Button variant="outline">Resume</Button>
          </Reveal>
        </div>

        <div className="h-screen" />
      </main>
    </>
  );
}
