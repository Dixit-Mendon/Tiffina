import React from 'react';
import './DisplayPicture.css';

const DisplayPicture = ({ backgroundLogo }) => {
    return (
        <div className="background-logo-container">
            <img className="background-logo" src={backgroundLogo} alt="backgroundImage" />
        </div>
    );
}

export default DisplayPicture;