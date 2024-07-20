import styles from "./BookModal.module.scss";
import { createPortal } from "react-dom";

const BookModal = ({ isOpen, book, onClose }) => {
  if (!isOpen) {
    return null;
  }

  const checkError = (element) => {
    return element === "No info" ? styles.err : null;
  };

  return createPortal(
    <>
      <div className={styles.overlay}></div>
      <div className={styles.BookModal}>
        <div className={styles.flex}>
          <div className={styles.cover}>
            <img src={book.thumbnail} alt={book.title} />
          </div>
          <div className={styles.info}>
            <div>
              <h2>{book.title}</h2>
            </div>
            <div className={checkError(book.authors.join(""))}>
              <span className={styles.category}>
                Author{book.authors.length > 1 ? "s" : ""}:{" "}
              </span>
              {book.authors.join(", ")}
            </div>
            <div className={checkError(book.publishedDate)}>
              <span className={styles.category}>Published: </span>
              {book.publishedDate}
            </div>
            <div className={checkError(book.textSnippet)}>
              <span className={styles.category}>Description: </span>
              {book.textSnippet}
            </div>
            <div>
              <a href={book.infoLink} className={styles.link}>
                Click here to view on Google Books
              </a>
            </div>
          </div>
        </div>
        <div className={styles.closeBtn}>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </>,
    document.body
  );
};

export default BookModal;
