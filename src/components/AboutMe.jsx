import React from "react";
import '../css/AboutMe.css';
import dogukanImg from '../images/dogukanpng.png'; // Importing strictly if possible, or using relative path

function AboutMe() {
  return (
    <section className="hero-section" id="about">
      <div className="hero-container">
        <div className="hero-content">
          <h3 className="hero-greeting">Hi, I'm <span className="highlight-text">Doğukan</span></h3>
          <h1 className="hero-title">
            Software Engineering Student & <br/>
            <span className="typewriter">Frontend Developer.</span>
          </h1>
          <p className="hero-description">
            I build responsive, modern web apps with React. 
            Currently learning and building as much as I can. 
            Always down for cool side projects and leveling up.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#footer" className="btn btn-secondary">Contact Me</a>
          </div>
        </div>
        
        <div className="hero-image-container">
            <div className="image-blob"></div>
            <img src={dogukanImg} alt="Doğukan Öksüz" className="hero-image" />
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
