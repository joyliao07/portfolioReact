import classes from './SectionBanner.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


const SectionBanner = (props) => {
    return (
        <Container className={classes.SectionBanner}>
            <Row>
                <h1>{props.section}</h1>
            </Row>
            <Row>
                <div className={classes.headingUnderline}></div>
            </Row>
        </Container>
    );
}

export default SectionBanner;