import React, { useState, useEffect } from 'react'
import "../css/Header.css";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkedin = () => {
    window.open("https://www.linkedin.com/in/do%C4%9Fukan-%C3%B6ks%C3%BCz-144377237/", "_blank")
  }
  const handleTwitter = () => {
    window.open("https://x.com/dogukanoksz", "_blank")
  }
  const handleGithub = () => {
    window.open("https://github.com/oksuzdogukan", "_blank")
  }

  const handleWebsite = () => {
    window.location.href = "/";
  }

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`} id="header">
      <div className="header-container">
        <div className="header-logo" onClick={handleWebsite}>
          <h1>Doğukan<span>.</span></h1>
        </div>

        <nav className="header-nav">
          <a className="nav-link" href="#">Home</a>
          <a className="nav-link" href="#about">About</a>
          <a className="nav-link" href="#skills">Skills</a>
          <a className="nav-link" href="#projects">Projects</a>
          <a className="nav-link" href="#footer">Contact</a>
        </nav>

        <div className="header-socials">
          <FaLinkedin className="social-icon" onClick={handleLinkedin} aria-label="LinkedIn"/>
          <FaTwitter className="social-icon" onClick={handleTwitter} aria-label="Twitter"/>
          <FaGithub className="social-icon" onClick={handleGithub} aria-label="GitHub"/>
        </div>
      </div>
    </header>
  );
}

export default Header;
