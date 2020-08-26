import React from 'react';
import "./styles.css";

function Footer () {
    return (
        <>
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <p className="copy">Copyright © 2020</p>
                        <div className="icons">
                            <tbody className="table">
                                <tr>
                                    <th scope="col">
                                        <a href="https://www.instagram.com/Videl90/" target="_blank">
                                            <i className="fab fa-instagram"></i>
                                        </a>
                                    </th>
                                    <th scope="col">
                                        <a href="https://www.behance.net/Videl9027" target="_blank">
                                            <i className="fab fa-behance"></i>
                                        </a>
                                    </th>
                                    <th scope="col">
                                        <a href="https://www.linkedin.com/in/lorena-santos-90/"target="_blank">
                                            <i className="fab fa-linkedin-in"></i>
                                        </a>
                                    </th>
                                    <th scope="col">
                                        <a href="https://github.com/Videl90"target="_blank">
                                            <i className="fab fa-github"></i>
                                        </a>
                                    </th>
                                </tr>
                            </tbody>
                        </div>
                    </div>
                </div>      
            </div>
        </footer>
        </>
            
     
    )
}


export default Footer;