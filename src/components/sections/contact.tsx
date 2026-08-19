import { ArrowUpRight, FileText, Mail } from "lucide-react";
import { CopyEmail } from "@/components/contact/copy-email";
import { GitHubIcon, LinkedInIcon } from "@/components/icons/brand";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { site } from "@/lib/site";

const links = [
  {
    label: "LinkedIn",
    value: "in/bijit-sahu",
    href: site.linkedin,
    icon: LinkedInIcon,
  },
  {
    label: "GitHub",
    value: "@bijit01012000",
    href: site.github,
    icon: GitHubIcon,
  },
];

export function Contact() {
  return (
    <section id="contact" className="relative px-5 py-24 sm:px-8 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-96 blur-[120px]"
        style={{
          background:
            "radial-gradient(ellipse 60% 100% at 50% 100%, var(--glow-a), transparent 70%)",
        }}
      />

      <div className="mx-auto max-w-4xl">
        <SectionHeading
          align="center"
          eyebrow="Contact"
          title="Let's talk."
          description="I'm open to conversations about backend, GenAI and observability work — or anything where the interesting part is the architecture."
        />

        <Reveal delay={0.18} className="mt-10">
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild size="lg">
              <a href={`mailto:${site.email}`}>
                <Mail aria-hidden />
                Send an email
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={site.resume} download>
                <FileText aria-hidden />
                Download Resume
              </a>
            </Button>
          </div>
        </Reveal>

        <RevealGroup className="mt-12 grid gap-3 sm:grid-cols-2">
          <RevealItem className="sm:col-span-2">
            <CopyEmail email={site.email} />
          </RevealItem>

          {links.map(({ label, value, href, icon: Icon }) => (
            <RevealItem key={label}>
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="group flex h-full items-center justify-between gap-4 rounded-xl border border-border bg-card/40 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-card motion-reduce:hover:translate-y-0"
              >
                <span className="min-w-0">
                  <span className="block font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                    {label}
                  </span>
                  <span className="mt-1 block truncate font-mono text-sm transition-colors group-hover:text-primary">
                    {value}
                  </span>
                </span>
                <span className="grid size-9 shrink-0 place-items-center rounded-full border border-border text-muted-foreground transition-colors group-hover:border-primary/40 group-hover:text-primary">
                  <Icon className="size-4" />
                </span>
              </a>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.1} className="mt-10 text-center">
          <p className="inline-flex items-center gap-2 font-mono text-xs text-muted-foreground">
            Currently at Rakuten Symphony
            <ArrowUpRight aria-hidden className="size-3" />
          </p>
        </Reveal>
      </div>
    </section>
  );
}
