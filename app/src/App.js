import "./App.css";
import MainPage from "./MainPage";
import SearchPage from "./SearchPage";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import BookDetail from "./BookDetail";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      const res = await BooksAPI.getAll();
      setBooks(res);
    };
    getBooks();
  }, []);

  const updateBookshelf = (book, newBookshelf) => {
    book.shelf = newBookshelf;
    BooksAPI.update(book, newBookshelf).then(() => {
      setBooks([...books.filter((b) => b.id !== book.id), book]);
    });
  };

  return (
    <div className="app">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>

      <Routes>
        <Route
          exact
          path="/"
          element={<MainPage books={books} updateBookshelf={updateBookshelf} />}
        />
        <Route
          path="/search"
          element={
            <SearchPage
              books={books}
              onUpdateBookshelfState={updateBookshelf}
            />
          }
        />
        <Route path="/books/:bookId" element={<BookDetail />} />
      </Routes>

      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
}

export default App;
