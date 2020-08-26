import React from 'react';
import "./styles.css";
import c1 from "./assets/imgs/c1.png";
import c2 from "./assets/imgs/c2.png";
import c3 from "./assets/imgs/c3.png";
import c4 from "./assets/imgs/c3.png";
import c5 from "./assets/imgs/c3.png";


function Concerts() {
  return(
    <div className="container">
            <div className="row">
                <div className="col-xs">
                    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={c1} className="d-block w-100 img-fluid" alt="concert" />
                                <p className="theatreInfo">ARMOIRA at Presente Perfecto, Metepec - Nikon D5500 - 2019</p>
                            </div>
                            <div className="carousel-item">
                                <img src={c2} className="d-block w-100 img-fluid" alt="concert" />
                                <p className="theatreInfo">ARMOIRA at Presente Perfecto, Metepec - Nikon D5500 - 2019</p>
                            </div>
                            <div className="carousel-item">
                                <img src={c3} className="d-block w-100 img-fluid" alt="concert" />
                                <p className="theatreInfo">ARMOIRA at Presente Perfecto, Metepec - Nikon D5500 - 2019</p>
                            </div>
                            <div className="carousel-item">
                                <img src={c4} className="d-block w-100 img-fluid" alt="concert" />
                                <p className="theatreInfo">ARMOIRA at Presente Perfecto, Metepec - Nikon D5500 - 2019</p>
                            </div>
                            <div className="carousel-item">
                                <img src={c5} className="d-block w-100 img-fluid" alt="concert" />
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

export default Concerts;

