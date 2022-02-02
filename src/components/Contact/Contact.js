import React from 'react';
import './Contact.css';
import TextField from '@mui/material/TextField';
import emailjs from 'emailjs-com';
import Fade from 'react-reveal/Fade';
import { TextareaAutosize } from '@mui/material';






const Contact = () => {


    const handleSubmit = e => {
        e.preventDefault();


        emailjs.sendForm('service_ljjmrr6', 'template_40fu3hc', e.target, 'user_olSdnmTSJd55d19AXxoDs')
            .then((result) => {
                if (result) {
                    alert('Your email send successfully')
                }
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }


    return (
        <>

            <div className="contact-body">
                <Fade bottom duration={2500} distance="100px"><h1 className="fw-bold text-light text-center">CONTACT ME</h1></Fade>
                <Fade bottom duration={2500} distance="100px">
                    <section id="contact">
                        <div className="contact-box">
                            <div className="contact-links" style={{ backgroundColor: '#6a9ac4' }}>
                                <h2>CONTACT ME</h2>
                                <div className="links">
                                    <div className="link">
                                        <a href='/home#home'><img className='contact-img' src="https://i.postimg.cc/m2mg2Hjm/linkedin.png" alt="linkedin" /></a>
                                    </div>
                                    <div className="link">
                                        <a href='/home#home'><img className='contact-img' src="https://i.postimg.cc/YCV2QBJg/github.png" alt="github" /></a>
                                    </div>
                                    <div className="link">
                                        <a href='/home#home'><img className='contact-img' src="https://i.postimg.cc/W4Znvrry/codepen.png" alt="codepen" /></a>
                                    </div>
                                    <div className="link">
                                        <a href='/home#home'><img className='contact-img' src="https://i.postimg.cc/NjLfyjPB/email.png" alt="email" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="contact-form-wrapper bg-light">
                                <form onSubmit={handleSubmit}>
                                    <div className="form-item">
                                        <TextField className="w-100 mb-2" variant="standard" label='Enter Your Name' type="text" name="sender" required />
                                        {/* <label>Name:</label> */}
                                    </div>
                                    <div className="form-item">
                                        <TextField className="w-100 mb-2" variant="standard" label='Enter Your Email' type="email" name="email" required />
                                        {/* <label>Email:</label> */}
                                    </div>
                                    <p className=''>Enter Your Message:</p>
                                    <div className="form-item">
                                        <TextareaAutosize label='Enter Your Message' placeholder='Enter Your Message' minRows={5} className="" name="message" required></TextareaAutosize>
                                    </div>
                                    <button type='submit' className="submit-btn">Send</button>
                                </form>
                            </div>
                        </div>
                    </section>
                </Fade>
            </div>
        </>
    );
};

export default Contact;