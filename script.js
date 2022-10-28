document.addEventListener('DOMContentLoaded', function(){
    // get container
    const container = document.querySelector('.container')
    const formback = document.querySelector('.formback')
    const form = document.querySelector('form')
    const closeHolder = document.querySelector('.closeHolder')
    const close = document.querySelector('.close')


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

    // add some books to library before user input
    const set1 = new Book("The Hobbit", "JRR Tolkein", 653, "https://m.media-amazon.com/images/I/8157XzPwdYL._AC_SY679_.jpg")
    const set2 = new Book("Macbeth", "Shakespeare", 200, "https://d1b14unh5d6w7g.cloudfront.net/1853260355.01.S001.LXXXXXXX.jpg?Expires=1667062431&Signature=fzBBpqgWAUCVqsK2nKwzqotJRINP~mQQrWYMe8kvbyr79Lefimi45Xl74FmGNjxxI856t4PxAdvAG6R0lj~34YIbNJv3WtK0xR6~qwbHUOR653lx33kTnM1bk5--7dpuQXV4fvh8S7Myp7c3cftLbb29sxH84vH6LWElI6hDsRg_&Key-Pair-Id=APKAIUO27P366FGALUMQ")
    library.push(set1, set2)

    // add list of library books to page
    // if no input, function uses prebuilt library
    // else will take the book they've added.
    function appendBook(Library = library){
        // loop through books in library
        if(Array.isArray(Library)){
            //add to the web
            Library.forEach( (newBook) => {
                toWeb(newBook)
            })
        }
        else{
            //add to the web
            toWeb(Library)
        }
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
        appendBook(newBook)

        // clear input field
        document.getElementById('title').value = ""
        document.getElementById('author').value = ""
        document.getElementById('pages').value = ""
        document.getElementById('url').value = ""
    })

    // append books one at a time to the webpage
    function toWeb(newBook){
        
        // get back the object details
        let title = newBook.title
        let author = newBook.author
        let pages = newBook.pages
        let read = newBook.read == false ? "Not yet read" : "You've read it";
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
        let text  = document.createElement('div')
        text.classList = "text"

        // div to hold toggle and bin icon
        let bottom = document.createElement('div')
        bottom.classList = "bottom"

        // bin icon
        let bin = document.createElement('div')
        
        //let toggle = document.createElement('div')
        // toggle.

        // set correct text value
        bookTitle.textContent = `${title}`
        bookAuthor.textContent = `Written by ${author}`
        bookPages.textContent = `${pages} pages.`
        bookRead.textContent = read
        bookUrl.src = url

        // add to addBook
        addBook.appendChild(bookUrl)
        addBook.appendChild(text)
        text.appendChild(bookTitle)
        text.appendChild(bookAuthor)
        text.appendChild(bookPages)
        text.appendChild(bookRead)
        text.appendChild(bottom)
        bottom.appendChild(bin)
        // set SVG and Class
        bin.outerHTML = '<svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="currentColor" d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M9,8H11V17H9V8M13,8H15V17H13V8Z" /></svg>'
        bin.classList = "bin"
        
        // bottom.appendChild(toggle)

        // add book to container
        container.appendChild(addBook)
    }

    // add pop up form to input data
    document.querySelector(".add").addEventListener('click', ()=>{
        // make visible and back form to center pop up.
        form.style.display = "flex";
        form.style.visibility = "visible";
        formback.style.display = "grid";
        formback.style.visibility = "visible";
        closeHolder.style.display = "grid";
        closeHolder.style.visibility = "visible";
        close.style.display = "block";
        close.style.visibility = "visible";
    })

    // close pop up box
    document.querySelector(".close").addEventListener('click', ()=>{
        // make visible and back form to center pop up.
        form.style.display = "none";
        form.style.visibility = "hidden";
        formback.style.display = "none";
        formback.style.visibility = "hidden";
        closeHolder.style.display = "none";
        closeHolder.style.visibility = "hidden";
        close.style.display = "none";
        close.style.visibility = "hidden";
    })

    // add existing library to page
    appendBook()
})
