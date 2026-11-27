const list = document.getElementById("book-list");

fetch("data/books.json")
  .then((response) => response.json())
  .then((books) => {
    for (const book of books) {
      list.innerHTML += `<li><a href="${book.link}" target="_blank" rel="noopener noreferrer">${book.title}</a> - ${book.author}</li>`;
    }
  });
