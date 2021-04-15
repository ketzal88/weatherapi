import React from "react";
import { Navbar, Container } from "react-bootstrap";

function Menu({ ciudad }) {
  return (
    <Navbar bg="dark" expand="sm">
      <Container>
        <Navbar.Brand href="#home" style={{ color: "white" }}>
          El clima de la semana en las <br />
          principales ciudades del mundo
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
