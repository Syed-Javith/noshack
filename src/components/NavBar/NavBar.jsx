import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./NavBar.css"

const NavBar = () => {
  return (
    <div>
       <Navbar expand="lg" >
      <Container>
        <Navbar.Brand href="/"> <img src={ require('../../assets/images/home/noshack with logo white.png')} alt="" height={60} width={200} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto mx-auto">
            <Nav.Link  href="/">Home</Nav.Link>
            <Nav.Link  href="/about-us">About Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavBar
