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
      "RAG Pipelines",
      "Vector Search",
      "pgvector",
      "Embeddings",
      "LLM Orchestration",
      "Ollama",
      "OpenAI API",
      "Prompt Engineering",
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
      "OpenTelemetry",
      "Anomaly Detection",
      "Root Cause Analysis",
      "Service Mesh",
      "Metrics & Alarms",
    ],
  },
  {
    title: "Languages",
    skills: ["Java", "TypeScript", "JavaScript", "SQL", "C++", "Python"],
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
      "MongoDB",
      "Docker",
      "Docker Compose",
      "Kubernetes",
      "AWS ECS Fargate",
      "GitHub Actions",
      "CI/CD",
      "Git",
    ],
  },
];
