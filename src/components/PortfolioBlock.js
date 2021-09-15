import { useState } from 'react';
import classes from './PortfolioBlock.module.css';
import Col from 'react-bootstrap/Col';


const PortfolioBlock = (props) => {
    const [hover, setHover] = useState(false);

    const blockStyle = (hover) => { 
        return ({
            backgroundColor:  hover? "rgb" + props.colorHover: "rgb" + props.color,
            transition: "all .2s ease",
        });
    }

    const modalOpenHandler = () => {
        const params = {
            name: props.name,
            tech: props.tech,
            story: props.story,
            git: props.git,
            deploy: props.deploy
        };
        props.open(params);
    }

    const block = <Col  className={classes.portfolioBlock} md={6} lg={3} 
                        style={blockStyle(hover)}
                        onPointerOver={() => setHover(true)}
                        onPointerOut={() => setHover(false)}
                        onClick={modalOpenHandler}>
                    <div>
                        <h3>{props.name}</h3>
                    </div>
                    <div>
                        <p>{props.tech}</p>
                    </div>
                </Col>;

    return (
        <>
            {block}
        </>
    );
}

export default PortfolioBlock;