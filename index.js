function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  // fetch
  // url
  // return
  // .then
  // json()
  // console.log
  // const url = "https://anapioficeandfire.com/api/books";
  const BASE_URL = "https://anapioficeandfire.com/api/books";

  // GET all the books
  // fetch(`${BASE_URL}`);

  // DELETE a single
  // fetch(`${BASE_URL}/${book_id}`);
  // let gotObj;
  return fetch(BASE_URL)
    .then((response) => response.json())
    .then((data) => renderBooks(data));
}

function renderBooks(books) {
  const main = document.querySelector("main");
  books.forEach((book) => {
    const h2 = document.createElement("h2");
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  fetchBooks();
});
