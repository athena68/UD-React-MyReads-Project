import React from "react";

const BookShelfChanger = ({ book, onHandleChange }) => {
  const onHandleBookshelfChange = (event) => {
    onHandleChange(book, event.target.value);
  };

  return (
    <div className="book-shelf-changer">
      <select onChange={onHandleBookshelfChange}>
        <option value="none" disabled>
          Move to...
        </option>
        <option value="none">None</option>
        <option value="wantToRead">Want to Read</option>
        <option value="currentlyReading">Reading</option>
        <option value="read">Read</option>
      </select>
    </div>
  );
};

export default BookShelfChanger;
