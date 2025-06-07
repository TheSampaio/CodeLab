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
      <div className="search-input-wrapper">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="search-icon"
        >
          <path
            fillRule="evenodd"
            d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
            clipRule="evenodd"
          />
        </svg>

        <input
          className="top-search-bar-entry"
          placeholder={placeholderText}
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>
    </div>
  );
}
