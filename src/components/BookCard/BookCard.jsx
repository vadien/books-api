import styles from "./BookCard.module.scss";

// clean data before passing into card

const BookCard = ({ book, onClick }) => {
  const checkAuthorInfo = () => {
    if (book.authors.join(", ") === "No info") {
      return styles.err;
    }
    return;
  };

  return (
    <div className={styles.BookCard} onClick={onClick}>
      <div className={styles.bookImage}>
        <div className={styles.image}>
          {<img src={book.thumbnail} alt={book.title} />}
        </div>
      </div>
      <div className={styles.bookInfo}>
        <div>{book.title}</div>

        <div className={checkAuthorInfo()}>
          {book.authors[0]}
          {book.authors.length > 1 ? ", et al." : null}
        </div>
      </div>
    </div>
  );
};

export default BookCard;
