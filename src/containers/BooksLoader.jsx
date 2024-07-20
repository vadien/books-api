import { useContext, useEffect, useState } from "react";
import { SearchContext } from "../context/SearchContextProvider";
import { getBooksBySearchTerm } from "../services/books-services";
import Pagination from "../components/Pagination/Pagination";
import BookCard from "../components/BookCard/BookCard";
import styles from "./BooksLoader.module.scss";
import BookModal from "../components/BookModal/BookModal";

const BooksLoader = () => {
  const { searchTerm, currentIndex } = useContext(SearchContext);
  const [booksData, setBooksData] = useState(null);
  const [fetchStatus, setFetchStatus] = useState("");
  const [error, setError] = useState(null);
  const [isShowingModal, setIsShowingModal] = useState(false);
  const [currentModalBook, setCurrentModalBook] = useState(null);

  useEffect(() => {
    if (searchTerm === null) {
      return; // prevents "enter term" error on first load when state is null at start
    }
    setFetchStatus("Loading");
    getBooksBySearchTerm(searchTerm, currentIndex)
      .then((data) => {
        setFetchStatus("Success");
        console.log(data);
        setBooksData(data);
      })
      .catch((error) => {
        setFetchStatus("Failed");
        console.log("Binned it");
        setError(error);
      });
  }, [searchTerm, currentIndex]);

  const cleanedData = booksData?.items.map((volume) => {
    const {
      id,
      volumeInfo: {
        title = "No info",
        authors = ["No info"],
        publishedDate = "No info",
        imageLinks: {
          thumbnail = "https://blog.springshare.com/wp-content/uploads/2010/02/nc-sm.gif",
        } = {},
        infoLink = "Link unavailable",
      },
      searchInfo: { textSnippet = "No info" } = {},
    } = volume;
    const cleanedBook = {
      id,
      title,
      authors,
      publishedDate,
      thumbnail,
      infoLink,
      textSnippet,
    };
    return cleanedBook;
  });

  const clickBookCard = (book) => {
    setCurrentModalBook(book);
    setIsShowingModal(true);
  };

  // console.log(cleanedData);

  return (
    <div className={styles.BooksLoader}>
      {fetchStatus === "Loading" && <h1>Loading...</h1>}
      <div className={styles.container}>
        {fetchStatus === "Success" &&
          cleanedData.map((book) => (
            <BookCard
              key={book.id}
              book={book}
              onClick={() => clickBookCard(book)}
            />
          ))}
      </div>
      {fetchStatus === "Failed" && <h1>{error.message}</h1>}
      {fetchStatus === "Success" && (
        <Pagination totalItems={booksData?.totalItems} />
      )}
      {fetchStatus === "Success" && (
        <BookModal
          isOpen={isShowingModal}
          book={currentModalBook}
          onClose={() => setIsShowingModal(false)}
        />
      )}
    </div>
  );
};

export default BooksLoader;
