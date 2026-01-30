import { useState } from 'react';
import classes from './Portfolio.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import PortfolioBlock from '../components/PortfolioBlock';
import SectionBanner from '../components/SectionBanner';
import { Element } from 'react-scroll';
import ProjectModal from '../components/modals/ProjectModal';
import projectDetails from '../assets/projectDetails';


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
                                    key={project.name}
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
