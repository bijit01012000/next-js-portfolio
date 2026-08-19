import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { FeaturedProject } from "@/components/projects/featured-project";
import { ProjectCard } from "@/components/projects/project-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { featuredProjects, otherProjects } from "@/lib/content/projects";

export function Projects() {
  return (
    <section id="projects" className="relative px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Projects"
          title="Systems I've designed and shipped."
          description="Fewer, deeper. Each one is here because there was a decision worth defending, not just code worth writing."
        />

        <div className="mt-14 flex flex-col gap-8">
          {featuredProjects.map((project) => (
            <Reveal key={project.slug} y={32}>
              <FeaturedProject project={project} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-20">
          <h3 className="font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">
            Earlier work
          </h3>
        </Reveal>

        <RevealGroup
          as="ul"
          stagger={0.07}
          className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {otherProjects.map((project) => (
            <RevealItem as="li" key={project.slug} className="h-full">
              <ProjectCard project={project} />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
