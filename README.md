# Project: Library

## Introduction

Extend `Book` example and turn it into a small Library app.

## Assignment

1. Set up Git repo with skeleton HTML/CSS and JS files
1. All of the book objects are going to be storede in an array, so need a constructor for books. Then add separate function to the script that can take some arguments, create a book from those arguments, and store the new book in an array. Code should look something like:

```js
const myLibrary = [];

function Book() {
  // the constructor . . .
}

function addBookToLibrary() {
  // take params, create a book then store it in the array
}
```

3. Write a function that loops trhrough the array and displays each book on the page. Display them in some sort of table, or each in their own `card`. Hint add a few books manually to your array so you can see the display.

4. Add a "New Book" button that brings up a form allowing users to input the details for the new book and add it to the librqary: `author`, `title`, `number of pages`, `whether its been read`.

   - could have a form show up in a sidebar or explore [dialogs and modals](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog) using the `<dialog>` tag.

   - Check the [documentation for event.preventDefault](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault) to prevent the `submit` button for trying to send data to a server by default.

5. Add a button on each book's display to remove the book from the library.

   - Will need to associate the DOM elements with the actual book objects in some way. An easy solution is giving them a data-attribute that corresponds to the index of the library array.

6. Add a button on each books display to change it's read status.
   - Will want to create a `Book` prototype function that toggles a book instance's `read` status.
