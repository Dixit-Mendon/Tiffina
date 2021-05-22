import React from 'react';
import './Brand.css';

const Brand = ({ children, imageSRC }) => {
    return (
        <div className='brand-container'>
            <img className='brand-logo' src={imageSRC} alt="logo" />
            <h1 className='brand-name'>{children}</h1>
        </div>
    );
}

export default Brand;
