"use client";

import { useEffect, useRef, useState } from "react";

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    function onEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
        toggle.current?.focus();
      }
    }
    document.addEventListener("keydown", onEscape);
    return () => document.removeEventListener("keydown", onEscape);
  }, [isOpen]);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#main" aria-label="ChainSaf home">CHAIN<span>SAF</span></a>
        <button ref={toggle} className="menu-toggle" type="button" aria-expanded={isOpen} aria-controls="navigation" onClick={() => setIsOpen(!isOpen)}>
          <span>Menu</span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
        </button>
        <nav id="navigation" className={isOpen ? "open" : undefined} aria-label="Main navigation" onClick={(event) => { if ((event.target as Element).closest("a")) setIsOpen(false); }}>
          <a href="#product">The product</a><a href="#how-it-works">How it works</a><a href="#sizes">Sizes & pricing</a><a href="#questions">FAQs</a>
          <a className="header-call" href="tel:+15122478795"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 3 4 1 1 5-3 2c2 3 3 4 6 6l2-3 5 1 1 4c0 2-2 3-4 2C10 19 5 14 3 7c-1-2 0-4 2-4Z" /></svg> (512) 247-8795</a>
        </nav>
      </div>
    </header>
  );
}
