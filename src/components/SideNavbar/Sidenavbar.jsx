import React, { useState } from "react";
import "./Sidenavbar.css";
import { Link } from "react-router-dom";

const Sidenavbar = () => {
  const [activeNav, setActiveNav] = useState('Home');

  const handleNavClick = (navItem) => {
    setActiveNav(navItem);
  };

  return (
    <div className="navbar">
      <div className="nav-profile">
        <p>Ankit Sharma</p>
      </div>
      <div className="nav-item">
        <ul>
            <Link to="/" style={{textDecoration:"none", color:"black"}}>
          <li onClick={() => handleNavClick('Home')} className={activeNav === 'Home' ? 'active' : ''}>
              <p>Home</p>
          </li>
            </Link>

            <Link to="/projects" style={{textDecoration:"none" ,color:"black"}}>
          <li onClick={() => handleNavClick('Projects')} className={activeNav === 'Projects' ? 'active' : ''}>
              <p>Projects</p>
          </li>
            </Link>
            <Link to="/About" style={{textDecoration:"none" ,color:"black"}}>
          <li onClick={() => handleNavClick('About')} className={activeNav === 'About' ? 'active' : ''}>
              <p>About</p>
          </li>
            </Link>
            <Link to="/Contact" style={{textDecoration:"none", color:"black"}}>
          <li onClick={() => handleNavClick('Contact')} className={activeNav === 'Contact' ? 'active' : ''}>
              <p>Contact</p>
          </li>
            </Link>
        </ul>
      </div>
    </div>
  );
};

export default Sidenavbar;
