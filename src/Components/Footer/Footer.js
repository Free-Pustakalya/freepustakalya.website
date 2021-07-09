
import React from 'react';
import "./style.css";
import {Link} from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
import ContactForm from '../ContactUsForm/ContactUsForm';

export default class Footer extends React.Component {
  render() {
    return (
      <div className="Footer" style={{
        padding: '2.4em'
      }}>
        <HashRouter basename="/">
          <div className="Footer-container page-center" style={{
            display: 'grid',
            gridTemplateColumns: '56% auto',
          }}> 
            
            <div className="links-container" style={{
              marginTop: '2.6em'
            }}>
              <div className="links-container-header" style={{
                display: 'grid',
                gridTemplateColumns: 'auto auto auto'
              }}>
                <div className="links-container-header-content">
                  <h3>Site map</h3>
                  <ul className="links-container-list" style={{
                    listStyle: 'none'
                  }}>
                    <li className="links-item">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="links-item">
                      <Link to="/about">About</Link>
                    </li>
                    <li className="links-item">
                      <Link to="/events">Events</Link>
                    </li>
                    <li className="links-item">
                      <Link to="/programs">Programs</Link>
                    </li>
                    <li className="links-item">
                      <Link to="/engage">Engage</Link>
                    </li>
                    <li className="links-item">
                      <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className="links-item">
                      <Link to="/blogs">Blogs</Link>
                    </li>
                  </ul>
                </div>
                <div className="links-container-header-content">
                  <h3>Socials</h3>
                  <ul className="links-container-list" style={{
                    listStyle: 'none'
                  }}>
                    <li className="links-item">
                      <a href="https://www.instagram.com/free_pustakalaya/">Instagram</a>
                    </li>
                    <li className="links-item">
                      <a href="https://www.linkedin.com/company/free-pustakalaya/">LinkedIn</a>
                    </li>
                    <li className="links-item">
                      <a href="/events">Facebook</a>
                    </li>
                    <li className="links-item">
                      <a href="/events">Mail Us</a>
                    </li>
                  </ul>
                </div>
                <div className="links-container-header-content">
                  <h3>Useful Links</h3>
                  <ul className="links-container-list" style={{
                    listStyle: 'none'
                  }}>
                    <li className="links-item">
                      <Link to="/">Team</Link>
                    </li>
                    <li className="links-item">
                      <Link to="/about">Developers</Link>
                    </li>
                    <li className="links-item">
                      <Link to="/events">GitHub</Link>
                    </li>
                    <li className="links-item">
                      <Link to="/events">Contribute</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="links-container-footer" style={{
                marginTop: '1.6em',
                borderTop: '0.4px solid gray',
                paddingTop: '0.4em'
              }}>
                <span style={{
                  color: 'black',
                  textDecoration: 'none'
                }}>
                  All Copyrights are reserved by <b><Link to="/">Free Pustakalya, 2021-22</Link></b>
                </span>
              </div>
            </div>
              <ContactForm />
          </div>
        </HashRouter>
      </div>
    )
  }
}