import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import classes from './Skills.module.css';
import { Element } from 'react-scroll';
import Scroll from 'react-scroll';
import { FaPython, FaReact, FaMicrosoft, FaJava, FaDatabase } from 'react-icons/fa';
import { SiMicrosoftazure } from 'react-icons/si';

const Skills = () => {
    const Link = Scroll.Link;

    return (
        <Element id="skills" className={classes.parent}>
            <Container fluid className={classes.introContainer}>
                <Row className={classes.banner}>
                    <h1>Professional Summary</h1>
                </Row>
                <Row className={`${classes.description}`} style={{marginLeft: '15%', marginRight: '15%' }}>
                    <h4 style={{ lineHeight: '2', marginTop: '10px' }}>
                        Joyce is a <span style={{ color: "black" }}>Backend Engineer</span> who specializes in building <span style={{ color: "black" }}>secure, reliable microservice systems</span> for regulated and security-sensitive environments. She brings strong expertise in <span style={{ color: "black" }}>C#, ASP.NET, SQL, Java</span>, and cloud platforms, and has contributed to <span style={{ color: "black" }}>FICAM-compliant ICAM/PACS solutions</span> aligned with federal security standards.
                    </h4>
                </Row>
                <Row className={`${classes.description}`} style={{marginLeft: '15%', marginRight: '15%'}}>
                    <h4 style={{ lineHeight: '2' }}>
                        She enjoys working on complex backend problems and has experience using <span style={{ color: "black" }}>AI-integrated tools</span> (such as Grok) to improve developer productivity and code security. Joyce focuses on writing clean, maintainable code and deliverying systems that are <span style={{ color: "black" }}>scalable, auditable, and reliable</span> — especially in mission-critical contexts where <span style={{ color: "black" }}>security and reliability</span> matter.
                    </h4>
                </Row>
                <Row className={`${classes.description}`} style={{marginLeft: '15%', marginRight: '15%'}}>
                    <h4 style={{ lineHeight: '2' }}>
                        Joyce has completed formal training in <span style={{ color: "black" }}>secure systems and software development</span> and actively pursues ongoing professional development in <span style={{ color: "black" }}>application security</span> and <span style={{ color: "black" }}>secure software engineering</span>.
                    </h4>
                </Row>
                <Row className={`${classes.buttonRow} d-flex justify-content-center`}>
                    <Link
                        to="portfolio"
                        spy={true} 
                        smooth={true} 
                        duration={100}
                        className={classes.button}
                        style={{ 
                            textDecoration: 'none', 
                            display: 'flex', 
                            alignItems: 'center', 
                            justifyContent: 'center' 
                        }}>
                        Visit Portfolio
                    </Link>
                </Row>
            </Container>

            <Container fluid>
                <Row className={classes.skillsContainer}>
                    <Col className={classes.skillBlock} md={6} lg={4}>
                        <div style={{height: "60px"}}>
                            <div style={{width: "45px"}}>
                                <FaMicrosoft size={55}/>
                            </div>
                        </div>
                        <h2>ASP.NET|C#</h2>
                    </Col>
                    <Col className={classes.skillBlock} md={6} lg={4}>
                        <div style={{ height: "60px", paddingTop: "10px" }}>
                            <div style={{ width: "65px" }}>
                                <SiMicrosoftazure size={57} color="black" /> {/* Azure's official blue */}
                            </div>
                        </div>
                        <h2>Azure</h2>
                    </Col>
                    <Col className={classes.skillBlock} md={6} lg={4}>
                        <div style={{ height: "60px", paddingTop: "10px" }}>
                            <div style={{ width: "65px" }}>
                                <FaJava size={57} />
                            </div>
                        </div>
                        <h2>Java</h2>
                    </Col>
                    <Col className={classes.skillBlock} md={6} lg={4}>
                        <div style={{height: "60px"}}>
                            <div style={{width: "60px"}}>
                                <FaReact size={55}/>
                            </div>
                        </div>
                        <h2>REACT</h2>
                    </Col>
                    <Col className={classes.skillBlock} md={6} lg={4}>
                        <div style={{height: "60px"}}>
                            <div style={{width: "38px"}}>
                                <FaDatabase size={55}/>
                            </div>
                        </div>
                        <h2>SQL</h2>
                    </Col>
                    <Col className={classes.skillBlock} md={6} lg={4}>
                        <div style={{height: "60px"}}>
                            <div style={{width: "50px"}}>
                                <FaPython size={55}/>
                            </div>
                        </div>
                        <h2>PYTHON</h2>
                    </Col>
                </Row>
            </Container>
        </Element>
    );
}

export default Skills;
