import React from 'react';
import { Link } from 'react-router-dom';
import OrangeButton from '../Buttons/OrangeButton/OrangeButton';
import './Navigation.css';

const Navigation = () => {

    return (
        <div className="navigation-container" >
            <Link className="navigation-button-container" to="/login">
                <OrangeButton className="button" mainText="GET STARTED" subText="Avail Best Offers & Discounts Only For You" />
            </Link>
            <Link className="navigation-button-container" to="/">
                <button className="button button-container">Continue without Login</button>
            </Link>
            <Link className="navigation-button-container" to="/login">
                <button className="button button-container">Already a Tiffina Member? <span style={{ color: "#fd5800" }}><b>LOGIN</b></span></button>
            </Link>
        </div>
    );
}

export default Navigation;
