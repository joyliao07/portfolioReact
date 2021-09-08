import classes from './VolunteerBlock.module.css';
import './VolunteerBlock.css';
import classNames from 'classnames';

const VolunteerBlock = (props) => {
    const myClass = props.name.toLowerCase().replace(/\s/g,'');
    console.log(myClass);
    let pixClasses = classNames(classes.pix, myClass);

    return(
        <div className={classes.projectBox}>
            <div className={pixClasses}></div>
            <h2>{props.name}</h2>
        </div>
    );
}

export default VolunteerBlock;
