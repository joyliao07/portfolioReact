import classes from './Volunteer.module.css';
import Container from 'react-bootstrap/Container';
import SectionBanner from '../components/SectionBanner';
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Element } from 'react-scroll';
import useWindowDimensions from '../components/useWindowDimensions';
import VolunteerBlock from '../components/VolunteerBlock';

const volunteer = [
    {   name: "OrcaSound",
        tech: "python",
        story: "orca sound is cool..."},
    {   name: "Humanity Forward",
        tech: "python",
        story: "Humanity Forward is cool..."},
    {   name: "DemocracyLab",
        tech: "python",
        story: "DemocracyLab is cool..."},
    {   name: "AccessibilityApp",
        tech: "python",
        story: "AccessibilityApp is cool..."},
];

const Volunteer = () => {
    const width = useWindowDimensions();
    let itemNumber = 3;

    if (width < 1200) {
        itemNumber = 2;
    }

    let carousel =  <OwlCarousel items={itemNumber} className="owl-theme" loop nav margin={8}>
                        {volunteer.map(project => {
                           return  <VolunteerBlock 
                                        name={project.name} 
                                        tech={project.tech}
                                        story={project.story}/>
                        })}
                    </OwlCarousel>;

    return (
        <Element id="volunteer" className={classes.parent}>
            <Container fluid>
                <SectionBanner section="Volunteer"/>
                {carousel}
            </Container>
        </Element>
    );
}

export default Volunteer;
