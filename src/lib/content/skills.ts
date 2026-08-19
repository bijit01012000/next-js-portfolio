/**
 * Ordered deliberately: AI/LLM and Backend lead, Frontend supports.
 * This mirrors the positioning — the old site read frontend-first.
 */
export type SkillGroup = {
  title: string;
  /** Accented groups lead the section — the positioning signal. */
  accent?: boolean;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "AI / LLM Engineering",
    accent: true,
    skills: [
      "Generative AI",
      "RAG Pipelines",
      "LLM Integration",
      "Vector Search",
      "pgvector",
      "Embeddings",
      "Ollama",
      "OpenAI API",
      "Anthropic API",
      "AI-Assisted Development",
    ],
  },
  {
    title: "Backend",
    accent: true,
    skills: [
      "Java",
      "Spring Boot",
      "Spring Cloud Gateway",
      "Microservices",
      "REST APIs",
      "Kafka",
      "Keycloak",
      "Node.js",
      "Express",
    ],
  },
  {
    title: "Observability",
    accent: true,
    skills: [
      "Distributed Tracing",
      "Jaeger",
      "Service Mesh",
      "Anomaly Detection",
      "Root Cause Analysis",
      "Alert Correlation",
      "Metrics & Alarms",
    ],
  },
  {
    title: "Languages",
    skills: ["Java", "TypeScript", "JavaScript", "SQL", "C++"],
  },
  {
    title: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Redux",
      "TanStack Query",
      "Tailwind CSS",
      "Material UI",
    ],
  },
  {
    title: "Data & Infra",
    skills: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Redis",
      "Docker",
      "Kubernetes",
      "AWS ECS Fargate",
      "Azure VMs",
      "GitHub Actions",
      "CI/CD",
    ],
  },
];
