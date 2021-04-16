import React from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import Card from "../main/Card";

function Pronostico({ pronostico, loading }) {
  return (
    <Container fluid="sm">
      <Row lg={6} className="justify-content-md-center">
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

export default Pronostico;