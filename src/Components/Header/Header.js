
import "./style.css";
import React from "react";
// import FPLogo from "../../Assets/FPLogo.jpeg";       WILL BE IMPORTED LATER
import { HashRouter } from "react-router-dom";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="Header">
      <HashRouter basename="/">
        <div className="header-logo-container">
          {/* <img src={FPLogo} alt="logo" className="logo" /> */}
        </div>
        <div className="header-options-container">
          <ul className="header-option-list">
            <li className="header-list">
              <Link to="/" style={{
                textDecoration: 'none',
                color: 'inherit'
              }}> 
                Home
              </Link>
            </li>
            <li className="header-list">
              <Link to="/about-us" style={{
                textDecoration: 'none',
                color: 'inherit'
              }}>
                About Us
              </Link>
            </li>
            <li className="header-list">
              <Link to="/events" style={{
                textDecoration: 'none',
                color: 'inherit'
              }}>
                Events
              </Link>
            </li>
            <li className="header-list">
              <Link to="/programs" style={{
                textDecoration: 'none',
                color: 'inherit'
              }}>
                Programs
              </Link>
            </li>
            <li className="header-list">
              <Link to="engage" style={{
                textDecoration: 'none',
                color: 'inherit'
              }}>
                Engage
              </Link>
            </li>
            <li className="header-list">
              <Link to="contact-us" style={{
                textDecoration: 'none',
                color: 'inherit'
              }}>
                Contact Us
              </Link>
            </li>
            <li className="header-list">
              <Link to="blogs" style={{
                textDecoration: 'none',
                color: 'inherit'
              }}>
                Blogs
              </Link>
            </li>
          </ul>
        </div>
      </HashRouter>
    </div>
  )
}

export default Header;