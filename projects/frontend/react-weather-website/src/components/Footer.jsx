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
      <p>{footers[lang || footers["es"]]} © 2025 Cairox</p>
    </div>
  );
}
