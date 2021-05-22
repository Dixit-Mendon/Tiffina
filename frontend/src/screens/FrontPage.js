import React from 'react';
import Brand from '../components/Brand/Brand';
import SideBar from '../components/SideBar/SideBar';
import Navigation from '../components/Navigation/Navigation';
import logo from '../assets/logo.png';
import bg1 from '../assets/Bg21.png';
import bgLogo1 from '../assets/object1.png';
import offer1 from '../assets/offer1.jpg';
import offer2 from '../assets/offer2.jpg';
import offer3 from '../assets/offer3.jpg';
import './FrontPage.css';
import OfferDisplay from '../components/OfferDisplay/OfferDisplay';

const FrontPage = () => {
    return (
        <div className="outer-container">
            <div className="left-panel">
                <Brand imageSRC={logo}>Tiffina</Brand>
                <SideBar backgroundImage={bg1} backgroundLogo={bgLogo1} mainHeading="HURRY!!!" subHeading="HUNGER DON'T WAIT" />
            </div>
            <div className="main-container">
                <Navigation />
                <OfferDisplay offer1={offer1} offer2={offer2} offer3={offer3} />
            </div>
        </div>
    );
}

export default FrontPage;
