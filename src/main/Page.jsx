import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Clima from "../main/Clima";

function Page({
  hoy,
  pronostico,
  loading,
  ciudades,
  ciudad,
  selected,
  setSelection,
  handleSelection,
  getCiudad
}) {
  return (
    <Container style={{ minHeight: "100vh" }}>
      <Row>
        <Col>
          <Clima
            hoy={hoy}
            loading={loading}
            getCiudad={getCiudad}
            pronostico={pronostico}
            ciudades={ciudades}
            ciudad={ciudad}
            handleSelection={handleSelection}
            selected={selected}
            setSelection={setSelection}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Page;
