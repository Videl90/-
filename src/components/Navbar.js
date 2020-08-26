import React from 'react';
import "./styles.css";
import { Link } from "react-router-dom";

function Navbar( props ) {
      return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link
                   to="/"
                   className = {
                     window.location.pathname === "/" || window.location.pathname === "/about"
                     ? "nav-link" : "nav-link"
                    }>ABOUT ME
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/portfolio"
                    className={
                      window.location.pathname === "/portfolio"
                      ? "nav-link" : "nav-link"
                      }>PORTFOLIO
                    </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/contact"
                    className={
                      window.location.pathname === "/contact"
                      ? "nav-link" : "nav-link"
                      }>CONTACT
                  </Link>
                </li>
              </ul>
            </div>
          </nav>

        )
}

export default Navbar;