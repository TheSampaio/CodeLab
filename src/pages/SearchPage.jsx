import { Footer } from "../components/Footer";
import { TopSearchBar } from "../components/TopSearchBar";
import { WeatherCard } from "../components/WeatherCard";

export function SearchPage({
  country = "",
  city = "Unknown City",
  temperature = 0,
  minTemperature = 0,
  maxTemperature = 0,
  weatherCode = -1,
  onSearch,
}) {
  const lang = (navigator.language || "en").split("-")[0];

  const unknownCityTranslations = {
    en: "Unknown City",
    es: "Ciudad Desconocida",
    pt: "Cidade Desconhecida",
  };

  const translatedCity =
    city === "Unknown City"
      ? unknownCityTranslations[lang] || unknownCityTranslations["en"]
      : city;

  return (
    <>
      <TopSearchBar onSearch={onSearch} />
      <WeatherCard
        country={country}
        city={translatedCity}
        temperature={temperature}
        minTemperature={minTemperature}
        maxTemperature={maxTemperature}
        weatherCode={weatherCode}
        language={lang}
      />
      <Footer />
    </>
  );
}
