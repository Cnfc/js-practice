// Book constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;

}

// UI constructor
function UI(){}

UI.prototype.addBookToList = function(book){
  const list = document.getElementById('book-list');

  const row = document.createElement('tr');

  row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</a></td>
  `;
  list.appendChild(row);
};

// SHOW ALLERTS
UI.prototype.showAllert = function(message, className){
  const div = document.createElement("div");
  div.className = `alert${className}`;
  div.appendChild(document.createTextNode(message));
  const container = document.querySelector('.container');
  const form = document.querySelector('#book-form');
  container.insertBefore(div, form);
  setTimeout(function(){
    document.querySelector('.alert').remove();
  }, 3000)

}

UI.prototype.clearFields = function(){
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';
};

// Event  Listentrs
document.getElementById('book-form').addEventListener('submit', function(e){
  // GEt form values
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const isbn = document.getElementById('isbn').value;

  const book = new Book(title, author, isbn);

  const ui = new UI();

  // VALIDATE
  if(title === "" || author === "" || isbn === ""){
    ui.showAllert('Please fill in all fields', 'error')
  } else {
    // Add book to list;
    ui.addBookToList(book);
    ui.showAllert('book added!', 'success');
    ui.clearFields();
  }

  e.preventDefault();
});
