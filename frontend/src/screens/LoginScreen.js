import React from 'react';
import { Link } from 'react-router-dom';
import Brand from '../components/Brand/Brand';
import SideBar from '../components/SideBar/SideBar';
import logo from '../assets/logo.png';
import bg2 from '../assets/Bg22.png';
import bgLogo2 from '../assets/object2.png';
import mobileIcon from '../assets/icon_mobile.png';
import fbIcon from '../assets/icon_fb.png';
import googleIcon from '../assets/icon_google.png';
import mailIcon from '../assets/icon_mail.png';
import IconButton from '../components/Buttons/IconButton/IconButton';
import './LoginScreen.css';

const LoginScreen = () => {

    return (
        <div className="outer-container">
            <div className="left-panel">
                <Brand imageSRC={logo}>Tiffina</Brand>
                <SideBar backgroundImage={bg2} backgroundLogo={bgLogo2} mainHeading="HURRY!!!" subHeading="Your Delicious Food is waiting for you" />
            </div>
            <div className="main-container">
                <div className="back-button-container">
                    <Link to="/"><button className="back-button"><i class="fas fa-arrow-circle-left"></i> Go Back</button></Link>
                </div>
                <div class='btn-grp'>
                    <IconButton icon={mobileIcon} link="/login/mobile"> Enter Your Mobile Number</IconButton>
                    <IconButton icon={fbIcon}> Continue with Facebook</IconButton>
                    <IconButton icon={googleIcon}> Continue with Google</IconButton>
                    <IconButton icon={mailIcon}> Continue with Email</IconButton>
                </div>
            </div>
        </div>
    );
}

export default LoginScreen;
