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
import { FaRegArrowAltCircleUp } from 'react-icons/fa';

const Contact = () => {
    const Link = Scroll.Link;
    const [senderEmail, updateSenderEmail] = useState(' ');
    const [feedback, updateFeedback] = useState(' ');
    const [modal, setModal] = useState(false);
    const [emailValid, setEmailValid] = useState(true);
    const [messageValid, setMessageValid] = useState(true);

    const handleSubmit = (event) => {
        event.preventDefault();
        // Validate email and message:
        if (validateEmail(senderEmail) && validateMessage(feedback)) {
            const templateId = process.env.REACT_APP_emailjsTemplateId;
            const publicKey = process.env.REACT_APP_emailjsPublicKey;
            sendFeedback({templateId, senderEmail, feedback, publicKey});
            setModal(true);
        } else {
            return;
        }
    }

    const sendFeedback = ({templateId, senderEmail, feedback, publicKey}) => {
        const serviceId = process.env.REACT_APP_emailjsServiceId;

        emailjs
          .send(
            serviceId,
            templateId,
            {
              title: `[React Portfolio] New Message From ${senderEmail}`,
              name: senderEmail,
              message: feedback,
              email: senderEmail,
            },
            publicKey
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

    const validateEmail = (str) => {
        const reg = /\S+@\S+\.\S+/
        if (reg.test(str)) {
            setEmailValid(true);
            return true;
        } else {
            setEmailValid(false);
            return false;
        }
    }

    const handleSenderEmail = (event) => {
        updateSenderEmail(event.target.value);
        validateEmail(event.target.value);
    }

    const validateMessage = (str) => {
        if (str.trim() === '') {
            setMessageValid(false);
            return false;
        } else {
            setMessageValid(true);
            return true;
        }
    }

    const handleMessage = (event) => {
        updateFeedback(event.target.value);
        validateMessage(event.target.value);
    }

    const handleCancel = (event) => {
        updateSenderEmail("");
        updateFeedback("");
        setEmailValid(true);
        setMessageValid(true);
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
                    <Col className={classes.info} lg={6} md={12}>
                        <p>Please message me to discuss coding or simply get to know each other. I look forward to hearing from you!</p>
                        <p>Please allow 24-hour response time.</p>
                        <p>GitHub:  
                            <a href="https://github.com/joyliao07" target="_blank" rel="noreferrer">
                                www.github.com/joyliao07 
                            </a>
                        </p>
                        <p>LinkedIn: 
                            <a href="https://www.linkedin.com/in/joyceliao-seattle" target="_blank" rel="noreferrer">
                                www.linkedin.com/in/joyceliao-seattle 
                            </a>
                        </p>
                    </Col>
                    <Col  className={classes.form} lg={6} md={12}>
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
                                {!emailValid && <p className={classes.warning}>Please enter an email.</p>}
                            </div>
                            <div  className={`mb-3 ${classes.message}`}>
                                <div>
                                    <label>Message</label>
                                </div>
                                <textarea
                                    onChange={handleMessage}
                                    value={feedback}
                                    required></textarea>
                                {!messageValid && <p className={classes.warning}>Please enter a message.</p>}
                            </div>
                            <div>
                                <Button type="submit" variant="primary">Send</Button>{' '}
                                <Button variant="secondary" onClick={handleCancel}>Cancel</Button>{' '}
                            </div>
                        </form>
                    </Col>

                </Row>
                <Row className={classes.lastRow}>
                    <Col>
                        <p><strong>&copy;JoyceChen2026</strong></p>
                    </Col>
                    <Col>
                    <Nav.Link 
                        as={Link}
                        className={classes.upButtonContainer}
                        style={{ right: '50px', bottom: '50px' }} 
                        to="home"
                        spy={true} 
                        smooth={true}
                        duration={200}>
                        <span className={classes.upButton}>
                            <FaRegArrowAltCircleUp size={55}/>
                        </span>
                    </Nav.Link>
                    </Col>
                </Row>
            </Container>
        </Element>
    );
}

export default Contact;
