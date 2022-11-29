const addButton = document.querySelector('.form-button');
const removeButton = document.querySelector('remove-book');
const bookTitle = document.querySelector("#book-title");
const bookAuthor = document.querySelector('#book-author');
const library = document.querySelector('.book-main-container');
function addBook(){
    let title = bookTitle.value;
    let author = bookAuthor.value;
    if(!title || !author){
        alert('please fill all information');
    }
    else{
    const book = {
        title: title,
        author: author,
    }
    if(JSON.parse(localStorage.getItem('listBooks'))==null){
        const listBooks=[];
        listBooks.push(book);
        localStorage.setItem('listBooks', JSON.stringify(listBooks));
    }
    else {
        const listBooks = JSON.parse(localStorage.getItem('listBooks'));
        listBooks.push(book);
        localStorage.setItem('listBooks', JSON.stringify(listBooks));
    }
    const listBooks = JSON.parse(localStorage.getItem('listBooks'));
    let bookgenerator = '';
    listBooks.forEach((book) => {
            bookgenerator += `<div class="book-container">
            <h2 class="book-title">${book.title}</h2>
            <h3 class="book-author">${book.author}</h3>
            <button class="remove-book">Remove</button>
          </div>`;
          });
          library.innerHTML = bookgenerator;
          console.log(listBooks);
        }
}
addButton.addEventListener('click', addBook);
const listBooks = JSON.parse(localStorage.getItem('listBooks'));
let bookgenerator = '';
    listBooks.forEach((book) => {
            bookgenerator += `<div class="book-container">
            <h2 class="book-title">${book.title}</h2>
            <h3 class="book-author">${book.author}</h3>
            <button class="remove-book">Remove</button>
          </div>`;
          });
library.innerHTML = bookgenerator;
