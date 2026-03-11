import React, { useRef, useEffect, useState } from 'react'
import '../css/TechSkills.css'
import {
  FaReact, FaHtml5, FaCss3Alt, FaGithub, FaJs, FaGitAlt, FaPython, FaNodeJs
} from "react-icons/fa";
import { SiC, SiCplusplus, SiTailwindcss, SiTypescript, SiNextdotjs } from "react-icons/si";

function TechSkills() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E"},
    { name: "React", icon: <FaReact />, color: "#61DAFB"},
    { name: "React Native", icon: <FaReact />, color: "#61DAFB"},
    { name: "HTML5", icon: <FaHtml5 />, color: "#E34F26"},
    { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6"},
    { name: "TailwindCSS", icon: <SiTailwindcss />, color: "#38B2AC"},
    { name: "Python", icon: <FaPython />, color: "#3776AB"},
    { name: "C", icon: <SiC />, color: "#A8B9CC"},
    { name: "C++", icon: <SiCplusplus />, color: "#00599C"},
    { name: "Git", icon: <FaGitAlt />, color: "#F05032"},
    { name: "GitHub", icon: <FaGithub />, color: "#e2e8f0"},
  ];

  return (
    <section
      className={`skills-section ${visible ? 'visible' : ''}`}
      id="skills"
      ref={sectionRef}
    >
      <div className="section-container">
        <div className="section-title">
          <span className="section-label">What I work with</span>
          <h2>Technical <span>Skills</span></h2>
          <p>Technologies and tools I use to build amazing products</p>
        </div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div
              className="skill-card"
              key={index}
              style={{
                '--hover-color': skill.color,
                '--delay': `${index * 0.06}s`,
              }}
            >
              <div className="skill-card-inner">
                <div
                  className="skill-icon-wrap"
                  style={{ '--icon-color': skill.color }}
                >
                  <span className="skill-icon-bg" />
                  <span className="skill-icon-el">{skill.icon}</span>
                </div>
                <div className="skill-info">
                  <h3 className="skill-name">{skill.name}</h3>
                </div>
              </div>
              {/* Hover shimmer border */}
              <span className="card-shine" aria-hidden="true" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechSkills;