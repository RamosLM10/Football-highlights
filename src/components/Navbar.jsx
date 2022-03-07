import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'

const NavigationBar = () => {
  return (
    <div style={{ height: '8vh'}}>
      <Navbar bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand style={{cursor: 'pointer'}}>Football Highlights</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#about">About</Nav.Link>
            </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavigationBar