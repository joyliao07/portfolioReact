import classes from './SectionBanner.module.css';
import Row from 'react-bootstrap/Row';


const SectionBanner = (props) => {
    return (
        <Row className={classes.SectionBanner}>
            <h1>{props.section}</h1>
            <div className={classes.headingUnderline}></div>
        </Row>
    );
}

export default SectionBanner;