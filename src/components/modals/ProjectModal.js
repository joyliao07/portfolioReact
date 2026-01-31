import classes from './ProjectModal.module.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectModal = (props) => {
    const closeHandler = () => {
        props.close();
    }

    let deployLink =                     
        <div className={classes.deploy}>
            <div className={classes.linkIcon}>
                <FaExternalLinkAlt size="sm" color="rgba(68, 67, 67, 0.85)"/>
            </div>
            <a  href={props.deploy} 
                target="_blank" 
                rel="noreferrer">Visit Website</a>
        </div>;

    if (props.deploy === "") {
        deployLink = <></>;
    }

    return(
        <div className={classes.screen} onClick={closeHandler}>
            <div className={classes.projectBox}>
                <h2>{props.name}</h2>
                <h3>{props.tech}</h3>
                <p>{props.story}</p>
                <div className={classes.gitBox}>
                    <div className={classes.gitIcon}>
                        <FaGithub size="sm" color="rgba(68, 67, 67, 0.85)"/>
                    </div>
                    <div className={classes.gitLink}>
                        <a  href={props.git} 
                            target="_blank" 
                            rel="noreferrer"><p>{props.git}</p></a>
                    </div>
                </div>
                {deployLink}
                <button className={classes.button} 
                        onClick={closeHandler}>Close</button>
            </div>
        </div>
    );
}

export default ProjectModal;
