import "./App.css";

// import { DebugConsole } from "./debug/DebugConsole";
import { SearchPage } from "./pages/SearchPage";

import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [locationData, setLocationData] = useState(null);
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeatherForCity = async (city) => {
    try {
      const geocodeURL = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
        city
      )}`;
      const geocodeRes = await axios.get(geocodeURL);
      const result = geocodeRes.data[0];

      if (!result) {
        alert("City not found");
        return;
      }

      const latitude = result.lat;
      const longitude = result.lon;

      const locationURL = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
      const weatherURL = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code`;

      const [locationRes, weatherRes] = await Promise.all([
        axios.get(locationURL),
        axios.get(weatherURL),
      ]);

      setLocationData(locationRes.data);
      setWeatherData(weatherRes.data);
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    }
  };

  function extractCity(address) {
    return (
      address?.city ||
      address?.town ||
      address?.village ||
      address?.hamlet ||
      address?.municipality ||
      address?.county ||
      address?.state ||
      address?.country ||
      address?.country_code ||
      "Unknown City"
    );
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      fetchWeatherForCity(`${latitude},${longitude}`);
    });
  }, []);

  const city = extractCity(locationData?.address);
  const country = locationData?.address?.country ?? "";

  return (
    <>
      <SearchPage
        country={country}
        city={city}
        temperature={Math.floor(weatherData?.current?.temperature_2m ?? 0)}
        weatherCode={weatherData?.current?.weather_code}
        onSearch={fetchWeatherForCity}
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
