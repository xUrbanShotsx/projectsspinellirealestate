import type { Metadata } from "next";
import ContactForm from "../components/ContactForm";

export const metadata: Metadata = { title: "Contact" };

export default function Contact() {
  return (
    <>
      <section className="page-hero light">
        <div className="wrap">
          <p className="eyebrow">Contact</p>
          <h1 className="page-hero__title">Register<br />interest</h1>
        </div>
      </section>
      <section className="section light" style={{ paddingTop: 0 }}>
        <div className="wrap contact">
          <div className="contact__info">
            <p className="eyebrow">Buyers &amp; investors</p>
            <p>Register your interest to receive pricing and floorplans before public release.</p>
            <p className="eyebrow">Agents &amp; landowners</p>
            <p>Interested in an off-market conversation? We respond to every enquiry, in confidence.</p>
            <p className="eyebrow">Studio</p>
            <p>
              Shellharbour City Centre
              <br />
              NSW 2529
              <br />
              <a href="mailto:projects@spinellire.com">projects@spinellire.com</a>
              <br />
              <a href="tel:+61242960047">02 4296 0047</a>
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
