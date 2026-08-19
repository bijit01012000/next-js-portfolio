import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Generated at build time rather than shipped as a binary, so it stays in sync
 * with src/lib/site.ts. Uses only system fonts — no network fetch, so the
 * build cannot fail on a font CDN being unreachable.
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0a0a0b",
          padding: "72px",
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        {/* Accent glow */}
        <div
          style={{
            position: "absolute",
            top: -240,
            left: 200,
            width: 900,
            height: 600,
            background:
              "radial-gradient(ellipse at center, rgba(16,185,129,0.30), rgba(16,185,129,0) 70%)",
            display: "flex",
          }}
        />

        {/* Top rule */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 26,
            color: "#10b981",
            letterSpacing: 4,
          }}
        >
          <div style={{ width: 44, height: 3, background: "#10b981", display: "flex" }} />
          {site.role.toUpperCase()}
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 116,
              fontWeight: 700,
              color: "#fafafa",
              letterSpacing: -4,
              lineHeight: 1,
              display: "flex",
            }}
          >
            {site.name}
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 32,
              color: "#8b8b94",
              lineHeight: 1.4,
              maxWidth: 900,
              display: "flex",
            }}
          >
            Backend · GenAI · Observability
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 24,
            color: "#8b8b94",
          }}
        >
          <div style={{ display: "flex" }}>Java · Spring Boot · RAG · Distributed Tracing</div>
          <div style={{ display: "flex", color: "#10b981" }}>
            {site.url.replace("https://", "")}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
