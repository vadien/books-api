import styles from "./SearchBar.module.scss";

const SearchBar = ({ onSearch }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const searchTerm = new FormData(form).get("search");
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.SearchBar}>
      <input type="text" name="search" placeholder="Enter search term" />
      <button>Search</button>
    </form>
  );
};

export default SearchBar;
