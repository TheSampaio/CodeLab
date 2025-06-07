import "./Footer.css";

export function Footer() {
  const lang = (navigator.language || "es").split("-")[0];

  const footers = {
    en: "Weather Forecast",
    es: "Pronóstico del tiempo",
    pt: "Previsão do Tempo",
  };

  return (
    <div className="footer-container">
      <a href="https://github.com/TheSampaio/weather-forecast-spa">
        {footers[lang] || footers["es"]} © 2025 Cairox
      </a>
    </div>
  );
}
