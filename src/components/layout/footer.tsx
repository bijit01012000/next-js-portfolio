import { Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons/brand";
import { site } from "@/lib/site";

const socials = [
  { href: site.github, label: "GitHub", icon: GitHubIcon },
  { href: site.linkedin, label: "LinkedIn", icon: LinkedInIcon },
  { href: `mailto:${site.email}`, label: "Email", icon: Mail },
];

export function Footer() {
  return (
    <footer className="border-t border-border px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 sm:flex-row">
        <p className="font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} {site.name}. Built with Next.js &amp;
          Tailwind.
        </p>

        <ul className="flex items-center gap-1">
          {socials.map(({ href, label, icon: Icon }) => (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
                aria-label={label}
                className="grid size-9 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
              >
                <Icon aria-hidden className="size-4" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
