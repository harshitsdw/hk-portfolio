 "use client";
import { useState } from "react";

const links = [["About", "#about"], ["Skills", "#skills"], ["Work", "#work"], ["Experience", "#experience"], ["Contact", "#contact"]];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return <header className="site-header">
    <nav className="nav-wrap">
      <a className="brand" href="#home" aria-label="Harshit Kumar home">HK<span>.</span></a>
      <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Toggle navigation" aria-expanded={open}><span/><span/></button>
      <div className={`nav-links ${open ? "is-open" : ""}`}>
        {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
        <a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>Let&apos;s Talk <span>↗</span></a>
      </div>
    </nav>
  </header>;
}