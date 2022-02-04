import React from 'react';
import './Banner.css';
import Typewriter from 'typewriter-effect';




const Banner = () => {


    return (
        <div id="banner" className="banner-body" >
            <canvas className="background"></canvas>
            <section className="home container" id="home">
                <div className="home-content">
                    <div className="text">

                        <div className="text-two">
                            <h3 className="span loader">
                                <span className='m'><i>Hi, I'm</i></span>&nbsp;<br />
                                <span className='m'>M</span>
                                <span className='m'>D.</span>
                                <span className='m'> M</span>
                                <span className='m'>a</span>
                                <span className='m'>h</span>
                                <span className='m'>i</span>
                                <span className='m'>r</span>
                                <span className='m'>F</span>
                                <span className='m'>a</span>&nbsp;
                                <span className='m'>i</span>&nbsp;
                                <span className='m'>s</span>
                                <span className='m'>a</span>
                                <span className='m'>L</span>
                            </h3>
                        </div>

                        <div className="text-three">
                            <Typewriter
                                options={{
                                    strings: ['MERN Stack Developer', 'JavaScript Developer', 'React Developer', 'And New Technology Learner.'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </div>
                        <div className="text-four">
                            A self-motivated and enthusiastic web developer. To gain confidence and fame using my potential in the field of web development and express my innovative creative skills for self and company growth. I always like to learn new things and have experience with new stuff.
                        </div>
                    </div>
                </div>
            </section>
        </div >
    );
};

export default Banner;