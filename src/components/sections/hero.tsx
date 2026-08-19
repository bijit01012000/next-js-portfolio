import Link from "next/link";
import { ArrowDown, ArrowUpRight, FileText, MapPin } from "lucide-react";
import { RoleRotator } from "@/components/hero/role-rotator";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { roles, site } from "@/lib/site";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate flex min-h-svh flex-col justify-center overflow-hidden px-5 pt-28 pb-20 sm:px-8"
    >
      {/* Layered background: mesh glow, blueprint grid, film grain.
          All decorative, all pointer-events-none, none of it animated. */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-bg" />
        <div
          className="absolute -top-40 left-1/2 h-[36rem] w-[62rem] -translate-x-1/2 rounded-full blur-[120px]"
          style={{
            background:
              "radial-gradient(ellipse at center, var(--glow-a), transparent 70%)",
          }}
        />
        <div
          className="absolute -right-40 top-1/3 h-[28rem] w-[28rem] rounded-full blur-[110px]"
          style={{
            background:
              "radial-gradient(circle at center, var(--glow-b), transparent 70%)",
          }}
        />
        <div className="absolute inset-0 grain" />
      </div>

      <div className="mx-auto w-full max-w-6xl">
        {/* Availability / role pill */}
        <Reveal y={12}>
          <span className="inline-flex items-center gap-2.5 rounded-full border border-border bg-card/60 px-3.5 py-1.5 font-mono text-xs text-muted-foreground backdrop-blur">
            <span className="relative flex size-1.5">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-70 motion-reduce:animate-none" />
              <span className="relative inline-flex size-1.5 rounded-full bg-primary" />
            </span>
            {site.role}
          </span>
        </Reveal>

        <Reveal delay={0.08} className="mt-7">
          <h1 className="font-display text-[clamp(2.5rem,9vw,5.5rem)] font-bold leading-[0.95] tracking-tight">
            <span className="block text-muted-foreground/70 text-[0.42em] font-medium tracking-[0.2em] uppercase mb-4">
              Hello, I&apos;m
            </span>
            <span className="text-gradient">{site.name}</span>
          </h1>
        </Reveal>

        {/* Rotating role line */}
        <Reveal delay={0.16} className="mt-5">
          <p className="flex flex-wrap items-baseline gap-x-3 gap-y-1 font-mono text-lg text-foreground sm:text-2xl">
            <span aria-hidden className="text-primary">
              &gt;
            </span>
            <RoleRotator roles={roles} className="text-primary" />
          </p>
        </Reveal>

        <Reveal delay={0.24} className="mt-7">
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {site.tagline}
          </p>
        </Reveal>

        <Reveal delay={0.32} className="mt-10">
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <Button asChild size="lg">
              <Link href="#projects">
                View Work
                <ArrowUpRight aria-hidden />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={site.resume} download>
                <FileText aria-hidden />
                Download Resume
              </a>
            </Button>
            <Button asChild size="lg" variant="ghost">
              <Link href="#contact">Get in touch</Link>
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.4} className="mt-12">
          <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
            <MapPin aria-hidden className="size-3.5" />
            {site.location}
            <span aria-hidden className="mx-1 text-border">
              /
            </span>
            <span>Open to conversations</span>
          </div>
        </Reveal>
      </div>

      {/* Scroll cue */}
      <Reveal
        delay={0.6}
        className="pointer-events-none absolute inset-x-0 bottom-8 hidden justify-center sm:flex"
      >
        <span className="flex flex-col items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground/60">
          Scroll
          <ArrowDown
            aria-hidden
            className="size-3.5 animate-bounce motion-reduce:animate-none"
          />
        </span>
      </Reveal>
    </section>
  );
}
