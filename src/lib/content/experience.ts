export type Experience = {
  company: string;
  /** Shown under the company name, e.g. a former parent brand. */
  companyNote?: string;
  role: string;
  start: string;
  end: string | "Present";
  location?: string;
  /** Lead sentence describing the surface area of the role. */
  summary: string;
  highlights: string[];
  stack: string[];
  current?: boolean;
};

export const experience: Experience[] = [
  {
    company: "Rakuten Symphony",
    role: "Senior Software Engineer",
    start: "Oct 2025",
    end: "Present",
    current: true,
    summary:
      "Building the application observability platform — a React frontend over a Java and Spring Boot backend — that telecom operations teams use to understand why distributed services fail.",
    highlights: [
      "Built **Auto RCA**, an LLM-powered pipeline that gathers alarms, logs, metrics, pod state and service topology, then posts a cited first diagnosis to the incident ticket — cutting **time to first diagnosis from 90–120 minutes to 15–30 minutes**.",
      "Handles tickets with **1,000+ alarms** by grouping near-duplicates into up to **20 investigated clusters**; under load, **10 concurrent workers** process 50 tickets in **~23 minutes** — ~36% faster than sequential.",
      "Hardened answer reliability with **structured outputs**, a **NO_DATA refusal path**, per-answer scope lines and stored prompts for auditability — in review, **7 of 9** initial diagnoses were usable (5 exact, 2 partial), with the misses driving the next prompt and guardrail iteration.",
      "Replaced static thresholds with a staged **anomaly detection** pipeline — STL/MAD seasonality-aware baselines, cross-signal correlation, statistical filtering and Mahalanobis verification — compressing ~900 raw flags into **2–3 verified alarms every 15 minutes (~300× noise reduction)**, with **100% recall** across 60 injected faults and zero false positives.",
      "Built **trace exploration APIs** over OpenTelemetry-instrumented data, turning a single trace ID into a waterfall across **10–15 microservices** — one lookup replaces cross-team log correlation.",
    ],
    stack: [
      "Java",
      "Spring Boot",
      "React",
      "TypeScript",
      "Kafka",
      "OpenTelemetry",
      "Prometheus",
      "Elasticsearch",
      "Kubernetes",
    ],
  },
  {
    company: "Candescent",
    companyNote: "previously part of NCR Corporation",
    role: "Software Engineer 1",
    start: "Jul 2023",
    end: "Oct 2025",
    summary:
      "Digital banking platform work across frontend and backend, focused on the testing and certification pipeline behind products shipped to banks in the US and Europe.",
    highlights: [
      "Engineered **iSAT**, a testing platform managing over **10,000 testing parameters** and business attributes, cutting testing process time by **90%** through automation.",
      "Delivered three modules — **Archives** (centralized parameter management replacing Excel), **Orchestrator** (VM parameter injection and automation via shell scripts) and **Analytics** (job status, execution progress, reporting).",
      "Built a **real-time analytics dashboard** visualising key execution metrics, reducing manual reporting effort by **70%** across stakeholders.",
      "Cut **CAB testing from a month to 3–4 days**, accelerating certification for digital banking solutions used by **500+ banks** across the US and Europe.",
    ],
    stack: [
      "React",
      "Spring Boot",
      "Node.js",
      "MySQL",
      "MongoDB",
      "JWT Auth",
      "Azure VMs",
    ],
  },
];

/** Shown beneath the timeline. */
export const education = {
  institution: "National Institute of Technology, Rourkela",
  degree: "B.Tech + M.Tech (Dual Degree)",
  period: "2018 – 2023",
  detail: "CGPA 8.05 / 10",
};

export const awards = [
  "800+ algorithm & data structure problems — LeetCode, CodeChef, HackerRank",
  "LeetCode rating 1710+ — top 14% globally",
  "CodeChef 4★",
  "575th — Google Kick Start 2020",
];
