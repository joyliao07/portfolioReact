import React from "react";
import Button from 'react-bootstrap/Button';
import classes from './Home.module.css';

const Home = () => {
    return (
        <div className={classes.parent}>
            <div style={{"text-align": "center"}}>
                <p>Joyce Liao</p>
            </div>
            <div>
                <Button variant="primary">Enter</Button>
            </div>
        </div>
    );
}

export default Home;
