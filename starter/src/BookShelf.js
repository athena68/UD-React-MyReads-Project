import React from "react";
import Book from "./Book";
import PropTypes from "prop-types";

const BookShelf = ({ title, books }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book) => (
            <Book {...book} />
          ))}
        </ol>
      </div>
    </div>
  );
};

BookShelf.propTypes = {
  title: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
};

export default BookShelf;
