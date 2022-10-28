document.addEventListener('DOMContentLoaded', function(){
   

    // Object for book
    function Book(title, author, pages, url){
        this.title = title[0].toUpperCase() + title.substring(1)
        this.author = author[0].toUpperCase() + author.substring(1)
        this.pages = pages  
        this.url = url
        this.read = false
    }

    // initiate empty library
    let library = []

    // add list of library books to page
    // if no input, function takes in normal array.
    function appendBook(Library = library){
        // get container
        const container = document.querySelector('.container')
        // loop through books in library
        Library.forEach( (newBook) => {
            console.log(newBook)
            // get back the object details
            let title = newBook.title
            let author = newBook.author
            let pages = newBook.pages
            let read = newBook.read
            let url = newBook.url

            // create element to append to page
            let addBook = document.createElement("div")
            addBook.classList = "book"

            // make 'p' for each piece of text
            let bookTitle = document.createElement("p")
            let bookAuthor = document.createElement("p")
            let bookPages = document.createElement("p")
            let bookRead = document.createElement("p")
            let bookUrl = document.createElement("img")

            // set correct text value
            bookTitle.textContent = title
            bookAuthor.textContent = author
            bookPages.textContent = pages
            bookRead.textContent = read
            bookUrl.src = url

            // add to addBook
            addBook.appendChild(bookUrl)
            addBook.appendChild(bookTitle)
            addBook.appendChild(bookAuthor)
            addBook.appendChild(bookPages)
            addBook.appendChild(bookRead)

            // add book to container
            container.appendChild(addBook)
        })
    }

    // Takes input and adds a book to library
    document.querySelector('button').addEventListener('click', function(){
        // get details from form
        let title = document.getElementById('title').value;
        let author = document.getElementById('author').value;
        let pages = document.getElementById('pages').value;
        let url = document.getElementById('url').value;

        // turn details into an object
        let newBook = new Book(title, author, pages, url)
        
        // add object to library
        library.push(newBook)
        
        // add book to page
        appendBook()
    })
})
