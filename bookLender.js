//User Class
class User {
    constructor(name) {
        this.name = name,
        this.id = Math.random(),
        this.books = []
    }

    borrowBook(book, library) {
        let userStatus = library.getUsers().indexOf(this)
        let bookValue = library.lendBook(this.name, book)
        if (userStatus !== -1) {
            if (bookValue !== undefined) {
                this.books.push(bookValue)
                console.log("Book borrowed!", this.books)
            }  else {
                console.log("This book is either unav344ailable or not in library.")
            }
            
        } else {
            console.log("user is not a registered member!")
        }
    }

    returnBook(book, library) {
        let bookIndex = -1;
        for (let index = 0; index < _books.length; index++) {
            if (book.toLowerCase()==_books[index].toLowerCase()) {
                bookIndex = _books.indexOf(_books[index])
            }   
        }
        if (bookIndex != -1 ) {
            let bookToBeReturned = _books.splice(bookIndex,1)
            let bookToBeReturnedValue = bookToBeReturned[bookToBeReturned.length -1]
            library.retrieveBook(this.name, bookToBeReturnedValue)
            console.log(bookToBeReturnedValue)
        } else {
            console.log("Book not found in user's books!")
        }
    }
}

// Library Module
let Library = (function (name) {
    let _name = name
    let _books = []
    let _users = []

    return {
        getName: function (params) {
            return _name
        },
        getUsers: function () {
            return _users
        },
        getBooks: function () {
            return _books
        },
        addUsers: function (user) {
            _users.push(user)
            console.log("User added to library!")
            return _users
        },
        addBook: function (book) {
            _books.push(book)
            console.log("Book added to library!")
            return _books
        },
        lendBook: function (user, book) {
            for (let index = 0; index < _users.length; index++) {
                if (user == _users[index].name) {
                    for (let index = 0; index < _books.length; index++) {
                        if (book.toLowerCase() == _books[index].toLowerCase()) {
                            let borrowedBook = _books.splice(index, 1)
                            let borrowedBookValue = borrowedBook[borrowedBook.length-1]
                            return borrowedBookValue;
                        }             
                    }
                }
                
            }
        },
        retrieveBook: function (user, book) {
            for (let index = 0; index < this.users.length; index++) {
                if (user == this.users[index].name) {
                    _books.push(book)
                    console.log("Book returned to library!")       
                }
                
            }
        }
    }
})

//Creating users
let user1 = new User("paul")
let user2 = new User("agatha")
let user3 = new User("Jeremy")
let user4 = new User("John")

//Creating library
let library1 = new Library("Genesys Hub")
// console.log(library1.getUsers())

//Adding books to library
library1.addBook("Hamlet")
library1.addBook("Machbeth")
library1.addBook("Goosebumps")
library1.addBook("The Testament")
library1.addBook("Den of Thieves")
library1.addBook("Purple Hybiscus")
library1.addBook("Animal Farm")
library1.addBook("The Mill")
// console.log(library1.getBooks())

//Adding users to library
library1.addUsers(user1)
library1.addUsers(user2)
library1.addUsers(user3)
console.log(library1.getUsers())

//Users borrowing books
user1.borrowBook("Hamlet", library1)
user2.borrowBook("Machbeth", library1)
user2.borrowBook("Hamlet", library1)
user3.borrowBook("goosebumps", library1)
user2.borrowBook("animal farm", library1)
user4.borrowBook("purple hybiscus", library1)

// //Users returning books
// user1.returnBook("hamlet", library1)
// user2.returnBook("hamlet", library1)

module.exports = {Library, User, user1}