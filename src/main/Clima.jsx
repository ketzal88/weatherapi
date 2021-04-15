// import axios from "axios";
import React, { useEffect, useState } from "react";
// import PropTypes from "prop-types";
import { Col, Row, NavDropdown, Nav } from "react-bootstrap";
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

  useEffect(function () {
    // setLoading(true);
    // const getWeather = (location) => {
    //   axios
    //     .get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}`)
    //     .then((response) => {
    //       setCurrent(response.data);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // };
    // const getForecast = (location) => {
    //   axios
    //     .get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=minutely,alerts,hourly&appid=${key}`)
    //     .then((response) => {
    //       let { list } = response.data;
    //       setForecast(list);
    //       setLoading(false);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // };
    // getWeather(location || city);
    // getForecast(location || city);
  }, []);

  function handleSelection(item) {
    setSelection(item.value);
    getCiudad(item.value);
    setDropdownVisibility(false);
  }

  return (
    <Row className="justify-content-md-center">
      <Col fluid="true">
        <Nav className="mr-auto">
          <NavDropdown
            show={showDropdown}
            onClick={() => setDropdownVisibility(!showDropdown)}
            title={selected}
            id="basic-nav-dropdown"
          >
            {ciudades.map((item) => (
              <NavDropdown.Item
                value={item.value}
                name={item.ciudad}
                onClick={() => handleSelection(item)}
                key={item.value}
              >
                {item.ciudad}
              </NavDropdown.Item>
            ))}
          </NavDropdown>
        </Nav>
        {!loading && <CardDia ciudad={ciudad} hoy={hoy} loading={loading} />}
        <Pronostico pronostico={pronostico} loading={loading} />
      </Col>
    </Row>
  );
}

export default Clima;
