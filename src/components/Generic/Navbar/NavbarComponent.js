import {Nav, Navbar, Button, Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaGlobeAmericas } from "react-icons/fa";
import logo from "~/assets/goken-logo.svg"

export default function NavbarComponent(){
    return (
        <>
            <Navbar
                expand="lg"
                className="justify-content-center"
            >
                <Container fluid className="goken-navbar-wrapper">
                    <Navbar.Brand 
                        as={Link} 
                        to={"/"}
                        className="d-xs-none d-lg-none"
                    >
                        <img
                        src={logo}
                        className="d-inline-block align-top"
                        alt="Goken Logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="goken-navbar-nav"/>
                    <Navbar.Collapse id="goken-navbar-nav">
                        <Nav navbarScroll>
                            <Nav.Link className="d-flex align-items-center">
                                <FaGlobeAmericas
                                />
                                &nbsp;
                                USA
                            </Nav.Link>
                            <Nav.Link as={Link} to={"/"}>Services</Nav.Link>
                            <Nav.Link as={Link} to={"/"}>Industry</Nav.Link>
                            <Nav.Link as={Link} to={"/"}>Goken Go</Nav.Link>
                            <Navbar.Brand as={Link} to={"/"}
                                className="d-none d-lg-flex"
                            >
                                <img
                                src={logo}
                                className="d-inline-block align-top"
                                alt="Goken Logo"
                                />
                            </Navbar.Brand>
                            <Nav.Link as={Link} to={"/"}>About Us</Nav.Link>
                            <Nav.Link as={Link} to={"/"}>Insights</Nav.Link>
                            <Nav.Link as={Link} to={"/careers"}>Careers</Nav.Link>
                            <Button className="button-primary menu">Contact Us</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}