export const site = {
  name: "Bijit Sahu",
  role: "Senior Software Engineer @ Rakuten Symphony",
  // One-line value proposition shown under the hero headline.
  tagline:
    "I build AI-powered, observable backend systems — from RAG platforms on Spring Boot to automated root-cause analysis for distributed services.",
  description:
    "Bijit Sahu — Senior Software Engineer at Rakuten Symphony. Backend & AI engineer with 3+ years building distributed systems, observability platforms, and LLM / RAG applications with Java, Spring Boot, and Kafka.",
  url: "https://next-js-portfolio-sigma-woad.vercel.app",
  email: "bijit01012000@gmail.com",
  github: "https://github.com/bijit01012000",
  linkedin: "https://www.linkedin.com/in/bijit-sahu-2435211a5/",
  resume: "/resume.pdf",
  location: "India",
} as const;

/** Rotating roles in the hero, mirroring the resume headline: "Backend & AI Engineer | Distributed Systems | LLM / RAG | Observability". */
export const roles = [
  "Backend & AI Engineer",
  "Distributed Systems Engineer",
  "LLM / RAG Engineer",
  "Observability Engineer",
] as const;

export const navLinks = [
  { title: "About", href: "#about" },
  { title: "Experience", href: "#experience" },
  { title: "Projects", href: "#projects" },
  { title: "Skills", href: "#skills" },
  { title: "Contact", href: "#contact" },
] as const;
