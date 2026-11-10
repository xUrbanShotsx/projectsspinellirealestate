import Link from "next/link";
import Reveal from "./components/Reveal";
import Counter from "./components/Counter";
import ProjectIndex from "./components/ProjectIndex";
import HeroVideo from "./components/HeroVideo";

const marquee = ["Illawarra", "Project Marketing", "New Homes", "Local Experts"];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero dark" style={{ position: "relative", overflow: "hidden" }}>
        <HeroVideo />
        {/* dark overlay so text stays legible over video */}
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.52)", zIndex: 1 }} />
        <div className="hero__grid" aria-hidden="true" style={{ position: "absolute", inset: 0, zIndex: 2 }} />
        <div style={{ position: "absolute", inset: 0, zIndex: 3, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <p style={{ color: "#fff", fontFamily: "var(--font-sans), sans-serif", fontWeight: 700, fontSize: "clamp(28px, 4vw, 56px)", letterSpacing: "-0.02em", textAlign: "center", whiteSpace: "nowrap" }}>
            Project Marketing Specialist
          </p>
        </div>
      </section>

      {/* STATEMENT */}
      <section className="section light">
        <div className="wrap statement">
          <Reveal as="p" className="eyebrow">Our approach</Reveal>
          <Reveal as="p" className="statement__text">
            Project marketing is more than a sales campaign. We work alongside developers
            from feasibility through to settlement — providing the local market knowledge,
            buyer network and sales expertise that gets projects sold.
          </Reveal>
        </div>
      </section>

      {/* STATS */}
      <section className="stats light">
        <div className="wrap stats__grid">
          {[
            { n: 15, s: "+", l: "Years in the Illawarra" },
            { n: 75, s: "+", l: "New homes sold" },
            { n: 3, s: "", l: "Completed projects" },
            { n: 1, s: "", l: "Active campaign" },
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
              ["01", "Advise", "We provide honest feasibility and pricing advice early — so developers go to market with confidence, not guesswork."],
              ["02", "Position", "Naming, branding, floorplan strategy and collateral that speak to the right buyer in the right way."],
              ["03", "Sell", "An active Illawarra buyer database, a dedicated project team, and a track record of selling off-the-plan."],
              ["04", "Settle", "We stay engaged through the settlement phase — managing buyer relationships and minimising fall-through."],
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
          <Reveal as="p" className="eyebrow">Work with us</Reveal>
          <Reveal as="h2" className="cta__title">
            Launching a
            <br />
            project?
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
