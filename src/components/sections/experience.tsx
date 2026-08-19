import type { ReactNode } from "react";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/ui/section-heading";
import { experience } from "@/lib/content/experience";

/**
 * Renders **bold** spans in a highlight string. Deliberately minimal — this
 * only needs to handle the one emphasis marker used in the content file, and
 * avoids pulling a markdown parser into the bundle for it.
 */
function emphasise(text: string): ReactNode[] {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={i} className="font-medium text-foreground">
        {part.slice(2, -2)}
      </strong>
    ) : (
      <span key={i}>{part}</span>
    ),
  );
}

export function Experience() {
  return (
    <section id="experience" className="relative px-5 py-24 sm:px-8 sm:py-32">
      {/* Soft accent wash behind the timeline */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-1/4 -z-10 h-96 blur-[120px]"
        style={{
          background:
            "radial-gradient(ellipse 50% 100% at 20% 50%, var(--glow-a), transparent 70%)",
        }}
      />

      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've been building."
        />

        <div className="relative mt-16">
          {/* Timeline rail — hidden on mobile, where cards stack full-width */}
          <div
            aria-hidden
            className="absolute left-[7px] top-2 hidden h-full w-px bg-gradient-to-b from-primary/50 via-border to-transparent sm:block"
          />

          <RevealGroup as="ul" className="flex flex-col gap-12" stagger={0.12}>
            {experience.map((job) => (
              <RevealItem as="li" key={job.company} className="relative sm:pl-12">
                {/* Node */}
                <span
                  aria-hidden
                  className="absolute left-0 top-1.5 hidden size-[15px] place-items-center rounded-full border-2 border-background bg-border sm:grid"
                >
                  {job.current ? (
                    <>
                      <span className="absolute size-full animate-ping rounded-full bg-primary/50 motion-reduce:animate-none" />
                      <span className="relative size-full rounded-full bg-primary" />
                    </>
                  ) : null}
                </span>

                <article className="group rounded-2xl border border-border bg-card/40 p-6 transition-all duration-300 hover:border-primary/30 hover:bg-card sm:p-7">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2">
                    <div>
                      <h3 className="font-display text-xl font-semibold sm:text-2xl">
                        {job.role}
                      </h3>
                      <p className="mt-1 flex flex-wrap items-baseline gap-x-2 text-sm">
                        <span className="font-medium text-primary">
                          {job.company}
                        </span>
                        {job.companyNote ? (
                          <span className="text-muted-foreground">
                            ({job.companyNote})
                          </span>
                        ) : null}
                      </p>
                    </div>

                    <Badge variant={job.current ? "accent" : "default"}>
                      {job.start} — {job.end}
                    </Badge>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {job.summary}
                  </p>

                  {job.highlights.length > 0 ? (
                    <ul className="mt-5 flex flex-col gap-3">
                      {job.highlights.map((h, i) => (
                        <li
                          key={i}
                          className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                        >
                          <span
                            aria-hidden
                            className="mt-2 size-1.5 shrink-0 rounded-full bg-primary/60"
                          />
                          <span>{emphasise(h)}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  {job.draft ? (
                    <p className="mt-5 rounded-lg border border-dashed border-primary/40 bg-primary/5 px-4 py-3 font-mono text-xs text-muted-foreground">
                      ⚠ Placeholder — awaiting real highlights and dates. Must
                      be filled in before deploy.
                    </p>
                  ) : null}

                  <ul className="mt-6 flex flex-wrap gap-1.5">
                    {job.stack.map((tech) => (
                      <li key={tech}>
                        <Badge>{tech}</Badge>
                      </li>
                    ))}
                  </ul>
                </article>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        <Reveal className="mt-12">
          <p className="font-mono text-xs text-muted-foreground">
            B.Tech, National Institute of Technology Rourkela
          </p>
        </Reveal>
      </div>
    </section>
  );
}
