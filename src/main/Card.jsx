import React from "react";
import { Card, Spinner } from "react-bootstrap";
import Moment from "react-moment";

function CardComponent({ main, weather, title, footer, loading }) {
  return (
    <Card className="text-center overflow-hidden m-2 mb-5">
      <Card.Body>
        {title && <Card.Title>{title}</Card.Title>}

        {loading ? (
          <Spinner animation="grow" className="m-2"></Spinner>
        ) : (
          <>
            {weather.icon ? (
              <img
                alt={weather.description}
                src={`http://openweathermap.org/img/w/${weather.icon}.png`}
                style={{ maxWidth: "4em" }}
              />
            ) : (
              <></>
            )}
            {main.temp && <Card.Title>{main.temp} °C</Card.Title>}
            <Card.Text>Max {main.max} °C</Card.Text>
            <Card.Text>Min {main.min} °C</Card.Text>
            <Card.Text style={{ textTransform: "capitalize" }}>
              {weather.description}
            </Card.Text>
          </>
        )}
      </Card.Body>
      {footer && (
        <Card.Footer>
          <Moment local unix format={"DD MMM"} date={footer} />
        </Card.Footer>
      )}
    </Card>
  );
}

export default CardComponent;
