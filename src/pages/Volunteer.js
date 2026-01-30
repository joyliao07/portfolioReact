import classes from './Volunteer.module.css';
import classNames from 'classnames';
import Container from 'react-bootstrap/Container';
import SectionBanner from '../components/SectionBanner';
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Element } from 'react-scroll';
import useWindowDimensions from '../components/useWindowDimensions';
import VolunteerBlock from '../components/VolunteerBlock';
import volunteerDetails from '../assets/volunteerDetails';


const Volunteer = () => {
    const width = useWindowDimensions();
    let itemNumber = 3;
    if (width < 900) {
        itemNumber = 1;
    } else if (width < 1200) {
        itemNumber = 2;
    }

    const carouselInnerContainer = classNames(classes.carouselInnerContainer, "owl-theme");
    let carousel =  <OwlCarousel    items={itemNumber} 
                                    className={carouselInnerContainer}
                                    loop nav margin={8}>
                        {volunteerDetails.map(project => {
                           return  <VolunteerBlock 
                                        key={project.name}
                                        name={project.name}
                                        time={project.time} 
                                        tech={project.tech}
                                        story={project.story}/>
                        })}
                    </OwlCarousel>;

    return (
        <Element id="volunteer" className={classes.parent}>
            <Container fluid className={classes.carouselOuterContainer}>
                <SectionBanner section="Volunteer"/>
                {carousel}
            </Container>
        </Element>
    );
}

export default Volunteer;
