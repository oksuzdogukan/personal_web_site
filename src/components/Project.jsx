import React, { useEffect, useState } from 'react'
import { FaGithub } from "react-icons/fa";
import axios from 'axios';
import '../css/Project.css'


function Project() {

    const [projects, setProjects] = useState([]);


    const formatName = (name) => 
        name
          .split('_') // 1. Adım: "_" ile ayırıyoruz.
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // 2. Adım: İlk harfi büyük yapıyoruz
          .join(' '); // 3. Adım: Sonra bu kelimeleri birleştiriyoruz
      


    useEffect(() => {
        
        const fetchProjects = async () => {
            try {
                const { data: folders } = await axios.get("https://api.github.com/repos/oksuzdogukan/react_projects/contents");
                
                const onlyDirs = folders.filter((item) => item.type === 'dir');

                const projectsData = onlyDirs.map((folder) => ({
                    name: formatName(folder.name),
                    link: folder.html_url,
                }));

                setProjects(projectsData);
            } catch (error) {
                console.log(error);
            }
        };

        fetchProjects();

    }, []);



  return (
    <div className='projects'>
        
          
              {projects.map((proj, i) => (
                <div className='project' key={i} >
                      
                      <h4 className='project-title' style={{ fontSize:'24px'}}>{proj.name}</h4>
                      
                      <FaGithub />
                      
                      <a href={proj.link} target='_blank'> Go Project</a>
                    
                      
                </div>

              ))}

          
    </div>
  )
}

export default Project