"use client";

import { useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="form form--sent">
        <h2 className="h3">Thank you.</h2>
        <p>We&rsquo;ve received your message and will be in touch shortly.</p>
      </div>
    );
  }

  return (
    <form
      className="form"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <label>
        <span>Name</span>
        <input name="name" required autoComplete="name" />
      </label>
      <label>
        <span>Email</span>
        <input name="email" type="email" required autoComplete="email" />
      </label>
      <label>
        <span>I am a</span>
        <select name="role" defaultValue="Buyer">
          <option>Buyer</option>
          <option>Investor</option>
          <option>Developer</option>
          <option>Landowner</option>
          <option>Agent</option>
          <option>Other</option>
        </select>
      </label>
      <label>
        <span>Project of interest</span>
        <select name="project" defaultValue="">
          <option value="">Any / General enquiry</option>
          <option>The Meridian</option>
          <option>Heron Park</option>
          <option>Corrimal Gardens</option>
          <option>South Point</option>
        </select>
      </label>
      <label>
        <span>Message</span>
        <textarea name="message" rows={5} required />
      </label>
      <button className="btn btn--dark" type="submit">
        Send message <span aria-hidden="true">→</span>
      </button>
    </form>
  );
}
