import { useState } from 'react';
import classes from './Portfolio.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import PortfolioBlock from '../components/PortfolioBlock';
import SectionBanner from '../components/SectionBanner';
import { Element } from 'react-scroll';
import ProjectModal from '../components/modals/ProjectModal';


const projectDetails = [
    {name: "BookApp", 
    tech:"ASP.NET. C#. ReactJS. JavaScript. ",
    story:"Here is my BookApp story lalalalalalalalala",
    git:"https://www.github....",
    deploy:"",
    color: "(223, 218, 187)",
    colorHover: "(206, 202, 174)"},
    {name: "React Portfolio", 
    tech:"ReactJS. CSS Modules. Bootstrap4. Animation", 
    story: "",
    git:"https://github.com/joyliao07/portfolioReact",
    deploy:"",
    color: "(150,206,180)",
    colorHover: "(111, 170, 143)"},
    {name: "Wizard's Apprentice", 
    tech:"Flask. Python3. GoogleVision API. PostgreSQL", 
    story:"Wizard’s Apprentice is a photo-scavenger-hunt game on a social platform, using Google Vision to validate and analyze players’ photo submissions using API calls and display players' competition results.",
    git:"https://github.com/joyliao07/wizards_apprentice",
    deploy:"",
    color: "(255,111,105)",
    colorHover: "(209, 90, 86)"},
    {name: "AirQuality App", 
    tech:"Angular9. TypeScript. NodeJS. AirVisual API", 
    story:"AirQuality allows users to check the degrees of air pollution in cities worldwide, in real time, by reading the “aqius” index. Users can request new cities to be added to the website by filling out the contact form.",
    git:"https://github.com/joyliao07/airQuality ",
    deploy:"",
    color: "(91,192,222)",
    colorHover: "(60, 164, 196)"},
    {name: "Raspberry Garden", 
    tech:"Django. Python3. RaspberryPi. PostgreSQL", 
    story:"With Raspberry Pi’s GPIO, the app monitors water levels and temperatures of the garden environment and updates the results on the website for easy access.",
    git:"https://github.com/joyliao07/raspberry-garden",
    deploy:"",
    color: "(92,184,92)",
    colorHover: "(67, 136, 67)"},
    {name: "Stock Portfolio", 
    tech:"Flask. Python3. Jinja2 Template. IEXStock API", 
    story:"Stock portfolio allows registered users to search for company stock histories and their five-year trend in graphs.",
    git:"https://github.com/joyliao07/stock_portfolio",
    deploy:"",
    color: "(255,204,92)",
    colorHover: "(209, 165, 70)"},
    {name: "GottaEat!App", 
    tech:"ExpressJS. JavaScript. Spoonacular API", 
    story:"The app utilizes the Spoonacular recipe API, finding recipes that match the ingredients that are readily available to the user.",
    git:"https://github.com/301-Project/gotta-eat-app  ",
    deploy:"",
    color: "(136,216,176)",
    colorHover: "(113, 179, 146)"},
    {name: "BlockBuster 2D", 
    tech:"Unity2D. C#. Play the game on the browser!", 
    story:"Block Buster 2D is a simple game with visual and sound effects. I built it as a fun project to understand more about game development with Unity.",
    git:"https://github.com/joyliao07/unity_BlockBreaker",
    deploy:"https://joyliao07.github.io/unity_BlockBreaker/BlockBreaker2DWebGL/index.html",
    color: "(255,238,173)",
    colorHover: "(212, 202, 158)"},
];

const Portfolio = () => {
    const [modal, setModal] = useState(false);
    const [projectName, setProjectName] = useState("");
    const [projectTech, setProjectTech] = useState("");
    const [projectStory, setProjectStory] = useState("");
    const [git, setGit] = useState("");
    const [deploy, setDeploy] = useState("");

    const modalOpenHandler = (params) => {
        setProjectName(params.name);
        setProjectTech(params.tech);
        setProjectStory(params.story);
        setGit(params.git);
        setDeploy(params.deploy);
        setModal(true);
    }

    const modalCloseHandler = () => {
        setModal(false);
    }

    return (
        <Element id="portfolio" className={classes.parent}>
            {modal &&
            <ProjectModal 
                name={projectName}
                tech={projectTech}
                story={projectStory}
                git={git}
                deploy={deploy}
                close={modalCloseHandler}/>
            }
            <SectionBanner section="Portfolio"/>
            <Container>
                <Row className={classes.outerContainer}>
                    {projectDetails.map( project => {
                        return <PortfolioBlock 
                                    name={project.name} 
                                    tech={project.tech} 
                                    story={project.story}
                                    color={project.color}
                                    git={project.git}
                                    deploy={project.deploy}
                                    colorHover={project.colorHover}
                                    open={modalOpenHandler} />
                    })}
                </Row>
            </Container>
            <div className={classes.base}></div>
        </Element>
    );
}

export default Portfolio;
