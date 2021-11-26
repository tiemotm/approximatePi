import PiPlot from './components/PiPlot';
import {Container} from 'react-bootstrap'

function App() {
  return (
    <Container fluid>
      <Container className="p-3 text-center h-100">
        <h1>Monte Carlo Simulation of Pi</h1>
      </Container>
      <PiPlot/>
    </Container>
  );
}

export default App;
