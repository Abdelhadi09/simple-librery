var myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}
document.querySelector("#submit").addEventListener("click", () => {
  event.preventDefault();
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#pages").value;
  const read = document.querySelector("#read").checked;
  addBookToLibrary(title, author, pages, read);
  console.log(myLibrary);
});
document.querySelector("#openForm").addEventListener("click", () => {
  document.querySelector(".popup-form").style.display = "flex";
});
document.querySelector("#closeForm").addEventListener("click", () => {
  document.querySelector(".popup-form").style.display = "none";
});
window.addEventListener("click", (e) => {
  if (e.target == document.querySelector(".popup-form")) {
    document.querySelector(".popup-form").style.display = "none";
  }
});
document.getElementById("submit").addEventListener("click", () => {
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#pages").value;
  const isRead = document.querySelector("#read").checked;

  const card = document.createElement("div");
  card.classList.add("card");

  const titleElement = document.createElement("h2");
  titleElement.textContent = title;

  const authorElement = document.createElement("p");
  authorElement.textContent = `Author: ${author}`;

  const pagesElement = document.createElement("p");
  pagesElement.textContent = `Pages: ${pages}`;

  const statusElement = document.createElement("p");
  statusElement.textContent = `Status: ${isRead ? "read" : "un-read"}`;

  const removeButton = document.createElement("button");
  removeButton.classList.add("remove");
  removeButton.textContent = "remove";

  const changeStatusButton = document.createElement("button");
  changeStatusButton.classList.add("change");
  changeStatusButton.textContent = "change status";

  card.appendChild(titleElement);
  card.appendChild(authorElement);
  card.appendChild(pagesElement);
  card.appendChild(statusElement);
  card.appendChild(changeStatusButton);
  card.appendChild(removeButton);

  document.querySelector(".container").appendChild(card);

  document.querySelector(".popup-form").style.display = "none";
});

