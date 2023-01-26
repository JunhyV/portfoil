import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import Profile from "../components/Profile/Profile";
import moon from '../assets/moon.svg'
import sun from '../assets/sun.svg'
import "./layout.css";

const LayoutPublic = () => {
  const [darkmode, setDarkmode] = useState(true);
  const handleDarkmode = () => setDarkmode(!darkmode)
  return (
    <div className={darkmode ? "layout__mode darkmode" : "layout__mode"}>
        <img onClick={handleDarkmode} className="darkmode__btn" src={darkmode ? moon : sun} alt="darkmode" />
      <div className="layout">
        <div className="layout___aside">
          <Profile />
          <NavBar />
          <Footer />
        </div>
        <Outlet />
      </div>
    </div>
  );
};


export default LayoutPublic;
