import React from 'react';
import './About.css';

const About = () => {
    return (
        <>
            <section id="about" className="about-section" style={{}}>
                <h1 className="fw-bold text-primary pt-5">ABOUT ME</h1>
                <div className="container">
                    <div className="row d-md-flex align-items-center">
                        <div className="col-12 col-md-5">
                            <div>
                                <img className="img-fluid" src="https://i.ibb.co/3YJDHcY/faisal.png" alt="Faisal" />
                            </div>
                        </div>
                        <div className="col-12 col-md-7">
                            <div>
                                <h2 className="text-light">Mahir Faisal</h2>
                                <p className="text-light text-start"><i>I am a junior front-end web developer I am working with react.js. I have a good grasp of HTML5 CSS3 JAVASCRIPT. And I also did some projects with Node.js Express.js MongoDB in the backend I have 5 Plus project experience. Thank you.</i></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;