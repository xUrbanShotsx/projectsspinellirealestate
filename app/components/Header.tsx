"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/projects", label: "Projects" },
  { href: "/project-marketing", label: "Marketing" },
  { href: "/contact", label: "Contact" },
];

const INTRO_DELAY = 4500;

export default function Header() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Only delay on the homepage — show immediately on other pages
    if (pathname !== "/") {
      setVisible(true);
      return;
    }
    const t = setTimeout(() => setVisible(true), INTRO_DELAY);
    return () => clearTimeout(t);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header
        className="header"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(-12px)",
          transition: "opacity 0.8s cubic-bezier(0.22,1,0.36,1), transform 0.8s cubic-bezier(0.22,1,0.36,1)",
        }}
      >
        <Link href="/" className="header__logo" aria-label="Spinelli Projects home">
          <Image
            src="/logo.webp"
            alt="Spinelli Projects"
            width={360}
            height={90}
            priority
            style={{ height: "clamp(52px,5.5vw,80px)", width: "auto" }}
          />
        </Link>
        <nav className="header__nav" aria-label="Primary">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={pathname.startsWith(l.href) ? "is-active" : ""}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <button
          className="header__toggle"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Menu"
        >
          {open ? "Close" : "Menu"}
        </button>
      </header>
      <div className={`menu ${open ? "menu--open" : ""}`} aria-hidden={!open}>
        {links.map((l, i) => (
          <Link
            key={l.href}
            href={l.href}
            onClick={() => setOpen(false)}
            style={{ transitionDelay: `${i * 70}ms` }}
          >
            {l.label}
          </Link>
        ))}
      </div>
    </>
  );
}
