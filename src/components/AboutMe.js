import React from 'react';
import "./styles.css";
import photo from "./assets/yo.png"

function AboutMe () {
    return (
        <div className="card mb-3">
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src={photo} className="card-img" alt="Logo" />
                </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">ABOUT ME</h5>
                  <p className="card-text">Graphic and strategic designer by profession. Theatre producer and metal bands manager by coincidence. Studied both my degree and masters in la Ibero.</p> 
                  <p className="card-text">I have a 3 year expierience in digital media, and I own an art and design studio with my best friend as a partner. Actually, I'm a web development padawan.</p>
                  <p className="card-text">I love animals, but I consider myself a shark geek. I have one cat, named Ramona after Ramona Flowers, Scott Pilgrim's character .</p>
                  <p className="card-text">I'm a photographer, illustrator and painter. I love coffee, beer, literature, cinema and box.</p> 
                  <p className="card-text">My dream is to live on the beach and free dive with sharks. Go to metal festivals, and concerts is the thing that makes me feel more alive.</p> 
                  <p className="card-text">Feel free to contact me :)</p>
                </div>
              </div>
            </div>
        </div>
    )
}


export default AboutMe;