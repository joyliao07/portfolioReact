import { useState } from 'react';
import classes from './Portfolio.module.css';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioBlock from '../components/PortfolioBlock';
import SectionBanner from '../components/SectionBanner';
import { Element } from 'react-scroll';
import ProjectModal from '../components/modals/ProjectModal';
import projectDetails from '../assets/projectDetails';
import projectDetailsFeatured from '../assets/projectDetailsFeatured';


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
                <Row className={`${classes.outerContainer} justify-content-center`}>
                    <Col xs={12} className="text-center">
                        <h3 style={{ marginBottom: '40px' }}>Featured Projects</h3>
                    </Col>
                    
                    {projectDetailsFeatured.map( project => {
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
            <Container>
                <Row className={`${classes.outerContainer} justify-content-center`}>
                    <Col xs={12} className="text-center">
                        <h3 style={{ marginBottom: '40px' }}>Project History</h3>
                    </Col>
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
