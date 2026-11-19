"use client";

import Image from "next/image";
import { useState } from "react";
import { profile } from "@/data/portfolio";
import {
  IconArrowDown,
  IconDownload,
  IconCopy,
  IconCheck,
  IconSparkles,
  IconCode,
  IconGithub,
  IconLinkedin,
  IconWhatsapp,
  IconMail
} from "./Icons";

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<"code" | "stack" | "terminal">("code");

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="hero-ultra-section" id="home">
      {/* Background ambient lighting */}
      <div className="hero-mesh-glow glow-primary" />
      <div className="hero-mesh-glow glow-secondary" />
      <div className="hero-grid-overlay" />

      <div className="container hero-ultra-layout">
        {/* Left Column: Headline, Bio & Action Buttons */}
        <div className="hero-ultra-copy">
          <div className="hero-status-pill">
            <span className="live-radar-dot">
              <span className="radar-wave" />
              <span className="radar-core" />
            </span>
            <span className="pill-msg">Available for Projects &amp; Full-time Roles</span>
          </div>

          <h1 className="hero-ultra-title">
            Crafting <span className="gradient-shimmer">High-Impact</span> Web Experiences.
          </h1>

          <p className="hero-ultra-sub">
            Hi, I&apos;m <strong>Harshit Kumar</strong> — a Frontend Developer &amp; UI Specialist building fast, responsive, and pixel-perfect applications with{" "}
            <span className="tech-highlight">React.js</span>,{" "}
            <span className="tech-highlight">Next.js 15</span>, and{" "}
            <span className="tech-highlight">TypeScript</span>. I help businesses transform complex ideas into reliable digital products.
          </p>

          <div className="hero-ultra-btns">
            <a href="#projects" className="btn-primary-glow">
              <span>View Selected Work</span>
              <IconArrowDown className="btn-icon" />
            </a>

            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-glass"
            >
              <IconDownload className="btn-icon" />
              <span>Download CV</span>
            </a>

            <button
              type="button"
              onClick={copyEmail}
              className="btn-copy-chip"
              title="Copy email to clipboard"
            >
              {copied ? (
                <>
                  <IconCheck className="btn-icon text-success" />
                  <span>Copied! ✓</span>
                </>
              ) : (
                <>
                  <IconCopy className="btn-icon" />
                  <span>Copy Email</span>
                </>
              )}
            </button>
          </div>

          {/* Social Connect row */}
          <div className="hero-quick-socials">
            <span className="social-quick-label">Connect:</span>
            <div className="quick-social-icons">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="social-icon-btn"
              >
                <IconGithub />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="social-icon-btn"
              >
                <IconLinkedin />
              </a>
              <a
                href={profile.whatsapp}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp Direct"
                className="social-icon-btn"
              >
                <IconWhatsapp />
              </a>
              <a
                href={`mailto:${profile.email}`}
                aria-label="Send Email"
                className="social-icon-btn"
              >
                <IconMail />
              </a>
            </div>
          </div>

          {/* Live Metric Ribbon */}
          <div className="hero-metrics-ribbon">
            <div className="ribbon-metric">
              <strong>3+</strong>
              <span>Years Experience</span>
            </div>
            <div className="ribbon-separator" />
            <div className="ribbon-metric">
              <strong>100+</strong>
              <span>Shipped Products</span>
            </div>
            <div className="ribbon-separator" />
            <div className="ribbon-metric">
              <strong>99+</strong>
              <span>Lighthouse Score</span>
            </div>
            <div className="ribbon-separator" />
            <div className="ribbon-metric">
              <strong>100%</strong>
              <span>Mobile-First UX</span>
            </div>
          </div>
        </div>

        {/* Right Column: High-End Photo Card & Interactive Terminal */}
        <div className="hero-ultra-visual">
          {/* Main Portrait Showcase with Floating Badges */}
          <div className="portrait-showcase-box">
            <div className="portrait-glow-halo" />
            <div className="portrait-card-shell">
              <Image
                src={profile.photoUrl}
                alt={profile.name}
                width={420}
                height={480}
                priority
                className="hero-portrait-img"
              />
              <div className="portrait-overlay-gradient" />
              <div className="portrait-bottom-caption">
                <strong>Harshit Kumar</strong>
                <small>Frontend Engineer &bull; React &amp; Next.js</small>
              </div>
            </div>

            {/* Floating Achievement Badges */}
            <div className="hero-float-badge float-badge-left">
              <IconSparkles className="badge-glow-icon" />
              <div>
                <strong>3+ Years Experience</strong>
                <small>Scalable Frontend Systems</small>
              </div>
            </div>

            <div className="hero-float-badge float-badge-right">
              <span className="badge-bullet-gold">✦</span>
              <div>
                <strong>Pixel-Perfect Code</strong>
                <small>Figma to React Fidelity</small>
              </div>
            </div>
          </div>

          {/* Interactive Code / Stack Sandbox Drawer underneath */}
          <div className="interactive-code-box">
            <div className="interactive-code-tabs">
              <button
                type="button"
                className={`code-tab ${activeTab === "code" ? "is-active" : ""}`}
                onClick={() => setActiveTab("code")}
              >
                <IconCode className="tab-svg" />
                <span>Harshit.tsx</span>
              </button>
              <button
                type="button"
                className={`code-tab ${activeTab === "stack" ? "is-active" : ""}`}
                onClick={() => setActiveTab("stack")}
              >
                <span>stack.json</span>
              </button>
              <button
                type="button"
                className={`code-tab ${activeTab === "terminal" ? "is-active" : ""}`}
                onClick={() => setActiveTab("terminal")}
              >
                <span>terminal.sh</span>
              </button>
            </div>

            <div className="interactive-code-view">
              {activeTab === "code" && (
                <pre className="code-content">
                  <code>
                    <span className="c-kw">const</span> <span className="c-fn">engineer</span> = &#123;{"\n"}
                    {"  "}name: <span className="c-str">&quot;Harshit Kumar&quot;</span>,{"\n"}
                    {"  "}role: <span className="c-str">&quot;Frontend Developer&quot;</span>,{"\n"}
                    {"  "}stack: [<span className="c-str">&quot;React 19&quot;</span>, <span className="c-str">&quot;Next.js 15&quot;</span>, <span className="c-str">&quot;TypeScript&quot;</span>],{"\n"}
                    {"  "}standards: <span className="c-str">&quot;Pixel-Perfect UI &amp; 95+ Core Web Vitals&quot;</span>,{"\n"}
                    {"  "}status: <span className="c-str">&quot;Available for Projects&quot;</span>{"\n"}
                    &#125;;
                  </code>
                </pre>
              )}

              {activeTab === "stack" && (
                <pre className="code-content">
                  <code>
                    &#123;{"\n"}
                    {"  "}<span className="c-prop">&quot;frontend&quot;</span>: [<span className="c-str">&quot;Next.js App Router&quot;</span>, <span className="c-str">&quot;React.js&quot;</span>, <span className="c-str">&quot;TypeScript&quot;</span>],{"\n"}
                    {"  "}<span className="c-prop">&quot;styling&quot;</span>: [<span className="c-str">&quot;Tailwind CSS&quot;</span>, <span className="c-str">&quot;Material UI&quot;</span>, <span className="c-str">&quot;Chakra UI&quot;</span>],{"\n"}
                    {"  "}<span className="c-prop">&quot;architecture&quot;</span>: [<span className="c-str">&quot;REST APIs&quot;</span>, <span className="c-str">&quot;Redux Toolkit&quot;</span>, <span className="c-str">&quot;Axios&quot;</span>]{"\n"}
                    &#125;
                  </code>
                </pre>
              )}

              {activeTab === "terminal" && (
                <div className="terminal-lines">
                  <p><span className="t-prompt">$</span> npm run build:production</p>
                  <p className="t-dim">&gt; optimizing routes, assets and components...</p>
                  <p className="t-ok">✓ Compiled 100% successfully (0 errors, 0 warnings)</p>
                  <p className="t-accent">● Live on https://zoyotrip.in &amp; client portals</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Infinite Marquee Strip */}
      <div className="ultra-marquee-track">
        <div className="marquee-inner">
          <span>NEXT.JS 15 APP ROUTER</span>
          <span className="marquee-star">✦</span>
          <span>REACT 19</span>
          <span className="marquee-star">✦</span>
          <span>TYPESCRIPT</span>
          <span className="marquee-star">✦</span>
          <span>TAILWIND CSS</span>
          <span className="marquee-star">✦</span>
          <span>REST APIS &amp; REDUX</span>
          <span className="marquee-star">✦</span>
          <span>FIGMA TO PIXEL-PERFECT CODE</span>
          <span className="marquee-star">✦</span>
          <span>TRAVEL BOOKING PORTALS</span>
          <span className="marquee-star">✦</span>
          <span>ENTERPRISE CRM &amp; ERP</span>
          <span className="marquee-star">✦</span>
          <span>NEXT.JS 15 APP ROUTER</span>
          <span className="marquee-star">✦</span>
          <span>REACT 19</span>
          <span className="marquee-star">✦</span>
          <span>TYPESCRIPT</span>
          <span className="marquee-star">✦</span>
          <span>TAILWIND CSS</span>
          <span className="marquee-star">✦</span>
          <span>REST APIS &amp; REDUX</span>
        </div>
      </div>
    </section>
  );
}
