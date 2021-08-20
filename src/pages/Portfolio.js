import classes from './Portfolio.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import PortfolioBlock from '../components/PortfolioBlock';

const Portfolio = () => {
    return (
        <Container>
            <Row className={classes.portfolioBanner}>
                <h1>Portfolio</h1>
                <div className={classes.headingUnderline}></div>
            </Row>
            <Row>
                <PortfolioBlock name="BookApp" tech="React JS, ASP.NET"/>
                <PortfolioBlock name="Portfolio" tech="React JS"/>
                <PortfolioBlock name="Wizard's Apprentice" tech="Python3, Google Vision API, PostgreSQL"/>
                <PortfolioBlock name="AirQuality App" tech="Angular9, TypeScript"/>
                <PortfolioBlock name="Raspberry Garden" tech="Django, Python3, SQL"/>
                <PortfolioBlock name="Stock Portfolio App" tech="Flask, Python3, REST API"/>
                <PortfolioBlock name="GottaEat! App" tech="JavaScript, Node JS"/>
                <PortfolioBlock name="Block Buster 2D" tech="C#, Unity-2D"/>
            </Row>
        </Container>
    );
}

export default Portfolio;