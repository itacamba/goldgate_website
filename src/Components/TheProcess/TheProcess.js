import React from 'react';
import './TheProcess.css'
import '../../Styles/Shared-Styles/Flex-Gallery/FlexGallery.css'

const TheProcess = () => {

    const steps = [
        {
            number: '1',
            title: 'Complete the form',
            content: `Fill out the Contact Us form and press
            ‘Send’. We will get back to you within 24
            hours with a date and time scheduled for
            our on-site measuring meeting.`
        },
        {
            number: '2',
            title: 'On-site Meeting',
            content: `For this meeting our goal will
            be to take measurements, talk about
            the color, design and utility of your 
            project, and depending on the type of project 
            we will either give you a quote on-site or 
            within 24 hours.`
        },
        {
            number: '3',
            title: 'We Fabricate',
            content: `Our Fabrication time depends on the scope 
            and type of materials your project requires. We are 
            the fastest company in the area when it comes to 
            fabrication and installation of countertops.`
        },
        {
            number: '4',
            title: 'Installation',
            content: `We understand how important it is for you to 
            have a working kitchen as fast as possible. That’s why 
            once the countertop has been fabricated, we proceed to 
            remove your current countertop and place the new one 
            within 2 days.`
        },
        {
            number: '5',
            title: 'Enjoy!',
            content: `Now you get to enjoy your new finished kitchen.`
        },
    ]
    return (
        <div className='process' id="process">
            <div className="deco-art"></div>
            <h2>THE PROCESS</h2>
            <div className="flex-gallery">
                {
                    steps.map((step, i) => 
                    <div className="gallery-card" key={i}>
                        <div className="number-title">
                            <div className="gallery-card-circle">
                                {step.number}
                            </div>
                            <h3>{step.title}</h3>
                        </div>
                        <p>{step.content}</p>
                    </div>        
                    )
                }
            </div>
        </div>
    );
};

export default TheProcess;