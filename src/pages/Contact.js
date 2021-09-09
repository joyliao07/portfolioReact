import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Element } from 'react-scroll';
import * as emailjs from "emailjs-com";
import classes from './Contact.module.css';
import SectionBanner from '../components/SectionBanner';
import MessageModal from '../components/modals/MessageModal';
import Nav from 'react-bootstrap/Nav'
import Scroll from 'react-scroll';

const Contact = () => {
    require('dotenv').config();
    const Link = Scroll.Link;
    const [senderEmail, updateSenderEmail] = useState(' ');
    const [feedback, updateFeedback] = useState(' ');
    const [modal, setModal] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        const receiverEmail = process.env.REACT_APP_emailjsReceiver;
        const templateId = process.env.REACT_APP_emailjsTemplateId;
        const user = process.env.REACT_APP_emailjsUserId;
        sendFeedback({templateId, senderEmail, receiverEmail, feedback, user});
        setModal(true);
    }

    const sendFeedback = ({templateId, senderEmail, receiverEmail, feedback, user}) => {
        emailjs
          .send(
            "service_0t9puc1",
            templateId,
            {
              senderEmail,
              receiverEmail,
              feedback,
            },
            "to activate, put user"
          )
          .then(res => {
            if (res.status === 200) {
              console.log("message is sent.");
            }
          })
          .catch(err => console.error("Failed to send. Error: ", err))
        updateFeedback("");
        updateSenderEmail("");
    }

    const handleSenderEmail = (event) => {
        updateSenderEmail(event.target.value);
    }

    const handleMessage = (event) => {
        updateFeedback(event.target.value);
    }

    const handleCancel = (event) => {
        updateSenderEmail("");
        updateFeedback("");
    }

    const closeModal = () => {
        setModal(false);
    }

    return (
        <Element id="contact" className={classes.parent}>
            {modal && <MessageModal close={closeModal}/> }
            <Container fluid>
                <SectionBanner section="Contact Me"/>
                <Row>
                    <Col className={classes.info} lg={6} md={12} sm={12}>
                        <h5>You're welcome to message me to discuss coding or simply getting to know each other. I look forward to hearing from you!</h5>
                        <p>Please allow 24-hour response time.</p>
                    </Col>
                    <Col  className={classes.form} lg={6} md={12} sm={12}>
                        <form onSubmit={handleSubmit}>
                            <div className={`mb-3 ${classes.email}`}>
                                <div>
                                    <label>Your Email</label>
                                </div>
                                <input 
                                    type="text" 
                                    placeholder="name@example.com"
                                    value={senderEmail}
                                    onChange={handleSenderEmail}
                                    required/>
                            </div>
                            <div  className={`mb-3 ${classes.message}`}>
                                <div>
                                    <label>Message</label>
                                </div>
                                <textarea
                                    onChange={handleMessage}
                                    value={feedback}
                                    required></textarea>
                            </div>
                            <div>
                                <Button type="submit" variant="primary">Send</Button>{' '}
                                <Button variant="secondary" onClick={handleCancel}>Cancel</Button>{' '}
                            </div>
                        </form>
                    </Col>

                </Row>
                <Row>
                    <Col>
                        <p><strong>&copy;JoyceLiao2021</strong></p>
                    </Col>
                    <Col>
                        <Nav.Link>
                            <Link
                                to="home"
                                spy={true} 
                                duration={200}>
                                <Button variant="primary">To Top</Button>
                            </Link>
                        </Nav.Link>
                    </Col>
                </Row>
            </Container>
        </Element>
    );
}

export default Contact;
