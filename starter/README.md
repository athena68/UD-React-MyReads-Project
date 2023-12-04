# MyReads Project

This is a React App to managing your reads by separate them into many categories of status (Currently Reading, Reading and Read).

## Installation and Run

To get started developing right away:

- install all project dependencies with `npm install`
- start the development server with `npm start`

## Backend Server

Current development using Udacity BooksAPI. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

- [MyReads Project](#myreads-project)
  - [Installation and Run](#installation-and-run)
  - [Backend Server](#backend-server)
    - [`getAll`](#getall)
    - [`update`](#update)
    - [`search`](#search)

### `getAll`

Method Signature:

```js
getAll();
```

- Returns a Promise which resolves to a JSON object containing a collection of book objects.
- This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf);
```

- book: `<Object>` containing at minimum an `id` attribute
- shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]
- Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query);
```

- query: `<String>`
- Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
- These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.
