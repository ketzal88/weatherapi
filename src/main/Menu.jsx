import React from "react";
import { Navbar, Container } from "react-bootstrap";

function Menu({ ciudad }) {
  return (
    <Navbar bg="dark" expand="xl">
      <Container>
        <Navbar.Brand href="#home" style={{ color: "white" }}>
          WeatherAPI by Gabriel Uccello
        </Navbar.Brand>
        {ciudad && (
          <Navbar.Text style={{ color: "white" }}>
            Usted se encuentra en: {ciudad}
          </Navbar.Text>
        )}
      </Container>
    </Navbar>
  );
}

export default Menu;
