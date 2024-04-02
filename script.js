// Klasa per Librin
function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

// Metoda me i qit detajet per librin
Book.prototype.displayDetails = function() {
    console.log("Title:" + this.title);
    console.log("Author:" + this.author);
    console.log("Pages:" + this.pages);
}

// Klasa per librari
function Library() {
    this.books = [];
}

// Metoda me u shtu librat ne librari
Library.prototype.addBook = function (book) {
    this.books.push(book);
}

// Metoda me i qit krejt librat ne librari edhe me i shfaq.
Library.prototype.displayBooks = function (){
    console.log("Librat qe jane available:");
    for(var i = 0; i < this.books.length; i++){
        console.log("Book" + (i + 1) + ":");
        this.books[i].displayDetails();
    }
}


// Krijimi i objektit te librarise
var library = new Library();

// Krijimi i objekteve
var book1 = new Book(" The Bell Jar ", " Sylvia Plath ", 229);
var book2 = new Book(" Crime and Punishment ", " Fyodor Dostoevsky ", 492)


// I kena vendos te dhenat ne liber
library.addBook(book1);
library.addBook(book2);

// Me dal krejt te dhenat
library.displayBooks();