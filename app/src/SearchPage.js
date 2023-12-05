import React, { useState } from "react";
import { Link } from "react-router-dom";
import Book from "./Book";
import * as BooksAPI from "./BooksAPI";
import debounce from "lodash.debounce";

const SearchPage = ({ onUpdateBookshelfState }) => {
  const [searchedBooks, setSearchBooks] = useState([]);

  const updateQuery = (query) => {
    const searchBook = async () => {
      const res = await BooksAPI.search(query.trim(), 20);
      if (res !== undefined) {
        if (res.error) {
          setSearchBooks([]);
        } else {
          setSearchBooks(res);
        }
      } else {
        setSearchBooks([]);
      }
    };
    const debounceSearchBooks = debounce(() => searchBook(), 200);
    debounceSearchBooks();
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            onChange={(event) => updateQuery(event.target.value)}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {!searchedBooks || searchedBooks.length === 0 ? (
            <div></div>
          ) : (
            searchedBooks.map((book) => (
              <Book
                key={book.id}
                book={book}
                onUpdateBookshelf={onUpdateBookshelfState}
              />
            ))
          )}
        </ol>
      </div>
    </div>
  );
};

export default SearchPage;
