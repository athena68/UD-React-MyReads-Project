import React, { useState } from "react";
import { Link } from "react-router-dom";
import Book from "./Book";

const SearchPage = ({ books, onUpdateBookshelfState }) => {
  const [query, setQuery] = useState("");

  const updateQuery = (query) => {
    setQuery(query.trim());
  };

  // const clearQuery = () => {
  //   updateQuery("");
  // };

  const showingBooks =
    query === ""
      ? []
      : books.filter((book) =>
          book.title.toLowerCase().includes(query.toLowerCase())
        );

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search">
          Close
        </Link>
        {/* <a
          href="/"
          className="close-search"
          onClick={() => handleShowState(!showState)}
        >
          Close
        </a> */}
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            value={query}
            onChange={(event) => updateQuery(event.target.value)}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {showingBooks.map((book) => (
            <Book book={book} onUpdateBookshelf={onUpdateBookshelfState} />
          ))}
        </ol>
      </div>
    </div>
  );
};

export default SearchPage;
