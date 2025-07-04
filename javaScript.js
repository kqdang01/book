const library = [];
const dialog = document.querySelector("dialog");
const closeDialog = document.querySelector(".close");
const submitButton = document.querySelector(".submitButton");
const addBookButton = document.querySelector(".addBook");
const bookGrid = document.querySelector(".gridContainer");
const checkButton = document.querySelector(".check")

const bookTitleInput = document.querySelector("#bookTitle");
const bookAuthorInput = document.querySelector("#bookAuthor");
const pagesInput = document.querySelector("#numPages");
const imgInput = document.querySelector("#url");

let check = false;

closeDialog.addEventListener("click", () => dialog.close());
addBookButton.addEventListener("click",() => dialog.showModal());

checkButton.addEventListener("click", () => {
    checkButton.classList.toggle("blackCheckbox");
    checkButton.classList.toggle("blackCheckedBox");
    check = !check;
})

dialog.addEventListener("submit", (event) => {
    event.preventDefault();
    let img = "./dog.jpg";
    if (imgInput.value)
    {
        img = imgInput.value;
    }
    const bookObj = new Book(bookAuthorInput.value, bookTitleInput.value, pagesInput.value, check, img);
    addBookToLibrary(bookObj, library);
    bookTitleInput.value = "";
    bookAuthorInput.value = "";
    pagesInput.value = "";
    imgInput.value = "";
    if (check)
    {
        checkButton.classList.toggle("blackCheckbox");
        checkButton.classList.toggle("blackCheckedBox");
        check = !check;
    }
    dialog.close();
})

class Book
{
    constructor(author, title, pages, checkedOut, img)
    {
        this.author = author;
        this.title = title;
        this.pages = pages;
        this.checkedOut = checkedOut;
        this.img = img;
        this.id = crypto.randomUUID();
    }
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
    readButton.className = "checkbox";

    author.appendChild(authIcon);
    pages.appendChild(pagesIcon);

    if (bookObj.checkedOut)
    {
        readButton.classList.add("whiteCheckedBox");
    }
    else
    {
        readButton.classList.add("whiteCheckbox");
    }

    imgDiv.style.backgroundImage = `url(${bookObj.img})`;

    readButton.addEventListener("click", (e) => {
        readButton.classList.toggle("whiteCheckedBox");
        readButton.classList.toggle("whiteCheckbox");
        const book = library[library.indexOf(bookObj)];
        book.checkedOut = !book.checkedOut;
    })

    delButton.addEventListener("click", () => {
        card.remove();
        library.splice(library.indexOf(bookObj), 1);
    })
    
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