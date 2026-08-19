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
  /** Set while awaiting real content — rendered with a visible notice. */
  draft?: boolean;
};

export const experience: Experience[] = [
  {
    company: "Rakuten Symphony",
    role: "Software Development Engineer 2",
    start: "Oct 2025",
    end: "Present",
    current: true,
    summary:
      "Building the application observability stack — a React frontend over a Java/Spring Boot backend — that telecom operations teams use to understand why distributed services fail.",
    highlights: [
      "Built **Auto RCA**, which correlates logs, alarms, metrics, traces and service-dependency relationships to surface probable root causes automatically, replacing manual cross-signal investigation during incidents.",
      "Implemented **anomaly detection with upper-bound visualization**, so operators can see at a glance when a metric breaches its expected envelope rather than reading raw time series.",
      "Instrumented **distributed tracing with Jaeger** and extended observability to the **service-mesh layer**, making cross-service latency and failure propagation visible end to end.",
      "Led **cross-team coordination to standardize log and impact-data formats**, so signals from independently-owned services became correlatable — the prerequisite that made Auto RCA viable at all.",
    ],
    stack: [
      "Java",
      "Spring Boot",
      "React",
      "TypeScript",
      "Jaeger",
      "OpenTelemetry",
      "Service Mesh",
      "Kubernetes",
    ],
  },
  {
    company: "Candescent",
    companyNote: "formerly part of NCR Corporation",
    role: "Frontend / Full-Stack Engineer",
    // TODO(bijit): confirm dates before deploy.
    start: "TBC",
    end: "Sep 2025",
    draft: true,
    summary:
      "Digital banking platform work across frontend and full-stack delivery.",
    highlights: [],
    stack: ["React", "JavaScript", "Node.js"],
  },
];
