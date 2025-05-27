import "./TopSearchBar.css";

export function TopSearchBar() {
  return (
    <div className="top-search-bar-container">
      <input
        className="top-search-bar-entry"
        placeholder="Search for a city..."
        type="search"
      />
    </div>
  );
}
