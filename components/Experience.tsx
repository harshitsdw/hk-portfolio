"use client";

import { experience, profile } from "@/data/portfolio";
import { IconDownload } from "./Icons";

export default function Experience() {
  return (
    <section className="section-ultra-padded" id="experience">
      <div className="container">
        {/* Section Header */}
        <div className="section-head-flex">
          <div>
            <div className="section-badge-pill">
              <span className="badge-dot" />
              <span>CAREER HISTORY</span>
            </div>
            <h2 className="section-ultra-title">
              Proven Experience.<br />
              <span className="gradient-shimmer">Real Production Impact.</span>
            </h2>
            <p className="section-ultra-subtitle">
              Over 3 years of hands-on frontend engineering in fast-paced agency and product environments.
            </p>
          </div>

          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-glass"
          >
            <IconDownload className="btn-icon" />
            <span>Download Full Resume</span>
          </a>
        </div>

        {/* Timeline Nodes */}
        <div className="experience-timeline-track">
          {experience.map((job, idx) => (
            <div className="timeline-entry-node" key={job.company}>
              <div className="timeline-pin-rail">
                <div className="timeline-pin-badge">
                  <span>0{idx + 1}</span>
                </div>
                {idx < experience.length - 1 && <div className="timeline-stem-line" />}
              </div>

              <div className="timeline-glass-card">
                <div className="timeline-card-topbar">
                  <div>
                    <span className="timeline-role-badge">{job.badge}</span>
                    <h3 className="timeline-job-role">{job.role}</h3>
                    <h4 className="timeline-company-name">{job.company}</h4>
                  </div>
                  <span className="timeline-period-pill">{job.period}</span>
                </div>

                <p className="timeline-job-desc">{job.description}</p>

                <ul className="timeline-points-list">
                  {job.points.map((pt, i) => (
                    <li key={i}>
                      <span className="timeline-bullet-arrow">›</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>

                <div className="timeline-tech-tags">
                  <span className="tech-tags-label">Technologies:</span>
                  <div className="tech-tags-chips">
                    {job.skills.map((skill) => (
                      <span key={skill} className="timeline-tag-chip">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
