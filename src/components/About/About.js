import React from 'react';
import './About.css';
import myImg from './img/faisal.png';
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';



const About = () => {
    return (
        <>
            <section id="about" className="about-section" style={{}}>
                <Fade bottom duration={2000} distance="100px">
                    <h1 className="fw-bold text-light pt-5">ABOUT ME</h1>
                </Fade>
                <div className="container">
                    <div className="row d-md-flex align-items-center">
                        <Fade left duration={2000} distance="150px">
                            <div className="col-12 col-md-5">
                                <div>
                                    <img className="img-fluid" src={myImg} alt="Faisal" />
                                </div>
                            </div>
                        </Fade>
                        <Fade right duration={2000} distance="150px">
                            <div className="col-12 col-md-7">
                                <div className="mt-3 about-text">
                                    <h5 className="text-secondary text-start"><Flip cascade duration={2000}> Hi there, I' am</Flip></h5>
                                    <h2 className="text-light text-start "><Flip cascade duration={2000}>Mahir Faisal</Flip></h2>
                                    <p className="text-light text-start"><i><Flip cascade duration={2000}>I am a junior front-end web developer I am working with react.js. I have a good grasp of HTML5 CSS3 JAVASCRIPT. And I also did some projects with Node.js Express.js MongoDB in the backend I have 5 Plus project experience. Thank you.</Flip></i></p>
                                </div>
                            </div>
                        </Fade>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;