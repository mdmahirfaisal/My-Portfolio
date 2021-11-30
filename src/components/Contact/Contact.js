import React from 'react';
import './Contact.css';
import TextField from '@mui/material/TextField';
import { Form } from 'react-bootstrap';
import emailjs from 'emailjs-com';



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
            <section id="contact" className="contact-section">
                <h1 className="fw-bold text-primary pt-5">CONTACT ME</h1>
                <div className="container">
                    <div className="mx-auto p-5" style={{ maxWidth: '800px' }}>
                        <form onSubmit={handleSubmit} className=" row form-control py-3 px-4 border-0 shadow" style={{ borderRadius: '20px' }}>

                            <TextField className="col-12 col-md-5 me-md-2"
                                label="Your Name"
                                type="text"
                                required
                                name="name"
                                variant="standard" />


                            <TextField className="col-12 col-md-5 ms-md-2"
                                label="Your Email"
                                required
                                type="email"
                                name="email"
                                variant="standard" />


                            <TextField className="col-12 col-md-12 ms-md-2 mt-4"
                                label="Your Subject"
                                required
                                type="text"
                                name="subject"
                                variant="standard" />


                            <Form.Label className="text-start  mt-5">Send message</Form.Label>
                            <textarea className="col-12 form-control mb-2" style={{ borderRadius: '10px' }} name="message" placeholder="Description" variant="standard" />
                            <input className=" mx-auto rounded-pill btn btn-outline-danger mt-2" type="submit" />

                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;