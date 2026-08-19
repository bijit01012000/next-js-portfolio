import { ArrowUpRight, Lightbulb } from "lucide-react";
import { GitHubIcon } from "@/components/icons/brand";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Project } from "@/lib/content/projects";

export function FeaturedProject({ project }: { project: Project }) {
  if (project.draft) {
    return (
      <article className="rounded-2xl border border-dashed border-primary/40 bg-primary/5 p-8">
        <h3 className="font-display text-2xl font-semibold">{project.title}</h3>
        <p className="mt-3 max-w-lg font-mono text-xs leading-relaxed text-muted-foreground">
          ⚠ Placeholder — awaiting a description, stack and architectural
          talking point. Must be filled in before deploy.
        </p>
      </article>
    );
  }

  return (
    <article className="glow-ring relative overflow-hidden rounded-2xl border border-border bg-card/50 transition-colors duration-300 hover:bg-card">
      <div className="grid gap-0 lg:grid-cols-[1.15fr_1fr]">
        {/* Narrative column */}
        <div className="flex flex-col p-7 sm:p-9">
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="accent">Featured</Badge>
            {project.year ? <Badge>{project.year}</Badge> : null}
          </div>

          <h3 className="mt-5 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            {project.title}
          </h3>
          <p className="mt-1.5 font-mono text-sm text-primary">
            {project.tagline}
          </p>

          <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
            {project.description}
          </p>

          {project.decision ? (
            <div className="mt-7 rounded-xl border border-primary/20 bg-primary/[0.04] p-5">
              <h4 className="flex items-start gap-2.5 font-display text-sm font-semibold">
                <Lightbulb
                  aria-hidden
                  className="mt-px size-4 shrink-0 text-primary"
                />
                {project.decision.title}
              </h4>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                {project.decision.body}
              </p>
            </div>
          ) : null}

          <ul className="mt-7 flex flex-wrap gap-1.5">
            {project.stack.map((tech) => (
              <li key={tech}>
                <Badge>{tech}</Badge>
              </li>
            ))}
          </ul>

          {project.repo || project.demo ? (
            <div className="mt-7 flex flex-wrap gap-2.5">
              {project.repo ? (
                <Button asChild variant="outline" size="sm">
                  <a href={project.repo} target="_blank" rel="noreferrer">
                    <GitHubIcon className="size-4" />
                    Source
                  </a>
                </Button>
              ) : null}
              {project.demo ? (
                <Button asChild size="sm">
                  <a href={project.demo} target="_blank" rel="noreferrer">
                    Live demo
                    <ArrowUpRight aria-hidden />
                  </a>
                </Button>
              ) : null}
            </div>
          ) : null}
        </div>

        {/* Architecture column — the services list doubles as a diagram */}
        {project.services ? (
          <div className="relative border-t border-border bg-background/40 p-7 sm:p-9 lg:border-l lg:border-t-0">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 grid-bg opacity-60"
            />
            <h4 className="relative font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              Architecture — {project.servicesLabel ?? `${project.services.length} components`}
            </h4>

            <ul className="relative mt-5 flex flex-col gap-px">
              {project.services.map((service, i) => (
                <li key={service.name} className="group/svc relative flex gap-3.5">
                  {/* Connector rail */}
                  <div className="flex flex-col items-center">
                    <span className="grid size-6 shrink-0 place-items-center rounded-md border border-primary/30 bg-primary/10 font-mono text-[10px] text-primary">
                      {i + 1}
                    </span>
                    {i < project.services!.length - 1 ? (
                      <span
                        aria-hidden
                        className="w-px flex-1 bg-gradient-to-b from-primary/30 to-border"
                      />
                    ) : null}
                  </div>

                  <div className="pb-5">
                    <p className="font-mono text-[13px] text-foreground transition-colors group-hover/svc:text-primary">
                      {service.name}
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                      {service.detail}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </article>
  );
}
