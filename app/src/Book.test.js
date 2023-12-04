import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Book from "./Book";

test("renders book information correctly", () => {
  const book = {
    image: "book-image-url",
    title: "Book Title",
    author: "Book Author",
  };

  const { getByAltText, getByText } = render(<Book {...book} />);

  // const imageElement = getByAltText(book.title);
  const titleElement = getByText(book.title);
  const authorElement = getByText(book.author);

  // expect(imageElement).toBeInTheDocument();
  expect(titleElement).toBeInTheDocument();
  expect(authorElement).toBeInTheDocument();
});
