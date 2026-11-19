"use client";

import { skills } from "@/data/portfolio";
import { IconCode, IconLayers, IconSparkles } from "./Icons";

export default function Skills() {
  return (
    <section className="section-ultra-padded" id="skills">
      <div className="container">
        {/* Section Header */}
        <div className="section-ultra-header">
          <div className="section-badge-pill">
            <span className="badge-dot" />
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="section-ultra-title">
            Modern Tech Stack.<br />
            <span className="gradient-shimmer">Zero Compromise on Quality.</span>
          </h2>
          <p className="section-ultra-subtitle">
            Curated technologies I use daily to turn intricate requirements into fast, maintainable, and reliable user interfaces.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="skills-quad-grid">
          {skills.map((group, index) => (
            <div className="skill-ultra-card" key={group.group}>
              <div className="skill-card-topbar">
                <span className="skill-card-num">0{index + 1}</span>
                <span className="skill-card-icon">
                  {index === 0 && <IconCode />}
                  {index === 1 && <IconLayers />}
                  {index === 2 && <IconSparkles />}
                  {index === 3 && <IconLayers />}
                </span>
              </div>

              <h3 className="skill-card-title">{group.group}</h3>
              <p className="skill-card-desc">{group.description}</p>

              <div className="skill-card-chips">
                {group.items.map((skillItem) => (
                  <span className="skill-tech-chip" key={skillItem}>
                    <span className="chip-bullet">✦</span>
                    <span>{skillItem}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Development Process Pipeline Banner */}
        <div className="delivery-pipeline-card">
          <div className="pipeline-header-wrap">
            <IconSparkles className="pipeline-sparkle-icon" />
            <h4>End-to-End Frontend Delivery Workflow</h4>
            <p>From initial design tokens to high-speed production launch</p>
          </div>

          <div className="pipeline-steps-flex">
            <div className="pipeline-stage-box">
              <span className="stage-num-badge">Step 1</span>
              <strong>Figma Analysis</strong>
              <small>Deconstructing layout, tokens, typography &amp; responsive breakpoints.</small>
            </div>
            <div className="pipeline-arrow-divider">➔</div>
            <div className="pipeline-stage-box">
              <span className="stage-num-badge">Step 2</span>
              <strong>Architecture &amp; Types</strong>
              <small>Setting up clean Next.js/React structure, TypeScript contracts &amp; reusable components.</small>
            </div>
            <div className="pipeline-arrow-divider">➔</div>
            <div className="pipeline-stage-box">
              <span className="stage-num-badge">Step 3</span>
              <strong>APIs &amp; State</strong>
              <small>Wiring REST APIs, Redux/Context state, form validations &amp; loading states.</small>
            </div>
            <div className="pipeline-arrow-divider">➔</div>
            <div className="pipeline-stage-box">
              <span className="stage-num-badge">Step 4</span>
              <strong>QA, SEO &amp; Launch</strong>
              <small>Lighthouse 95+ audit, cross-browser validation &amp; CI/CD deployment on Vercel.</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
