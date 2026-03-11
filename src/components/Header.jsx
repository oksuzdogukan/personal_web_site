import React, { useState, useEffect } from 'react'
import "../css/Header.css";
import { FaLinkedin, FaXTwitter, FaGithub } from "react-icons/fa6";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      // Determine active section
      const sections = ['about', 'skills', 'projects', 'footer'];
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 140) {
          setActiveSection(id);
          return;
        }
      }
      setActiveSection('');
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#' , id: '' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Contact', href: '#footer', id: 'footer' },
  ];

  const socials = [
    { Icon: FaLinkedin, url: "https://www.linkedin.com/in/do%C4%9Fukan-%C3%B6ks%C3%BCz-144377237/", label: "LinkedIn" },
    { Icon: FaXTwitter, url: "https://x.com/dogukanoksz", label: "X (Twitter)" },
    { Icon: FaGithub, url: "https://github.com/oksuzdogukan", label: "GitHub" },
  ];

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`} id="header">
      <div className="header-container">
        {/* Logo */}
        <a className="header-logo" href="#">
          <span className="logo-bracket">&lt;</span>
          <span className="logo-text">Doğukan</span>
          <span className="logo-slash">/</span>
          <span className="logo-bracket">&gt;</span>
        </a>

        {/* Desktop Nav */}
        <nav className="header-nav" aria-label="Main navigation">
          {navLinks.map(({ label, href, id }) => (
            <a
              key={id}
              className={`nav-link ${activeSection === id ? 'active' : ''}`}
              href={href}
            >
              {label}
              <span className="nav-indicator" />
            </a>
          ))}
        </nav>

        {/* Socials + CTA */}
        <div className="header-right">
          <div className="header-socials">
            {socials.map(({ Icon, url, label }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="social-btn"
              >
                <Icon />
              </a>
            ))}
          </div>
          <a href="#footer" className="btn btn-primary header-cta">Hire Me</a>
        </div>

        {/* Mobile hamburger */}
        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {navLinks.map(({ label, href, id }) => (
          <a
            key={id}
            className={`mobile-nav-link ${activeSection === id ? 'active' : ''}`}
            href={href}
            onClick={() => setMenuOpen(false)}
          >
            {label}
          </a>
        ))}
        <div className="mobile-socials">
          {socials.map(({ Icon, url, label }) => (
            <a key={label} href={url} target="_blank" rel="noopener noreferrer" aria-label={label} className="social-btn">
              <Icon />
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Header;
