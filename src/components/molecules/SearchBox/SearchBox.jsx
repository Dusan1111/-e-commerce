import "./SearchBox.css";

const SearchBox = ({ className, placeholder, onSearchChangeHander }) => {
  return (
    <input
      className={`search-box ${className}`}
      type="search"
      placeholder={placeholder}
      onChange={onSearchChangeHander}
    />
  );
};

export default SearchBox;
