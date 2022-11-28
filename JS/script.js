const addButton = document.querySelector('.form-button');
const removeButton = document.querySelector('remove-book');
const bookTitle = document.querySelector("#book-title");
const bookAuthor = document.querySelector('#book-author');
const library = document.querySelector('.book-main-container');


function addBook(){
    let title = bookTitle.value;
    let author = bookAuthor.value;
    
    const book = {
        title: title,
        author: author,
    }

    const listBooks = [];

    listBooks.push(book);
    console.log(listBooks);

    let bookgenerator = '';

listBooks.forEach((book) => {
  bookgenerator += `<div class="book-container">
  <h2 class="book-title">${book.title}</h2>
  <h3 class="book-author">${book.author}</h3>
  <button class="remove-book">Remove</button>
</div>`;
});
library.innerHTML += bookgenerator;
}
addButton.addEventListener('click', addBook);
//function Book(name, author) {
//    this.name = name;
 //   this.author = author;
 // }

  

//addButton.addEventListener('click', (bookTitle, bookAuthor) => {

 //   listBooks[0] = new Book('BookName', 'bookAutho');

 //  console.log(listBooks);

 //   listBooks[1] = new Book('BookNamse', 'bookAsssutho');

 //  console.log(listBooks);

// })