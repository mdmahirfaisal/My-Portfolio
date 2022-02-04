import React from 'react';
import './Footer.css'
import { Nav } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';



const Footer = () => {
    return (
        <div className="footer-section ">
            <footer>
                <div class="top_header">
                    <section>
                        <span><i class="fa fa-map-marker"></i></span>
                        <span>Year port road, Baya Bazar, Rajshahi, Bangladesh, 6000</span>
                    </section>
                    <section>
                        <span><i class="fa fa-phone"></i></span>
                        <span>+880 01928646555</span>
                    </section>
                    <section>
                        <span><i class="fa fa-envelope"></i></span>
                        <span>rjmahir.faisal@gmail.com</span>
                    </section>
                </div>
                <span class="border-shape"></span>
                <div class="bottom_content">
                    <section>
                        <Nav.Link as="a" href={`https://www.facebook.com/profile.php?id=100069936932811`} target="_blank" rel="noopener noreferrer" className="foot-link" ><i className="fab fa-facebook footer-icon"></i></Nav.Link>

                        <Nav.Link as="a" href={`https://github.com/mdmahirfaisal`} target="_blank" rel="noopener noreferrer" className="foot-link" ><i className="fab fa-github footer-icon"></i></Nav.Link>

                        <Nav.Link as="a" href={`https://drive.google.com/file/d/1IWDXgsTltXLd81c202tLphDiYI-JgIIW/view?usp=sharing`} target="_blank" rel="noopener noreferrer" className="foot-link" ><i className="fab fa-google footer-icon"></i></Nav.Link>

                        <Nav.Link as="a" href={`https://www.linkedin.com/in/mahir-faisal/`} target="_blank" rel="noopener noreferrer" className="foot-link" ><i className="fab fa-linkedin-in footer-icon"></i></Nav.Link>

                    </section>
                    <section>
                        <a className='foot-link' href="/home#home">Home</a>
                        <a className='foot-link' href="/home#about">About Me</a>
                        <a className='foot-link' href="/home#projects">Projects</a>
                        <a className='foot-link' href="/home#contact">Contact</a>
                        <a className='foot-link' href="/blogs">Blogs</a>
                        <a className='foot-link' href={`https://drive.google.com/file/d/1IWDXgsTltXLd81c202tLphDiYI-JgIIW/view?usp=sharing`} target="_blank" rel="noopener noreferrer">Resume</a>
                    </section>
                </div>
                <div class="copyright">
                    Copyright © 2021  All rights reserved
                </div>
            </footer>
        </div>
    );
};

export default Footer;