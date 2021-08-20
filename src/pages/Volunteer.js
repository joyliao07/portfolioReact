import classes from './Volunteer.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import SectionBanner from '../components/SectionBanner';
import PortfolioBlock from '../components/PortfolioBlock';

const Volunteer = () => {
    return (
        <Container>
            <SectionBanner section="Volunteer"/>
            <Row>
                <PortfolioBlock name="Temp-1" tech="React JS, ASP.NET"/>
                <PortfolioBlock name="Temp-2" tech="React JS"/>
                <PortfolioBlock name="Temp-3" tech="Python3, Google Vision API, PostgreSQL"/>
                <PortfolioBlock name="Temp-4" tech="Angular9, TypeScript"/>
            </Row>
        </Container>
    );
}

export default Volunteer;
