import React from 'react'
import '../css/Footer.css'
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
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
    <footer className='footer' id='footer'>
        <div className="section-container footer-content">
            <div className="footer-main">
                <div className='footer-brand'>
                    <h2>Doğukan<span>.</span></h2>
                    <p>Built with React, caffeine, and mild existential dread.</p>
                </div>
                
                <div className='footer-contact'>
                    <h3>Contact Me</h3>
                    <div className='contact-item'>
                        <CiMail className='contact-icon'/> oksuz.dogukan@gmail.com
                    </div>
                    <div className='footer-socials'>
                         <FaLinkedin className='social-icon' onClick={handleLinkedin}/>
                         <FaGithub className='social-icon' onClick={handleGithub}/>
                         <FaTwitter className='social-icon' onClick={handleTwitter}/>
                    </div>
                </div>
            </div>

            <div className='footer-bottom'>
                <p>© 2025 Doğukan Öksüz. All rights reserved.</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer