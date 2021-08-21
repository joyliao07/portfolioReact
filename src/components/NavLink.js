import Nav from 'react-bootstrap/Nav'
import Scroll from 'react-scroll';

const NavLink = props => {
    const Link = Scroll.Link;

    const selectHandler = event => {
        props.selected();
    }

    return(
            <Nav.Link>
                <Link
                    to={props.dest} 
                    spy={true} 
                    smooth={true} 
                    duration={500}
                    onClick={selectHandler}> {props.name} </Link>
            </Nav.Link>
            
    );
}

export default NavLink;
