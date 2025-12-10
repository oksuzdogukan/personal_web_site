import React from 'react'
import { FaGithub, FaExternalLinkAlt, FaStar, FaCode } from "react-icons/fa";
import '../css/Project.css'

function Project({ project }) {
  return (
    <div className='project-card'>
      <div className="project-content">
        <div className="project-header">
           <div className="folder-icon">
             <FaCode />
           </div>
           <div className="project-links">
             <a href={project.html_url} target="_blank" rel="noopener noreferrer" aria-label="GitHub Repo">
                <FaGithub />
             </a>
             {project.homepage && (
               <a href={project.homepage} target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
                 <FaExternalLinkAlt />
               </a>
             )}
           </div>
        </div>

        <h3 className="project-title">{project.name}</h3>
        <p className="project-description">
          {project.description || "No description available."}
        </p>

        <div className="project-footer">
          <div className="project-tech">
             {project.language && <span>{project.language}</span>}
          </div>
          <div className="project-stats">
            <span><FaStar/> {project.stargazers_count}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project