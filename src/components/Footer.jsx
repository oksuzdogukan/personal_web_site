import React from 'react'
import '../css/Footer.css'
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { CiMail } from "react-icons/ci";


function Footer() {

    const handleLinkedin = () => {
        window.open("https://www.linkedin.com/in/do%C4%9Fukan-%C3%B6ks%C3%BCz-144377237/", "_blank")
      }
      const handleTwitter = () => {
        window.open("https://x.com/dogukanoksz", "_blank")
      }
      const handleGithub = () => {
        window.open("https://github.com/oksuzdogukan", "_blank")
      }


  return (
    <div className='footer' id='footer'>

        <div className='contact'>
            <h1>About Me →</h1>

            <div className='make-contact' style={{height:'360px'}}>
                <h1>Contact:</h1>
                
                <div className='links'><CiMail className='icon'/> oksuz.dogukan@gmail.com</div>
                <div className='links'><FaLinkedin className='icon' onClick={handleLinkedin}/> Linkedin</div>
                <div className='links'><FaGithub className='icon' onClick={handleGithub}/> Github</div>
                <div className='links'><FaTwitter className='icon' onClick={handleTwitter}/> Twitter</div>
            </div>
            
        </div>

        <div className='copyright'>
            <p>© 2025 Doğukan. All rights reserved.</p>
            <p>Built with React, caffeine, and mild existential dread.</p>
        </div>
    </div>
  )
}

export default Footer