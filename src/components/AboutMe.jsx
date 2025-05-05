import React from "react";
import '../css/AboutMe.css'

function AboutMe() {
  return (
    <div className="information">
      
      <div className="info-me">
        <h3>Hi, I’m Doğukan.</h3>

        <div style={{display:'flex'}}>
          <p>I’m a software engineering student.</p>
          <img src="src\images\dogukanpng.png" alt="dogukanpng" />
        </div>
      </div>

      <div className="about-me">
        <h3>About Me</h3>
        <p>
          I'm a software engineering student and a
          frontend developer focused on building
          responsive, modern web apps with React.<br></br>
          -<br></br>
          Currently learning and building as much as
          I can. Always down for cool side projects
          and leveling up.
        </p>
      </div>

      
    </div>
  );
}

export default AboutMe;
