const library = [];

function Book(author, title, pages, checkedOut)
{
    if (!new.target) throw "this is a constructor, use new to create a book object"
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.checkedOut = checkedOut;
    this.id = crypto.randomUUID();
}

function createBook(author, title, pages, checkedOut)
{
    book = new Book(author, title, pages, checkedOut);
    return book;
}

function addBookToLibrary(bookObj, libArray)
{
    libArray.push(bookObj);
}

function displayBooks()
{
    
}