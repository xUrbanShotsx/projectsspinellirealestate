import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "../data/projects";
import Elevation from "../components/Elevation";
import Reveal from "../components/Reveal";

export const metadata: Metadata = { title: "Projects" };

export default function Projects() {
  return (
    <>
      <section className="page-hero light">
        <div className="wrap">
          <p className="eyebrow">Projects</p>
          <h1 className="page-hero__title">Current &amp;<br />completed work</h1>
        </div>
      </section>
      <section className="section light" style={{ paddingTop: 0 }}>
        <div className="wrap cards">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 2) * 100}>
              <Link href={`/projects/${p.slug}`} className="card">
                <div className="card__art">
                  <Elevation variant={p.variant} animate={false} />
                  <span className="card__status">{p.status}</span>
                </div>
                <div className="card__body">
                  <h2>{p.name}</h2>
                  <p>
                    {p.suburb}, {p.city} · {p.type}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
