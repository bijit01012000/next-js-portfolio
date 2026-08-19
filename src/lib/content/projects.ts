export type ProjectService = {
  name: string;
  detail: string;
};

export type Project = {
  slug: string;
  title: string;
  /** One-line positioning, shown under the title. */
  tagline: string;
  description: string;
  stack: string[];
  image?: string;
  repo?: string;
  demo?: string;
  year?: string;
  /** Featured projects render as a full case-study panel. */
  featured?: boolean;
  /** Service breakdown, featured projects only. */
  services?: ProjectService[];
  /** The engineering-judgement talking point. */
  decision?: { title: string; body: string };
  /** Set while awaiting real content — rendered with a visible notice. */
  draft?: boolean;
  /** Descriptions inferred from repo names — user should confirm wording. */
  needsReview?: boolean;
};

export const projects: Project[] = [
  {
    slug: "tixolve",
    title: "Tixolve",
    tagline: "AI knowledge & support platform",
    description:
      "A retrieval-augmented support platform built as six independently deployable services. Users ask questions in natural language; the system retrieves from an indexed knowledge corpus, answers with an LLM, and escalates to a tracked ticket when it can't.",
    featured: true,
    year: "2025",
    stack: [
      "Java",
      "Spring Boot",
      "Spring Cloud Gateway",
      "Keycloak",
      "PostgreSQL",
      "pgvector",
      "Kafka",
      "Ollama",
      "React",
      "TypeScript",
      "Material UI",
      "TanStack Query",
      "Docker Compose",
      "AWS ECS Fargate",
      "GitHub Actions",
    ],
    services: [
      {
        name: "api-gateway",
        detail: "Spring Cloud Gateway — routing, and the single public entry point",
      },
      {
        name: "auth-service",
        detail: "Keycloak-backed identity, tokens and role enforcement",
      },
      {
        name: "knowledge-service",
        detail: "Document ingest and vector search over pgvector",
      },
      {
        name: "chat-service",
        detail: "Retrieval + LLM inference, grounded in the knowledge corpus",
      },
      {
        name: "ticket-service",
        detail: "Kafka-driven ticket lifecycle for escalated conversations",
      },
      {
        name: "notification-service",
        detail: "Async delivery of ticket and conversation events",
      },
    ],
    decision: {
      title: "Why pgvector, not a dedicated vector database",
      body: "The obvious move was a purpose-built vector store. At this corpus size it would have meant a second system to run, sync and reason about consistency across — for retrieval quality that pgvector already delivered. Keeping embeddings in PostgreSQL next to the relational data meant one backup story, one connection pool, and transactional writes across documents and their embeddings. It's a decision worth revisiting at an order of magnitude more data; it wasn't worth paying for up front.",
    },
  },
  {
    slug: "note-maxxer",
    title: "note-maxxer",
    tagline: "Awaiting description",
    description: "",
    stack: [],
    draft: true,
  },
  {
    slug: "job-tracker",
    title: "Job Tracking App",
    tagline: "Full-stack application tracker",
    description:
      "A MERN application for tracking job applications through their stages, with authentication and per-user persistence.",
    stack: ["MongoDB", "Express", "React", "Node.js", "JWT"],
    image: "/images/projects/jobTrackingApp.png",
    repo: "https://github.com/bijit01012000/jobTrackerV1-prod",
    demo: "https://jobtrackerversion1.onrender.com/login",
    needsReview: true,
  },
  {
    slug: "ecommerce",
    title: "E-Commerce Platform",
    tagline: "MERN storefront & cart",
    description:
      "A full-stack storefront covering product listing, cart state and the checkout flow, built on the MERN stack.",
    stack: ["MongoDB", "Express", "React", "Node.js", "Redux"],
    image: "/images/projects/ecommerce.png",
    repo: "https://github.com/bijit01012000/E-commerce-mern",
    needsReview: true,
  },
  {
    slug: "openai-api",
    title: "OpenAI API Playground",
    tagline: "LLM API experiments",
    description:
      "An early exploration of LLM APIs — prompt handling, streamed responses and rendering model output in a React client.",
    stack: ["React", "Node.js", "OpenAI API"],
    image: "/images/projects/openAI.png",
    repo: "https://github.com/bijit01012000/OpenAI-API",
    needsReview: true,
  },
  {
    slug: "github-user",
    title: "GitHub User Explorer",
    tagline: "Auth & GitHub API client",
    description:
      "A React client over the GitHub API with authentication and CRUD operations, visualising user and repository data.",
    stack: ["React", "GitHub API", "Auth0", "Styled Components"],
    image: "/images/projects/githubUser.png",
    repo: "https://github.com/bijit01012000/Github-User",
    needsReview: true,
  },
];

export const featuredProjects = projects.filter((p) => p.featured || p.draft);
export const otherProjects = projects.filter((p) => !p.featured && !p.draft);
