import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "../../data/projects";
import Elevation from "../../components/Elevation";
import Reveal from "../../components/Reveal";

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

  const facts: [string, string][] = [
    ["Location", `${p.suburb}, ${p.city}`],
    ["Type", p.type],
    ["Homes", String(p.homes)],
    ["Storeys", String(p.storeys)],
    ["Status", p.status],
    ["Completion", p.year],
  ];

  return (
    <>
      <section className="project-hero dark">
        <Elevation variant={p.variant} className="project-hero__art" />
        <div className="wrap project-hero__inner">
          <Link href="/projects" className="link">← All projects</Link>
          <h1 className="page-hero__title">{p.name}</h1>
          <p className="project-hero__sum">{p.summary}</p>
        </div>
      </section>

      <section className="section light">
        <div className="wrap project-body">
          <dl className="facts">
            {facts.map(([k, v]) => (
              <div key={k}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
          <Reveal as="p" className="statement__text">{p.details}</Reveal>
        </div>
      </section>

      <Link href={`/projects/${next.slug}`} className="next dark">
        <div className="wrap">
          <span className="eyebrow">Next project</span>
          <span className="next__name">{next.name} ↗</span>
        </div>
      </Link>
    </>
  );
}
