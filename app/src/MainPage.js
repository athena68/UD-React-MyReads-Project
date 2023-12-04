import React from "react";
import BookShelf from "./BookShelf";

const MainPage = ({ books, updateBookshelf }) => {
  return (
    <div className="main-page">
      <BookShelf
        showingBookshelfState="wantToRead"
        onUpdateBookshelfState={updateBookshelf}
        books={books}
      />
      <BookShelf
        showingBookshelfState="currentlyReading"
        onUpdateBookshelfState={updateBookshelf}
        books={books}
      />
      <BookShelf
        showingBookshelfState="read"
        onUpdateBookshelfState={updateBookshelf}
        books={books}
      />
    </div>
  );
};

export default MainPage;
