"use client";

import { useState } from "react";
import { projects } from "@/data/portfolio";
import { IconArrowUpRight, IconSparkles } from "./Icons";

type CategoryFilter = "all" | "featured" | "travel" | "crm" | "web" | "landing";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>("all");

  const filteredProjects = projects.filter((p) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "featured") return p.featured;
    return p.category === activeFilter;
  });

  const categories: { label: string; key: CategoryFilter; count: number }[] = [
    { label: "All Projects", key: "all", count: projects.length },
    { label: "Featured Work", key: "featured", count: projects.filter((p) => p.featured).length },
    { label: "Travel & Booking", key: "travel", count: projects.filter((p) => p.category === "travel").length },
    { label: "CRM & Management", key: "crm", count: projects.filter((p) => p.category === "crm").length },
    { label: "Agency & Media", key: "web", count: projects.filter((p) => p.category === "web").length },
    { label: "Landing Pages", key: "landing", count: projects.filter((p) => p.category === "landing").length }
  ];

  return (
    <section className="section-ultra-padded" id="projects">
      <div className="container">
        {/* Section Header with Category Filter */}
        <div className="section-head-flex">
          <div>
            <div className="section-badge-pill">
              <span className="badge-dot" />
              <span>SELECTED PORTFOLIO &bull; 14 LIVE WEBSITES</span>
            </div>
            <h2 className="section-ultra-title">
              Proven Production Work.<br />
              <span className="gradient-shimmer">Every Project Live &amp; Verified.</span>
            </h2>
            <p className="section-ultra-subtitle">
              Explore 14+ live web platforms, travel booking engines, enterprise CRM systems, and high-converting landing pages I&apos;ve built and deployed.
            </p>
          </div>

          <div className="category-filter-bar" role="tablist" aria-label="Filter portfolio categories">
            {categories.map((cat) => (
              <button
                key={cat.key}
                type="button"
                role="tab"
                aria-selected={activeFilter === cat.key}
                className={`filter-tab-pill ${activeFilter === cat.key ? "is-selected" : ""}`}
                onClick={() => setActiveFilter(cat.key)}
              >
                <span>{cat.label}</span>
                <span className="filter-count-badge">{cat.count}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="projects-grid-two-col">
          {filteredProjects.map((project) => (
            <article
              className={`project-ultra-card ${project.featured ? "is-featured-project" : ""}`}
              key={project.name}
            >
              {/* Browser Mockup Window Header */}
              <div className={`project-browser-frame ${project.accent}`}>
                <div className="browser-topbar-controls">
                  <div className="browser-three-dots">
                    <span className="dot dot-red" />
                    <span className="dot dot-yellow" />
                    <span className="dot dot-green" />
                  </div>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="browser-url-display"
                    title={`Open ${project.name} (${project.live})`}
                  >
                    <span>{project.live.replace("https://", "").replace("http://", "").replace(/\/$/, "")}</span>
                    <IconArrowUpRight className="w-2.5 h-2.5" />
                  </a>
                  <span className="project-num-tag">{project.number} / 14</span>
                </div>

                {/* Inner Screen Preview Graphic */}
                <div className="browser-screen-inner">
                  <div className="screen-caption-area">
                    <span className="screen-type-tag">{project.type}</span>
                    <h3 className="screen-name-title">
                      <a href={project.live} target="_blank" rel="noreferrer">
                        {project.name}
                      </a>
                    </h3>
                    <p className="screen-highlight-note">{project.highlight}</p>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="screen-live-badge-btn"
                    >
                      <span>Visit Live Site</span>
                      <IconArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                  <div className="screen-radial-glow" />
                </div>
              </div>

              {/* Card Body Details */}
              <div className="project-body-content">
                <div className="project-title-row">
                  <div>
                    <span className="project-category-text">{project.type}</span>
                    <h3 className="project-main-title">
                      <a href={project.live} target="_blank" rel="noreferrer" className="title-live-hover">
                        {project.name}
                      </a>
                    </h3>
                  </div>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="project-corner-link-btn"
                    aria-label={`Open ${project.name} live`}
                    title="Open Live Website in New Tab"
                  >
                    <IconArrowUpRight />
                  </a>
                </div>

                <p className="project-summary-desc">{project.description}</p>

                {/* Highlight Badge */}
                <div className="project-highlight-badge">
                  <IconSparkles className="highlight-star-icon" />
                  <span>{project.highlight}</span>
                </div>

                {/* Tech Chips */}
                <div className="project-chips-wrap">
                  {project.stack.map((tech) => (
                    <span key={tech} className="project-tech-chip">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Card Footer Actions */}
                <div className="project-card-footer-actions">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="project-action-live"
                  >
                    <span>Open Live Website</span>
                    <IconArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                  <a href="#contact" className="project-action-inquire">
                    <span>Inquire for Similar</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Project Callout Banner */}
        <div className="project-bottom-cta-card">
          <div className="cta-card-left">
            <IconSparkles className="cta-sparkle-svg" />
            <div>
              <h3>Have a custom project with specific tech requirements?</h3>
              <p>With 14+ live production deliveries under my belt, I can take your project from design to high-speed deployment.</p>
            </div>
          </div>
          <a href="#contact" className="btn-primary-glow">
            <span>Let&apos;s Build Together</span>
            <IconArrowUpRight className="btn-icon" />
          </a>
        </div>
      </div>
    </section>
  );
}
