import React from "react";
import "../css/Header.css";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Header() {
  const handleLinkedin = () => {
    window.open("https://www.linkedin.com/in/do%C4%9Fukan-%C3%B6ks%C3%BCz-144377237/", "_blank")
  }
  const handleTwitter = () => {
    window.open("https://x.com/dogukanoksz", "_blank")
  }
  const handleGithub = () => {
    window.open("https://github.com/oksuzdogukan", "_blank")
  }

  const handleWebsite = () => {
    window.location.href = "http://localhost:5173/";
  }


  return (
    <div className="header">

      <div className="header-title" onClick={handleWebsite}>
        <h1>Doğukan Öksüz</h1>
      </div>

      <div className="icons">
        <FaLinkedin className="icon" onClick={handleLinkedin}/>
        <FaTwitter className="icon" onClick={handleTwitter}/>
        <FaGithub className="icon" onClick={handleGithub}/>
      </div>

    </div>
  );
}

export default Header;
