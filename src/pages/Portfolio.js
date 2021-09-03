import classes from './Portfolio.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import PortfolioBlock from '../components/PortfolioBlock';
import SectionBanner from '../components/SectionBanner';
import { Element } from 'react-scroll';


const Portfolio = () => {
    const portfolios = [
        {name: "BookApp", 
        tech:"React JS, ASP.NET, ..................", 
        color: "(223, 218, 187)",
        colorHover: "(206, 202, 174)"},
        {name: "React Portfolio", 
        tech:"React JS, CSS3, Bootstrap 4, deployed on ...", 
        color: "(150,206,180)",
        colorHover: "(111, 170, 143)"},
        {name: "Wizard's Apprentice", 
        tech:"Python3, Google Vision API, PostgreSQL", 
        color: "(255,111,105)",
        colorHover: "(209, 90, 86)"},
        {name: "AirQuality App", 
        tech:"Angular9, TypeScript, Node-js backend", 
        color: "(91,192,222)",
        colorHover: "(60, 164, 196)"},
        {name: "Raspberry Garden", 
        tech:"Django, Python3, RaspberryPi-3B, SQL", 
        color: "(92,184,92)",
        colorHover: "(67, 136, 67)"},
        {name: "Stock Portfolio", 
        tech:"Flask, Python3, REST API, .......", 
        color: "(255,204,92)",
        colorHover: "(209, 165, 70)"},
        {name: "GottaEat!App", 
        tech:"JavaScript, Node JS, Express JS, ....", 
        color: "(136,216,176)",
        colorHover: "(113, 179, 146)"},
        {name: "Block Buster 2D", 
        tech:"C#, Unity-2D. You can play the game on the browser!", 
        color: "(255,238,173)",
        colorHover: "(212, 202, 158)"},
    ];

    return (
        <Element id="portfolio" className={classes.parent}>
            <SectionBanner section="Portfolio"/>
            <Container>
                <Row className={classes.outerContainer}>
                    {portfolios.map( project => {
                        return <PortfolioBlock 
                                    name={project.name} 
                                    tech={project.tech} 
                                    color={project.color}
                                    colorHover={project.colorHover}/>
                    })}
                </Row>
            </Container>
            <div className={classes.base}></div>
        </Element>
    );
}

export default Portfolio;
