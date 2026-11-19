"use client";

import { profile } from "@/data/portfolio";
import {
  IconArrowRight,
  IconDownload,
  IconUser,
  IconMail,
  IconMapPin,
  IconBriefcase,
  IconZap,
  IconSparkles,
  IconCheck,
  IconCode
} from "./Icons";

export default function About() {
  const highlights = [
    {
      icon: <IconZap className="w-4 h-4 text-accent" />,
      text: "Sub-1.5s Load Speeds & 95+ Lighthouse"
    },
    {
      icon: <IconSparkles className="w-4 h-4 text-accent" />,
      text: "Pixel-Perfect Figma to Code Fidelity"
    },
    {
      icon: <IconCheck className="w-4 h-4 text-accent" />,
      text: "100% Responsive on All Screen Sizes"
    },
    {
      icon: <IconCode className="w-4 h-4 text-accent" />,
      text: "Clean Next.js 15, React & TypeScript"
    }
  ];

  return (
    <section className="section-ultra-padded" id="about">
      <div className="container">
        {/* Unified Modern Bento Card (Arjun Kumar reference style) */}
        <div className="about-showcase-card">
          <div className="about-ambient-glow" />

          {/* Left Column: Personal Meta Profile */}
          <div className="about-meta-col">
            <div className="meta-row">
              <div className="meta-icon-bubble">
                <IconUser className="w-4 h-4" />
              </div>
              <div className="meta-text-wrap">
                <span className="meta-sub-label">Name</span>
                <strong className="meta-main-val">{profile.name}</strong>
              </div>
            </div>

            <div className="meta-row">
              <div className="meta-icon-bubble">
                <IconMail className="w-4 h-4" />
              </div>
              <div className="meta-text-wrap">
                <span className="meta-sub-label">Email</span>
                <a href={`mailto:${profile.email}`} className="meta-val-link">
                  {profile.email}
                </a>
              </div>
            </div>

            <div className="meta-row">
              <div className="meta-icon-bubble">
                <IconMapPin className="w-4 h-4" />
              </div>
              <div className="meta-text-wrap">
                <span className="meta-sub-label">Location</span>
                <strong className="meta-main-val">Shimla / Mohali, India</strong>
              </div>
            </div>

            <div className="meta-row">
              <div className="meta-icon-bubble">
                <IconBriefcase className="w-4 h-4" />
              </div>
              <div className="meta-text-wrap">
                <span className="meta-sub-label">Experience</span>
                <strong className="meta-main-val">{profile.experienceYears} Years</strong>
              </div>
            </div>

            <div className="meta-row meta-availability-row">
              <div className="meta-icon-bubble live-glow-bubble">
                <span className="live-ping-dot" />
              </div>
              <div className="meta-text-wrap">
                <span className="meta-sub-label">Availability</span>
                <strong className="meta-main-val text-success-bright">
                  Open to Work &bull; Available
                </strong>
              </div>
            </div>
          </div>

          {/* Divider between Left & Middle */}
          <div className="about-v-divider" />

          {/* Middle Column: Who I Am & Story */}
          <div className="about-story-col">
            <div className="about-section-tag">
              <span className="tag-amber-dash" />
              <span>ABOUT ME</span>
            </div>

            <h3 className="about-headline">Who I Am</h3>

            <p className="about-bio-para">
              I&apos;m <strong>Harshit Kumar</strong>, a Frontend Developer with a strong foundation in modern web technologies and a passion for creating efficient, scalable, and user-friendly web applications.
            </p>

            <p className="about-bio-para">
              I enjoy turning complex ideas and designs into reality using modern technologies and best practices. Having delivered <strong>100+ live production platforms</strong> (including travel booking systems, SaaS CRMs, and high-converting agency platforms), I focus on sub-second load times, pixel-perfect responsiveness, and clean code.
            </p>

            <div className="about-story-actions">
              <a href="#contact" className="about-arrow-cta">
                <span>Know More About Me</span>
                <IconArrowRight className="w-4 h-4 cta-arrow-icon" />
              </a>

              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="about-resume-pill"
              >
                <IconDownload className="w-3.5 h-3.5" />
                <span>Download CV</span>
              </a>
            </div>
          </div>

          {/* Divider between Middle & Right */}
          <div className="about-v-divider" />

          {/* Right Column: 2x2 Clean Stats Grid */}
          <div className="about-stats-col">
            <div className="about-stat-box">
              <strong className="stat-count-number">{profile.projectsCount}</strong>
              <span className="stat-count-label">Projects Completed</span>
            </div>

            <div className="about-stat-box">
              <strong className="stat-count-number">15+</strong>
              <span className="stat-count-label">Happy Clients</span>
            </div>

            <div className="about-stat-box">
              <strong className="stat-count-number">{profile.experienceYears}</strong>
              <span className="stat-count-label">Years Experience</span>
            </div>

            <div className="about-stat-box">
              <strong className="stat-count-number">10+</strong>
              <span className="stat-count-label">Technologies</span>
            </div>
          </div>
        </div>

        {/* Engineering Highlights Strip Below */}
        <div className="about-highlights-bar">
          {highlights.map((item, idx) => (
            <div className="highlight-item" key={idx}>
              <div className="highlight-icon-box">{item.icon}</div>
              <span className="highlight-text">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
