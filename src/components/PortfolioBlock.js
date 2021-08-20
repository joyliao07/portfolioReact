import classes from './PortfolioBlock.module.css';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


const PortfolioBlock = (props) => {
    return (
        <Col className={classes.portfolioBlock} md={6} lg={3}>
            <h3>{props.name}</h3>
            <h4>Tech:</h4>
            <p>{props.tech}</p>
            <br></br>
            <Button>See Repo</Button>
        </Col>
    );
}

export default PortfolioBlock;