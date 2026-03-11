import React from 'react'
import { FaGithub, FaArrowUpRightFromSquare, FaStar, FaCodeFork } from "react-icons/fa6";
import { VscCode } from "react-icons/vsc";
import '../css/Project.css'

// Language color dots
const LANG_COLORS = {
  JavaScript: '#F7DF1E',
  TypeScript: '#3178C6',
  Python: '#3776AB',
  CSS: '#1572B6',
  HTML: '#E34F26',
  'C++': '#00599C',
  C: '#A8B9CC',
  default: '#8b5cf6',
};

function Project({ project, index }) {
  const langColor = LANG_COLORS[project.language] || LANG_COLORS.default;

  // Format date
  const updated = new Date(project.updated_at);
  const timeAgo = (() => {
    const diff = Date.now() - updated.getTime();
    const days = Math.floor(diff / 86400000);
    if (days === 0) return 'today';
    if (days < 30) return `${days}d ago`;
    if (days < 365) return `${Math.floor(days / 30)}mo ago`;
    return `${Math.floor(days / 365)}y ago`;
  })();

  return (
    <div
      className="project-card"
      style={{ '--card-delay': `${index * 0.07}s` }}
    >
      {/* Top glow bar */}
      <div className="card-top-bar" />

      <div className="project-content">
        {/* Header */}
        <div className="project-header">
          <div className="project-icon-wrap">
            <VscCode className="project-icon" />
          </div>
          <div className="project-links">
            <a
              href={project.html_url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View on GitHub"
              className="project-link-btn"
              title="View on GitHub"
            >
              <FaGithub />
            </a>
            {project.homepage && (
              <a
                href={project.homepage}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Live Demo"
                className="project-link-btn"
                title="Live Demo"
              >
                <FaArrowUpRightFromSquare />
              </a>
            )}
          </div>
        </div>

        {/* Name + description */}
        <h3 className="project-title">{project.name.replace(/-/g, ' ')}</h3>
        <p className="project-description">
          {project.description || "No description available yet."}
        </p>

        {/* Footer */}
        <div className="project-footer">
          <div className="project-meta-left">
            {project.language && (
              <div className="lang-tag">
                <span
                  className="lang-dot"
                  style={{ background: langColor }}
                />
                <span>{project.language}</span>
              </div>
            )}
          </div>
          <div className="project-meta-right">
            <span className="meta-stat" title="Stars">
              <FaStar /> {project.stargazers_count}
            </span>
            <span className="meta-stat" title="Forks">
              <FaCodeFork /> {project.forks_count}
            </span>
            <span className="meta-time">{timeAgo}</span>
          </div>
        </div>
      </div>

      {/* Hover overlay shine */}
      <div className="card-shine-overlay" aria-hidden="true" />
    </div>
  )
}

export default Project