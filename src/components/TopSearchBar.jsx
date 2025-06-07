import { useState } from "react";
import "./TopSearchBar.css";

export function TopSearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onSearch(query);
    }
  };

  const placeholders = {
    en: "Search for a city...",
    es: "Busca una ciudad...",
    pt: "Busque por uma cidade...",
  };

  const lang = (navigator.language || "en").split("-")[0];
  const placeholderText = placeholders[lang] || placeholders["en"];

  return (
    <div className="top-search-bar-container">
      <input
        className="top-search-bar-entry"
        placeholder={placeholderText}
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}
