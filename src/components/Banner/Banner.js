import './Banner.css';
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
import Flip from 'react-reveal/Flip';
import RubberBand from 'react-reveal/RubberBand';



import React from 'react';
import { Nav } from 'react-bootstrap';
import bannerImg from './image/coder-removebg-preview.png'


const Banner = () => {


    return (
        <div id="banner" className="banner-bg py-5" >
            <div className="container mt-5">
                <div className="row d-flex align-items-center ">
                    <div className="col-sm-12 col-md-5 text-start">
                        <Fade left duration={2500} distance="100px">

                            <div className="py-5 ">

                                <h1 className="text-light fw-bold mb-4"><Flip cascade duration={2000}>HI, I'am</Flip> <br /><Flip cascade duration={3000}> MD. Mahir Faisal</Flip></h1>

                                <Bounce top right cascade duration={2000}>
                                    <p className="text-light">A self-motivated and enthusiastic web developer. To gain confidence and fame using my potential in the field of web development and express my innovative creative skills for self and company growth. I always like to learn new things and have experience with new stuff.</p>
                                </Bounce>
                                <Bounce top right cascade duration={2000}>
                                    <Nav.Link className="fs-5 ms-2" as="a" href={`https://drive.google.com/file/d/1IWDXgsTltXLd81c202tLphDiYI-JgIIW/view?usp=sharing`} target="_blank" rel="noopener noreferrer"><button className="btn btn-outline-info fs-5 px-4 py-1 rounded-pill">My Resume</button></Nav.Link>
                                </Bounce>
                            </div>

                        </Fade>
                    </div>

                    <div className="col-sm-12 col-md-7">
                        <Fade right duration={2500} distance="100px">

                            <div className="img-bg-color mt-sm-5 pt-sm-5">
                                <RubberBand duration={3000}>
                                    <img style={{ marginTop: '-50px' }} className="img-fluid" src={bannerImg} alt="" />
                                </RubberBand>
                            </div>

                        </Fade>

                    </div>
                </div>
            </div>
        </div >
    );
};

export default Banner;