import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Element } from 'react-scroll';
import classes from './Contact.module.css';
import * as emailjs from "emailjs-com";


const Contact = () => {
    require('dotenv').config();
    const [senderEmail, updateSenderEmail] = useState(' ');
    const [feedback, updateFeedback] = useState(' ');

    const handleSubmit = (event) => {
        event.preventDefault();

        const receiverEmail = process.env.REACT_APP_emailjsReceiver;
        const templateId = process.env.REACT_APP_emailjsTemplateId;
        const user = process.env.REACT_APP_emailjsUserId;
        sendFeedback({templateId, senderEmail, receiverEmail, feedback, user});
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
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3" controlId="exampleForm.ControlInput1">
                                <label>Email address</label>
                                <input type="text" 
                                    placeholder="name@example.com"
                                    value={senderEmail}
                                    onChange={handleSenderEmail}/>
                            </div>
                            <div className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <label>Message</label>
                                <input as="textarea" rows={3} 
                                    id="feedback-entry"
                                    name="feedback-entry"
                                    required
                                    onChange={handleMessage}
                                    value={feedback}/>
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
