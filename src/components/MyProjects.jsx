import React, { useState, useEffect, useRef } from 'react'
import Project from './Project'
import '../css/MyProjects.css'
import axios from 'axios';
import { FaGithub, FaArrowRight } from 'react-icons/fa6';

function MyProjects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('https://api.github.com/users/oksuzdogukan/repos');
        const sortedProjects = response.data
          .filter(repo => !repo.fork)
          .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
          .slice(0, 6);
        setProjects(sortedProjects);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  return (
    <section
      className={`projects-section ${visible ? 'visible' : ''}`}
      id="projects"
      ref={sectionRef}
    >
      <div className="section-container">
        <div className="section-title">
          <span className="section-label">What I've built</span>
          <h2>My <span>Projects</span></h2>
          <p>A selection of my recent work.</p>
        </div>

        {loading ? (
          <div className="projects-grid">
            {Array.from({ length: 6 }).map((_, i) => (
              <div className="project-skeleton" key={i} />
            ))}
          </div>
        ) : (
          <div className="projects-grid">
            {projects.map((project, index) => (
              <Project key={project.id} project={project} index={index} />
            ))}
            {projects.length === 0 && (
              <p className="no-projects">No projects found.</p>
            )}
          </div>
        )}

        <div className="see-more">
          <a
            href="https://github.com/oksuzdogukan"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            <FaGithub /> View All on GitHub <FaArrowRight />
          </a>
        </div>
      </div>
    </section>
  )
}

export default MyProjects