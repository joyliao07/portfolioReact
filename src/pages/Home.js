import React from "react";
import classes from './Home.module.css';
import { Element } from 'react-scroll';
import Nav from 'react-bootstrap/Nav'
import Scroll from 'react-scroll';

const Home = () => {
    const Link = Scroll.Link;

    return (
        <Element id="home" className={classes.parent}>
            <div  className={classes.landing}>
            </div>
            <div className={classes.content}>
                <div  className={classes.title}>
                    <p>JOYCE LIAO</p>
                </div>
                <div className={classes.subTitle}>
                    <p>SOFTWARE DEVELOPER</p>
                </div>
                <div >
                    <Nav.Link className={classes.buttonContainer}>
                        <Link
                            to="skills"
                            spy={true} 
                            smooth={true} 
                            duration={100}>
                            <div className={classes.button}>Enter</div>
                        </Link>
                    </Nav.Link>
                </div>
            </div>
        </Element>
    );
}

export default Home;
