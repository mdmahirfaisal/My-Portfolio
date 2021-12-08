import * as React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';


const Navigation = () => {
    const [isSticky, setSticky] = React.useState(false);
    const [isCollapsed, setCollapsed] = React.useState(null);


    React.useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                setSticky(true)
            } else {
                setSticky(false)
            }
        })
    }, []);


    return (
        <Navbar collapseOnSelect
            expand="lg"
            variant="light"
            fixed="top"
            className={(isSticky || isCollapsed) ? "shadow-sm bg-white py-2" : "py-4"}>
            <Container>
                <Navbar.Brand as={HashLink} to="/home#home" className="fs-4 fw-bold text-danger">
                    Mahir Faisal
                </Navbar.Brand>
                <Navbar.Toggle onClick={() => setCollapsed(!isCollapsed ? 'show' : null)} aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className={isCollapsed}>
                    <Nav className="ms-auto" style={{ marginBottom: '-5px' }}>
                        <Nav.Link as={HashLink} to="/" className={(isSticky || isCollapsed) ? "mr-md-5 btn text-secondary fs-5" : "mr-md-5 btn text-light fs-5"} onClick={() => window.scrollTo(500, 0)} active>Home</Nav.Link>
                        <Nav.Link className={(isSticky || isCollapsed) ? "btn text-secondary fs-5" : "btn text-light fs-5"} as={HashLink} to="/home#about">About me</Nav.Link>
                        <Nav.Link className={(isSticky || isCollapsed) ? "btn text-secondary fs-5" : "btn text-light fs-5"} as={HashLink} to="/home#projects">Projects</Nav.Link>
                        <Nav.Link className={(isSticky || isCollapsed) ? "btn text-secondary fs-5" : "btn text-light fs-5"} as={HashLink} to="/home#contact">Contact</Nav.Link>
                        <Nav.Link className={(isSticky || isCollapsed) ? "btn text-secondary fs-5" : "btn text-light fs-5"} as={HashLink} to="/blogs">Blogs</Nav.Link>
                        <Nav.Link className="fs-5 ms-2" as="a" href={`https://drive.google.com/file/d/1IWDXgsTltXLd81c202tLphDiYI-JgIIW/view?usp=sharing`} target="_blank" rel="noopener noreferrer"><button className={(isSticky || isCollapsed) ? "btn btn-outline-danger rounded-pill py-1 px-3" : "btn btn-danger rounded-pill py-1 px-3"}>Resume</button></Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;