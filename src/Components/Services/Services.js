import React from 'react';
import './Services.css'
import '../../Styles/Shared-Styles/Flex-Gallery/FlexGallery.css';
import Countertops from '../../Images/icon_countertops.png';
import Cabinetry from '../../Images/icon_cabinetry.png';
import Walls from '../../Images/icon_walls.png';

const Services = () => {
    const services = [
        {
            img: Countertops,
            title: 'Kitchen Countertops',
            content: `We fabricate and install Quartz, 
            Granite, Marble and Quartzite countertops 
            with different finishes such as flat polish, 
            minor 45 degrees, og, bull nose, full bull nose,
            etc.`
        },
        {
            img: Cabinetry,
            title: 'Cabinetry',
            content: `We fabricate and install cabinets for 
            kitchens, bathrooms, walk-in closets, and more.`
        },
        {
            img: Walls,
            title: 'Wall Installation',
            content: `We fabricate and install granite and marble walls
            for kitchens, walk-in closets, wine cellars, etc.`
        },
    ]


    return (
        <div className='services' id="services">
            <div className="deco-art"></div>
            <h2>OUR SERVICES</h2>
            <div className="flex-gallery">
                {
                    services.map((serv, i) => 
                    <div className="gallery-card" key={i}>
                        <div className="gallery-card-img">
                            <img src={serv.img} alt={serv.title} />
                        </div>
                        <h3>{serv.title}</h3>
                        <p>{serv.content}</p>
                    </div>        
                    )
                }
            </div>
        </div>
    );
};

export default Services;