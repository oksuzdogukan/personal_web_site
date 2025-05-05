import React from 'react'
import Project from './Project'
import '../css/MyProjects.css'

function MyProjects() {


  return (
    <div className='my-projects'>

        <div className='my-project-title'>
          <h4>My Projects</h4>
        </div>
        
        
          <Project/>
        
    </div>
  )
}

export default MyProjects