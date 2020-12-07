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
import w11 from "./assets/imgs/w11.png";


function Portfolio() {
  return(
    <div className="container">
            <div className="row">
                <div className="col-xs">
                    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={w1} className="d-block w-100 img-fluid" alt="concert" />
                                <div class="carousel-caption d-none d-md-block">
                                    <a href = "https://videl90.github.io/Band-Tracker/" class="linkWeb">Band Tracker</a>
                                    <p class="webInfo">The perfect app for music junkies, to keep track of their favorite bands and their next events</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={w2} className="d-block w-100 img-fluid" alt="concert" />
                                <div class="carousel-caption d-none d-md-block">
                                    <a href = "https://videl90.github.io/shark_quiz/" class="linkWeb">Shark Quiz!</a>
                                    <p class="webInfo">How much do you know about sharks? Let's find it out</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={w3} className="d-block w-100 img-fluid" alt="concert" />
                                <div class="carousel-caption d-none d-md-block">
                                    <a href = "https://videl90.github.io/daily-planner/" class="linkWeb">Work Day Scheduler</a>
                                    <p class="webInfo">Keep your day tasks organized and saved</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={w4} className="d-block w-100 img-fluid" alt="concert" />
                                <div class="carousel-caption d-none d-md-block">
                                    <a href = "https://videl90.github.io/06-Weather-Dashboard/" class="linkWeb">Weather Dashboard</a>
                                    <p class="webInfo">Know the current and the next 5 days weather of any city</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={w5} className="d-block w-100 img-fluid" alt="concert" />
                                <div class="carousel-caption d-none d-md-block">
                                    <a href = "https://github.com/Videl90/README-generator" class="linkWeb">Good README Generator</a>
                                    <p class="webInfo">App that gives the user an easier way to create MD docomentation for each project</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={w6} className="d-block w-100 img-fluid" alt="concert" />
                                <div class="carousel-caption d-none d-md-block">
                                    <a href = "https://quarentinesover.herokuapp.com" class="linkWeb">Quarantine's Over</a>
                                    <p class="webInfo">We are all looking forward to make plans again. Use this app to have track of all your plans after this Quarantine's -finally- Over</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={w7} className="d-block w-100 img-fluid" alt="concert" />
                                <div class="carousel-caption d-none d-md-block">
                                    <a href = "https://github.com/Videl90/team_generator" class="linkWeb">Team Generator</a>
                                    <p class="webInfo">This app, let any manager, add new members and have all the team information together. </p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={w8} className="d-block w-100 img-fluid" alt="concert" />
                                <div class="carousel-caption d-none d-md-block">
                                    <a href = "https://eat-da-veggie-burger.herokuapp.com/" class="linkWeb">Eat-da-Veggie-Burger</a>
                                    <p class="webInfo">Use this app to keep track of all the burgers you'd like to devour, and the one's you haven't...yet.</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={w9} className="d-block w-100 img-fluid" alt="concert" />
                                <div class="carousel-caption d-none d-md-block">
                                    <a href = "https://radiant-citadel-59553.herokuapp.com" class="linkWeb">Workout Dashboard</a>
                                    <p class="webInfo">Keep track of your daily workout and render your stats!</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={w10} className="d-block w-100 img-fluid" alt="concert" />
                                <div class="carousel-caption d-none d-md-block">
                                    <a href = "https://radiant-tor-52968.herokuapp.com/" class="linkWeb">Online/Offline Budget Tracker</a>
                                    <p class="webInfo">Use this progressive web app for keeping control of your budget. You can use it offline too</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={w11} className="d-block w-100 img-fluid" alt="app" />
                                <div class="carousel-caption d-none d-md-block">
                                    <a href = "hhttps://arctic-tern.herokuapp.com/" class="linkWeb">Arctic Tern - Traveling App</a>
                                    <p class="webInfo">Your new favorite traveling planner</p>
                                </div>
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