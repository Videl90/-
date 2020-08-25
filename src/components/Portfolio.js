import React from 'react';
import "./styles.css";

function Portfolio () {
    return (
        <>
        <div className="container">
            <div className="row">
                <div className="col-sm">
                    <a href="portfolio_concerts.html"><div class="thumbImg"></div></a>
                </div>
                <div className="col-sm">
                    <a href="portfolio_nature.html"><div class="thumbImg1"></div></a>
                </div>
                <div className="col-sm">
                    <a href="portfolio_theatre.html"><div class="thumbImg2"></div></a>
                </div>
                <div className="col-sm">
                    <a href="portfolio_painting.html"><div class="thumbImg3"></div></a>
                </div>
                <div className="col-sm">
                    <a href="portfolio_digital.html"><div class="thumbImg4"></div></a>
                </div>
                <div className="col-sm">
                    <a href="portfolio_drawings.html"><div class="thumbImg5"></div></a>
                </div>
                <div className="col-sm">
                    <a href="portfolio_web.html"><div class="thumbImg6"></div></a>
                </div>
            </div>
        </div>
        </>
    )
}


export default Portfolio;