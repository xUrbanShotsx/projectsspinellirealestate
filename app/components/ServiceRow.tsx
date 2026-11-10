"use client";

import { useState } from "react";

// 8 rough horizontal strokes in viewBox="0 0 1200 120" to fill the row
const STROKES = [
  "M-5,10 C180,2 400,18 620,8 C840,0 1020,14 1205,7",
  "M-5,25 C150,17 370,31 590,21 C810,13 1000,27 1205,21",
  "M-5,40 C200,32 420,46 640,36 C860,27 1040,41 1205,35",
  "M-5,55 C160,47 380,61 600,51 C820,42 1010,56 1205,50",
  "M-5,70 C190,62 410,76 630,66 C850,57 1030,71 1205,65",
  "M-5,85 C170,77 390,91 610,81 C830,72 1020,86 1205,80",
  "M-5,100 C185,92 405,106 625,96 C845,87 1025,101 1205,95",
  "M-5,115 C175,107 395,121 615,111 C835,102 1015,116 1205,110",
];

const PATH_LEN = 1210;

type Props = {
  num: string;
  title: string;
  body: string;
  detail: string[];
  delay?: number;
};

export default function ServiceRow({ num, title, body, detail, delay = 0 }: Props) {
  const [revealed, setRevealed] = useState(false);

  return (
    <div
      className="services-row"
      onMouseEnter={() => setRevealed(true)}
      onMouseLeave={() => setRevealed(false)}
      style={{
        display: "grid",
        gridTemplateColumns: "80px 1fr 1fr",
        gap: "clamp(24px,4vw,64px)",
        padding: "clamp(32px,4vw,56px) 0",
        borderTop: "1px solid var(--line-light)",
        alignItems: "start",
        position: "relative",
        overflow: "hidden",
        cursor: "default",
        animationDelay: `${delay}ms`,
      }}
    >
      {/* ── SCRIBBLE FILL ── */}
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          zIndex: 1,
        }}
      >
        {STROKES.map((d, i) => (
          <path
            key={i}
            d={d}
            fill="none"
            stroke="#111"
            strokeWidth={18}
            strokeLinecap="round"
            pathLength={PATH_LEN}
            style={{
              strokeDasharray: PATH_LEN,
              strokeDashoffset: revealed ? 0 : PATH_LEN,
              transition: `stroke-dashoffset ${revealed ? 0.1 : 0.06}s ease ${
                revealed ? i * 0.035 : (STROKES.length - 1 - i) * 0.02
              }s`,
            }}
          />
        ))}
      </svg>

      {/* ── NORMAL CONTENT (fades out as scribble draws) ── */}
      <span
        className="services-num"
        style={{
          fontFamily: "var(--font-mono), monospace",
          fontSize: 12,
          letterSpacing: "0.08em",
          color: "var(--grey)",
          paddingTop: 4,
          position: "relative",
          zIndex: 2,
          opacity: revealed ? 0 : 1,
          transition: "opacity 0.12s ease",
        }}
      >
        {num}
      </span>
      <h2
        style={{
          fontSize: "clamp(22px,2.4vw,36px)",
          fontWeight: 700,
          letterSpacing: "-0.03em",
          lineHeight: 1.1,
          position: "relative",
          zIndex: 2,
          opacity: revealed ? 0 : 1,
          transition: "opacity 0.12s ease",
        }}
      >
        {title}
      </h2>
      <p
        style={{
          color: "var(--grey)",
          lineHeight: 1.75,
          fontSize: "clamp(15px,1.2vw,17px)",
          position: "relative",
          zIndex: 2,
          opacity: revealed ? 0 : 1,
          transition: "opacity 0.12s ease",
        }}
      >
        {body}
      </p>

      {/* ── REVEALED CONTENT (white text, fades in after scribble) ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "grid",
          gridTemplateColumns: "80px 1fr 1fr",
          gap: "clamp(24px,4vw,64px)",
          padding: "clamp(32px,4vw,56px) 0",
          alignItems: "start",
          zIndex: 3,
          opacity: revealed ? 1 : 0,
          transition: `opacity 0.22s ease ${revealed ? "0.28s" : "0s"}`,
          pointerEvents: "none",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-mono), monospace",
            fontSize: 12,
            letterSpacing: "0.08em",
            color: "rgba(255,255,255,0.4)",
            paddingTop: 4,
          }}
        >
          {num}
        </span>
        <h2
          style={{
            fontSize: "clamp(22px,2.4vw,36px)",
            fontWeight: 700,
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
            color: "#fff",
          }}
        >
          {title}
        </h2>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
          {detail.map((point, i) => (
            <li
              key={i}
              style={{
                color: "rgba(255,255,255,0.75)",
                fontSize: "clamp(13px,1.1vw,15px)",
                lineHeight: 1.55,
                paddingLeft: 18,
                position: "relative",
              }}
            >
              <span style={{ position: "absolute", left: 0, color: "rgba(255,255,255,0.35)" }}>—</span>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
