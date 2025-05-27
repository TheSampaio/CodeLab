import { Footer } from "../components/Footer";
import { TopSearchBar } from "../components/TopSearchBar";
import { WeatherCard } from "../components/WeatherCard";

export function SearchPage({
  city = "Unknown City",
  temperature = 0,
  weatherCode = -1,
}) {
  return (
    <>
      <TopSearchBar />
      <WeatherCard
        city={city}
        temperature={temperature}
        weatherCode={weatherCode}
      />
      <Footer />
    </>
  );
}
