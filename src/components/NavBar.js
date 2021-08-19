import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

const NavBar = () => {
    return(
        <Navbar bg="light" expand="lg" fixed="top">
            <Container fluid>
                <Navbar.Brand href="#home">Joyce Liao</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="justify-content-end" style={{ width: "100%" }}>
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Skills</Nav.Link>
                        <Nav.Link href="#link">Portfolio</Nav.Link>
                        <Nav.Link href="#link">Volunteer</Nav.Link>
                        <Nav.Link href="#link">Work</Nav.Link>
                        <Nav.Link href="#link">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                {/*
                */}
            </Container>
        </Navbar>
    );
}

export default NavBar;
