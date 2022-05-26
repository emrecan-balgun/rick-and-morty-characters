import './App.css';
import Header from './container/Header';
import Filter from './container/Filter';
import Characters from './container/Characters';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Header/>
      <Container fluid>
        <Row>
          <Col className="col-4">
            <Filter/>
          </Col>
          <Col className="col-8">
            <Characters/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
