const myLibrary = [];

function Book(author, title, numOfPages, hasBeenRead) {
  this.author = author;
  this.title = title;
  this.numOfPages = numOfPages;
  this.hasBeenRead = hasBeenRead;
}

function buildTable(library) {
  let titleCell = document.createElement("td");
  let authorCell = document.createElement("td");
  let numOfPagesCell = document.createElement("td");
  let hasBeenReadCell = document.createElement("td");
  let row = document.createElement("tr");
  let tableBody = document.querySelector("#myTable tbody");

  library.forEach((book) => {
    titleCell.classList.add("title");
    authorCell.classList.add("author");
    numOfPagesCell.classList.add("numOfPages");
    hasBeenReadCell.classList.add("hasBeenRead");
    titleCell.textContent = book.title;
    authorCell.textContent = book.author;
    numOfPagesCell.textContent = book.numOfPages;
    hasBeenReadCell.textContent = book.hasBeenRead;
    row.appendChild(titleCell);
    row.appendChild(authorCell);
    row.appendChild(numOfPagesCell);
    row.appendChild(hasBeenReadCell);
    tableBody.appendChild(row);
  });
}

function addBookToLibrary(author, title, numOfPages, hasBeenRead) {
  const book = new Book(author, title, numOfPages, hasBeenRead);
  myLibrary.push(book);
}

addBookToLibrary("Stephen King", "It", 666, true);
buildTable(myLibrary);
console.log(JSON.stringify(myLibrary));
