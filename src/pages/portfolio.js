import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Portfolio from '../components/Portfolio';

function PortfolioPage(){
    return(
        <>
            <Navbar></Navbar>
            <Portfolio></Portfolio>
            <Footer></Footer>
        </>
    )
}

export default PortfolioPage;