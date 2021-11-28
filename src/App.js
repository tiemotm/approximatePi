import PiPlot from './components/PiPlot';
import {Container} from 'react-bootstrap'

function App() {
  return (
    <Container fluid>
      <Container className="p-3 text-center h-100">
        <h2>Monte Carlo Simulation of π</h2>
      </Container>
      <PiPlot/>
    </Container>
  );
}

export default App;
