import { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Scroll from 'react-scroll';
import NavLink from './NavLink';

const NavBar = () => {
    // const [navExpanded, setNavExpanded] = useState(false);
    // setNavExpanded = (expanded) => {
    //     setNavExpanded();
    // }
    
    // setNavClose = () => {
    //     this.setState({ navExpanded: false });
    // }


    return(
        <div>
            <Navbar collapseOnSelect bg="light" expand="lg" fixed="top">
                <Container fluid>
                    <Navbar.Brand href="#home">Joyce Liao</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" >
                        <Nav className="justify-content-end" style={{ width: "100%" }}>
                            <NavLink dest="home" name="Home"/>
                            <NavLink dest="skills" name="Skills"/>
                            <NavLink dest="portfolio" name="Portfolio"/>
                            <NavLink dest="volunteer" name="Volunteer"/>
                            <NavLink dest="contact" name="Contact"/>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavBar;
