import { FaSearch } from "react-icons/fa";
import styles from "./SearchBar.module.css";

const SearchBar = ({ value, onChange, placeholder = "Buscar productos..." }) => (
  <div className={styles.searchBarContainer}>
    <input
      id="search-bar"
      name="search"
      type="text"
      className={styles.searchInput}
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder={placeholder}
      aria-label="Buscar productos"
      autoComplete="off"
    />
    <FaSearch className={styles.searchIcon} />
  </div>
);

export default SearchBar;