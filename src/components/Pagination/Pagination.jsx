// needs to know:
// 1. what page we're on now
// 2. what the last page is

import { useContext } from "react";
import { SearchContext } from "../../context/SearchContextProvider";
import styles from "./Pagination.module.scss";

// GOOGLE BOOKS API
// startIndex - starts at 0
// maxResults - results per page between 1 and 40

const Pagination = ({ totalItems }) => {
  const { currentIndex, setCurrentIndex } = useContext(SearchContext);

  // console.log(totalItems);

  if (totalItems === 0) {
    console.log("No items!");
    return <div>Nothing to see here</div>;
  }

  return (
    <nav aria-label="Page navigation" className={styles.Pagination}>
      <button
        disabled={currentIndex === 0}
        onClick={() => setCurrentIndex(currentIndex - 10)}
      >
        Previous page
      </button>
      <span>{currentIndex / 10 + 1}</span>
      <button
        disabled={Math.floor(currentIndex / 10) === Math.floor(totalItems / 10)}
        onClick={() => setCurrentIndex(currentIndex + 10)}
      >
        Next page
      </button>
    </nav>
  );
};

export default Pagination;
