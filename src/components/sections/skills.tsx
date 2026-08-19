import { RevealGroup, RevealItem } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/ui/section-heading";
import { skillGroups } from "@/lib/content/skills";
import { cn } from "@/lib/utils";

export function Skills() {
  return (
    <section id="skills" className="relative px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Skills"
          title="The toolkit, grouped by how I actually use it."
        />

        <RevealGroup
          as="ul"
          stagger={0.07}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {skillGroups.map((group) => (
            <RevealItem as="li" key={group.title} className="h-full">
              <div
                className={cn(
                  "flex h-full flex-col rounded-xl border bg-card/40 p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-card motion-reduce:hover:translate-y-0",
                  group.accent
                    ? "border-primary/25 hover:border-primary/50"
                    : "border-border hover:border-primary/30",
                )}
              >
                <h3
                  className={cn(
                    "font-mono text-[11px] uppercase tracking-[0.18em]",
                    group.accent ? "text-primary" : "text-muted-foreground",
                  )}
                >
                  {group.title}
                </h3>

                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {group.skills.map((skill) => (
                    <li key={skill}>
                      <Badge variant={group.accent ? "accent" : "default"}>
                        {skill}
                      </Badge>
                    </li>
                  ))}
                </ul>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
