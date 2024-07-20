import { useContext } from "react";
import SearchBar from "../components/SearchBar/SearchBar";
import styles from "./BooksPage.module.scss";
import { SearchContext } from "../context/SearchContextProvider";
import BooksLoader from "../containers/BooksLoader";

const BooksPage = () => {
  const { searchTerm, setSearchTerm, setCurrentIndex } =
    useContext(SearchContext);

  const onSearch = (term) => {
    console.log(`Searched for ${term}`);
    setSearchTerm(term);
    setCurrentIndex(0); // resets to first page on new search
  };

  return (
    <div className={styles.BooksPage}>
      <h1>Google Books API Search</h1>
      <h3>Enter a term to search away!</h3>
      <SearchBar onSearch={onSearch} />
      <br />
      <BooksLoader />
      <br />
      <a href="https://www.neilld.com" style={{ color: "#AAAAAA" }}>
        Return to NeillD.com
      </a>
    </div>
  );
};

export default BooksPage;
