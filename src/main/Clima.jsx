import React, { useState } from "react";
import { Col, Row, DropdownButton, Dropdown, Container } from "react-bootstrap";
import Pronostico from "../main/Pronostico";
import CardDia from "../main/CardDia";

function Clima({
  hoy,
  loading,
  pronostico,
  ciudades,
  ciudad,
  selected,
  setSelection,
  getCiudad,
}) {
  const [showDropdown, setDropdownVisibility] = useState(false);

  function handleSelection(item) {
    setSelection(item.value);
    getCiudad(item.value);
    setDropdownVisibility(false);
  }

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={{ span: 6 }}>
          <DropdownButton
            id="dropdown-basic-button"
            show={showDropdown}
            onClick={() => setDropdownVisibility(!showDropdown)}
            title={selected}
            className="m-3"
          >
            {ciudades.map((item) => (
              <Dropdown.Item
                value={item.value}
                name={item.ciudad}
                onClick={() => handleSelection(item)}
                key={item.value}
              >
                {item.ciudad}
              </Dropdown.Item>
            ))}
          </DropdownButton>
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          {!loading && <CardDia ciudad={ciudad} hoy={hoy} loading={loading} />}
        </Col>
      </Row>
      <Row>
        <Col>
          {!loading && <Pronostico pronostico={pronostico} loading={loading} />}
        </Col>
      </Row>
    </Container>
  );
}

export default Clima;
