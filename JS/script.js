const addButton = document.querySelector('.form-button');
const removeButton = document.querySelector('remove-book');
const bookTitle = document.querySelector("#book-title");
const bookAuthor = document.querySelector('#book-author');
const library = document.querySelector('.book-main-container');
const listBooks = JSON.parse(localStorage.getItem('listBooks')) || [];

function addBook(){
    let title = bookTitle.value;
    let author = bookAuthor.value;
 //   let id= 0;
  //  if(JSON.parse(localStorage.getItem('listBooks'))==null){
 //       id = 0;
  //  }
  //  else {
 //       listBooks = JSON.parse(localStorage.getItem('listBooks'));
 //       id = listBooks.length;
 //   }
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
    listBooks.forEach((book, index) => {
    bookgenerator += `<div class="book-container">
    <h2 class="book-title">${book.title}</h2>
    <h3 class="book-author">${book.author}</h3>
    <button class="remove-book" id="${book.title}" onClick=removeBook(this)>Remove</button>
  </div>`;
  });
  library.innerHTML = bookgenerator;};
function removeBook(title){
 //   for(var i =0;i < listBooks.length;i++){
  //      if(listBooks[i].title == title){
 //         bookmarks.splice(i, 1);
  //      }
  //    }
    const resultBooks = listBooks.filter(book => book.title !== title.id);
   localStorage.setItem('listBooks', JSON.stringify(resultBooks));
   addBook();
  console.log(title.id);
}

addButton.addEventListener('click', addBook);
//if(JSON.parse(localStorage.getItem('listBooks'))==null){}
//else{
//let bookgenerator = '';
 //   listBooks.forEach((book) => {
 //           bookgenerator += `<div class="book-container">
 //           <h2 class="book-title">${book.title}</h2>
  //          <h3 class="book-author">${book.author}</h3>
  //          <button class="remove-book" onClick=removeBook()>Remove</button>
   //       </div>`;
  //        });
//library.innerHTML = bookgenerator;
 //       }
