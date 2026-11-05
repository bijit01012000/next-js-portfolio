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
      "Hybrid Search",
      "LLM Integration",
      "Vector Search",
      "pgvector",
      "Agentic AI",
      "MCP Servers",
      "Spring AI",
      "Prompt Engineering",
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
      "Event-Driven Architecture",
      "System Design",
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
      "OpenTelemetry",
      "Prometheus",
      "Service Mesh",
      "Anomaly Detection",
      "Root Cause Analysis",
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
      "Elasticsearch",
      "Docker",
      "Kubernetes",
      "AWS ECS Fargate",
      "Azure VMs",
      "GitHub Actions",
      "CI/CD",
    ],
  },
];
