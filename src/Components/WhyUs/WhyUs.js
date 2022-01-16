import React from 'react';
import './WhyUs.css'
import Kitchen from '../../Images/white_countertops.jpeg';

const WhyUs = () => {
    const skills = [
        'Quartz Countertops',
        'Granite Countertops',
        'Marble Countertops',
        'Quartzite Countertops',
        'Kitchen Cabinetry',
        'Granite Walls'
    ]

    return (
        <div className='why-us' id="about">
            <div className="deco-art"></div>
            <h2>WHY CHOOSE US</h2>
            <div className="two-col">
                <div className="col">
                    <p >
                        We are a family owned small business, specialized in 
                        the fabrication and installation of kitchen, bathroom 
                        and walk-in closets countertops in a variety of stones 
                        such as Granite, Quartz, Marble, and Quartzite.
                    </p>

                    <ul>
                        {
                            skills.map((skill, i) => 
                            
                            <li key={i}>
                                <i className="far fa-check-circle"></i>
                                {skill}
                            </li>
                            )
                        }
                    </ul>
                </div>
                <div className="why-us-img col">
                    <img src={Kitchen} alt="green and white kitchen" />
                </div>
            </div>

        </div>
    );
};

export default WhyUs;