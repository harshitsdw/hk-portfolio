"use client";

import { useState } from "react";
import { profile } from "@/data/portfolio";
import {
  IconArrowUp,
  IconArrowUpRight,
  IconGithub,
  IconLinkedin,
  IconMail,
  IconWhatsapp
} from "./Icons";

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 3000);
      setNewsletterEmail("");
    }
  };

  return (
    <footer className="footer-ultra-wrapper">
      <div className="container">
        {/* Top Footer Columns */}
        <div className="footer-top-grid">
          {/* Brand Info */}
          <div className="footer-brand-cell">
            <a href="#home" className="footer-gem-logo">
              <div className="brand-gem-symbol">
                <span>HK</span>
              </div>
              <div className="brand-meta-titles">
                <strong>Harshit Kumar</strong>
                <small>{profile.role}</small>
              </div>
            </a>
            <p className="footer-brand-lead">
              Building scalable, high-performance web applications with React.js, Next.js, and TypeScript. Over 100+ live production deliveries across travel, CRM, and media agencies.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-nav-cell">
            <h5>Navigation</h5>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects (14)</a>
            <a href="#experience">Experience</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#contact">Contact</a>
          </div>

          {/* Featured Live Platforms */}
          <div className="footer-nav-cell">
            <h5>Featured Live Platforms</h5>
            <a href="https://zoyotrip.in" target="_blank" rel="noreferrer">
              <span>Zoyo Trip Holiday</span> <IconArrowUpRight className="w-3 h-3" />
            </a>
            <a href="https://travelfusioncrm.com" target="_blank" rel="noreferrer">
              <span>Travel Fusion CRM</span> <IconArrowUpRight className="w-3 h-3" />
            </a>
            <a href="https://whiteoakpictures.in/" target="_blank" rel="noreferrer">
              <span>White Oak Pictures</span> <IconArrowUpRight className="w-3 h-3" />
            </a>
            <a href="https://vistatravelss.com" target="_blank" rel="noreferrer">
              <span>Vista Travels</span> <IconArrowUpRight className="w-3 h-3" />
            </a>
            <a href="https://gashwatechnologies.org/" target="_blank" rel="noreferrer">
              <span>Gashwa Technologies</span> <IconArrowUpRight className="w-3 h-3" />
            </a>
            <a href="https://samasttravel.com" target="_blank" rel="noreferrer">
              <span>Samast Travel</span> <IconArrowUpRight className="w-3 h-3" />
            </a>
          </div>

          {/* Direct Connect */}
          <div className="footer-nav-cell">
            <h5>Direct Connect</h5>
            <a href={`mailto:${profile.email}`}>
              <IconMail className="w-3.5 h-3.5" />
              <span>Email Harshit</span>
            </a>
            <a href={profile.whatsapp} target="_blank" rel="noreferrer">
              <IconWhatsapp className="w-3.5 h-3.5" />
              <span>WhatsApp Direct</span>
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              <IconLinkedin className="w-3.5 h-3.5" />
              <span>LinkedIn Profile</span>
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer">
              <IconGithub className="w-3.5 h-3.5" />
              <span>GitHub Repositories</span>
            </a>
          </div>

          {/* Newsletter Box */}
          <div className="footer-news-cell">
            <h5>Stay Connected</h5>
            <p>Subscribe to receive occasional updates on new projects and frontend engineering insights.</p>
            <form onSubmit={handleSubscribe} className="footer-news-form">
              <input
                type="email"
                placeholder="Enter your email"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
              />
              <button type="submit" className="footer-subscribe-btn">
                {subscribed ? "Subscribed!" : "Subscribe"}
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom-bar">
          <p className="copyright-text">
            &copy; {new Date().getFullYear()} Harshit Kumar. Built with Next.js 15 &amp; TypeScript.
          </p>

          <div className="footer-social-icons-row">
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <IconLinkedin className="w-4 h-4" />
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <IconGithub className="w-4 h-4" />
            </a>
            <a href={profile.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <IconWhatsapp className="w-4 h-4" />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email">
              <IconMail className="w-4 h-4" />
            </a>
          </div>

          <button
            type="button"
            className="footer-back-to-top"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <IconArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
