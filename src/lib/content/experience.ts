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
    role: "Software Development Engineer 2",
    start: "Oct 2025",
    end: "Present",
    current: true,
    summary:
      "Building the application observability platform — a React frontend over a Java and Spring Boot backend — that telecom operations teams use to understand why distributed services fail.",
    highlights: [
      "Built **Auto RCA**, correlating logs, alarms, metrics, traces and service-dependency relationships to surface probable root causes automatically, replacing manual cross-signal investigation during incidents.",
      "Instrumented **distributed tracing and service-mesh telemetry pipelines**, cutting **mean-time-to-detect by ~35%** for production incidents.",
      "Reworked **alert correlation logic**, cutting noisy and duplicate alerts by **~40%** and materially reducing on-call triage load.",
      "Implemented **anomaly detection with upper-bound visualization**, so operators see at a glance when a metric breaches its expected envelope rather than reading raw time series.",
      "Led **cross-team standardization of log and impact-data formats**, so signals from independently-owned services became correlatable — the prerequisite that made Auto RCA viable at all.",
    ],
    stack: [
      "Java",
      "Spring Boot",
      "React",
      "TypeScript",
      "Kafka",
      "Jaeger",
      "Distributed Tracing",
      "Service Mesh",
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
  {
    company: "Sezzle India",
    companyNote: "remote",
    role: "Frontend Developer Intern",
    start: "Jun 2022",
    end: "Jul 2022",
    summary:
      "Frontend work on a buy-now-pay-later platform during a summer internship.",
    highlights: [
      "Contributed to **migrating the codebase to ES6 JavaScript**, modernising the platform and improving code consistency.",
      "Implemented the **Payment and Address page frontends**, with a focus on responsiveness across screen sizes.",
    ],
    stack: ["React", "JavaScript (ES6)", "Styled Components"],
  },
];

/** Shown beneath the timeline. */
export const education = {
  institution: "National Institute of Technology, Rourkela",
  degree: "B.Tech, Metallurgy & Materials Engineering",
  period: "2018 – 2023",
  detail: "CGPA 8.05 / 10",
};

export const awards = [
  "575th — Google Kick Start 2020",
  "Teaching Assistant, Coding Ninjas",
  "ML & Deep Learning Specialization — Coursera",
  "Full Stack Web Development Bootcamp — Udacity",
];
