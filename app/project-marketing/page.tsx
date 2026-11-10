import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "../components/Reveal";
import ServiceRow from "../components/ServiceRow";

export const metadata: Metadata = {
  title: "Project Marketing — Spinelli Projects",
  description:
    "End-to-end project marketing for residential developers in the Illawarra. From feasibility and branding through to settlement.",
};

const services = [
  {
    num: "01",
    title: "Feasibility & Pricing Advice",
    body: "Before a single brick is laid, we give developers an honest read on what the market will bear. We analyse comparable sales, current buyer demand, and absorption rates to help you price your project confidently and structure an offering that sells.",
  },
  {
    num: "02",
    title: "Project Naming & Branding",
    body: "A project needs an identity buyers can connect with. We work with you on the name, visual brand, colour palette, and tone of voice — the foundation everything else sits on. Done right, it drives enquiry before the renders are finished.",
  },
  {
    num: "03",
    title: "Renders & Marketing Collateral",
    body: "We brief and manage your render team, ensuring the imagery captures what buyers actually want to see — natural light, proportions, finishes, and lifestyle. We then build a full suite of collateral: brochures, digital assets, signage, and display materials.",
  },
  {
    num: "04",
    title: "Project Website & Landing Page",
    body: "Every project gets its own dedicated digital presence — built to convert. Clean design, compelling copy, floor plan downloads, and a seamless enquiry flow. We handle the build and keep it live through the entire campaign.",
  },
  {
    num: "05",
    title: "Off-the-Plan Sales Campaign",
    body: "We run end-to-end sales campaigns across digital, social, database, and signage. Our active Illawarra buyer database means genuine enquiry from day one — not just impressions. We manage all inbound leads, conduct inspections, and present contracts.",
  },
  {
    num: "06",
    title: "Buyer Qualification",
    body: "Volume of enquiry means nothing if buyers can't settle. We pre-qualify every buyer against finance position, intent, and timeline before a contract is issued. This keeps your solicitor's time focused on deals that will actually proceed.",
  },
  {
    num: "07",
    title: "Settlements Management",
    body: "We stay engaged from exchange all the way through to keys in hand. Buyer communication, finance check-ins, pre-settlement inspections, and defect co-ordination — we manage the relationship so your builder can focus on delivery.",
  },
  {
    num: "08",
    title: "Reporting & Developer Updates",
    body: "Transparent, regular reporting throughout the campaign — enquiry volumes, lead quality, contract status, and market feedback. You always know exactly where the project stands.",
  },
];

export default function ProjectMarketingPage() {
  return (
    <>
      {/* HERO */}
      <section className="section light" style={{ paddingTop: "clamp(120px,14vw,200px)", paddingBottom: "clamp(64px,8vw,120px)", borderBottom: "1px solid var(--line-light)" }}>
        <div className="wrap">
          <Reveal as="p" className="eyebrow" style={{ marginBottom: 32 }}>Project Marketing</Reveal>
          <Reveal as="h1" style={{
            fontSize: "clamp(48px,8vw,130px)",
            lineHeight: 0.92,
            letterSpacing: "-0.045em",
            fontWeight: 700,
            maxWidth: "14ch",
          }}>
            From concept to keys.
          </Reveal>
          <Reveal delay={80}>
            <p style={{
              marginTop: "clamp(32px,4vw,56px)",
              fontSize: "clamp(18px,2vw,26px)",
              lineHeight: 1.5,
              letterSpacing: "-0.02em",
              color: "var(--grey)",
              maxWidth: "56ch",
            }}>
              We work alongside developers from the very first feasibility conversation
              through to the final settlement — bringing the local market knowledge,
              active buyer network, and campaign expertise that gets Illawarra projects sold.
            </p>
          </Reveal>
          <Reveal delay={160} style={{ marginTop: 48 }}>
            <Link href="/contact" className="btn btn--dark">
              Talk to us about your project <span aria-hidden="true">→</span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* SERVICES LIST */}
      <section className="section light" style={{ paddingTop: "clamp(64px,8vw,120px)", paddingBottom: "clamp(64px,8vw,120px)" }}>
        <div className="wrap">
          <Reveal as="p" className="eyebrow" style={{ marginBottom: "clamp(48px,6vw,80px)" }}>What we do</Reveal>
          <div>
            {services.map((s, i) => (
              <Reveal key={s.num} delay={i * 40}>
                <ServiceRow num={s.num} title={s.title} body={s.body} delay={i * 40} />
              </Reveal>
            ))}
            {/* closing rule */}
            <div style={{ borderTop: "1px solid var(--line-light)" }} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta light">
        <div className="wrap">
          <Reveal as="p" className="eyebrow">Work with us</Reveal>
          <Reveal as="h2" className="cta__title">
            Launching a<br />project?
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
