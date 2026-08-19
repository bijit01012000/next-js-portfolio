export const site = {
  name: "Bijit Sahu",
  role: "SDE 2 @ Rakuten Symphony",
  // One-line value proposition shown under the hero headline.
  tagline:
    "I build AI-powered, observable backend systems — from RAG platforms on Spring Boot to automated root-cause analysis for distributed services.",
  description:
    "Bijit Sahu — SDE 2 at Rakuten Symphony. Full-stack and GenAI engineer building observability platforms, RAG systems, and distributed backends with Java, Spring Boot, and React.",
  url: "https://bijitsahu.vercel.app",
  email: "bijit01012000@gmail.com",
  github: "https://github.com/bijit01012000",
  linkedin: "https://www.linkedin.com/in/bijit-sahu-2435211a5/",
  resume: "/resume.pdf",
  location: "India",
} as const;

/** Rotating roles in the hero. Ordered strongest-signal-first. */
export const roles = [
  "Full-Stack Engineer",
  "Backend Engineer",
  "GenAI Systems Builder",
  "Observability Engineer",
] as const;

export const navLinks = [
  { title: "About", href: "#about" },
  { title: "Experience", href: "#experience" },
  { title: "Projects", href: "#projects" },
  { title: "Skills", href: "#skills" },
  { title: "Contact", href: "#contact" },
] as const;
