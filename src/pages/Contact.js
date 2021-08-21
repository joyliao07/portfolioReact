import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form'
import { Element } from 'react-scroll';
import classes from './Contact.module.css';


const Contact = () => {
    return (
        <Element id="contact" className={classes.parent}>
            <Container fluid>
                <Row>
                    <Col className={classes.info} md={6} sm={12}>
                        <h1>Contact Me</h1>
                        <h5>Please email me to discuss coding questions or simply getting to know each other. I look forward to hearing from you!</h5>
                        <h>Please allow 24 hours for response.</h>
                    </Col>
                    <Col  className={classes.form} md={6} sm={12}>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Example textarea</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </Element>
    );
}

export default Contact;
