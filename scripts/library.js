const myLibrary = [];
const dialog = document.querySelector("dialog");
const addButton = document.querySelector(".add");
const removeButton = document.querySelector(".remove");
const updateButton = document.querySelector(".update");
const closeButton = document.querySelector(".close");
const addBookButton = document.querySelector(".addBook");

// Book constructor
function Book(title, author, numOfPages, hasBeenRead) {
  this.title = title;
  this.author = author;
  this.numOfPages = numOfPages;
  this.hasBeenRead = hasBeenRead;
}

/**
 * creates and displays table from library data
 * @param {*} library
 * @returns   - void
 */
function createTableFromLibrary(library) {
  const table = document.createElement("table");
  const heaaderRow = table.insertRow();
  heaaderRow.classList.add("header");

  // Create Table Header
  Object.keys(library[0]).forEach((key) => {
    const th = document.createElement("th");
    th.textContent = toTitleCase(key);
    heaaderRow.appendChild(th);
  });

  // create table rows
  library.forEach((book) => {
    const row = table.insertRow();
    Object.values(book).forEach((value) => {
      const cell = row.insertCell();
      cell.textContent = value;
    });
  });

  // append the table to .main-content section
  let existingChild = document.querySelector(".main-content > table");
  document.querySelector(".main-content").innerHTML = "";
  document.querySelector(".main-content").appendChild(table);
}

/**
 * Creates a book based on the arguments and adds it to the myLibrary array.
 * @param {*} author      - String  - author of the book
 * @param {*} title       - String  - title of the book
 * @param {*} numOfPages  - Number  - nnumber of pages in book
 * @param {*} hasBeenRead - Boolean - has book been read
 */
function addBookToLibrary(title, author, numOfPages, hasBeenRead) {
  const book = new Book(title, author, numOfPages, hasBeenRead);
  myLibrary.push(book);
}

/**
 *                  - Capitalizes the first letter of the string and if the string
 *                    is snake case it places spaces before each capitalized letter.
 *                    i.e snakeCaseWord would be Snake Case Word
 * @param {*} word
 * @returns string
 */
function toTitleCase(word) {
  if (!word) return "";

  return (
    word.charAt(0).toUpperCase() +
    word.slice(1).replace(/([a-z])([A-Z])/g, "$1 $2") // changes snake case to have spaces
  );
}

// Add button opens modal
addButton.addEventListener("click", () => {
  dialog.showModal();
});

addBookButton.addEventListener("click", () => {
  const bookTitle = document.querySelector("#title").value;
  const bookAuthor = document.querySelector("#author").value;
  const numOfPagesInBook = document.querySelector("#numOfPages").value;
  const bookHasBeenRead = document.querySelector("#hasBeenRead").value;

  addBookToLibrary(
    title.value,
    author.value,
    numOfPages.value,
    hasBeenRead.value
  );
  createTableFromLibrary(myLibrary);
  dialog.close();
});

addBookToLibrary("It", "Stephen King", 666, true);
addBookToLibrary("Data Structures", "Marcello La Roca", 242, false);
const table = createTableFromLibrary(myLibrary);
