import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { GitHubIcon } from "@/components/icons/brand";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/lib/content/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card/40 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-card hover:shadow-[0_16px_48px_-24px_var(--primary)] motion-reduce:hover:translate-y-0">
      {project.image ? (
        <div className="relative aspect-16/10 overflow-hidden border-b border-border bg-secondary/30">
          <Image
            src={project.image}
            alt={`${project.title} screenshot`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04] motion-reduce:group-hover:scale-100"
          />
          {/* Fade so the screenshot never fights the card text */}
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-50"
          />
        </div>
      ) : null}

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-display text-lg font-semibold transition-colors group-hover:text-primary">
              {project.title}
            </h3>
            <p className="mt-0.5 font-mono text-[11px] text-muted-foreground">
              {project.tagline}
            </p>
          </div>

          <div className="flex shrink-0 gap-1">
            {project.repo ? (
              <a
                href={project.repo}
                target="_blank"
                rel="noreferrer"
                aria-label={`${project.title} source on GitHub`}
                className="grid size-8 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
              >
                <GitHubIcon className="size-3.5" />
              </a>
            ) : null}
            {project.demo ? (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                aria-label={`${project.title} live demo`}
                className="grid size-8 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
              >
                <ArrowUpRight aria-hidden className="size-4" />
              </a>
            ) : null}
          </div>
        </div>

        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        <ul className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <li key={tech}>
              <Badge size="sm">{tech}</Badge>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
