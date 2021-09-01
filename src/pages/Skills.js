import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import classes from './Skills.module.css';
import { Element } from 'react-scroll';

const Skills = () => {
    return (
        <Element id="skills" className={classes.parent}>
            <Container fluid className={classes.skills}>
                <Row className={classes.title}>
                    <h1>Developement Experience</h1>
                </Row>
                <Row className={classes.banner}>
                    <h4>Bootstrap is an open-source front-end library with HTML and CSS based designs. This website is built with HTML5, CSS3 and Bootstrap</h4>
                </Row>
                <Row className={classes.button}>
                    <Button variant="primary" style={{width: "125px"}}>See Portfolio</Button>
                </Row>
            </Container>

            <Container fluid>
                <Row>
                    <Col className={classes.skillBlock} md={6} lg={4}>
                        <Button>Click</Button>
                        <h3>ASP.NET</h3>
                        <p>some text...</p>
                    </Col>
                    <Col className={classes.skillBlock} md={6} lg={4}>
                        <Button>Click</Button>
                        <h3>REACT</h3>
                        <p>some text...</p>
                    </Col>
                    <Col className={classes.skillBlock} md={6} lg={4}>
                        <Button>Click</Button>
                        <h3>HTML. CSS</h3>
                        <p>some text...</p>
                    </Col>
                    <Col className={classes.skillBlock} md={6} lg={4}>
                        <Button>Click</Button>
                        <h3>PYTHON</h3>
                        <p>some text...</p>
                    </Col>
                    <Col className={classes.skillBlock} md={6} lg={4}>
                        <Button>Click</Button>
                        <h3>NODE JS</h3>
                        <p>some text...</p>
                    </Col>
                    <Col className={classes.skillBlock} md={6} lg={4}>
                        <Button>Click</Button>
                        <h3>C#</h3>
                        <p>some text...</p>
                    </Col>
                </Row>
            </Container>
            <div className={classes.base}></div>
        </Element>
    );
}

export default Skills;
