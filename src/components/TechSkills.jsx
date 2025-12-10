import React from 'react'
import '../css/TechSkills.css'
import { FaReact, FaHtml5, FaCss3Alt, FaGithub, FaJs, FaNodeJs } from "react-icons/fa";
import { SiC, SiTailwindcss, SiVite } from "react-icons/si";

function TechSkills() {
  const skills = [
    { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E" },
    { name: "React", icon: <FaReact />, color: "#61DAFB" },
    { name: "HTML5", icon: <FaHtml5 />, color: "#E34F26" },
    { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6" },
    { name: "C Language", icon: <SiC />, color: "#A8B9CC" },
    { name: "GitHub", icon: <FaGithub />, color: "#ffffff" },
  ];

  return (
    <section className='skills-section' id='skills'>
       <div className="section-container">
          <div className='section-title'>
              <h2>Technical Skills</h2>
              <p>Technologies I work with</p>
          </div>

          <div className='skills-grid'>
            {skills.map((skill, index) => (
              <div className="skill-card" key={index} style={{'--hover-color': skill.color}}>
                <div className="skill-icon" style={{color: skill.color}}>
                  {skill.icon}
                </div>
                <h3>{skill.name}</h3>
              </div>
            ))}
          </div>
       </div>
    </section>
  )
}

export default TechSkills