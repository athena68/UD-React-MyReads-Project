import React from "react";
import PropTypes from "prop-types";

const Book = (props) => {
  const { image, title, author } = props;

  //TODO: handle BookShelf Changer

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${image})`,
            }}
          ></div>
          <div className="book-shelf-changer">
            <select>
              <option value="none" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>

        <div className="book-title">{title}</div>
        <div className="book-authors">{author}</div>
      </div>
    </li>
  );
};

Book.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;