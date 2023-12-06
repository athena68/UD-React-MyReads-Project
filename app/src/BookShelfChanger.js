import React from "react";
import PropTypes from "prop-types";

const BookShelfChanger = ({ book, onHandleChange }) => {
  const onHandleBookshelfChange = (event) => {
    onHandleChange(book, event.target.value);
  };

  return (
    <div className="book-shelf-changer">
      <select value={book.shelf} onChange={onHandleBookshelfChange}>
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

BookShelfChanger.propTypes = {
  book: PropTypes.object.isRequired,
  onHandleChange: PropTypes.func.isRequired,
};

export default BookShelfChanger;
