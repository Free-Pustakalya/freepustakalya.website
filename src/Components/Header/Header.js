import React from 'react';
import { HashRouter, Link } from 'react-router-dom';
import './style.css';

export default class Header extends React.Component {
  render() {
    return (
      <div className="Header page-center">
        <HashRouter basename="/">
          <span className="logo-container">
            {/* logo image will be here */}
          </span>
          <span className="header-options-container">
            <ul className="header-options-list">
              <li className="header-option">
                <Link to="/">
                  Home
                </Link>
              </li>
              <li className="header-option">
                <Link to="/about">
                  About Us
                </Link>
              </li>
              <li className="header-option">
                Events
              </li>
              <li className="header-option">
                Programs
              </li>
              <li className="header-option">
                Engage
              </li>
              <li className="header-option">
                Contact Us
              </li>
              <li className="header-option">
                Blogs
              </li>
              <li className="header-option">
                <button className="primary-button">
                  Donate Now
                </button>
              </li>
            </ul>
          </span>
        </HashRouter>
      </div>
    )
  }
}