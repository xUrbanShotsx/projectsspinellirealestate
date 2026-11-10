"use client";

import { useState } from "react";

const EASE = "cubic-bezier(0.22,1,0.36,1)";

type Props = {
  num: string;
  title: string;
  body: string;
  delay?: number;
};

export default function ServiceRow({ num, title, body, delay = 0 }: Props) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="services-row"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "grid",
        gridTemplateColumns: "80px 1fr 1fr",
        gap: "clamp(24px,4vw,64px)",
        padding: "clamp(32px,4vw,56px) 0",
        borderTop: "1px solid var(--line-light)",
        alignItems: "start",
        cursor: "default",
        transition: `background 0.5s ${EASE}`,
        animationDelay: `${delay}ms`,
      }}
    >
      <span
        className="services-num"
        style={{
          fontFamily: "var(--font-mono), monospace",
          fontSize: 12,
          letterSpacing: "0.08em",
          color: "var(--grey)",
          paddingTop: 4,
          opacity: hovered ? 1 : 0.4,
          transform: hovered ? "translateY(-2px)" : "translateY(0)",
          transition: `opacity 0.4s ${EASE}, transform 0.4s ${EASE}`,
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
          transform: hovered ? "translateX(8px)" : "translateX(0)",
          transition: `transform 0.5s ${EASE}`,
        }}
      >
        {title}
      </h2>
      <p
        style={{
          color: "var(--grey)",
          lineHeight: 1.75,
          fontSize: "clamp(15px,1.2vw,17px)",
          opacity: hovered ? 1 : 0.6,
          transition: `opacity 0.4s ${EASE}`,
        }}
      >
        {body}
      </p>
    </div>
  );
}
