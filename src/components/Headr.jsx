import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';

export default function Headr({count}) {
  return (
    
    <Navbar bg="dark" data-bs-theme="dark">
    <Container>
      <Navbar.Brand as={NavLink} to="/">
      <img
              alt=""
              src="logo-2023.jpg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}КСД</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link as={NavLink} to="/" >
        Головна
        </Nav.Link>
        <Nav.Link href="#features">Корзина    <Badge bg="primary">{count}</Badge></Nav.Link>
        <Nav.Link as={NavLink} to="/info" >
         Відьмак 
         </Nav.Link>
         <Nav.Link as={NavLink} to="/info1" >
         Відьмак 2
         </Nav.Link>
          <Nav.Link as={NavLink} to="/info2" >
          Відьмак 3
          </Nav.Link>
           <Nav.Link as={NavLink} to="/info3" >
           Відьмак 4
           </Nav.Link>
            <Nav.Link as={NavLink} to="/info4" >
            Відьмак 5
            </Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  )
}
