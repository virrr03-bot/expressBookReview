
const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();

// Task 10: Get all books using Async-Await or Promises
public_users.get('/', function (req, res) {
  const getBooks = new Promise((resolve, reject) => {
    resolve(books);
  });
  
  getBooks.then((bks) => {
    return res.status(200).json(JSON.stringify(bks, null, 4));
  }).catch((err) => {
    return res.status(500).json({ message: "Error fetching books" });
  });
});

// Task 11: Get book details based on ISBN using Promises
public_users.get('/isbn/:isbn', function (req, res) {
  const isbn = req.params.isbn;
  const getBook = new Promise((resolve, reject) => {
    if (books[isbn]) {
      resolve(books[isbn]);
    } else {
      reject("Book not found");
    }
  });

  getBook.then((book) => {
    return res.status(200).json(book);
  }).catch((err) => {
    return res.status(404).json({ message: err });
  });
});

// Task 12: Get book details based on Author using Promises
public_users.get('/author/:author', function (req, res) {
  const author = req.params.author;
  const getBooksByAuthor = new Promise((resolve, reject) => {
    let matchingBooks = [];
    for (let key in books) {
      if (books[key].author.toLowerCase() === author.toLowerCase()) {
        matchingBooks.push(books[key]);
      }
    }
    resolve(matchingBooks);
  });

  getBooksByAuthor.then((result) => {
    return res.status(200).json(result);
  }).catch((err) => {
    return res.status(500).json({ message: "Error fetching books" });
  });
});

// Task 13: Get book details based on Title using Promises
public_users.get('/title/:title', function (req, res) {
  const title = req.params.title;
  const getBooksByTitle = new Promise((resolve, reject) => {
    let matchingBooks = [];
    for (let key in books) {
      if (books[key].title.toLowerCase() === title.toLowerCase()) {
        matchingBooks.push(books[key]);
      }
    }
    resolve(matchingBooks);
  });

  getBooksByTitle.then((result) => {
    return res.status(200).json(result);
  }).catch((err) => {
    return res.status(500).json({ message: "Error fetching books" });
  });
});

module.exports.general = public_users;
