import React, { Component } from 'react';
import { Link, buttonPath } from "react-router-dom";
import "./styles.css";

class Navbar extends Component {
    render() {
      const pageLink = buttonPath();
        return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/aboutme" className= {pageLink.pathname === '/aboutme' ? "nav-link active" : "nav-link"}>ABOUT ME</Link>
                </li>
                <li className="nav-item">
                  <Link to="/aboutme" className={pageLink.pathname === '/aboutme' ? "nav-link active" : "nav-link"}>ABOUT ME</Link>
                  <a className="nav-link" href="portfolio.html">PORTFOLIO</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="contact.html">CONTACT</a>
                </li>
              </ul>
            </div>
          </nav>

        )
    }
}

export default Navbar;