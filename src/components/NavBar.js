import { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import NavLink from './NavLink';

const NavBar = () => {
    const [navExpanded, setNavExpanded] = useState(false);
    
    const navExpandHandler = expanded => {
        setNavExpanded(navExpanded ? false : true);
    }
    
    const closeNav = () => {
        setNavExpanded(false);
    }

    return(
        <div>
            <Navbar bg="light" expand={30} fixed="top" 
                    expanded={ navExpanded } >
                <Container fluid>
                    <Navbar.Brand href="#home">
                        <img
                            src="/joy.png"
                            width="45"
                            height="45"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"/>
                        Joyce Chen
                    </Navbar.Brand>
                    <Navbar.Toggle  aria-controls="basic-navbar-nav" 
                                    onClick={ navExpandHandler }/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="justify-content-end" 
                            style={{ width: "100%" }} >
                            <NavLink dest="home" name="Home" selected={ closeNav }/>
                            <NavLink dest="skills" name="Skills" selected={ closeNav }/>
                            <NavLink dest="portfolio" name="Portfolio" selected={ closeNav }/>
                            <NavLink dest="volunteer" name="Volunteer" selected={ closeNav }/>
                            <NavLink dest="contact" name="Contact" selected={ closeNav }/>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );

}

export default NavBar;
