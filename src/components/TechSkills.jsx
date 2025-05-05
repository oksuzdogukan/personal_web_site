import React from 'react'
import '../css/TechSkills.css'
import Skill from './Skill'

function TechSkills() {
  return (
    <div className='tech-skills'>
        
          <div className='skills-title'>
              <h4>Technical Skills</h4>
          </div>

          <div className='skills'>
            <Skill title="JavaScript" image="src\images\JavaScript-logo.png" alt="JavaScript"/>
            <Skill title="React" image="src\images\react-logo.png" alt="React"/>
            <Skill title="Html" image="src\images\html-logo.png" alt="Html"/>
            <Skill title="Css" image="src\images\css-logo.png" alt="Css"/>
            <Skill title="C" image="src\images\c-logo.png" alt="C"/>
            <Skill title="" image="" alt="#"/>
          </div>
    </div>
  )
}

export default TechSkills