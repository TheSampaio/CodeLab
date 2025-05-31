import { useState } from "react";
import "./TopSearchBar.css";

export function TopSearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onSearch(query);
    }
  };

  return (
    <div className="top-search-bar-container">
      <input
        className="top-search-bar-entry"
        placeholder="Search for a city..."
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}
