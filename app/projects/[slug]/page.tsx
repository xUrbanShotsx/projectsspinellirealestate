import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getProject, projects } from "../../data/projects";
import Reveal from "../../components/Reveal";
import GalleryClient from "./GalleryClient";

export const instant = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  return { title: p?.name ?? "Project", description: p?.summary };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) notFound();
  const idx = projects.findIndex((x) => x.slug === slug);
  const next = projects[(idx + 1) % projects.length];

  return (
    <>
      {/* FULL-BLEED HERO */}
      <section style={{ position: "relative", height: "100svh", overflow: "hidden", background: "#000" }}>
        <Image
          src={p.image}
          alt={p.name}
          fill
          priority
          style={{ objectFit: "cover", opacity: 0.65 }}
          sizes="100vw"
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.2) 30%, rgba(0,0,0,0.88) 100%)" }} />
        <div className="wrap" style={{ position: "absolute", bottom: 0, left: 0, right: 0, paddingBottom: "clamp(48px,6vw,96px)" }}>
          <Link href="/projects" className="link" style={{ color: "rgba(255,255,255,0.55)", marginBottom: 32, display: "inline-block", fontSize: 13, letterSpacing: "0.06em", fontFamily: "var(--font-mono)" }}>
            All projects
          </Link>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 20 }}>
            <div>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)", marginBottom: 16 }}>
                {p.type} · {p.suburb}
              </p>
              <h1 style={{ fontSize: "clamp(44px,8vw,130px)", lineHeight: 0.9, letterSpacing: "-0.045em", fontWeight: 700, color: "#fff" }}>
                {p.name}
              </h1>
            </div>
            <span style={{
              display: "inline-block",
              padding: "8px 20px",
              border: "1px solid rgba(255,255,255,0.3)",
              borderRadius: 999,
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#fff",
              whiteSpace: "nowrap",
              alignSelf: "flex-end",
            }}>
              {p.status}
            </span>
          </div>
        </div>
      </section>

      {/* INTRO ROW */}
      <section className="section light" style={{ paddingTop: "clamp(64px,8vw,120px)", paddingBottom: "clamp(64px,8vw,120px)" }}>
        <div className="wrap project-intro-grid">
          <Reveal>
            <p style={{ fontSize: "clamp(20px,2.2vw,30px)", lineHeight: 1.45, letterSpacing: "-0.02em", fontWeight: 500 }}>
              {p.summary}
            </p>
          </Reveal>
          <Reveal delay={100}>
            <p style={{ color: "var(--grey)", lineHeight: 1.75, fontSize: 17 }}>{p.details}</p>
          </Reveal>
        </div>
      </section>

      {/* FACTS STRIP */}
      <section style={{ background: "#000", color: "#fff", padding: "clamp(36px,4vw,64px) 0" }}>
        <div className="wrap project-facts-strip">
          {[
            ["Location", `${p.suburb}, ${p.city}`],
            ["Type", p.type],
            [`Home${p.homes !== 1 ? "s" : ""}`, String(p.homes)],
            ["Completed", p.year],
          ].map(([k, v], i) => (
            <Reveal key={k} delay={i * 60}>
              <div style={{ padding: "24px 0", borderTop: "1px solid rgba(255,255,255,0.12)" }}>
                <p style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: 10 }}>{k}</p>
                <p style={{ fontSize: "clamp(15px,1.4vw,20px)", fontWeight: 600, letterSpacing: "-0.02em" }}>{v}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <GalleryClient images={p.gallery} name={p.name} />

      {/* TIMELINE */}
      <section className="section light" style={{ paddingTop: "clamp(64px,8vw,120px)", paddingBottom: "clamp(64px,8vw,120px)" }}>
        <div className="wrap">
          <Reveal>
            <p className="eyebrow" style={{ marginBottom: 48 }}>Project timeline</p>
          </Reveal>
          {p.timeline.map((t, i) => (
            <Reveal key={t.label} delay={i * 60}>
              <div className="project-timeline-row" style={{ opacity: t.done ? 1 : 0.4 }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.06em", color: "var(--grey)", paddingTop: 2 }}>{t.date}</span>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <span style={{ width: 8, height: 8, borderRadius: "50%", flexShrink: 0, background: t.done ? "var(--ink)" : "transparent", border: "1.5px solid var(--ink)" }} />
                  <span style={{ fontWeight: 600, fontSize: "clamp(16px,1.4vw,20px)", letterSpacing: "-0.02em" }}>{t.label}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* NEXT PROJECT */}
      <Link href={`/projects/${next.slug}`} className="next dark" style={{ display: "block", position: "relative", height: "clamp(200px,28vw,340px)", overflow: "hidden" }}>
        <Image
          src={next.image}
          alt={next.name}
          fill
          style={{ objectFit: "cover", opacity: 0.35 }}
          sizes="100vw"
        />
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.55)" }} />
        <div className="wrap" style={{ position: "relative", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", gap: 12 }}>
          <span className="eyebrow" style={{ color: "rgba(255,255,255,0.5)" }}>Next project</span>
          <span style={{ fontSize: "clamp(32px,6vw,96px)", fontWeight: 700, letterSpacing: "-0.045em", lineHeight: 0.9, color: "#fff" }}>{next.name}</span>
        </div>
      </Link>
    </>
  );
}
