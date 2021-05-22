import React from 'react';
import './OrangeButton.css';

const OrangeButton = ({ mainText, subText, type }) => {
    return (
        <button type={type ? type : "button"} className="button orange-button">
            <h6 className="mainText">{mainText}</h6>
            {subText ? <p className="subText">{subText}</p> : null}
        </button>
    )
}

export default OrangeButton
