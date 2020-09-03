import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AboutMe from '../components/AboutMe';

function AboutMePage(){
    return(
        <>
            <Navbar></Navbar>
            <AboutMe></AboutMe>
            <Footer></Footer>
        </>
    )
}

export default AboutMePage;