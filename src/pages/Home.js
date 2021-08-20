import React from "react";
import Button from 'react-bootstrap/Button';
import classes from './Home.module.css';
import { Element } from 'react-scroll';

const Home = () => {
    return (
        <Element id="home" className={classes.parent}>
            <div style={{"text-align": "center"}}>
                <p>Joyce Liao</p>
            </div>
            <div>
                <Button variant="primary">Enter</Button>
            </div>
        </Element>
    );
}

export default Home;
