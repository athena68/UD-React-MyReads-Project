import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";

const BookDetail = () => {
  const { bookId } = useParams();
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      const res = await BooksAPI.get(bookId);
      setBook(res);
    };
    getBook();
  }, []);

  let thumbnailImage = book.hasOwnProperty("imageLinks")
    ? `url(${book.imageLinks["thumbnail"]})`
    : "none";
  let authors = book.hasOwnProperty("authors") ? book.authors.join(", ") : "";

  return (
    <div>
      <div
        className="book-cover"
        style={{
          width: 128,
          height: 193,
          backgroundImage: thumbnailImage,
        }}
      ></div>

      <h1>{book.title}</h1>
      <h3>{authors}</h3>
      <p>{book.publishedDate}</p>
      <p>{book.description}</p>
    </div>
  );
};
export default BookDetail;
