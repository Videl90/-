import React from 'react';
import "./styles.css";
import w1 from "./assets/imgs/w1.png";
import w2 from "./assets/imgs/w2.png";
import w3 from "./assets/imgs/w3.png";
import w4 from "./assets/imgs/w4.png";
import w5 from "./assets/imgs/w5.png";
import w6 from "./assets/imgs/w6.png";
import w7 from "./assets/imgs/w7.png";
import w8 from "./assets/imgs/w8.png";
import w9 from "./assets/imgs/w9.png";
import w10 from "./assets/imgs/w10.png";


function Portfolio() {
  return(
    <div className="container">
            <div className="row">
                <div className="col-xs">
                    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={w1} className="d-block w-100 img-fluid" alt="concert" />
                                <p className="webInfo">ARMOIRA at Presente Perfecto, Metepec - Nikon D5500 - 2019</p>
                            </div>
                            <div className="carousel-item">
                                <img src={w2} className="d-block w-100 img-fluid" alt="concert" />
                                <p className="webInfo">ARMOIRA at Presente Perfecto, Metepec - Nikon D5500 - 2019</p>
                            </div>
                            <div className="carousel-item">
                                <img src={w3} className="d-block w-100 img-fluid" alt="concert" />
                                <p className="webInfo">ARMOIRA at Presente Perfecto, Metepec - Nikon D5500 - 2019</p>
                            </div>
                            <div className="carousel-item">
                                <img src={w4} className="d-block w-100 img-fluid" alt="concert" />
                                <p className="theatreInfo">ARMOIRA at Presente Perfecto, Metepec - Nikon D5500 - 2019</p>
                            </div>
                            <div className="carousel-item">
                                <img src={w5} className="d-block w-100 img-fluid" alt="concert" />
                                <p className="theatreInfo">ARMOIRA at Presente Perfecto, Metepec - Nikon D5500 - 2019</p>
                            </div>
                            <div className="carousel-item">
                                <img src={w6} className="d-block w-100 img-fluid" alt="concert" />
                                <p className="theatreInfo">ARMOIRA at Presente Perfecto, Metepec - Nikon D5500 - 2019</p>
                            </div>
                            <div className="carousel-item">
                                <img src={w7} className="d-block w-100 img-fluid" alt="concert" />
                                <p className="theatreInfo">ARMOIRA at Presente Perfecto, Metepec - Nikon D5500 - 2019</p>
                            </div>
                            <div className="carousel-item">
                                <img src={w8} className="d-block w-100 img-fluid" alt="concert" />
                                <p className="theatreInfo">ARMOIRA at Presente Perfecto, Metepec - Nikon D5500 - 2019</p>
                            </div>
                            <div className="carousel-item">
                                <img src={w9} className="d-block w-100 img-fluid" alt="concert" />
                                <p className="theatreInfo">ARMOIRA at Presente Perfecto, Metepec - Nikon D5500 - 2019</p>
                            </div>
                            <div className="carousel-item">
                                <img src={w10} className="d-block w-100 img-fluid" alt="concert" />
                                <p className="theatreInfo">ARMOIRA at Presente Perfecto, Metepec - Nikon D5500 - 2019</p>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="sr-only">Next</span>
                    </a>  
                </div>
            </div>
        </div>
  )
}

export default Portfolio;