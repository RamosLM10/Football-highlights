import { Container, Row, Col } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <h1 style={{textAlign: 'center', fontSize: '60px'}}>Football Highlights</h1>
        </Col>
      </Row>
    </Container>
  );  
}

export default App;
