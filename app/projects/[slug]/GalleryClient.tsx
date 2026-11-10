"use client";

import Image from "next/image";
import { useState } from "react";

export default function GalleryClient({ images, name }: { images: string[]; name: string }) {
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState(false);

  if (!images.length) return null;

  return (
    <>
      <section style={{ background: "#0a0a0a", padding: "clamp(48px,6vw,96px) 0" }}>
        <div className="wrap">
          {/* main image */}
          <div
            style={{ position: "relative", width: "100%", aspectRatio: "16/9", overflow: "hidden", borderRadius: 4, cursor: "zoom-in", marginBottom: 12 }}
            onClick={() => setLightbox(true)}
          >
            {images.map((src, i) => (
              <Image
                key={src}
                src={src}
                alt={`${name} — image ${i + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 90vw"
                style={{
                  objectFit: "cover",
                  opacity: i === active ? 1 : 0,
                  transition: "opacity 0.5s cubic-bezier(0.22,1,0.36,1)",
                }}
                priority={i === 0}
              />
            ))}
            {/* image counter */}
            <span style={{
              position: "absolute", bottom: 16, right: 16,
              fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.08em",
              color: "rgba(255,255,255,0.7)", background: "rgba(0,0,0,0.5)",
              padding: "4px 10px", borderRadius: 999,
            }}>
              {active + 1} / {images.length}
            </span>
          </div>

          {/* thumbnail strip */}
          <div style={{ display: "flex", gap: 8, overflowX: "auto", paddingBottom: 4 }}>
            {images.map((src, i) => (
              <button
                key={src}
                onClick={() => setActive(i)}
                style={{
                  flexShrink: 0,
                  position: "relative",
                  width: 120,
                  height: 80,
                  borderRadius: 2,
                  overflow: "hidden",
                  border: i === active ? "2px solid #fff" : "2px solid transparent",
                  opacity: i === active ? 1 : 0.5,
                  transition: "opacity 0.25s, border-color 0.25s",
                  cursor: "pointer",
                  background: "none",
                  padding: 0,
                }}
                aria-label={`View image ${i + 1}`}
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  sizes="120px"
                  style={{ objectFit: "cover" }}
                />
              </button>
            ))}
          </div>

          {/* prev / next arrows */}
          <div style={{ display: "flex", gap: 8, marginTop: 20 }}>
            <button
              onClick={() => setActive((a) => (a - 1 + images.length) % images.length)}
              style={arrowBtn}
              aria-label="Previous image"
            >Prev</button>
            <button
              onClick={() => setActive((a) => (a + 1) % images.length)}
              style={arrowBtn}
              aria-label="Next image"
            >Next</button>
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      {lightbox && (
        <div
          onClick={() => setLightbox(false)}
          style={{
            position: "fixed", inset: 0, background: "rgba(0,0,0,0.95)", zIndex: 1000,
            display: "flex", alignItems: "center", justifyContent: "center",
            cursor: "zoom-out",
          }}
        >
          <div style={{ position: "relative", width: "90vw", height: "85vh" }}>
            <Image
              src={images[active]}
              alt={name}
              fill
              style={{ objectFit: "contain" }}
              sizes="90vw"
            />
          </div>
          <button
            onClick={(e) => { e.stopPropagation(); setActive((a) => (a - 1 + images.length) % images.length); }}
            style={{ ...arrowBtn, position: "fixed", left: 24, top: "50%", transform: "translateY(-50%)" }}
            aria-label="Previous"
          >Prev</button>
          <button
            onClick={(e) => { e.stopPropagation(); setActive((a) => (a + 1) % images.length); }}
            style={{ ...arrowBtn, position: "fixed", right: 24, top: "50%", transform: "translateY(-50%)" }}
            aria-label="Next"
          >Next</button>
          <button
            onClick={() => setLightbox(false)}
            style={{ ...arrowBtn, position: "fixed", top: 24, right: 24 }}
            aria-label="Close"
          >Close</button>
        </div>
      )}
    </>
  );
}

const arrowBtn: React.CSSProperties = {
  background: "rgba(255,255,255,0.1)",
  border: "1px solid rgba(255,255,255,0.15)",
  color: "#fff",
  width: 44,
  height: 44,
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  fontSize: 18,
  transition: "background 0.2s",
};
