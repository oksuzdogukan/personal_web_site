import React, { useState, useEffect } from 'react'
import Project from './Project'
import '../css/MyProjects.css'
import axios from 'axios';

function MyProjects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('https://api.github.com/users/oksuzdogukan/repos');
        // Filter out forks or specific repos if needed, and sort by updated_at
        const sortedProjects = response.data
            .filter(repo => !repo.fork) // Optional: hide forks
            .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
            .slice(0, 6); // Top 6 most recent
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
    <section className='projects-section' id='projects'>
        <div className="section-container">
            <div className='section-title'>
              <h2>My Projects</h2>
              <p>Some of my recent work</p>
            </div>
            
            {loading ? (
                <div className="loading">Loading projects...</div>
            ) : (
                <div className="projects-grid">
                    {projects.map(project => (
                        <Project key={project.id} project={project} />
                    ))}
                    {projects.length === 0 && <p className="no-projects">No projects found.</p>}
                </div>
            )}
            
            <div className="see-more">
                <a href="https://github.com/oksuzdogukan" target="_blank" className="btn btn-secondary">See all on GitHub</a>
            </div>
        </div>
    </section>
  )
}

export default MyProjects