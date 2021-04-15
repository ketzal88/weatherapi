import React from "react";
import { Navbar, Container } from "react-bootstrap";

function Footer() {
  return (
    <Navbar bg="dark" size="xl">
      <Container>
        <Navbar.Brand href="https://github.com/ketzal88" style={{ color: '#ffffff' }}>@Ketzal88 - Github</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Footer;