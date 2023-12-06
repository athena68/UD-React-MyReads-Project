import React from "react";
import PropTypes from "prop-types";
import BookShelfChanger from "./BookShelfChanger";
import { Link } from "react-router-dom";

const Book = ({ book, onUpdateBookshelf }) => {
  let thumbnailImage = book.hasOwnProperty("imageLinks")
    ? `url(${book.imageLinks["smallThumbnail"]})`
    : "none";
  let authors = book.hasOwnProperty("authors") ? book.authors.join(", ") : "";

  if (!book.hasOwnProperty("shelf")) {
    book.shelf = "none";
  }
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: thumbnailImage,
            }}
          ></div>
          <BookShelfChanger book={book} onHandleChange={onUpdateBookshelf} />
        </div>
        <div className="book-title">
          <Link to={`/books/${book.id}`}>{book.title}</Link>
        </div>
        <div className="book-authors">{authors}</div>
      </div>
    </li>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
  onUpdateBookshelf: PropTypes.func.isRequired,
};

export default Book;
