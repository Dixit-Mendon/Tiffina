import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Brand from '../components/Brand/Brand';
import SideBar from '../components/SideBar/SideBar';
import logo from '../assets/logo.png';
import bg3 from '../assets/Bg23.png';
import bgLogo3 from '../assets/object3.png';
import OrangeButton from '../components/Buttons/OrangeButton/OrangeButton';
import './LoginMobile.css';

const LoginMobile = () => {
    const [mobileNumber, setMobileNumber] = useState(null);
    const [clickedProceed, setClickedProceed] = useState(false);

    const submitHandler = (e) => {
        e.preventDefault();
        setClickedProceed(true);
    }

    return (
        <div className="outer-container">
            <div className="left-panel">
                <Brand imageSRC={logo}>Tiffina</Brand>
                <SideBar backgroundImage={bg3} backgroundLogo={bgLogo3} mainHeading="HURRY!!!" subHeading="Get Tasty Food At Your Doorstep " />
            </div>
            <div className="main-container">
                <div className="back-button-container">
                    <Link to="/login"><button className="back-button"><i class="fas fa-arrow-circle-left"></i> Go Back</button></Link>
                </div>
                <div class="loginMobile-container">
                    <form onSubmit={submitHandler}>
                        <div className="mobileNumber-container">
                            <h1>LOGIN</h1>
                            <label>Enter your Mobile Number</label>
                            <div>
                                <input type="number" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} />
                            </div>
                        </div>

                        {clickedProceed && mobileNumber.length === 10 ?
                            <div className="otp-container">
                                <h1>VERIFY OTP</h1>
                                <label>OTP Sent to {mobileNumber}</label>
                                <div id="divOuter">
                                    <div id="divInner">
                                        <input id="partitioned" type="number" maxlength="4" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');" onKeyPress="if(this.value.length===4) return false;" />
                                    </div>
                                </div>
                            </div>
                            : null
                        }

                        <OrangeButton type="submit" mainText="PROCEED" subText={null} />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default LoginMobile;
