import React, { useEffect, useRef, useState } from "react";
import "../css/AboutMe.css";
import dogukanImg from "../images/dogukanpng.png";
import { FaArrowRight, FaDownload } from "react-icons/fa6";

const TYPEWRITER_TEXTS = [
  "Frontend Developer.",
  "React",
  "UI/UX.",
  "Software Engineer.",
];

function AboutMe() {
  const [textIndex, setTextIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  // Typewriter effect
  useEffect(() => {
    const current = TYPEWRITER_TEXTS[textIndex];
    let timeout;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(
        () => setDisplayed(current.slice(0, displayed.length + 1)),
        75,
      );
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(
        () => setDisplayed(current.slice(0, displayed.length - 1)),
        40,
      );
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setTextIndex((i) => (i + 1) % TYPEWRITER_TEXTS.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, textIndex]);

  // Scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Floating orbs
  const orbs = [
    { size: 300, x: -80, y: -60, color: "rgba(139, 92, 246, 0.25)", delay: 0 },
    { size: 200, x: 60, y: 40, color: "rgba(6, 214, 247, 0.18)", delay: 2 },
    { size: 150, x: 20, y: -120, color: "rgba(244, 114, 182, 0.15)", delay: 4 },
  ];

  return (
    <section
      className={`hero-section ${visible ? "visible" : ""}`}
      id="about"
      ref={sectionRef}
    >
      {/* Floating orbs */}
      <div className="hero-orbs" aria-hidden="true">
        {orbs.map((orb, i) => (
          <div
            key={i}
            className="orb"
            style={{
              width: orb.size,
              height: orb.size,
              background: orb.color,
              right: orb.x,
              top: `calc(50% + ${orb.y}px)`,
              animationDelay: `${orb.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Grid pattern */}
      <div className="hero-grid" aria-hidden="true" />

      <div className="hero-container">
        {/* ------ LEFT: TEXT ------ */}
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot" />
            Available for opportunities
          </div>

          <p className="hero-greeting">Hi, I'm</p>

          <h1 className="hero-name">
            <span className="name-highlight">Doğukan</span>
            <br />
            <span className="name-plain">Öksüz</span>
          </h1>

          <div className="hero-role">
            <span className="role-prefix">&lt;</span>
            <span className="typewriter-text">
              {displayed}
              <span className="cursor" aria-hidden="true">
                |
              </span>
            </span>
            <span className="role-prefix">/&gt;</span>
          </div>

          <p className="hero-description">
            Software Engineering student building modern, performant web
            applications with React. Always shipping side projects, always
            leveling up.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View My Work <FaArrowRight />
            </a>
            <a href="#footer" className="btn btn-secondary">
              Contact Me
            </a>
          </div>

          {/* Stats */}
          <div className="hero-stats">
            {[
              { value: "10+", label: "Projects" },
              { value: "2+", label: "Years Coding" },
              { value: "∞", label: "Coffee Cups" },
            ].map(({ value, label }) => (
              <div key={label} className="stat-item">
                <span className="stat-value">{value}</span>
                <span className="stat-label">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ------ RIGHT: IMAGE ------ */}
        <div className="hero-image-wrapper">
          <div className="image-ring image-ring-1" />
          <div className="image-ring image-ring-2" />
          <div className="image-glow" />
          <div className="image-frame">
            <img
              src={dogukanImg}
              alt="Doğukan Öksüz — Frontend Developer"
              className="hero-image"
            />
          </div>

          {/* Floating code badge */}
          {/* <div className="floating-badge badge-top">
            <span className="badge-icon">⚡</span>
            <span>React Dev</span>
          </div>
          <div className="floating-badge badge-bottom">
            <span className="badge-icon">🎯</span>
            <span>Open to work</span>
          </div> */}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <span>Scroll down</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}

export default AboutMe;
