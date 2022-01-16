import React from 'react';
import '../../Styles/Shared-Styles/Title-Image/TitleImage.css'


const TitleImage = ({image, imageAlt, title, bgColor, textColor='black'}) => {
    return (
        <div className="title-image">
            <div className="title-img">
                <img src={image} alt={imageAlt} />
            </div>
            <div className={`title-color ${bgColor}`}>
            </div>
            <div className='title-content'>
                <h2 className={textColor}>{title}</h2>
            </div>
        </div>
    );
};

export default TitleImage;