import React from "react";
import { Card, Spinner, Col, Row, Container } from "react-bootstrap";
import Moment from "react-moment";

function CardDia({ hoy, loading, ciudad }) {
  const {
    dt,
    feels_like,
    humidity,
    pressure,
    sunrise,
    sunset,
    temp,
    wind_speed,
    weather,
  } = hoy;
  return (
    <Card className="text-center overflow-hidden m-4">
      <Card.Body>
        {ciudad && <Card.Title>{ciudad}</Card.Title>}

        {loading ? (
          <Spinner animation="grow" className="m-2"></Spinner>
        ) : (
          <Container>
            <Row>
              <Col>
                <Card.Title>Hoy</Card.Title>
                {weather ? (
                  <img
                    alt={weather[0].description}
                    src={`http://openweathermap.org/img/w/${weather[0].icon}.png`}
                    style={{ width: "4em" }}
                  />
                ) : (
                  <></>
                )}
                {weather ? (
                  <Card.Text style={{ textTransform: "capitalize" }}>
                    {weather[0].description}
                  </Card.Text>
                ) : (
                  <></>
                )}
                {temp && <Card.Title>{temp} °C</Card.Title>}
                <Card.Text>
                  Sensasión <br /> Térmica: {feels_like} °C
                </Card.Text>
              </Col>
              <Col>
                <Card.Text>Humedad {humidity} %</Card.Text>
                <Card.Text>Presión {pressure} °</Card.Text>
                <Card.Text>Presión {wind_speed} Km/h</Card.Text>
                <Card.Text>
                  Amanecer:{" "}
                  <Moment local unix format={"hh:mm"} date={sunrise} />
                </Card.Text>
                <Card.Text>
                  Atardecer:{" "}
                  <Moment local unix format={"hh:mm"} date={sunset} />
                </Card.Text>
                {dt && <Moment local unix format={"DD MMM"} date={dt} />}
              </Col>
            </Row>
          </Container>
        )}
      </Card.Body>
    </Card>
  );
}

export default CardDia;
