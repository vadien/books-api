import styles from "./BookCard.module.scss";

// clean data before passing into card

const BookCard = ({ book }) => {
  const checkAuthorInfo = () => {
    if (book.authors.join(", ") === "No author info") {
      return styles.err;
    }
    return;
  };

  return (
    <div className={styles.BookCard}>
      <div className="bookImage">
        <div className={styles.image}>{<img src={book.thumbnail} />}</div>
      </div>
      <div className="bookInfo">
        <div>{book.title}</div>

        <div className={checkAuthorInfo()}>{book.authors.join(", ")}</div>

        <div
          className={book.publishedDate === "No date info" ? styles.err : null}
        >
          {book.publishedDate}
        </div>
      </div>
    </div>
  );
};

export default BookCard;
