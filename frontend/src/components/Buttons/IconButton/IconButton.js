import React from 'react';
import { Link } from 'react-router-dom';
import './IconButton.css';

const IconButton = ({ children, link, icon }) => {
    return (
        <Link to={link ? "/login/mobile" : "/"} className="iconButton-container">
            <button className="iconButton">
                <img className="icon" src={icon} alt="icon" />
                {children}
            </button>
        </Link>

    )
}

export default IconButton;
