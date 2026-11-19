"use client";

import { useState } from "react";
import { profile } from "@/data/portfolio";
import {
  IconMail,
  IconWhatsapp,
  IconLinkedin,
  IconGithub,
  IconCopy,
  IconCheck,
  IconArrowUpRight,
  IconSparkles
} from "./Icons";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "Next.js Web Application",
    pricing: "On Request",
    message: ""
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please enter your name, email, and a short message.");
      return;
    }

    const subject = encodeURIComponent(`Project Inquiry: ${formData.projectType} from ${formData.name}`);
    const body = encodeURIComponent(
      `Hello Harshit,\n\nName: ${formData.name} (${formData.email})\nService: ${formData.projectType}\nProject Pricing: ${formData.pricing}\n\nProject Overview:\n${formData.message}`
    );

    window.open(`mailto:${profile.email}?subject=${subject}&body=${body}`, "_blank");
    setSubmitted(true);
  };

  return (
    <section className="section-ultra-padded contact-section-glow" id="contact">
      <div className="container">
        {/* Section Header */}
        <div className="section-ultra-header">
          <div className="section-badge-pill">
            <span className="badge-dot" />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="section-ultra-title">
            Have a Project in Mind?<br />
            <span className="gradient-shimmer">Let&apos;s Build It Together.</span>
          </h2>
          <p className="section-ultra-subtitle">
            Whether you need a dedicated frontend developer, want to convert Figma designs to code, or need an urgent feature sprint — my inbox is open.
          </p>
        </div>

        {/* 2-Column Contact Layout */}
        <div className="contact-two-col-grid">
          {/* Left Column: Direct Channels */}
          <div className="contact-channels-card">
            <div className="contact-response-badge">
              <span className="live-radar-dot">
                <span className="radar-wave" />
                <span className="radar-core" />
              </span>
              <span>Fast Response Time (Typically within 2 hours)</span>
            </div>

            <h3 className="channels-card-title">Direct Communication</h3>
            <p className="channels-card-desc">
              Reach out directly via email, WhatsApp, or schedule an introductory call to discuss your frontend requirements.
            </p>

            {/* Email Box with One-Click Copy */}
            <div className="channel-interactive-box">
              <div className="channel-icon-pill">
                <IconMail className="w-5 h-5" />
              </div>
              <div className="channel-text-details">
                <span className="channel-text-label">Email Address</span>
                <a href={`mailto:${profile.email}`} className="channel-text-val">
                  {profile.email}
                </a>
              </div>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="channel-action-btn"
                title="Copy email to clipboard"
              >
                {copied ? <IconCheck className="text-success w-4 h-4" /> : <IconCopy className="w-4 h-4" />}
                <span>{copied ? "Copied!" : "Copy"}</span>
              </button>
            </div>

            {/* WhatsApp Direct Chat */}
            <div className="channel-interactive-box">
              <div className="channel-icon-pill whatsapp-pill-glow">
                <IconWhatsapp className="w-5 h-5" />
              </div>
              <div className="channel-text-details">
                <span className="channel-text-label">WhatsApp Direct</span>
                <a
                  href={profile.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="channel-text-val"
                >
                  {profile.phone}
                </a>
              </div>
              <a
                href={profile.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="channel-action-btn btn-whatsapp-chat"
              >
                <span>Chat</span>
                <IconArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Location & Remote */}
            <div className="channel-interactive-box channel-location-box">
              <div className="channel-icon-pill">
                <IconSparkles className="w-5 h-5" />
              </div>
              <div className="channel-text-details">
                <span className="channel-text-label">Location &amp; Availability</span>
                <span className="channel-text-val">{profile.location}</span>
              </div>
              <span className="remote-status-tag">Remote Worldwide</span>
            </div>

            {/* Social Profile Pills */}
            <div className="contact-profiles-strip">
              <span className="strip-label">Profiles:</span>
              <div className="strip-pills">
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="profile-link-badge"
                >
                  <IconLinkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                  <IconArrowUpRight className="w-3 h-3" />
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="profile-link-badge"
                >
                  <IconGithub className="w-4 h-4" />
                  <span>GitHub</span>
                  <IconArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="contact-form-glass-card">
            <div className="form-heading-block">
              <h3>Send a Message</h3>
              <p>Fill out the details below to kick off our project conversation.</p>
            </div>

            {submitted ? (
              <div className="form-success-state">
                <div className="success-check-badge">
                  <IconCheck className="w-6 h-6 text-success" />
                </div>
                <h4>Message Draft Prepared!</h4>
                <p>
                  Your email client should have opened with the drafted inquiry. If it didn&apos;t, feel free to email me directly at{" "}
                  <strong>{profile.email}</strong> or message me on WhatsApp at{" "}
                  <strong>{profile.phone}</strong>.
                </p>
                <button
                  type="button"
                  className="btn-glass"
                  onClick={() => setSubmitted(false)}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="project-inquiry-form">
                <div className="form-two-inputs">
                  <div className="form-field-unit">
                    <label htmlFor="name">Your Name / Company *</label>
                    <input
                      type="text"
                      id="name"
                      required
                      placeholder="e.g. John Doe / Acme Inc"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="form-field-unit">
                    <label htmlFor="email">Your Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      required
                      placeholder="e.g. john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-two-inputs">
                  <div className="form-field-unit">
                    <label htmlFor="projectType">Service Needed</label>
                    <select
                      id="projectType"
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    >
                      <option value="Next.js Web Application">Next.js Web Application</option>
                      <option value="Figma to Pixel-Perfect Code">Figma to Pixel-Perfect React Code</option>
                      <option value="CRM & Admin Dashboard">CRM &amp; Admin Dashboard</option>
                      <option value="Frontend Speed & SEO Audit">Speed &amp; SEO Optimization</option>
                      <option value="Full-Time / Contract Frontend Role">Full-Time / Contract Hire</option>
                      <option value="Other Project">Other / Custom Inquiry</option>
                    </select>
                  </div>

                  <div className="form-field-unit">
                    <label htmlFor="pricing">Project Pricing</label>
                    <input id="pricing" type="text" value={formData.pricing} readOnly />
                  </div>
                </div>

                <div className="form-field-unit">
                  <label htmlFor="message">Project Details &amp; Goals *</label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    placeholder="Tell me about your project, target deadline, design status, and any specific requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button type="submit" className="btn-primary-glow btn-submit-wide">
                  <span>Send Project Inquiry</span>
                  <IconArrowUpRight className="btn-icon" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
