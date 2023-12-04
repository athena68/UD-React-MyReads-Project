import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import BookShelf from "./BookShelf";

test("renders BookShelf component without errors", () => {
  const bsTitlte = "BookShelf";

  const { getByText } = render(
    <BookShelf bookshelfTitle={bsTitlte} books={[]} />
  );

  const bookshelfTtile = getByText(bsTitlte);

  expect(bookshelfTtile).toBeInTheDocument();
});
