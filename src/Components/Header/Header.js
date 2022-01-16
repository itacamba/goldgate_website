import React from 'react';
import './Header.css'
import Logo from './../../Images/logo.png';
import Navigation from '../Navigation/Navigation';

const Header = () => {
    return (
        <div className='header'>
            <div className="logo">
                <img src={Logo} alt="" />
            </div>
            <Navigation />
            {/* <a className="button" href="/"> Send </a> */}
        </div>
    );
};

export default Header;