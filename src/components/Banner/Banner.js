import React from 'react';
import './Banner.css';
import Typed from 'react-typed';
import myImg from '../About/img/faisal.png';



const Banner = () => {


    return (
        <div id="banner" className="banner-body" >
            <section className="home container row  content-wrapper" id="home">
                <div className="home-content col-12 col-md-6">
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
                                <span className='m'>r </span>
                                <span className='m'>F</span>
                                <span className='m'>a</span>
                                <span className='m'>i</span>
                                <span className='m'>s</span>
                                <span className='m'>a</span>
                                <span className='m'>L</span>
                            </h3>
                        </div>

                        <div className="text-three">
                            <Typed
                                strings={[
                                    `I'am MERN Developer`,
                                    `I'am React Developer`,
                                    `Javascript Developer`,
                                    `And New Technology Learner.`]}
                                typeSpeed={60}
                                backSpeed={50}
                                loop >
                                <input className='text-animation' type="text" />
                            </Typed>
                        </div>
                        <div className="text-four">
                            A self-motivated and enthusiastic web developer. To gain confidence and fame using my potential in the field of web development and express my innovative creative skills for self and company growth. I always like to learn new things and have experience with new stuff.
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-6">
                    {/* <img className="img-fluid" src={myImg} alt="Faisal" /> */}
                </div>
            </section>
        </div >
    );
};

export default Banner;