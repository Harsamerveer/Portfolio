import './index.scss'
import { useState } from 'react'
import LogoSubtitle from '../../assets/Images/Harsamerveer.gif'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'
import {
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons'

import { GrProjects } from "react-icons/gr";
import { Link, NavLink } from 'react-router-dom'

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    
    <div className="nav-bar"> 
      <Link 
        className="logo"
        to="/"
        onClick={() => setShowNav(false)}>
        <img className="sub-logo-int" src={LogoSubtitle} alt="Harsamerveer"/>
      </Link>
      <nav className={showNav ? 'mobile-show' : ''}>
        
        <NavLink
          activeclassname="active"
          className="projects-link"
          to="/projects"
          onClick={() => setShowNav(false)}
        >
          <GrProjects color="#4d4d4e" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="contact-link"
          to="/contact"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>

      </nav>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/harsamerveer-singh/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              size='4x'
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Harsamerveer"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              size='4x'
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
        
      </ul>
  
    </div>
  )
}

export default Sidebar
