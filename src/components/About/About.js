import React from 'react';
import './About.css';
import myImg from './img/faisal.png';
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import { Nav } from 'react-bootstrap';



const About = () => {
    return (
        <>
            <section id="about" className="about-section" style={{}}>
                <Fade bottom duration={2500} distance="50px">
                    <h1 className="fw-bold text-light  text-center">ABOUT ME</h1>
                </Fade>
                <div className="container">
                    <div className="row d-md-flex align-items-center">
                        <Fade left duration={2500} distance="50px">
                            <div className="col-12 col-md-5">
                                <div>
                                    <img className="img-fluid" src={myImg} alt="Faisal" />
                                </div>
                            </div>
                        </Fade>
                        <Fade right duration={2500} distance="50px">
                            <div className="col-12 col-md-7">
                                <div className="mt-3 about-text text-start">
                                    <h4 className="about-text text-start"><Flip cascade duration={2000}> Hi there, I' am</Flip></h4>
                                    <h1 className="about-text text-start  ms-0"><Flip cascade duration={2000}>Mahir Faisal</Flip></h1>
                                    <p className="about-text text-start"><i><Flip cascade duration={2000}>I am a junior front-end web developer I am working with react.js. I have a good grasp of HTML5 CSS3 JAVASCRIPT. And I also did some projects with Node.js Express.js MongoDB in the backend I have 5 Plus project experience. Thank you.</Flip></i></p>
                                    <Nav.Link className="fs-4" as="a" href={`https://drive.google.com/file/d/1IWDXgsTltXLd81c202tLphDiYI-JgIIW/view?usp=sharing`} target="_blank" rel="noopener noreferrer"><button className="btn btn-success py-1 ">Resume</button></Nav.Link>
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