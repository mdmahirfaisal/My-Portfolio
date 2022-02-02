import React from 'react';
import './ProjectInfo.css';
import { Card, Carousel } from 'react-bootstrap';
import { useHistory } from 'react-router';
import Fade from 'react-reveal/Fade';


const ProjectInfo = ({ project }) => {
    const { name, details, img1, img2, img3, id } = project;

    const history = useHistory()
    const handleDetails = (detailId) => {
        const url = `/details/${detailId}`;
        history.push(url);
    }

    return (
        <Fade bottom duration={3000} distance="150px">
            <div className=" col-sm-12 col-md-6">
                <div className="home-card" style={{ cursor: 'pointer', borderRadius: '10px' }}>
                    <div className="slide slide1" style={{ borderRadius: '10px' }}>
                        <div className="content" style={{ cursor: 'pointer', borderRadius: '10px' }}>
                            <div className="icon" >
                                <Carousel>
                                    <Carousel.Item interval={2800}>
                                        <img style={{ maxHeight: '270px' }}
                                            className="d-block w-100"
                                            src={img1}
                                            alt="First slide"
                                        />

                                    </Carousel.Item>
                                    <Carousel.Item interval={3500}>
                                        <img style={{ maxHeight: '270px' }}
                                            className="d-block w-100"
                                            src={img2}
                                            alt="Second slide"
                                        />

                                    </Carousel.Item>
                                    <Carousel.Item interval={4000}>
                                        <img style={{ maxHeight: '270px' }}
                                            className="d-block w-100"
                                            src={img3}
                                            alt="Third slide"
                                        />

                                    </Carousel.Item>
                                </Carousel>
                            </div>
                        </div>
                    </div>
                    <div className="slide slide2 bg-light" style={{ cursor: 'pointer', borderRadius: '10px', backgroundColor: '' }}>
                        <div className="content">
                            <Card.Body className="pt-0">
                                <Card.Title as="h5" className="fw-bold text-primary">{name}</Card.Title>
                                <p>{details.slice(0, 100)}</p>
                                <button onClick={() => handleDetails(id)} className="btn btn-outline-info rounded-pill w-100 py-1 mt-2">Details</button>
                            </Card.Body>
                        </div>
                    </div>
                </div>

            </div>
        </Fade>
    );
};

export default ProjectInfo;