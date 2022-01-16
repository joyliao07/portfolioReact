import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import classes from './Skills.module.css';
import { Element } from 'react-scroll';
import Nav from 'react-bootstrap/Nav'
import Scroll from 'react-scroll';
import { FaNodeJs, FaPython, FaLaptopCode, FaRegFileCode, FaReact, FaMicrosoft } from 'react-icons/fa';

const Skills = () => {
    const Link = Scroll.Link;

    return (
        <Element id="skills" className={classes.parent}>
            <Container fluid className={classes.introContainer}>
                <Row className={classes.banner}>
                    <h1>Developement Experience</h1>
                </Row>
                <Row className={classes.description}>
                    <h4>Joyce is passionate about building apps in various languages, from JavaScript, TypeScript, C#, to Python. She has gained experience both from working in the industry and volunteering for tech-for-good projects.</h4>
                </Row>
                <Row className={classes.buttonRow}>
                    <Nav.Link>
                        <Link
                            to="portfolio"
                            spy={true} 
                            smooth={true} 
                            duration={100}>
                            <button className={classes.button}>Visit Portfolio</button>
                        </Link>
                    </Nav.Link>
                </Row>
            </Container>

            <Container fluid>
                <Row className={classes.skillsContainer}>
                    <Col className={classes.skillBlock} md={6} lg={4}>
                        <div style={{height: "60px"}}>
                            <div style={{width: "45px"}}>
                                <FaMicrosoft size="sm"/>
                            </div>
                        </div>
                        <h2>ASP.NET</h2>
                    </Col>
                    <Col className={classes.skillBlock} md={6} lg={4}>
                        <div style={{height: "60px"}}>
                            <div style={{width: "60px"}}>
                                <FaReact size="sm"/>
                            </div>
                        </div>
                        <h2>REACT</h2>
                    </Col>
                    <Col className={classes.skillBlock} md={6} lg={4}>
                        <div style={{height: "60px"}}>
                            <div style={{width: "38px"}}>
                                <FaRegFileCode size="sm"/>
                            </div>
                        </div>
                        <h2>HTML.CSS</h2>
                    </Col>
                    <Col className={classes.skillBlock} md={6} lg={4}>
                        <div style={{height: "60px"}}>
                            <div style={{width: "50px"}}>
                                <FaPython size="sm"/>
                            </div>
                        </div>
                        <h2>PYTHON</h2>
                    </Col>
                    <Col className={classes.skillBlock} md={6} lg={4}>
                        <div>
                            <div style={{width: "50px"}}>
                                <FaNodeJs size="sm"/>
                            </div>
                        </div>
                        <h2>NODE JS</h2>
                    </Col>
                    <Col className={classes.skillBlock} md={6} lg={4}>
                        <div style={{height: "60px", "padding-top": "10px"}}>
                            <div style={{width: "65px"}}>
                                <FaLaptopCode size="lg"/>
                            </div>
                        </div>
                        <h2>C#</h2>
                    </Col>
                </Row>
            </Container>
        </Element>
    );
}

export default Skills;
