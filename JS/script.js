const addButton = document.querySelector('.form-button');
const removeButton = document.querySelector('remove-book');
var bookTitle = document.getElementById('book-title').value;
var bookAuthor = document.getElementById('book-author').value;

const listBooks = [];

function Book(name, author) {
    this.name = name;
    this.author = author;
  }

// addButton.addEventListener('click', (bookTitle, bookAuthor) => {

    listBooks[0] = new Book('BookName', 'bookAutho');

    console.log(listBooks);

    listBooks[1] = new Book('BookNamse', 'bookAsssutho');

    console.log(listBooks);

// })