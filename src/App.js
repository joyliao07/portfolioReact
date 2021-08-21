import './App.css';
import NavBar from './components/NavBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Portfolio from './pages/Portfolio';
import Volunteer from './pages/Volunteer';
import Contact from './pages/Contact';


function App() {
  return (
    <Container fluid style={{"min-width": "600px"}}>
      <Row style={{height: "55px"}}>
          <NavBar></NavBar>
      </Row>
      <Row>
        <Home/>
      </Row>
      <Row>
        <Skills/>
      </Row>
      <Row>
        <Portfolio/>
      </Row>
      <Row>
        <Volunteer/>
      </Row>
      <Row>
        <Contact/>
      </Row>
      <p>Copy@JoyceLiao2021</p>
    </Container>
  );
}

export default App;
