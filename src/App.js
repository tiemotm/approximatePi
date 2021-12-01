import PiPlot from './components/PiPlot';
import MathExplanation from './components/MathExplanation';
import {Container, Row, Col} from 'react-bootstrap'


function App() {
  return (
    <Container fluid="lg">
      <Container fluid className="text-center p-4">
        <h1>Monte Carlo Simulation of π</h1>
      </Container>
      <Row>
        <Col>
          <Container>
            <h2 className="p-3 text-center">Explanation</h2>
            <MathExplanation/>
          </Container>
        </Col>
        <Col md={7}>
          <Container fluid className="p-0">
            <PiPlot/>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
