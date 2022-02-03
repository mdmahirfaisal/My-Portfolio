import React from 'react';
import './Banner.css';



const Banner = () => {


    return (
        <div id="banner" className="banner-body" >
            <canvas className="background"></canvas>
            <section className="home container" id="home">
                <div className="home-content">
                    <div className="text">

                        <div className="text-one">Hello,</div>
                        <div className="text-two">
                            <h3 className="span loader">
                                <span className='m'><i>I'm</i></span>&nbsp;<br />
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

                        <div id='typewriter' className="text-three">MERN Stack Developer</div>
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