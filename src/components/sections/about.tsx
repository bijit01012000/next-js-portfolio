import { Activity, Boxes, Brain, GitBranch } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const focusAreas = [
  {
    icon: Brain,
    title: "Applied GenAI",
    body: "RAG pipelines, retrieval quality, and knowing when a vector database is genuinely warranted versus when pgvector alongside your primary store is the better call.",
  },
  {
    icon: Activity,
    title: "Observability",
    body: "Distributed tracing, anomaly detection, and automated root-cause analysis — making failure in a distributed system legible instead of archaeological.",
  },
  {
    icon: Boxes,
    title: "Distributed Backends",
    body: "Java and Spring Boot services, event-driven flows over Kafka, and microservice boundaries drawn around ownership rather than around convenience.",
  },
  {
    icon: GitBranch,
    title: "AI-Assisted Engineering",
    body: "Using LLM tooling as real leverage in day-to-day delivery — scaffolding, review, and exploration — without outsourcing the architectural judgement.",
  },
];

export function About() {
  return (
    <section id="about" className="relative px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="About"
          title="Engineer across the stack, anchored in the backend."
        />

        <div className="mt-14 grid gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-20">
          <div className="flex flex-col gap-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <Reveal>
              <p>
                I started out building interfaces, and that grounding still
                shows — I care about how a system feels to use. But the problems
                that hold my attention now sit further down: how services fail,
                how you find out why, and how you get an answer before a customer
                does.
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <p>
                At{" "}
                <strong className="font-medium text-foreground">
                  Rakuten Symphony
                </strong>{" "}
                I work on the application observability stack — a React frontend
                over a Java and Spring Boot backend. The work I&apos;m proudest
                of is{" "}
                <strong className="font-medium text-foreground">Auto RCA</strong>
                : correlating logs, alarms, metrics, traces and service
                relationships so root cause surfaces on its own rather than
                being reconstructed by hand at 2am.
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <p>
                The hardest part of that turned out not to be the algorithm. It
                was getting independently-owned teams to agree on how logs and
                impact data should be shaped, because correlation is worthless
                if the signals don&apos;t line up. I led that standardization
                effort, and it&apos;s the piece that made everything else
                possible.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <p>
                Outside of work I build AI systems end to end — most recently{" "}
                <strong className="font-medium text-foreground">Tixolve</strong>,
                a six-service RAG and support platform. I&apos;m drawn to the
                decisions where the obvious answer is the wrong one at your
                actual scale.
              </p>
            </Reveal>
          </div>

          <RevealGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            {focusAreas.map(({ icon: Icon, title, body }) => (
              <RevealItem
                key={title}
                className="group rounded-xl border border-border bg-card/40 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-card motion-reduce:hover:translate-y-0"
              >
                <Icon
                  aria-hidden
                  className="size-5 text-primary transition-transform duration-300 group-hover:scale-110 motion-reduce:group-hover:scale-100"
                />
                <h3 className="mt-3.5 font-display text-base font-semibold">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {body}
                </p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
