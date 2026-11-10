"use client";

import { useEffect, useState } from "react";

const DELAY = 4500;

export default function HeroTagline() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), DELAY);
    return () => clearTimeout(t);
  }, []);

  return (
    <div style={{ position: "absolute", inset: 0, zIndex: 3, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <p style={{
        color: "#fff",
        fontFamily: "var(--font-sans), sans-serif",
        fontWeight: 700,
        fontSize: "clamp(28px, 4vw, 56px)",
        letterSpacing: "-0.02em",
        textAlign: "center",
        whiteSpace: "nowrap",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(10px)",
        transition: "opacity 0.8s cubic-bezier(0.22,1,0.36,1), transform 0.8s cubic-bezier(0.22,1,0.36,1)",
      }}>
        Project Marketing Specialist
      </p>
    </div>
  );
}
