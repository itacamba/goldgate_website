import React from 'react';
import './Footer.css'
import Logo from '../../Images/logo.png'

const Footer = () => {
    
    const date =  new Date().getFullYear();

    const skills = [
        'Quartz Countertops',
        'Granite Countertops',
        'Marble Countertops',
        'Quartzite Countertops',
        'Kitchen Cabinetry',
        'Granite Walls'
    ]


    const socialMedia = [
        {
            iconClass: 'fab fa-instagram-square',
            url: 'https://www.instagram.com/goldgate_properties.llc/' 
        },
        {
            iconClass: 'fab fa-facebook-square',
            url: 'https://www.facebook.com/Goldgate-Properties-105978435062520' 
        },
    ]

    return (
        <div className='footer'>

            <div className="logo">
                <img src={Logo} alt="Goldgate Logo" />
            </div>
            <ul>
            <h3>Services</h3>
                {
                    skills.map((skill, i) => 
                    
                    <li key={i}>
                        <i className="far fa-check-circle"></i>
                        {skill}
                    </li>
                    )
                }
            </ul>

            <div className="social-media">
            {
                socialMedia.map((socialLink,i) => 
                <a href={socialLink.url} key={i} target="_blank" rel="noreferrer">
                    <i className={socialLink.iconClass}></i>
                </a>
                )
            }
            </div>

            <div className="address">
                1754 Funston St. <br></br>
                Hollywood, Florida<br></br>
                20171
            </div>
            <div className="copyright">
                <p>Copyright © {date} Goldgate Properties LLC</p>
            </div>
        </div>
    );
};

export default Footer;