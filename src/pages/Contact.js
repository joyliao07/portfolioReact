import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Element } from 'react-scroll';
import * as emailjs from "emailjs-com";
import classes from './Contact.module.css';
import SectionBanner from '../components/SectionBanner';
import MessageModal from '../components/modals/MessageModal';


const Contact = () => {
    require('dotenv').config();
    const [senderEmail, updateSenderEmail] = useState(' ');
    const [feedback, updateFeedback] = useState(' ');
    const [modal, setModal] = useState(true);

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
            "to activate, change to user"
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
                    <Col className={classes.info} md={6} sm={12}>
                        <h5>Please email me to discuss coding or simply getting to know each other. I look forward to hearing from you!</h5>
                        <h>Please allow 24 hours for response.</h>
                    </Col>
                    <Col  className={classes.form} md={6} sm={12}>
                        <form onSubmit={handleSubmit}>
                            <div className={`mb-3 ${classes.email}`}>
                                <div>
                                    <label>Email address</label>
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
            </Container>
        </Element>
    );
}

export default Contact;
