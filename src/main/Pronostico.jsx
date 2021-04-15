import React from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import Card from "../main/Card";
import PropTypes from "prop-types";

function Pronostico({ pronostico, loading }) {
  return (
    <Container fluid="sm">
      <Row lg={5} className="justify-content-md-center">
        {loading ? (
          <Spinner animation="grow" className="m-2"></Spinner>
        ) : (
          <>
            {pronostico.map((item) => (
              <Card
                main={item.temp}
                weather={item.weather[0]}
                footer={item.dt}
                key={item.dt}
              />
            ))}
          </>
        )}
      </Row>
    </Container>
  );
}

Pronostico.defaultProps = {
  forecast: [],
  loading: false,
};

Pronostico.prototype = {
  forecast: PropTypes.array,
  loading: PropTypes.bool,
};

export default Pronostico;