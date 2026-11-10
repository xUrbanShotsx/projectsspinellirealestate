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
    detail: [
      "Comparable sales analysis and current absorption data",
      "Product mix and price-per-sqm recommendations by type",
      "Staged release strategy to protect long-term price integrity",
    ],
  },
  {
    num: "02",
    title: "Project Naming & Branding",
    body: "A project needs an identity buyers can connect with. We work with you on the name, visual brand, colour palette, and tone of voice — the foundation everything else sits on. Done right, it drives enquiry before the renders are finished.",
    detail: [
      "Name, tagline, and project narrative development",
      "Logo, type hierarchy, colour palette, and tone of voice",
      "Full brand standards applied across every touchpoint",
    ],
  },
  {
    num: "03",
    title: "Renders & Marketing Collateral",
    body: "We brief and manage your render team, ensuring the imagery captures what buyers actually want to see — natural light, proportions, finishes, and lifestyle. We then build a full suite of collateral: brochures, digital assets, signage, and display materials.",
    detail: [
      "End-to-end briefing and management of your render studio",
      "Lifestyle-led imagery focused on light, proportion, and finish",
      "Full suite: brochures, digital assets, signage, display materials",
    ],
  },
  {
    num: "04",
    title: "Project Website & Landing Page",
    body: "Every project gets its own dedicated digital presence — built to convert. Clean design, compelling copy, floor plan downloads, and a seamless enquiry flow. We handle the build and keep it live through the entire campaign.",
    detail: [
      "Purpose-built site with floor plan downloads and enquiry flow",
      "Conversion-focused design and copywriting throughout",
      "Maintained and updated live for the duration of the campaign",
    ],
  },
  {
    num: "05",
    title: "Off-the-Plan Sales Campaign",
    body: "We run end-to-end sales campaigns across digital, social, database, and signage. Our active Illawarra buyer database means genuine enquiry from day one — not just impressions. We manage all inbound leads, conduct inspections, and present contracts.",
    detail: [
      "Multi-channel campaign: digital, social, database, and signage",
      "Access to Spinelli's active Illawarra buyer database from day one",
      "Full lead management, inspections, and contract presentation",
    ],
  },
  {
    num: "06",
    title: "Buyer Qualification",
    body: "Volume of enquiry means nothing if buyers can't settle. We pre-qualify every buyer against finance position, intent, and timeline before a contract is issued. This keeps your solicitor's time focused on deals that will actually proceed.",
    detail: [
      "Finance position, intent, and timeline checked before every contract",
      "Reduces fall-through risk and keeps solicitor time on live deals",
      "Regular status updates on every buyer in the pipeline",
    ],
  },
  {
    num: "07",
    title: "Settlements Management",
    body: "We stay engaged from exchange all the way through to keys in hand. Buyer communication, finance check-ins, pre-settlement inspections, and defect co-ordination — we manage the relationship so your builder can focus on delivery.",
    detail: [
      "Buyer communication and finance check-ins throughout",
      "Pre-settlement inspections and defect co-ordination",
      "We manage the buyer relationship so your builder stays focused",
    ],
  },
  {
    num: "08",
    title: "Reporting & Developer Updates",
    body: "Transparent, regular reporting throughout the campaign — enquiry volumes, lead quality, contract status, and market feedback. You always know exactly where the project stands.",
    detail: [
      "Weekly enquiry volumes, lead quality, and contract status",
      "Real-time market feedback from active buyers",
      "Full transparency on where every deal stands at all times",
    ],
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
