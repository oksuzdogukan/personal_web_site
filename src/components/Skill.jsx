import React from "react";

function Skill({ title, image, alt }) {
  return (
    <div className="skills">
        
      <div className="skill">
        <img src={image} alt={alt} />
        <h5>{ title }</h5>
      </div>
      
    </div>
  );
}

export default Skill;
