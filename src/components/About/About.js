import React from 'react';
import './About.css';
import myImg from './img/faisal.png';
import Fade from 'react-reveal/Fade';

const About = () => {
    return (
        <>
            <div className="bg-dark">
                <section id="about" className="about-section" style={{}}>
                    <div className="container">
                        <div className="row d-md-flex align-items-center">
                            <Fade left duration={2500} distance="50px">
                                <div className="col-12 col-md-6">
                                    <div>
                                        <img className="img-fluid" src={myImg} alt="Faisal" />
                                    </div>
                                </div>
                            </Fade>
                            <Fade right duration={2500} distance="50px">
                                <div className="col-12 col-md-6">
                                    <div className="about-text  text-start">
                                        <h1 className=" text-start  "><span className='border-bottom border-danger'>About</span> Me</h1>
                                        <p className="  text-start" style={{ fontSize: '16px' }}><i>
                                            I am a MERN-Stack WEB Developer. I am working with React, Node.js and MongoDB. I also have experience in developing static websites using HTML5, CSS3 and JavaScript (ES6). I am a quick learner. I believe in hard work and efficiency. That's why I am always ready to accomplish any task by working hard. I always focus on learning new technology. My goal is to become A World-Class Professional Web Developer.
                                            <br />
                                            <span className='border-bottom'>Here are a few technologies I've been working with recently :</span>
                                        </i></p>
                                        <h5 className='my-0 py-0 text-danger'>Front-end</h5>
                                        <p>HTML 5, CSS 3,  JavaScript (ES6), React.js, Redux, React Bootstrap, Material UI, </p>

                                        <h5 className='my-0 py-0 text-danger'>Back-end</h5>
                                        <p>Node.js, Express.js, Mongo DB </p>

                                        <h5 className='my-0 py-0 text-danger'>Tools</h5>
                                        <p> VS Code, Git, Chrome Dev Tool, Npm & Yarn,  Firebase, Netlify, Heroku </p>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default About;