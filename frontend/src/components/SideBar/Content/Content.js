import React from 'react';
import './Content.css';

const Content = ({ heading, subHeading }) => {
    return (
        <div className="content-container">
            <h1 className="content-heading">{heading}</h1>
            <h2 className="content-subheading">{subHeading}</h2>
        </div>
    );
}

export default Content;

