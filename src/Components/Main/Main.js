import React from 'react';
import './Main.css'
import Hero from '../../Images/hero_marble_kitchen.jpeg';
import Mobile from '../../Images/mobile_kitchen.jpeg';

const Main = () => {
    return (
        <div className='main'>
            <div className="main-img">
                <img src={Hero} alt="marble kitchen" />
            </div>
            <div className="mobile-img">
                <img src={Mobile} alt="" />
            </div>
            <div className="main-content">
                <div className="bar-deco"></div>
                <h1>THE KITCHEN OF YOUR DREAMS</h1>
                <h2>HASSLE FREE</h2>
                <ul>
                    <li>Miami Dade</li>
                    <i className="fas fa-circle"></i>
                    <li>Broward</li>
                    <i className="fas fa-circle"></i>
                    <li>West Palm Beach</li>
                </ul>
                <a href="#contact" className="button">Get Quote</a>
            </div>
        </div>
    );
};

export default Main;