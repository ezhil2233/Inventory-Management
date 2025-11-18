import React from "react";
import Styless from "../styles/Header.module.css";

const Header = () => {
  return (
    <nav className={`navbar navbar-expand-lg navbar-light px-3 ${Styless.customWaring}`}>
      <div className="container-fluid">
        {/* Left: Logo */}
        <a className="navbar-brand d-flex align-items-center text-dark fw-bold" href="#">
          
        </a>

        {/* Right: Icons + Profile */}
        <div className="d-flex align-items-center">
          {/* Logout Icon */}
          <i className="bi bi-box-arrow-right"></i>
        </div>
      </div>
    </nav>
  );
};

export default Header;
