import Button from 'react-bootstrap/Button';
import classes from './ProjectModal.module.css';

const ProjectModal = (props) => {
    const closeHandler = () => {
        props.close();
    }

    return(
        <div className={classes.screen} onClick={closeHandler}>
            <div className={classes.projectBox}>
                <h4>{props.name}</h4>
                <h5>{props.tech}</h5>
                <p>{props.story}</p>
                <Button variant="light" onClick={closeHandler}>Close</Button>{' '}
            </div>
        </div>
    );
}

export default ProjectModal;
