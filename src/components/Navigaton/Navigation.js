import * as React from 'react';
import './Navigation.css';
import { Container, Nav, Navbar, Overlay, Popover } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import useMediaQuery from '../useMediaQuery/useMediaQuery';


const Navigation = () => {

    const [isSticky, setSticky] = React.useState(false);
    const isMobile = useMediaQuery('(max-width: 768px)');


    React.useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                setSticky(true)
            } else {
                setSticky(false)
            }
        })
    }, []);
    // pop over 
    const [show, setShow] = React.useState(false);
    const [target, setTarget] = React.useState(null);
    const ref = React.useRef(null)

    const handleClick = (event) => {
        setShow(!show);
        setTarget(event.target);
    };
    return (
        <>
            <header className="dark">
                <Navbar
                    collapseOnSelect
                    expand="lg"
                    variant="light"
                    fixed="top"
                    className={(isSticky) ? "shadow-sm text-light bg-success py-2" : "py-4 text-light"}>
                    <Container>

                        <Navbar.Brand
                            as={HashLink} to="/"
                            className="ml-md-5"
                            style={{ color: "#3a4256", fontSize: "1.55rem" }}>

                            <strong className='text-light'>Mahir Faisal</strong>
                        </Navbar.Brand>
                        <Nav>
                            <a href="#;" className="ic menu" tabIndex="1">
                                <span className="line"></span>
                                <span className="line "></span>
                                <span className="line "></span>
                            </a>
                            <Nav.Link href="" className="ic close"></Nav.Link>
                            <ul className="main-nav">
                                <li className="top-level-link">

                                    <HashLink to="/home#home" className='mega-menu text-decoration-none text-light'><span>Home</span></HashLink>
                                    <div className="sub-menu-block">
                                        <div className="row">
                                            <div className="col">
                                                <h2 className="sub-menu-head text-light">Home</h2>
                                                <ul className="sub-menu-lists">
                                                    <li className='text-light'><Nav.Link as={HashLink} to="/home#home">Home</Nav.Link></li>
                                                    <li className='text-light'><Nav.Link as={HashLink} to="/home#about">About</Nav.Link></li>
                                                    <li className='text-light'><Nav.Link as={HashLink} to="/home#projects">Projects</Nav.Link></li>
                                                    <li className='text-light'><Nav.Link as={HashLink} to="/home#contact">Contact</Nav.Link></li>
                                                    <li className='text-light'><Nav.Link as={HashLink} to="/blogs">Blogs</Nav.Link></li>
                                                </ul>
                                            </div>

                                        </div>

                                    </div>
                                </li>

                                <li className="top-level-link">
                                    <HashLink to="/home#projects" className='mega-menu text-decoration-none text-light'><span>Projects</span></HashLink>
                                    <div className="sub-menu-block">
                                        <div className="row">
                                            <div className="col-md-4 col-lg-4 col-sm-4">
                                                <h2 className="sub-menu-head text-light ">Projects</h2>
                                                <ul className="sub-menu-lists ">
                                                    <li><Nav.Link href='https://smart-mobile-bazar.web.app/'>Mobile Bazar</Nav.Link></li>
                                                    <li><Nav.Link href='https://super-car-shop.web.app/'>Car Shop</Nav.Link></li>
                                                    <li><Nav.Link href='https://water-delivery-b84a1.web.app/'>Water Delivery</Nav.Link></li>
                                                    <li><Nav.Link href='https://new-star-restuarant.netlify.app/'>Restaurant</Nav.Link></li>
                                                    <li><Nav.Link href='https://medical-care-center.web.app/'>Medical Care</Nav.Link></li>
                                                </ul>
                                            </div>
                                            <div className="col-md-4 col-lg-4 col-sm-4">
                                                <h2 className="sub-menu-head text-light">Client Code</h2>
                                                <ul className="sub-menu-lists">
                                                    <li><Nav.Link href='https://github.com/mdmahirfaisal/Mobile-bazar'>Mobile Bazar</Nav.Link></li>
                                                    <li><Nav.Link href='https://github.com/mdmahirfaisal/Car-shop'>Car Shop</Nav.Link></li>
                                                    <li><Nav.Link href='https://github.com/mdmahirfaisal/Water-delivery'>Water Delivery</Nav.Link></li>
                                                    <li><Nav.Link href='https://github.com/mdmahirfaisal/New-Star-Restaurant'>Restaurant</Nav.Link></li>
                                                    <li><Nav.Link href='https://github.com/mdmahirfaisal/Medical-care-center'>Medical Care</Nav.Link></li>
                                                </ul>
                                            </div>
                                            <div className="col-md-4 col-lg-4 col-sm-4">
                                                <h2 className="sub-menu-head text-light">Backend Code</h2>
                                                <ul className="sub-menu-lists">
                                                    <li><Nav.Link href='https://github.com/mdmahirfaisal/Mobile-bazar-server'>Mobile Bazar</Nav.Link></li>
                                                    <li><Nav.Link href='https://github.com/mdmahirfaisal/Car-shop-server'>Car Shop</Nav.Link></li>
                                                    <li><Nav.Link href='https://github.com/mdmahirfaisal/Water-delivery-server'>Water Delivery</Nav.Link></li>
                                                    <li><Nav.Link>Restaurant</Nav.Link></li>
                                                    <li><Nav.Link>Medical Care</Nav.Link></li>
                                                </ul>
                                            </div>
                                        </div>

                                    </div>
                                </li>

                                <li className="top-level-link">
                                    <HashLink to="/home#about" className='sub-menu text-decoration-none text-light'><span>About</span></HashLink>
                                </li>
                                <li className="top-level-link">
                                    <HashLink to="/home#contact" className='sub-menu text-decoration-none text-light'><span>Contact</span></HashLink>
                                </li>
                                <li className="top-level-link">
                                    <HashLink to="/blogs" className='sub-menu text-decoration-none text-light'><span>Blogs</span></HashLink>
                                </li>
                            </ul>
                        </Nav>

                        <Nav className='ms-auto'>
                            <div ref={ref}>
                                <h1 onClick={handleClick} className={isMobile ? 'me-5 mt-2' : ' ms-auto'} style={{ cursor: 'pointer' }}><i className="fas fa-user-circle"></i></h1>
                                <Overlay
                                    show={show}
                                    target={target}
                                    placement="bottom"
                                    container={ref}
                                    containerPadding={20}
                                >
                                    <Popover id="popover-contained" className='border-0 bg-light shadow'>
                                        <Popover.Header className='border-0' > <h5 className='text-center text-primary'>MD. Mahir Faisal</h5></Popover.Header>
                                        <Popover.Body>
                                            <p>rjmahir.faisal@gmail.com</p>

                                            <Nav.Link className="fs-5 ms-2" as="a" href={`https://drive.google.com/file/d/1IWDXgsTltXLd81c202tLphDiYI-JgIIW/view?usp=sharing`} target="_blank" rel="noopener noreferrer"><button className="btn btn-outline-danger rounded-pill py-1 w-100">Resume</button></Nav.Link>
                                        </Popover.Body>
                                    </Popover>
                                </Overlay>
                            </div>
                        </Nav>
                    </Container>
                </Navbar>
            </header>
        </>
    );
};

export default Navigation;