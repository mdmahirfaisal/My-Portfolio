import React from 'react';
import './About.css';
import myImg from './img/faisal.png';
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';



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
                                    <button className='btn btn-success fs-4'>Resume</button>
                                </div>
                            </div>
                        </Fade>
                    </div>
                </div>
            </section>




            {/* <section class="about about-section" id="about">
                <div class="content">
                    <div class="title"><span>About Me</span></div>
                    <div class="about-details">
                        <div class="left">
                            <img src={myImg} alt="Faisal" />
                        </div>
                        <div class="right">
                            <div class="topic">Designing Is My Passion</div>
                            <p>Welcome to my mini portfolio website! My name is Ananthu A Nair. I am a frontend developer and currently staying in India. I am a person, who has high passion in web development, game development. One of my dreams is to master all the  technologies and become one of the TOP developer in the world, and now, I am working toward it!</p>
                            <div class="button">
                                <button >Download CV</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}


        </>
    );
};

export default About;