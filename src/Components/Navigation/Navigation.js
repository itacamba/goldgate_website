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
                    <a href="tel:954-648-3405"><i className="fas fa-phone"></i></a>
                </div>
                <div className="menu-icon" onClick={() => setOpen(!open)}>
                    <i className="fas fa-bars"></i>
                </div>
                <div className="desktop-nav">
                    <nav>
                        {
                            menuLinks.map((link, i) => 
                            <a key={i} href={link.ref} onClick={() => setOpen(!open)}>{link.name}</a>
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
                        <a key={i} href={link.ref} onClick={() => setOpen(!open)}>{link.name}</a>
                        )
                    }
                        <a href="#contact" className='action-btn' onClick={() => setOpen(!open)}>Contact Us</a>
                    </nav>
                </div>
                : null
            }
        </div>
    );
};

export default Navigation;