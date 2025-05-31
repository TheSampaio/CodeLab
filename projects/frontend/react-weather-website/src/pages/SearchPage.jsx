import { Footer } from "../components/Footer";
import { TopSearchBar } from "../components/TopSearchBar";
import { WeatherCard } from "../components/WeatherCard";

export function SearchPage({
  country = "",
  city = "Unknown City",
  temperature = 0,
  weatherCode = -1,
  onSearch,
}) {
  return (
    <>
      <TopSearchBar onSearch={onSearch} />
      <WeatherCard
        country={country}
        city={city}
        temperature={temperature}
        weatherCode={weatherCode}
      />
      <Footer />
    </>
  );
}
