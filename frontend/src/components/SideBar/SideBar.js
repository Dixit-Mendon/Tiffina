import React from 'react';
import DisplayPicture from './DisplayPicture/DisplayPicture';
import Content from './Content/Content';
import './SideBar.css';

const SideBar = ({ backgroundImage, backgroundLogo, mainHeading, subHeading }) => {
    return (
        <div className="sidebar-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <DisplayPicture backgroundImage={backgroundImage} backgroundLogo={backgroundLogo} />
            <Content heading={mainHeading} subHeading={subHeading} />
        </div>
    )
}

export default SideBar
