import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { projects } from "../data/projects";
import Reveal from "../components/Reveal";

export const metadata: Metadata = { title: "Projects" };

export default function Projects() {
  return (
    <>
      <section className="page-hero light">
        <div className="wrap">
          <p className="eyebrow">Projects</p>
          <h1 className="page-hero__title">Our<br />campaigns</h1>
        </div>
      </section>
      <section className="section light" style={{ paddingTop: 0 }}>
        <div className="wrap cards">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 2) * 100}>
              <Link href={`/projects/${p.slug}`} className="card">
                <div className="card__art" style={{ position: "relative", overflow: "hidden" }}>
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
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
