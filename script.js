document.addEventListener('DOMContentLoaded', function(){
     // Object for book
     function Book(title, author, pages, url){
        this.title = title[0].toUpperCase() + title.substring(1)
        this.author = author[0].toUpperCase() + author.substring(1)
        this.pages = pages  
        this.url = url
        this.read = false
    }

    // create a function for bookx
    Book.prototype.info = function(){
        let count = this.pages == 1 ? `${this.pages} page` : `${this.pages} pages`;
        let read = this.bool ? `you have read` : `you have not read yet`;
        statement =  `${this.title}, written by ${this.author}. Has ${count} and ${read} `
        return statement
    } 

    // const theHobbit = new Book("The hobbit", "J.R.R Tolkien", 295, false )

    const button = document.querySelector('button')

    // Takes input and adds a book
    newBook = button.addEventListener('click', function(){
        // get details from form
        let title = document.getElementById('title').value;
        let author = document.getElementById('author').value;
        let pages = document.getElementById('pages').value;
        let url = document.getElementById('url').value;

        // get container
        const container = document.querySelector('.container')

        // pass into object
        const newBook = new Book(title, author, pages, url)

        // get back the object details
        title = newBook.title
        author = newBook.author
        pages = newBook.pages
        read = newBook.read
        url = newBook.url
        info = newBook.info()

        // create element to append to page
        let addBook = document.createElement("div")
        addBook.classList = "book"

        // make 'p' for each piece of text
        bookTitle = document.createElement("p")
        bookAuthor = document.createElement("p")
        bookPages = document.createElement("p")
        bookRead = document.createElement("p")
        bookInfo = document.createElement("p")
        bookUrl = document.createElement("img")

        // set correct text value
        bookTitle.textContent = title
        bookAuthor.textContent = author
        bookPages.textContent = pages
        bookRead.textContent = read
        bookInfo.textContent = info
        bookUrl.src = url

        // add to addBook
        addBook.appendChild(bookUrl)
        addBook.appendChild(bookTitle)
        addBook.appendChild(bookAuthor)
        addBook.appendChild(bookPages)
        addBook.appendChild(bookRead)
        addBook.appendChild(bookInfo)
        

        // add book to container
        container.appendChild(addBook)
    })
})
