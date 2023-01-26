import React from "react";
import {motion} from 'framer-motion'
import { Link } from "react-router-dom";
import "./navBar.css";

const NavBar = () => {
  return (
    <motion.nav className="nav"       initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
      duration: .8,
      delay: .2,
      ease: [0, 0.71, 0.2, 1.01],
    }}>
      <Link to="/" className="nav__link">
        <span className="nav__span">01.</span> Home
      </Link>
      <Link to="/about" className="nav__link">
        <span className="nav__span">02.</span> About Me
      </Link>
      <Link to="/projects" className="nav__link">
        <span className="nav__span">03.</span>Projects
      </Link>
      <Link to="/contact" className="nav__link">
        <span className="nav__span">04.</span>Contact
      </Link>
    </motion.nav>
  );
};

export default NavBar;
