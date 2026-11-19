"use client";

import { services } from "@/data/portfolio";
import { IconCheck, IconArrowUpRight, IconSparkles } from "./Icons";

export default function Services() {
  return (
    <section className="section-ultra-padded" id="services">
      <div className="container">
        {/* Section Header */}
        <div className="section-ultra-header">
          <div className="section-badge-pill">
            <span className="badge-dot" />
            <span>SERVICES &amp; SOLUTIONS</span>
          </div>
          <h2 className="section-ultra-title">
            How I Can Help<br />
            <span className="gradient-shimmer">Your Product &amp; Business.</span>
          </h2>
          <p className="section-ultra-subtitle">
            Tailored engineering capabilities for startups, agencies, and businesses looking for dependable frontend execution.
          </p>
        </div>

        {/* 4 Services Grid */}
        <div className="services-quad-grid">
          {services.map((service, index) => (
            <div className="service-ultra-card" key={service.id}>
              <div className="service-card-top-index">
                <span className="service-num">0{index + 1}</span>
                <span className="service-star">✦</span>
              </div>

              <h3 className="service-ultra-title">{service.title}</h3>
              <p className="service-ultra-desc">{service.description}</p>

              <div className="service-deliverables-box">
                <span className="deliverables-tag">Key Deliverables:</span>
                <ul>
                  {service.deliverables.map((item) => (
                    <li key={item}>
                      <IconCheck className="service-check-icon" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a href="#contact" className="service-inquire-cta">
                <span>Inquire for this service</span>
                <IconArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </div>

        {/* Value Proposition Strip */}
        <div className="services-guarantee-banner">
          <div className="guarantee-left-info">
            <IconSparkles className="guarantee-sparkle-svg" />
            <div>
              <h4>Looking for a dedicated frontend partner?</h4>
              <p>Available on contract, freelance sprint, or full-time remote capacity with smooth timezone overlap.</p>
            </div>
          </div>
          <a href="#contact" className="btn-primary-glow">
            <span>Book an Intro Call</span>
            <IconArrowUpRight className="btn-icon" />
          </a>
        </div>
      </div>
    </section>
  );
}
