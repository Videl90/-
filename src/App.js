import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Wrapper from './components/Wrapper';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

import './App.css';


function App() {
  return (
    <Router>
      <div>
        <Navbar/>
          <Wrapper>
            <Route exact path="/" component={AboutMe} />
            <Route exact path="/about" component={AboutMe} />
            <Route exact path="/portfolio" component={Portfolio}/>
            <Route exact path="/contact" component={Contact}/>
          </Wrapper>
        <Footer/>
      </div>
    </Router>
    
   
  );
}

export default App;
