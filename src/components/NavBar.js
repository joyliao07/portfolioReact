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
            <Navbar bg="light" expand="lg" fixed="top" 
                    expanded={ navExpanded } >
                <Container fluid>
                    <Navbar.Brand href="#home">Joyce Liao</Navbar.Brand>
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
