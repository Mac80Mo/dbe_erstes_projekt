const list = document.getElementById("book-list");

fetch("data/books.json")
  .then((response) => response.json())
  .then((books) => {
    for (const book of books) {
      list.innerHTML += `<li>${book.title} - ${book.author}</li>`;
    }
  });
