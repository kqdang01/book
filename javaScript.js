const library = [];
const dialog = document.querySelector("dialog");
const closeDialog = document.querySelector(".close");
const submitButton = document.querySelector(".submitButton");
const addBookButton = document.querySelector(".addBook");
const bookGrid = document.querySelector(".gridContainer");

const bookTitleInput = document.querySelector("#bookTitle");
const bookAuthorInput = document.querySelector("#bookAuthor");

closeDialog.addEventListener("click", () => dialog.close());
addBookButton.addEventListener("click",() => dialog.showModal());

submitButton.addEventListener("click", (event) => {
    event.preventDefault();
});

function Book(author, title, pages, checkedOut)
{
    if (!new.target) throw "this is a constructor, use new to create a book object"
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.checkedOut = checkedOut;
    this.id = crypto.randomUUID();
}

function addCard(bookObj)
{
    const card = document.createElement("div");
    const delButton = document.createElement("button");
    const imgDiv = document.createElement("div");
    const title = document.createElement("p");
    const author = document.createElement("p");
    const pages = document.createElement("p");
    const readButton = document.createElement("button");
    const authSpan = document.createElement("span");
    const pageSpan = document.createElement("span");

    const authIcon = document.createElement("img");
    authIcon.src = "./svg/pen.svg";
    const pagesIcon = document.createElement("img");
    pagesIcon.src = "./svg/book-open-page-variant.svg";

    card.className = "card";
    delButton.className = "delete";
    imgDiv.className = "imgDiv";
    title.className = "title";
    author.className = "author";
    pages.className = "pages";
    readButton.className = "checkbox whiteCheckbox";

    author.appendChild(authIcon);
    pages.appendChild(pagesIcon);
    
    title.textContent = bookObj.title;
    authSpan.textContent = bookObj.author;
    pageSpan.textContent = bookObj.pages;

    author.appendChild(authSpan);
    pages.appendChild(pageSpan);
    card.appendChild(delButton);
    card.appendChild(imgDiv);
    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(readButton);

    bookGrid.insertBefore(card, addBookButton);
}

function addBookToLibrary(bookObj, libArray)
{
    addCard(bookObj);
    libArray.push(bookObj);
}