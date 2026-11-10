"use client";

import Link from "next/link";
import { useState } from "react";
import { projects } from "../data/projects";
import Elevation from "./Elevation";

export default function ProjectIndex() {
  const [active, setActive] = useState(0);
  const current = projects[active];

  return (
    <div className="index">
      <ul className="index__list">
        {projects.map((p, i) => (
          <li key={p.slug}>
            <Link
              href={`/projects/${p.slug}`}
              className={`index__row ${i === active ? "is-active" : ""}`}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
            >
              <span className="index__no">{String(i + 1).padStart(2, "0")}</span>
              <span className="index__name">{p.name}</span>
              <span className="index__meta">
                {p.suburb}, {p.city}
              </span>
              <span className="index__meta index__status">{p.status}</span>
              <span className="index__arrow" aria-hidden="true">↗</span>
            </Link>
          </li>
        ))}
      </ul>
      <aside className="index__preview" aria-hidden="true">
        <Elevation key={current.slug} variant={current.variant} />
        <p className="index__caption">
          {current.type} · {current.homes} homes · {current.year}
        </p>
      </aside>
    </div>
  );
}
