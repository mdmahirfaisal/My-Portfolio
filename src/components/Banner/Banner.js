import React from 'react';
import './Banner.css';
// import Fade from 'react-reveal/Fade';
// import Bounce from 'react-reveal/Bounce';
// import Flip from 'react-reveal/Flip';
// import RubberBand from 'react-reveal/RubberBand';



// import { Nav } from 'react-bootstrap';
// import bannerImg from './image/coder-removebg-preview.png'


const Banner = () => {

    return (
        <div id="banner" className="banner-body" >
            <canvas className="background"></canvas>

            <section className="home" id="home">
                <div className="home-content">
                    <div className="text">

                        <div className="text-one">Hello,</div>
                        <div className="text-two">
                            <h3 className="span loader">
                                <span className='m'>I'm</span>&nbsp;<br />
                                <span className='m'>M</span>
                                <span className='m'>a</span>
                                <span className='m'>h</span>
                                <span className='m'>i</span>
                                <span className='m'>r</span>
                                <span className='m'>F</span>
                                <span className='m'>a</span>&nbsp;
                                <span className='m'>i</span>&nbsp;
                                <span className='m'>s</span>
                                <span className='m'>a</span>
                                <span className='m'>i</span>
                                <span className='m'>L</span>
                            </h3>
                        </div>
                        <div className="text-three">Full Stack Developer</div>
                        <div className="text-four">From Rajshahi, Bangladesh.</div>
                    </div>
                    <div className="button">
                        <button>Hire Me</button>
                    </div>
                </div>
            </section>



        </div >
    );
};

export default Banner;