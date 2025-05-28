import "./App.css";

import { SearchPage } from "./pages/SearchPage";
// import { DebugConsole } from "./debug/DebugConsole";

import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [locationData, setLocationData] = useState(null);
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      const locationURL = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
      const weatherURL = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code`;

      axios.get(locationURL).then((res) => {
        setLocationData(res.data);
      });

      axios.get(weatherURL).then((res) => {
        setWeatherData(res.data);
      });
    });
  }, []);

  return (
    <>
      <SearchPage
        city={locationData?.address?.city}
        temperature={Math.floor(weatherData?.current?.temperature_2m ?? 0)}
        weatherCode={weatherData?.current?.weather_code}
      />

      {/* DEV CONSOLE BELLOW - SHOULD BE REMOVED IN THE CLIENT VERSION! */}
      {/* <DebugConsole title={"Location API"}>
        {JSON.stringify(locationData, null, 2)}
      </DebugConsole>
      <DebugConsole title={"Weather API"}>
        {JSON.stringify(weatherData, null, 2)}
      </DebugConsole> */}
    </>
  );
}

export default App;
