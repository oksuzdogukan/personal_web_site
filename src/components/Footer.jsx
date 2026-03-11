import React from 'react'
import '../css/Footer.css'
import { FaLinkedin, FaXTwitter, FaGithub, FaHeart } from "react-icons/fa6";
import { MdEmail, MdLocationOn } from "react-icons/md";

const SOCIALS = [
  { Icon: FaLinkedin, url: "https://www.linkedin.com/in/do%C4%9Fukan-%C3%B6ks%C3%BCz-144377237/", label: "LinkedIn", color: "#0A66C2" },
  { Icon: FaGithub, url: "https://github.com/oksuzdogukan", label: "GitHub", color: "#e2e8f0" },
  { Icon: FaXTwitter, url: "https://x.com/dogukanoksz", label: "X (Twitter)", color: "#e2e8f0" },
];

const NAV_LINKS = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
];

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" id="footer">
      {/* Top gradient line */}
      <div className="footer-top-line" />

      <div className="section-container footer-content">
        {/* Main grid */}
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <a href="#" className="footer-logo">
              <span className="logo-bracket">&lt;</span>
              <span className="logo-text">Doğukan</span>
              <span className="logo-slash">/</span>
              <span className="logo-bracket">&gt;</span>
            </a>
            <p className="footer-tagline">
              Building web experiences that are fast, accessible, and beautiful.
              One component at a time.
            </p>
            <div className="footer-socials">
              {SOCIALS.map(({ Icon, url, label, color }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="footer-social-btn"
                  style={{ '--social-color': color }}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="footer-col">
            <h3 className="footer-col-title">Navigation</h3>
            <ul className="footer-nav-list">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="footer-nav-link">{label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h3 className="footer-col-title">Get In Touch</h3>
            <ul className="footer-contact-list">
              <li>
                <a href="mailto:oksuz.dogukan@gmail.com" className="contact-row">
                  <span className="contact-icon-wrap">
                    <MdEmail />
                  </span>
                  <span>oksuz.dogukan@gmail.com</span>
                </a>
              </li>
              <li>
                <div className="contact-row">
                  <span className="contact-icon-wrap">
                    <MdLocationOn />
                  </span>
                  <span>Turkey 🇹🇷</span>
                </div>
              </li>
            </ul>

            <a href="mailto:oksuz.dogukan@gmail.com" className="btn btn-primary footer-cta">
              Let's Talk
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p>
            © {year} Doğukan Öksüz. All rights reserved.
          </p>
          <p className="footer-made-with">
            Made with <FaHeart className="heart-icon" /> and React
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer