import classes from './PortfolioBlock.module.css';
import Col from 'react-bootstrap/Col';


const PortfolioBlock = (props) => {
    return (
        <Col className={classes.portfolioBlock} md={6} lg={3} style={{border: "solid red 1px"}}>
            <div style={{height:"70px"}}>
                <h3>{props.name}</h3>
            </div>
            <div>
                <p>{props.tech}</p>
            </div>
        </Col>
    );
}

export default PortfolioBlock;