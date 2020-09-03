import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Wrapper from './components/Wrapper';
import AboutMePage from './pages/aboutme';
import PortfolioPage from './pages/portfolio';
import ContactPage from './pages/contact';

import './App.css';


function App() {
  return (
   <Wrapper>
     <Router>
       <>
        <Switch>
          <Route exact path="/react_portfolio" component={AboutMePage}/>
          <Route exact path="/portfolio" component={PortfolioPage}/>
          <Route exact path="/contact" component={ContactPage} />
        </Switch> 
       </>
     </Router>
   </Wrapper>
  );
}

export default App;
