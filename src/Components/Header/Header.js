
import "./style.css";
import React from "react";
import FPLogo from "../../Assets/FPLogo.jpeg";


function Header() {
  return (
    <div className="Header">
      <div className="header-logo-container">
        <img src={FPLogo} alt="logo" className="logo" />
      </div>
      <div className="header-options-container">
        <ul className="header-option-list">
          <li className="header-list">
            Home
          </li>
          <li className="header-list">
            About Us
          </li>
          <li className="header-list">
            Events
          </li>
          <li className="header-list">
            Programs
          </li>
          <li className="header-list">
            Engage
          </li>
          <li className="header-list">
            Contact Us
          </li>
          <li className="header-list">
            Blogs
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header;