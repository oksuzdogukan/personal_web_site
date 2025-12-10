import React from 'react'
import '../css/TechSkills.css'
import { FaReact, FaHtml5, FaCss3Alt, FaGithub, FaJs, FaGitAlt, FaPython } from "react-icons/fa";
import { SiC, SiCplusplus, SiTailwindcss } from "react-icons/si";

function TechSkills() {
  const skills = [
    { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E" },
    { name: "React", icon: <FaReact />, color: "#61DAFB" },
    { name: "React Native", icon: <FaReact />, color: "#61DAFB" }, // Using React logo for RN
    { name: "HTML5", icon: <FaHtml5 />, color: "#E34F26" },
    { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6" },
    { name: "TailwindCSS", icon: <SiTailwindcss />, color: "#38B2AC" },
    { name: "Python", icon: <FaPython />, color: "#3776AB" },
    { name: "C", icon: <SiC />, color: "#A8B9CC" },
    { name: "C++", icon: <SiCplusplus />, color: "#00599C" },
    { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
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