import classes from './Volunteer.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import SectionBanner from '../components/SectionBanner';
import PortfolioBlock from '../components/PortfolioBlock';
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Element } from 'react-scroll';

const Volunteer = () => {
    return (
        <Element id="volunteer" className={classes.parent}>
            <Container fluid>
                <SectionBanner section="Volunteer"/>
                <OwlCarousel items={3} className="owl-theme" loop nav margin={8}>
                    <PortfolioBlock name="Temp-1" tech="React JS, ASP.NET"/>
                    <PortfolioBlock name="Temp-2" tech="React JS"/>
                    <PortfolioBlock name="Temp-3" tech="Python3, Google Vision"/>
                    <PortfolioBlock name="Temp-4" tech="Angular9, TypeScript"/>
                </OwlCarousel>
            </Container>
        </Element>
    );
}

export default Volunteer;
