import Nav from 'react-bootstrap/Nav'
import Scroll from 'react-scroll';
import classes from './NavLink.module.css';

const NavLink = props => {
    const Link = Scroll.Link;

    const selectHandler = event => {
        props.selected();
    }

    return(
            <Nav.Link 
                as={Link}
                className={classes.links}
                to={props.dest} 
                spy={true} 
                smooth={true} 
                duration={100}
                onClick={selectHandler}>
                {props.name}
            </Nav.Link>
    );
}

export default NavLink;
