import React from 'react';
import './Footer.css'
import { Card, Nav } from 'react-bootstrap';
import myImage from './img/faisal.png';
import { HashLink } from 'react-router-hash-link';



const Footer = () => {
    return (
        <div className="footer-section">
            <div className="container">
                <div className="row pb-5">
                    <div className="col-md-4">
                        <Card style={{ backgroundColor: '#1e272e', marginTop: '-60px', borderRadius: '20px' }} className="shadow">
                            <Card.Img variant="top" src={myImage} style={{ marginTop: '-50px' }} />
                            <Card.Title className="text-light" >Mahir Faisal</Card.Title>
                            <Card.Body>
                                <Card.Text className="text-light w-75 mx-auto
                                ">
                                    Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.
                                </Card.Text>
                                <Card.Title className="text-light text-start">Follow us</Card.Title>

                                <Nav.Link as="a" href={`https://www.facebook.com/profile.php?id=100069936932811`} target="_blank" rel="noopener noreferrer" className="mx-1 text-decoration-none fs-3 fo-icon-link d-inline" ><i className="fab fa-facebook footer-icon"></i></Nav.Link>

                                <Nav.Link as="a" href={`https://github.com/mdmahirfaisal`} target="_blank" rel="noopener noreferrer" className="mx-1 text-decoration-none fs-3 fo-icon-link d-inline" ><i className="fab fa-github footer-icon"></i></Nav.Link>

                                <Nav.Link as="a" href={`https://drive.google.com/file/d/1IWDXgsTltXLd81c202tLphDiYI-JgIIW/view?usp=sharing`} target="_blank" rel="noopener noreferrer" className="mx-1 text-decoration-none fs-3 fo-icon-link d-inline" ><i className="fab fa-google footer-icon"></i></Nav.Link>

                                <Nav.Link as="a" href={`https://www.linkedin.com/in/mahir-faisal/`} target="_blank" rel="noopener noreferrer" className="mx-1 text-decoration-none fs-3 fo-icon-link d-inline" ><i className="fab fa-linkedin-in footer-icon"></i></Nav.Link>
                                {/* <div className=" d-flex align-items-center flex-wrap"> */}
                            </Card.Body>
                        </Card>
                    </div>


                    <div className="col-md-4 mt-5">
                        <div className="d-flex">
                            <h1><i className="fas fa-map-marked-alt text-danger me-3"></i></h1>
                            <div>
                                <h4 className="text-light fw-bold">Rajshahi,Bangladesh</h4>
                                <p className="text-white">Baya Bazar, Rajshahi</p>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-light mt-5">All about</h2>
                            <div className="d-flex text-start">
                                <div>
                                    <HashLink to="/home#home" className="text-decoration-none"><p className="ms-5 footer-link">Home</p></HashLink>
                                    <HashLink to="/home#projects" className="text-decoration-none"><p className="ms-5 footer-link"> Projects</p></HashLink>
                                    <HashLink to="/home#banner" className="text-decoration-none"><p className="ms-5 footer-link"> Projects</p></HashLink>
                                    <Nav.Link as="a" href={`https://drive.google.com/file/d/1IWDXgsTltXLd81c202tLphDiYI-JgIIW/view?usp=sharing`} target="_blank" rel="noopener noreferrer" className="text-decoration-none"><p className="ms-5 footer-link "> Resume</p></Nav.Link>
                                </div>
                                <div>
                                    <HashLink to="/home#contact" className="text-decoration-none"><p className="ms-5 footer-link"> Contact me</p></HashLink>
                                    <HashLink to="/blogs" className="text-decoration-none"><p className="ms-5 footer-link"> Blog</p></HashLink>
                                    <HashLink to="/home#home" className="text-decoration-none"><p className="ms-5 m footer-link"> Testimonials</p></HashLink>
                                    <HashLink to="/home#home" className="text-decoration-none"><p className="ms-5 footer-link"> Faq</p></HashLink>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-md-4 mt-5">
                        <div className="d-flex">
                            <h1><i className="fas fa-phone-volume text-danger me-3"></i></h1>
                            <div>
                                <h4 className="text-light fw-bold">+880 01928646555</h4>
                                <p className="text-white">Give us call</p>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-light mt-5">Subscribe</h2>
                            <p className="text-light">Copyright &copy; 2021 Front-end Web Developer </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;