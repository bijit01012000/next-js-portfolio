import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, FileText, MapPin } from "lucide-react";
import { ParticleField } from "@/components/hero/particle-field";
import { RoleRotator } from "@/components/hero/role-rotator";
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
        <ParticleField className="absolute inset-0 size-full" />
        <div
          className="absolute -top-40 left-1/2 h-[30rem] w-[52rem] -translate-x-1/2 rounded-full blur-[90px]"
          style={{
            background:
              "radial-gradient(ellipse at center, var(--glow-a), transparent 70%)",
          }}
        />
        <div
          className="absolute -right-40 top-1/3 h-[24rem] w-[24rem] rounded-full blur-[80px]"
          style={{
            background:
              "radial-gradient(circle at center, var(--glow-b), transparent 70%)",
          }}
        />
        <div className="absolute inset-0 grain" />
      </div>

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_auto]">
        <div>
        {/* Availability / role pill */}
        <div className="rise-slide">
          <span className="inline-flex items-center gap-2.5 rounded-full border border-border bg-card/60 px-3.5 py-1.5 font-mono text-xs text-muted-foreground backdrop-blur">
            <span className="relative flex size-1.5">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-70 motion-reduce:animate-none" />
              <span className="relative inline-flex size-1.5 rounded-full bg-primary" />
            </span>
            {site.role}
          </span>
        </div>

        <div className="rise-slide mt-7">
          <h1 className="font-display text-[clamp(2.5rem,9vw,5.5rem)] font-bold leading-[0.95] tracking-tight">
            <span className="block text-muted-foreground/70 text-[0.42em] font-medium tracking-[0.2em] uppercase mb-4">
              Hello, I&apos;m
            </span>
            <span className="text-gradient">{site.name}</span>
          </h1>
        </div>

        {/* Rotating role line */}
        <div className="rise mt-5" style={{ "--rise-delay": "160ms" } as CSSProperties}>
          <p className="flex items-baseline gap-x-3 font-mono text-base text-foreground sm:text-xl md:text-2xl">
            <span aria-hidden className="text-primary">
              &gt;
            </span>
            <RoleRotator roles={roles} className="text-primary" />
          </p>
        </div>

        <div className="rise mt-7" style={{ "--rise-delay": "240ms" } as CSSProperties}>
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {site.tagline}
          </p>
        </div>

        <div className="rise mt-10" style={{ "--rise-delay": "320ms" } as CSSProperties}>
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
        </div>

        <div className="rise mt-12" style={{ "--rise-delay": "400ms" } as CSSProperties}>
          <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
            <MapPin aria-hidden className="size-3.5" />
            {site.location}
            <span aria-hidden className="mx-1 text-border">
              /
            </span>
            <span>Open to conversations</span>
          </div>
        </div>
        </div>

        {/* Portrait. Framed rather than dropped in raw, so the illustration
            reads as part of the palette instead of pasted on top of it. */}
        <div
          className="rise-slide relative hidden justify-self-center md:block"
          style={{ "--rise-delay": "200ms" } as CSSProperties}
        >
          <div className="relative grid size-[300px] place-items-center lg:size-[380px]">
            {/* Accent wash behind the figure */}
            <div
              aria-hidden
              className="absolute inset-0 rounded-full blur-2xl"
              style={{
                background:
                  "radial-gradient(circle at 50% 55%, var(--glow-a), transparent 68%)",
              }}
            />
            {/* Containing ring */}
            <div
              aria-hidden
              className="absolute inset-0 rounded-full border border-primary/15 bg-card/20 backdrop-blur-[2px]"
            />
            <div
              aria-hidden
              className="absolute inset-6 rounded-full border border-border/60"
            />

            <Image
              src="/images/heroImage.png"
              alt="Illustration of Bijit at a laptop"
              width={334}
              height={360}
              priority
              sizes="(max-width: 1024px) 300px, 380px"
              className="float-y relative w-[74%] drop-shadow-[0_18px_36px_rgba(0,0,0,0.45)] motion-reduce:animate-none"
            />
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div
        className="rise pointer-events-none absolute inset-x-0 bottom-8 hidden justify-center sm:flex"
        style={{ "--rise-delay": "600ms" } as CSSProperties}
      >
        <span className="flex flex-col items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground/60">
          Scroll
          <ArrowDown
            aria-hidden
            className="size-3.5 animate-bounce motion-reduce:animate-none"
          />
        </span>
      </div>
    </section>
  );
}
