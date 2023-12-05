import React from "react";
import Book from "./Book";
import PropTypes from "prop-types";

const BookShelf = ({
  showingBookshelfState,
  onUpdateBookshelfState,
  books,
}) => {
  const bookshelfOptions = [
    { value: "currentlyReading", label: "Currently Reading" },
    { value: "wantToRead", label: "Want to Read" },
    { value: "read", label: "Read" },
    { value: "none", label: "None" },
  ];

  const currentBookshelfOption = bookshelfOptions.filter((option) => {
    return option.value === showingBookshelfState;
  });

  const bookOnShelfs = books.filter((book) => {
    return book.shelf === showingBookshelfState;
  });
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{currentBookshelfOption[0].label}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {bookOnShelfs.map((book) => (
            <Book
              key={book.id}
              book={book}
              onUpdateBookshelf={onUpdateBookshelfState}
            />
          ))}
        </ol>
      </div>
    </div>
  );
};

BookShelf.propTypes = {
  showingBookshelfState: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  onUpdateBookshelfState: PropTypes.func.isRequired,
};

export default BookShelf;
