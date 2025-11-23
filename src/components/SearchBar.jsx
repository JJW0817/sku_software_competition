import "../styles/searchbar.css";

function SearchBar({ value, onChange }) {
  return (
    <div className="searchbar-wrapper">
      <span className="searchbar-icon">🔍</span>
      <input
        className="searchbar-input"
        type="text"
        placeholder="검색"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default SearchBar;
