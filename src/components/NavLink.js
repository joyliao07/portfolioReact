import Nav from 'react-bootstrap/Nav'
import Scroll from 'react-scroll';

const NavLink = props => {
    const Link = Scroll.Link;
    return(
            <Nav.Link>
                <Link
                    to={props.dest} 
                    spy={true} 
                    smooth={true} 
                    duration={500}>{props.name}</Link>
            </Nav.Link>
            
    );
}

export default NavLink;
