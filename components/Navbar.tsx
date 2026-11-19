"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { IconSun, IconMoon, IconMenu, IconClose, IconArrowUpRight } from "./Icons";
import { profile } from "@/data/portfolio";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("hk-portfolio-theme") as "dark" | "light" | null;
    if (saved) {
      setTheme(saved);
      document.documentElement.setAttribute("data-theme", saved);
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
    }

    const handleScroll = () => setScrolled(window.scrollY > 25);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("hk-portfolio-theme", next);
  };

  return (
    <header className={`ultra-navbar ${scrolled ? "is-scrolled" : ""}`}>
      <div className="nav-inner-container">

        {/* ── Brand Logo ── */}
        <a href="#home" className="nav-brand-logo" aria-label="Harshit Kumar Home">
          <div className="hk-logo-wrap">
            <Image
              src="/logo.jpg"
              alt="Harshit Kumar Logo"
              width={52}
              height={40}
              className="hk-logo-img"
              priority
            />
          </div>
          <div className="brand-meta-titles">
            <strong>Harshit Kumar</strong>
            <small>{profile.role}</small>
          </div>
        </a>

        {/* ── Desktop Menu ── */}
        <nav className="nav-desktop-menu" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav-menu-anchor">
              {link.label}
            </a>
          ))}
        </nav>

        {/* ── Right Controls ── */}
        <div className="nav-right-controls">
          <div className="status-live-chip" title="Available for projects">
            <span className="live-status-ping" />
            <span className="status-chip-text">Available</span>
          </div>

          <button
            type="button"
            className="theme-mode-button"
            onClick={toggleTheme}
            aria-label={`Toggle to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? <IconSun className="w-4 h-4" /> : <IconMoon className="w-4 h-4" />}
          </button>

          <a href="#contact" className="nav-amber-cta">
            <span>Let&apos;s Talk</span>
            <IconArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Hamburger */}
          <button
            type="button"
            className="nav-mobile-toggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <IconClose /> : <IconMenu />}
          </button>
        </div>
      </div>

      {/* ── Mobile Drawer ── */}
      {isOpen && (
        <div className="mobile-overlay-dim" onClick={() => setIsOpen(false)}>
          <div className="mobile-drawer-sheet" onClick={(e) => e.stopPropagation()}>

            {/* Drawer Header */}
            <div className="drawer-sheet-head">
              <div className="drawer-brand-row">
                <Image
                  src="/logo.jpg"
                  alt="HK Logo"
                  width={44}
                  height={34}
                  className="hk-logo-img"
                />
                <div className="brand-meta-titles">
                  <strong>Harshit Kumar</strong>
                  <small>{profile.role}</small>
                </div>
              </div>
              <button
                type="button"
                className="drawer-sheet-close"
                onClick={() => setIsOpen(false)}
              >
                <IconClose />
              </button>
            </div>

            {/* Drawer Links */}
            <div className="drawer-sheet-links">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="drawer-link-row"
                  onClick={() => setIsOpen(false)}
                >
                  <span>{link.label}</span>
                  <IconArrowUpRight className="w-4 h-4" />
                </a>
              ))}
            </div>

            {/* Drawer Footer */}
            <div className="drawer-sheet-footer">
              <div className="drawer-theme-toggle">
                <span>Theme</span>
                <button type="button" className="drawer-theme-btn" onClick={toggleTheme}>
                  {theme === "dark" ? (
                    <><IconSun className="w-4 h-4" /> <span>Light Mode</span></>
                  ) : (
                    <><IconMoon className="w-4 h-4" /> <span>Dark Mode</span></>
                  )}
                </button>
              </div>
              <a
                href="#contact"
                className="drawer-sheet-cta"
                onClick={() => setIsOpen(false)}
              >
                <span>Let&apos;s Build Together</span>
                <IconArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
