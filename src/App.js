import MonteCarloMethod from './components/MonteCarloMethod';
import MathExplanationMonteCarlo from './components/MathExplanationMonteCarlo';
import {Container, Row, Col} from 'react-bootstrap'
import ArchimedesMethod from './components/ArchimedesMethod';
import GregoryLeibnizSeries from "./components/GregoyLeibnizSeries";

// TODO: Write explanation for archimedes method
// TODO: Write explanation for gregory leibniz series
function App() {
  return (
    <Container className="p-3" fluid="lg">
        <Container fluid className="text-center p-4">
            <h1 className="display-3 fw-bold">Approximate π</h1>
        </Container>
        <Container fluid className="text-center p-4">
            <h2>Monte Carlo Simulation</h2>
        </Container>
        <Row className="mb-5">
            <Col>
                <Container>
                    <h3 className="p-2 text-center">Explanation</h3>
                    <MathExplanationMonteCarlo/>
                </Container>
            </Col>
            <Col>
                <Container fluid style={{maxWidth: 500, minWidth:350}} className="p-0">
                    <MonteCarloMethod/>
                </Container>
            </Col>
        </Row>
        <Container fluid className="text-center p-4">
            <h2>Archimedes Method</h2>
        </Container>
        <Row className="mb-5">
            <Col>
                <Container>
                    <h3 className="p-2 text-center">Explanation</h3>
                    <p className="text-center text-muted">Coming soon.</p>
                </Container>
            </Col>
            <Col>
                <Container fluid style={{maxWidth: 500, minWidth:350}} className="p-0">
                    <ArchimedesMethod/>
                </Container>
            </Col>
        </Row>
        <Container fluid className="text-center p-4">
            <h2>Gregory Leibniz Series</h2>
        </Container>
        <Row className="mb-5">
            <Col>
                <Container>
                    <h3 className="p-2 text-center">Explanation</h3>
                    <p className="text-center text-muted">Coming soon.</p>
                </Container>
            </Col>
            <Col>
                <Container fluid style={{maxWidth: 500, minWidth:350}} className="p-0">
                    <GregoryLeibnizSeries/>
                </Container>
            </Col>
        </Row>
    </Container>
  );
}

export default App;
