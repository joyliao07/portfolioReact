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
                        Joyce is a <span style={{ color: "black" }}>Backend Engineer</span> with <span style={{ color: "black" }}>SSCP certification</span>, specializing in microservice architectures for <span style={{ color: "black" }}>security-sensitive and regulated environments</span>. She brings strong expertise in <span style={{ color: "black" }}>C#, ASP.NET, Java, SQL, and cloud platforms</span>, with a proven track record of delivering FICAM-compliant ICAM/PACS solutions in alignment with federal security standards. 
                    </h4>
                </Row>
                <Row className={`${classes.description}`} style={{marginLeft: '15%', marginRight: '15%'}}>
                    <h4 style={{ lineHeight: '2' }}>
                        Experienced in leveraging <span style={{ color: "black" }}>AI-integrated tools</span> to improve developer productivity and code quality, Joyce is committed to delivering reliable, scalable, and maintainable systems that support mission-critical operations while meeting strict compliance and security requirements.
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
