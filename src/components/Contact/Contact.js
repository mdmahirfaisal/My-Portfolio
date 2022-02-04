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
            <div className="bg-dark">
                <Fade bottom duration={2500} distance="50px"><h2 className="fw-bold text-light text-center py-5">CONTACT ME</h2></Fade>
                <section id="contact">
                    <div className="contact-box">
                        <Fade left duration={2500} distance="50px">
                            <div className="contact-links" style={{ backgroundColor: '#6a9ac4' }}>
                                <h2 className='contact-h2'>CONTACT ME</h2>
                                <div className="links">
                                    <div className="link">
                                        <a href='https://www.linkedin.com/in/mahir-faisal/'><img className='contact-img' src="https://i.postimg.cc/m2mg2Hjm/linkedin.png" alt="linkedin" /></a>
                                    </div>
                                    <div className="link">
                                        <a href='https://github.com/mdmahirfaisal'><img className='contact-img' src="https://i.postimg.cc/YCV2QBJg/github.png" alt="github" /></a>
                                    </div>
                                    <div className="link">
                                        <a href='https://www.facebook.com/profile.php?id=100069936932811'><img className='contact-img' src="https://pngimg.com/uploads/facebook_logos/facebook_logos_PNG19750.png" alt="codepen" /></a>
                                    </div>
                                    <div className="link">
                                        <a href='mailto:rjmahir.faisal@gmail.com?subject=SendMail&body=Description'><img className='contact-img' src="https://i.postimg.cc/NjLfyjPB/email.png" alt="email" /></a>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                        <Fade right duration={2500} distance="50px">
                            <div className="contact-form-wrapper bg-light">
                                <h5 className='text-secondary text-center fw-bold'>SEND YOUR MESSAGE</h5>
                                <form onSubmit={handleSubmit}>
                                    <div className="form-item">
                                        <TextField className="w-100 mb-2" variant="standard" label='Enter Your Name' type="text" name="sender" required />
                                    </div>
                                    <div className="form-item">
                                        <TextField className="w-100 mb-4" variant="standard" label='Enter Your Email' type="email" name="email" required />
                                    </div>
                                    <div className="form-item">
                                        <TextareaAutosize style={{ width: '100%', padding: '5px' }} className="" label='Enter Your Message' placeholder='Enter Your Message' minRows={5} className="" name="message" required></TextareaAutosize>
                                    </div>
                                    <button type='submit' className="submit-btn">Send</button>
                                </form>
                            </div>
                        </Fade>
                    </div>
                </section>

            </div>
        </>
    );
};

export default Contact;