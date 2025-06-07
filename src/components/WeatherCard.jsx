import "./WeatherCard.css";

import clearIcon from "../assets/icons/clear.svg";
import cloudsIcon from "../assets/icons/clouds.svg";
import mistIcon from "../assets/icons/mist.svg";
import moderateHeavyRainIcon from "../assets/icons/moderate_heavy_rain.svg";
import noResultIcon from "../assets/icons/no-result.svg";
import rainIcon from "../assets/icons/rain.svg";
import snowIcon from "../assets/icons/snow.svg";
import thunderRainIcon from "../assets/icons/thunder_rain.svg";
import thunderIcon from "../assets/icons/thunder.svg";

export function WeatherCard({
  country,
  city,
  temperature,
  weatherCode,
  language,
}) {
  const weatherCodeIcons = {
    0: clearIcon,
    1: clearIcon,
    2: cloudsIcon,
    3: cloudsIcon,
    45: mistIcon,
    48: mistIcon,
    51: rainIcon,
    53: rainIcon,
    55: rainIcon,
    56: rainIcon,
    57: rainIcon,
    61: rainIcon,
    63: moderateHeavyRainIcon,
    65: moderateHeavyRainIcon,
    66: moderateHeavyRainIcon,
    67: moderateHeavyRainIcon,
    71: snowIcon,
    73: snowIcon,
    75: snowIcon,
    77: snowIcon,
    80: rainIcon,
    81: moderateHeavyRainIcon,
    82: moderateHeavyRainIcon,
    85: snowIcon,
    86: snowIcon,
    95: thunderIcon,
    96: thunderRainIcon,
    99: thunderRainIcon,
  };

  const weatherDescriptions = {
    en: {
      0: "Clear sky",
      1: "Mainly clear",
      2: "Partly cloudy",
      3: "Overcast",
      45: "Fog",
      48: "Depositing rime fog",
      51: "Light drizzle",
      53: "Moderate drizzle",
      55: "Dense drizzle",
      56: "Light freezing drizzle",
      57: "Dense freezing drizzle",
      61: "Slight rain",
      63: "Moderate rain",
      65: "Heavy rain",
      66: "Light freezing rain",
      67: "Heavy freezing rain",
      71: "Slight snow fall",
      73: "Moderate snow fall",
      75: "Heavy snow fall",
      77: "Snow grains",
      80: "Slight rain showers",
      81: "Moderate rain showers",
      82: "Violent rain showers",
      85: "Slight snow showers",
      86: "Heavy snow showers",
      95: "Thunderstorm",
      96: "Thunderstorm with slight hail",
      99: "Thunderstorm with heavy hail",
    },
    es: {
      0: "Cielo despejado",
      1: "Mayormente despejado",
      2: "Parcialmente nublado",
      3: "Nublado",
      45: "Niebla",
      48: "Niebla con escarcha",
      51: "Llovizna ligera",
      53: "Llovizna moderada",
      55: "Llovizna densa",
      56: "Llovizna helada ligera",
      57: "Llovizna helada intensa",
      61: "Lluvia ligera",
      63: "Lluvia moderada",
      65: "Lluvia intensa",
      66: "Lluvia helada ligera",
      67: "Lluvia helada intensa",
      71: "Nevada ligera",
      73: "Nevada moderada",
      75: "Nevada fuerte",
      77: "Granos de nieve",
      80: "Chubascos ligeros",
      81: "Chubascos moderados",
      82: "Chubascos violentos",
      85: "Chubascos de nieve ligeros",
      86: "Chubascos de nieve fuertes",
      95: "Tormenta",
      96: "Tormenta con granizo leve",
      99: "Tormenta con granizo fuerte",
    },
    pt: {
      0: "Céu limpo",
      1: "Predominantemente limpo",
      2: "Parcialmente nublado",
      3: "Encoberto",
      45: "Névoa",
      48: "Névoa com geada",
      51: "Garoa leve",
      53: "Garoa moderada",
      55: "Garoa intensa",
      56: "Garoa congelante leve",
      57: "Garoa congelante intensa",
      61: "Chuva fraca",
      63: "Chuva moderada",
      65: "Chuva forte",
      66: "Chuva congelante leve",
      67: "Chuva congelante forte",
      71: "Neve fraca",
      73: "Neve moderada",
      75: "Neve forte",
      77: "Grãos de neve",
      80: "Pancadas de chuva fracas",
      81: "Pancadas de chuva moderadas",
      82: "Pancadas de chuva intensas",
      85: "Pancadas de neve fracas",
      86: "Pancadas de neve fortes",
      95: "Tempestade",
      96: "Tempestade com granizo leve",
      99: "Tempestade com granizo forte",
    },
  };

  const unknownDescriptions = {
    en: "Unknown",
    es: "Desconocido",
    pt: "Desconhecido",
  };

  const lang = (language || navigator.language || "en").split("-")[0];
  const descriptions = weatherDescriptions[lang] || weatherDescriptions["en"];
  const fallbackText = unknownDescriptions[lang] || unknownDescriptions["en"];
  const description = descriptions[weatherCode] || fallbackText;

  const iconSrc = weatherCodeIcons[weatherCode] || noResultIcon;

  return (
    <div className="weather-card-container">
      <section
        className="weather-card-content"
        aria-label="Weather Information"
      >
        <header>
          <h2 className="weather-card-city">{city}</h2>
          {country && <p className="weather-card-country">{country}</p>}
        </header>

        <figure className="weather-card-figure">
          <img className="weather-card-image" src={iconSrc} alt={description} />
          <figcaption className="weather-card-description">
            {description}
          </figcaption>
        </figure>

        <div className="weather-card-temp">
          <h1 className="weather-card-degrees">{temperature} °C</h1>
        </div>
      </section>
    </div>
  );
}
