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

const volunteer = [
    {   name: "OrcaSound",
        time: "2021",
        tech: "Python.RaspberryPi.Docker",
        story: "OrcaSound installs RaspberryPi in the ocean to track Orca whales’ sounds and movement. The data is sent to marine biologists and the US Ocean Observatories Initiative to preserve Orca and other marine species."},
    {   name: "HumanityForward",
        time: "2021",
        tech: "ReactJS",
        story: "HumanityForward works with a burgeoning, bipartisan coalition of lawmakersto advance direct cash transfers to the American people."},
    {   name: "DemocracyLab",
        time: "2019",
        tech: "ReactJS",
        story: "DemocracyLab connects programming volunteers with tech-for-good projects to facilitate the realization of MVP's for these startups."},
    {   name: "AccessibilityApp",
        time: "2021",
        tech: "ASP.NET",
        story: "AccessibilityApp promotes accessibility of technology by allowing users to rate public websites."},
];

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
                        {volunteer.map(project => {
                           return  <VolunteerBlock 
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
