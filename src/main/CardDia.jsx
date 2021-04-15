import React from "react";
import { Card, Spinner } from "react-bootstrap";
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
    <Card className="text-center overflow-hidden m-1">
      <Card.Body>
        {ciudad && <Card.Title>{ciudad}</Card.Title>}

        {loading ? (
          <Spinner animation="grow" className="m-2"></Spinner>
        ) : (
          <>
            {weather ? (
              <img
                alt={weather[0].description}
                src={`http://openweathermap.org/img/w/${weather[0].icon}.png`}
                style={{ maxWidth: "10em" }}
              />
            ) : (
              <></>
            )}
            {temp && <Card.Title>{temp} °C</Card.Title>}
            <Card.Text>Sensasión Térmica {feels_like} °C</Card.Text>
            <Card.Text>Humedad {humidity} %</Card.Text>
            <Card.Text>Presión {pressure} °</Card.Text>
            <Card.Text>Presión {wind_speed} Km/h</Card.Text>
            <Card.Text>
              Amanecer: <Moment local unix format={"hh:mm"} date={sunrise} />
            </Card.Text>
            <Card.Text>
              Atardecer: <Moment local unix format={"hh:mm"} date={sunset} />
            </Card.Text>
            <Moment local unix format={"DD MMM"} date={dt} />
            {weather ? (
              <Card.Text style={{ textTransform: "capitalize" }}>
                {weather[0].description}
              </Card.Text>
            ) : (
              <></>
            )}
          </>
        )}
      </Card.Body>
      {dt && (
        <Card.Footer>
          <Moment local unix format={"DD MMM"}>
            {dt}
          </Moment>
        </Card.Footer>
      )}
    </Card>
  );
}

export default CardDia;
