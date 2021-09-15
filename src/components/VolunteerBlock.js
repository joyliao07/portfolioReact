import classes from './VolunteerBlock.module.css';
import './VolunteerBlock.css';
import classNames from 'classnames';

const VolunteerBlock = (props) => {
    const myClass = props.name.toLowerCase().replace(/\s/g,'');
    let pixClasses = classNames(classes.pix, myClass);

    return(
        <div className={classes.projectBox}>
            <div className={pixClasses}></div>
            <div className={classes.description}>
                <h2>{props.name}</h2>
                <p>{props.time}</p>
                <h4>{props.tech}</h4>
                <p>{props.story}</p>
            </div>
        </div>
    );
}

export default VolunteerBlock;
