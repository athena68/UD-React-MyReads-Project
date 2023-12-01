import React from "react";
import Book from "./Book";
import PropTypes from "prop-types";

const BookShelf = ({
  showingBookshelfState,
  currentBookshelfState,
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

  let bookOnShelfs = [];

  currentBookshelfState.forEach((state) => {
    books.map((book) => {
      if (book.id === state.id && state.shelf === showingBookshelfState) {
        bookOnShelfs.push(book);
      }
      return book;
    });
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
  currentBookshelfState: PropTypes.array.isRequired,
  showingBookshelfState: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  onUpdateBookshelfState: PropTypes.func.isRequired,
};

export default BookShelf;
