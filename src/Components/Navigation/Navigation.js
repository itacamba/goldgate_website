import React, { useState } from 'react';
import './Navigation.css'

const Navigation = () => {

    const [open, setOpen] = useState(false);

    const menuLinks = [
        {
            ref: '#services',
            name: 'Services'
        },
        {
            ref: '#gallery',
            name: 'Gallery'
        },
        {
            ref: '#about',
            name: 'About Us'
        },
        {
            ref: '#process',
            name: 'The Process'
        },
    ]

    return (
        <div className='nav-container'>
            <div className='navigation'>
                <div className="call-btn">
                    <i className="fas fa-phone"></i>
                </div>
                <div className="menu-icon" onClick={() => setOpen(!open)}>
                    <i className="fas fa-bars"></i>
                </div>
                <div className="desktop-nav">
                    <nav>
                        {
                            menuLinks.map((link, i) => 
                            <a key={i} href={link.ref}>{link.name}</a>
                            )
                        }
                        <a href="#contact" className='action-btn'>Contact Us</a>
                    </nav>
                </div>
            </div>

            {
                open ?
                <div className="menu-content">
                    <div className="x-icon" onClick={() => setOpen(!open)}>
                        <i className="fas fa-times"></i>
                    </div>
                    <nav>
                    {
                        menuLinks.map((link, i) => 
                        <a key={i} href={link.ref}>{link.name}</a>
                        )
                    }
                        <a href="#contact" className='action-btn'>Contact Us</a>
                    </nav>
                </div>
                : null
            }
        </div>
    );
};

export default Navigation;