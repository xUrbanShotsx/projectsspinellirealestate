import Link from "next/link";
import Elevation from "./components/Elevation";
import Reveal from "./components/Reveal";
import Counter from "./components/Counter";
import ProjectIndex from "./components/ProjectIndex";

const marquee = ["Illawarra", "Design", "Delivery", "Community"];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero dark">
        <div className="hero__grid" aria-hidden="true" />
        <Elevation variant="tower" className="hero__art" />
        <div className="wrap hero__inner">
          <p className="eyebrow hero__eyebrow">Property development · Illawarra &amp; South Coast</p>
          <h1 className="hero__title">
            Places built
            <br />
            to endure.
          </h1>
          <div className="hero__foot">
            <p className="hero__lede">
              Spinelli Projects creates considered residential and mixed-use buildings
              across the Illawarra — from first site inspection to the day keys change hands.
            </p>
            <Link href="/projects" className="btn btn--light">
              View projects <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* STATEMENT */}
      <section className="section light">
        <div className="wrap statement">
          <Reveal as="p" className="eyebrow">Our approach</Reveal>
          <Reveal as="p" className="statement__text">
            Good development is patient. We choose fewer sites, spend longer on the design and
            build with materials that age well — so every Spinelli project looks better in
            twenty years than it did on opening day.
          </Reveal>
        </div>
      </section>

      {/* STATS */}
      <section className="stats light">
        <div className="wrap stats__grid">
          {[
            { n: 15, s: "+", l: "Years in the Illawarra" },
            { n: 196, s: "+", l: "Homes delivered" },
            { n: 12, s: "", l: "Completed projects" },
            { n: 4, s: "", l: "Active developments" },
          ].map((s, i) => (
            <Reveal key={s.l} delay={i * 90} className="stat">
              <span className="stat__n">
                <Counter to={s.n} suffix={s.s} />
              </span>
              <span className="stat__l">{s.l}</span>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="section dark">
        <div className="wrap">
          <div className="section__head">
            <Reveal as="h2" className="h2">Selected<br />projects</Reveal>
            <Link href="/projects" className="link">All projects ↗</Link>
          </div>
          <ProjectIndex />
        </div>
      </section>

      {/* APPROACH */}
      <section className="section light">
        <div className="wrap approach">
          <Reveal as="h2" className="h2 approach__title">How we work</Reveal>
          <div className="approach__list">
            {[
              ["01", "Find", "We acquire sites in established Illawarra neighbourhoods where good architecture adds to the street and responds to the landscape."],
              ["02", "Design", "Leading architects, a focused client brief and a thorough design phase. We resolve the details on paper so they are right on site."],
              ["03", "Build", "Transparent programmes, fixed standards and a single point of accountability — from first excavation to final inspection."],
              ["04", "Support", "We don't walk away at settlement. Spinelli stays involved with owners and buildings long after completion."],
            ].map(([n, t, d], i) => (
              <Reveal key={n} delay={i * 60} className="approach__item">
                <span className="mono">{n}</span>
                <h3>{t}</h3>
                <p>{d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="marquee dark" aria-hidden="true">
        <div className="marquee__track">
          {[...marquee, ...marquee, ...marquee, ...marquee].map((w, i) => (
            <span key={i}>
              {w}
              <i>✱</i>
            </span>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section cta light">
        <div className="wrap">
          <Reveal as="p" className="eyebrow">Register interest</Reveal>
          <Reveal as="h2" className="cta__title">
            Ready to find
            <br />
            your home?
          </Reveal>
          <Reveal>
            <Link href="/contact" className="btn btn--dark">
              Get in touch <span aria-hidden="true">→</span>
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
