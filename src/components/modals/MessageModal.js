import Button from 'react-bootstrap/Button';
import classes from './MessageModal.module.css';

const MessageModal = (props) => {
    const closeHandler = () => {
        props.close();
    }

    return(
        <div className={classes.screen} onClick={closeHandler}>
            <div className={classes.box}>
                <h4>Thank you for reaching out. I will respond to your message as soon as I can.</h4>
                <Button variant="light" onClick={closeHandler}>Close</Button>{' '}
            </div>
        </div>
    );
}

export default MessageModal;
