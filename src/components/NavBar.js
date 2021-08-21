import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Scroll from 'react-scroll';

const NavBar = () => {
    const Link = Scroll.Link;
    return(
        <div>
            <Navbar bg="light" expand="lg" fixed="top">
                <Container fluid>
                    <Navbar.Brand href="#home">Joyce Liao</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="justify-content-end" style={{ width: "100%" }}>
                            <Nav.Link>
                                <Link
                                    to="home" 
                                    spy={true} 
                                    smooth={true} 
                                    duration={500}>Home</Link>
                            </Nav.Link>
                            <Nav.Link> 
                                <Link
                                    to="skills" 
                                    spy={true} 
                                    smooth={true} 
                                    duration={500}>Skills</Link>
                            </Nav.Link>
                            <Nav.Link> 
                                <Link
                                    to="portfolio" 
                                    spy={true} 
                                    smooth={true} 
                                    duration={500}>Portfolio</Link>
                            </Nav.Link>
                            <Nav.Link> 
                                <Link
                                    to="volunteer" 
                                    spy={true} 
                                    smooth={true} 
                                    duration={500}>Volunteer</Link>
                            </Nav.Link>
                            <Nav.Link> 
                                <Link
                                    to="contact" 
                                    spy={true} 
                                    smooth={true} 
                                    duration={500}>Contact</Link>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    {/*
                    */}
                </Container>
            </Navbar>
        </div>
    );
}

export default NavBar;
