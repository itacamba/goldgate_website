import React from 'react';
import '../Header/Header.css'
import Logo from './../../Images/logo.png';
import './FreeEstimate.css';
import Footer from '../Footer/Footer';

const FreeEstimate = () => {
    return (
        <div className='free-estimate'>
            <div className='header'>
                <a href="/">
                    <div className="logo">
                        <img src={Logo} alt="" />
                    </div>
                </a>
            </div>
            <div className="sales">
                <h2>Upgrading your kitchen countertops can increase the value of your home</h2>
                <p>Scroll down to see our process.</p>
            </div>
            <div className='two-col'>
                <div className="col card">
                    <h3>We have the fastest turnaround in the area.</h3>
                    <p>We do our best to fabricate and install at lightning-speed because
                        we understand how important it is for you to have a working kitchen ASAP.
                    </p>
                    <p>Our installation timeline: 1 - 2 days.
                    </p>
                </div>
                <div className="col">
                    <div className="video">
                        <iframe  src="https://www.youtube.com/embed/4Oe6JdcJuNI?rel=0" title="Goldgate LLC Kitchens" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;" allowFullScreen></iframe>
                    </div>
                </div>
            </div>
            <div className="sales get-quote">
                <h2>Schedule your free in-house consultation now!</h2>
                <a className="button" href="https://calendly.com/goldgate/make-an-appointment?month=2022-02">Click Here to Make an Appointment</a>
            </div>
            <div className="sales wpp">
                <i className="fab fa-whatsapp"></i>
                <h3>Send us a text via Whatsapp</h3>
                <h2>+1 (954) 648-3405</h2>
            </div>
            <div className="sales wpp phone-us">
                <h2>Hablamos Español!</h2>
                <i className="fas fa-phone-alt"></i>
                <h3>For more information, call us or text us!</h3>
                <h3>Para mas informacion llamenos o envienos un mensaje</h3>
                <h2>+1 (954) 648-3405</h2>
            </div>
            <Footer />
        </div>
    );
};

export default FreeEstimate;