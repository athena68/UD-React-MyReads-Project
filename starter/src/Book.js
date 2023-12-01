import React from "react";
import PropTypes from "prop-types";
import BookShelfChanger from "./BookShelfChanger";

const Book = ({ book, onUpdateBookshelf }) => {
  return (
    <li key={book.id}>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${book.image})`,
            }}
          ></div>
          <BookShelfChanger
            bookId={book.id}
            onHandleChange={onUpdateBookshelf}
          />
        </div>

        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.author}</div>
      </div>
    </li>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
  onUpdateBookshelf: PropTypes.func.isRequired,
};

export default Book;
