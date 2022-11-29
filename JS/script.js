const addButton = document.querySelector('.form-button');
const removeButton = document.querySelector('remove-book');
const bookTitle = document.querySelector("#book-title");
const bookAuthor = document.querySelector('#book-author');
const library = document.querySelector('.book-main-container');
const listBooks = JSON.parse(localStorage.getItem('listBooks')) || [];

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
     //   id: id,
    }
    if(JSON.parse(localStorage.getItem('listBooks'))==null){
        listBooks.push(book);
        localStorage.setItem('listBooks', JSON.stringify(listBooks));
    }
    else {
        listBooks.push(book);
        localStorage.setItem('listBooks', JSON.stringify(listBooks));
    }
    let bookgenerator = '';
    listBooks.forEach((book) => {
            bookgenerator += `<div class="book-container">
            <h2 class="book-title">${book.title}</h2>
            <h3 class="book-author">${book.author}</h3>
            <button class="remove-book" id="${book.title}" onClick=removeBook(this)>Remove</button>
          </div>`;
          });
          library.innerHTML = bookgenerator;
        }
}
window.onload = () => {
    let bookgenerator = '';
    listBooks.forEach((book) => {
    bookgenerator += `<div class="book-container">
    <h2 class="book-title">${book.title}</h2>
    <h3 class="book-author">${book.author}</h3>
    <button class="remove-book" id="${book.title}" onClick=removeBook(this)>Remove</button>
  </div>`;
  });
  library.innerHTML = bookgenerator;};
function removeBook(title){
const resultBooks = listBooks.filter(book => book.title !== title.id);
localStorage.setItem('listBooks', JSON.stringify(resultBooks));
window.location.reload();
}

addButton.addEventListener('click', addBook);
