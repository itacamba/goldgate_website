import React, { useRef, useState } from 'react';
import TitleImage from '../TitleImage/TitleImage';
import './Contact.css'
import GoldenKitchen from '../../Images/golden_kitchen.jpeg';
import emailjs from '@emailjs/browser';

const Contact = () => {

    const form = useRef();

    const onSubmit = (e) => {
        e.preventDefault();
        validateForm();
    }
    
    const validateForm = () => {
        let hasErrors = false;
        if(!name){
            hasErrors = true;
        } else if(!email){
            hasErrors = true;
        } else if(!phone){
            hasErrors = true;
        } else if(!message){
            hasErrors = true;
        } else {
            hasErrors = false;
        }

        handleErrors(hasErrors);

    }

    const handleErrors = (hasErrors) => {
        if(hasErrors) {
            setFormErrors(true);
        } else {
            setFormErrors(false);
            sendEmail();
            setSuccess(true);
            setTimeout(() => {
                setSuccess(false)
            }, 3000)
            clearForm();
        }
    }

    const clearForm = () => {
        setName('')
        setEmail('');
        setPhone('');
        setMessage('');
        const checkboxes = document.querySelectorAll('input[type=checkbox]')
        checkboxes.forEach(box => box.checked = false)
        
    }


    const sendEmail = () => {        
        emailjs.sendForm('service_b8hz6ha', 'template_f39ec09', form.current, 'user_w9Vww6jbvTrp6yMaHhS2D')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }

    const [formErrors, setFormErrors] = useState(false);
    const [success, setSuccess] = useState(false);

    // inputs
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    return (
        <div className='contact' id="contact">
            <TitleImage title="CONTACT US" image={GoldenKitchen} imageAlt="Gold Kitchen" bgColor="blue" textColor='white'/>
            <div>
            {
                success? 
                <div className="success-message">
                    <h2>Thank you for contacting us!</h2>
                    <p>We will get back to you as soon as possible.</p>
                </div>
                : null
            }
            <form ref={form} className='contact-form' onSubmit={onSubmit}>
                <input type="text" placeholder='FULL NAME' name='name' value={name} onChange={(e) => setName(e.target.value)} />
                <input type="email" placeholder='EMAIL' name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="text" placeholder='PHONE' name='phone' value={phone} onChange={(e) => setPhone(e.target.value)} />
                <textarea type="text" placeholder='MESSAGE' name='message' value={message} onChange={(e) => setMessage(e.target.value)} />
                {         
                formErrors ?
                <div className="form-errors">
                    Please make sure all fields are completed.
                </div>
                : null
                }
                <input type="submit" value="SUBMIT" />
            </form>
            </div>
        </div>
    );
};

export default Contact;