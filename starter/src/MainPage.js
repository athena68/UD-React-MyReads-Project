import React from "react";
import BookShelf from "./BookShelf";
// import { Link } from "react-router-dom";

const MainPage = ({ books, bookshelfState, updateBookshelf }) => {
  return (
    <div className="main-page">
      <BookShelf
        showingBookshelfState="wantToRead"
        currentBookshelfState={bookshelfState}
        onUpdateBookshelfState={updateBookshelf}
        books={books}
      />
      <BookShelf
        showingBookshelfState="currentlyReading"
        currentBookshelfState={bookshelfState}
        onUpdateBookshelfState={updateBookshelf}
        books={books}
      />
      <BookShelf
        showingBookshelfState="read"
        currentBookshelfState={bookshelfState}
        onUpdateBookshelfState={updateBookshelf}
        books={books}
      />
    </div>
  );
};

export default MainPage;
