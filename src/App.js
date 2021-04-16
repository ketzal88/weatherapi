import "bootstrap/dist/css/bootstrap.min.css";
import "./shards-dashboards.1.1.0.min.css";
import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Menu from "./main/Menu";
import Page from "./main/Page";
import Footer from "./main/LayoutFooter";

function App() {
  const key = "bf72a12616be55a72aa15d11fca48ec1";

  const [hoy, setHoy] = useState({});
  const [pronostico, setPronostico] = useState([]);
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);
  const [loading, setLoading] = useState(false);
  const [selected, setSelection] = useState("Ubicación");
  const [ciudad, setCiudad] = useState(null);

  const ciudades = [
    { ciudad: "Ubicacion", value: "Buenos Aires" },
    { ciudad: "Londres", value: "Londres" },
    { ciudad: "Madrid", value: "Madrid" },
    { ciudad: "Tokio", value: "Tokio" },
    { ciudad: "New York", value: "New York" },
    { ciudad: "Paris", value: "Paris" },
  ];

  useEffect(
    function () {
      const getUserLocation = () => {
        const applyUserLocation = (userLocation) => {
          setLat(userLocation.coords.latitude);
          setLong(userLocation.coords.longitude);
        };
        navigator.geolocation.getCurrentPosition(applyUserLocation);
      };
      const getLocation = () => {
        setLoading(true);
        axios
          .get(
            `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&lang=es&units=metric&exclude=minutely,alerts,hourly&appid=${key}`
          )
          .then((response) => {
            setHoy(response.data.current);
            setPronostico(response.data.daily.splice(3));
            setLoading(false);
          })
          .catch((error) => {
            console.log(error);
          });
      };

      if (lat !== 0 && long !== 0) {
        getLocation();
      } else if (lat === 0 && long === 0) {
        getUserLocation();
      }

      return null;
    },
    [lat, long]
  );

  const getCiudad = (city) => {
    setLoading(true);
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`
      )
      .then((response) => {
        setCiudad(response.data.name);
        setLat(response.data.coord.lat);
        setLong(response.data.coord.lon);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="App">
      <Menu ciudad={ciudad} />
      <Page
        hoy={hoy}
        pronostico={pronostico}
        loading={loading}
        ciudades={ciudades}
        ciudad={ciudad}
        selected={selected}
        setSelection={setSelection}
        getCiudad={getCiudad}
      />
      <Footer />
    </div>
  );
}

export default App;
