import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
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
        <Switch>
        <Wrapper>
            <Route exact path={["/react_portfolio", "/about"]} component={AboutMe} />
            <Route exact path="/portfolio" component={Portfolio}/>
            <Route exact path="/contact" component={Contact}/>
          </Wrapper>
        </Switch>
        <Footer/>
      </div>
    </Router>
    
   
  );
}

export default App;
