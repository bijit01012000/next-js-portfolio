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
  /** Component breakdown, featured projects only. */
  services?: ProjectService[];
  /** Label for the architecture column, e.g. "6 services" or "pipeline". */
  servicesLabel?: string;
  /** The engineering-judgement talking point. */
  decision?: { title: string; body: string };
  /** Set while awaiting real content — rendered with a visible notice. */
  draft?: boolean;
  /** Descriptions inferred from repo names — user should confirm wording. */
  needsReview?: boolean;
  /** Recent//stronger work: rendered with an accent border in the grid. */
  accent?: boolean;
};

export const projects: Project[] = [
  {
    slug: "tixolve",
    title: "Tixolve",
    tagline: "AI knowledge & support platform",
    description:
      "An enterprise knowledge and support platform built as six independently deployable services. Users ask questions in natural language; the system retrieves semantically from an indexed corpus, answers with an LLM, and escalates to a tracked ticket when it can't — with Redis caching responses and Kafka driving the ticket workflow.",
    featured: true,
    year: "Aug 2025 — Present",
    stack: [
      "Java 21",
      "Spring Boot",
      "Spring Cloud Gateway",
      "Keycloak",
      "PostgreSQL",
      "pgvector",
      "Kafka",
      "Redis",
      "Ollama",
      "React",
      "TypeScript",
      "Material UI",
      "TanStack Query",
      "Docker Compose",
      "AWS ECS Fargate",
      "GitHub Actions",
    ],
    servicesLabel: "6 services",
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
    tagline: "AI interview-prep companion",
    description:
      "A spaced-repetition system that turns raw study material into compressed revision notes. Paste an article, URL, screenshot or YouTube link; Claude compresses it into a prioritised bullet note — with a Mermaid diagram when one genuinely aids recall — which then enters a Leitner review schedule. The full source is kept verbatim so any note can be drilled back down to its original context.",
    featured: true,
    year: "2026",
    servicesLabel: "pipeline",
    services: [
      {
        name: "ingest",
        detail: "Text, URL (Jsoup), image, and YouTube transcript extraction",
      },
      {
        name: "generate",
        detail: "Shared preamble + per-topic prompt assembled at request time",
      },
      {
        name: "review",
        detail: "Draft returned for edit before it is ever persisted",
      },
      {
        name: "schedule",
        detail: "Leitner boxes 1–5 with interval-based next-review dates",
      },
      {
        name: "deep-dive",
        detail: "Cached AI expansion over the retained verbatim source",
      },
    ],
    decision: {
      title: "Prompts as data, not code",
      body: "The obvious build is a category enum and a switch over hardcoded prompt strings. That makes every new topic a code change and a redeploy, and quietly pushes every topic toward one generic prompt. Instead topics are a first-class table, each owning its own prompt template, editable at runtime — a good DSA note needs a recognition trigger, a good HLD note needs trade-offs, and those are different instructions, not one template with a noun swapped. The same reasoning put note generation behind a NoteGenerationProvider interface with a stable JSON contract, so swapping Anthropic for OpenAI is a config property rather than a rewrite.",
    },
    stack: [
      "Java",
      "Spring Boot",
      "Spring Data JPA",
      "PostgreSQL",
      "Flyway",
      "Anthropic API",
      "Jsoup",
      "React",
      "Tailwind CSS",
      "Mermaid",
      "Docker Compose",
    ],
  },
  {
    slug: "travelmate-ai",
    title: "TravelMate AI",
    tagline: "LLM itinerary generator",
    description:
      "A full-stack Next.js application that generates personalised city tour itineraries from user preferences via the OpenAI API, with a chatbot surfacing real-time tour recommendations. Reached 50+ users in its first month.",
    stack: [
      "Next.js 14",
      "TypeScript",
      "React Query",
      "Tailwind CSS",
      "OpenAI API",
      "Clerk",
      "Prisma",
    ],
    year: "2024",
    accent: true,
    needsReview: true,
  },
  {
    slug: "job-tracker-v2",
    title: "Job Tracker V2",
    tagline: "Application tracker, rebuilt",
    description:
      "A rebuild of the original tracker on Next.js 14, with authentication and profile customisation via Clerk and Prisma-backed persistence. Handles 200+ tracked applications across breakpoints.",
    stack: ["Next.js 14", "TypeScript", "Tailwind CSS", "Clerk", "Prisma"],
    year: "2025",
    accent: true,
    needsReview: true,
  },
  {
    slug: "job-tracker",
    title: "Job Tracker V1",
    tagline: "Original MERN tracker",
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
