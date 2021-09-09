import Button from 'react-bootstrap/Button';
import classes from './MessageModal.module.css';

const MessageModal = (props) => {
    const closeHandler = () => {
        props.close();
    }

    return(
        <div className={classes.screen} onClick={closeHandler}>
            <div className={classes.messageBox}>
                <h4>Thank you for reaching out. Your message will be responded within 24 hours.</h4>
                <Button variant="light" onClick={closeHandler}>Close</Button>{' '}
            </div>
        </div>
    );
}

export default MessageModal;
