import React from 'react'
import '../App.css';
import { Container, Row, Col } from 'react-bootstrap';

const Content = () => {
  return (
    <Container fluid>
    <Row>
      <Col>
        <h1 style={{textAlign: 'center', fontSize: '60px'}}>Football Highlights</h1>
      </Col>
    </Row>
  </Container>
  )
}

export default Content