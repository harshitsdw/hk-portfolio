"use client";

import { useState } from "react";
import { testimonials } from "@/data/portfolio";
import { IconQuote } from "./Icons";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="section-ultra-padded" id="testimonials">
      <div className="container">
        {/* Row Header with Navigation Arrows */}
        <div className="section-head-flex">
          <div>
            <div className="section-badge-pill">
              <span className="badge-dot" />
              <span>TESTIMONIALS</span>
            </div>
            <h2 className="section-ultra-title">
              What Clients &amp; Teams Say.<br />
              <span className="gradient-shimmer">Trusted for Quality &amp; Speed.</span>
            </h2>
            <p className="section-ultra-subtitle">
              Feedback from project managers, founders, and engineering leads I&apos;ve collaborated with.
            </p>
          </div>

          <div className="carousel-control-arrows">
            <button
              type="button"
              className="carousel-nav-btn"
              onClick={prevSlide}
              aria-label="Previous testimonial"
            >
              ←
            </button>
            <button
              type="button"
              className="carousel-nav-btn"
              onClick={nextSlide}
              aria-label="Next testimonial"
            >
              →
            </button>
          </div>
        </div>

        {/* 3 Testimonials Cards Grid */}
        <div className="testimonials-grid-three">
          {testimonials.map((t, idx) => (
            <div
              className={`testimonial-ultra-card ${idx === currentIndex ? "is-featured-slide" : ""}`}
              key={t.author}
            >
              <div className="quote-mark-svg">
                <IconQuote className="quote-gold-icon" />
              </div>
              <p className="testimonial-quote-text">&ldquo;{t.quote}&rdquo;</p>

              <div className="testimonial-client-info">
                <div className="client-avatar-pill">{t.avatar}</div>
                <div className="client-name-role">
                  <strong>{t.author}</strong>
                  <small>
                    {t.role}, {t.company}
                  </small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
