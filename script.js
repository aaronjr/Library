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
    const set2 = new Book("Macbeth", "Shakespeare", 200, "https://d1b14unh5d6w7g.cloudfront.net/0198324006.01.S001.LXXXXXXX.jpg?Expires=1667204477&Signature=BLj65Z6OC5x-7Kto3dlLsyGRki~nmPnCpE6Uy0jYOxAPkAlMHV~ihVArQvdrroVDIhfH3GrAUNEIBXcel9uDmrRck8v1i7GLbgJiS65znkIH0K5f4xlZsyaP-28ewdFQl4tO8U0oAzqJZPKTqN2rtkrTKj2L4mwPyB~6WJbcli4_&Key-Pair-Id=APKAIUO27P366FGALUMQ")
    library.push(set1, set2)

    // add list of library books to page
    function appendBook(Library = library){
        // loop through children of container and delete them
        // to avoid duplication
        while(container.firstChild){
            container.removeChild(container.lastChild);
        }

        // loop through library and append book
        Library.forEach((book, index) =>{
            toWeb(book, index)
        })
    }

    // close pop up function
    function closePopup(){
        form.style.display = "none";
        form.style.visibility = "hidden";
        formback.style.display = "none";
        formback.style.visibility = "hidden";
        closeHolder.style.display = "none";
        closeHolder.style.visibility = "hidden";
        close.style.display = "none";
        close.style.visibility = "hidden";
    }

    // Takes input and adds a book to library
    document.querySelector('button').addEventListener('click', function(){
        // get details from form
        let title = document.getElementById('title');
        let author = document.getElementById('author');
        let pages = document.getElementById('pages');
        let url = document.getElementById('url');

        // turn details into an object
        let newBook = new Book(title.value, author.value, pages.value, url.value)
        
        // add object to library
        library.push(newBook)

        // add book to page
        appendBook(library)
        closePopup()
        // clear input field
        title.value = ""
        author.value = ""
        pages.value = ""
        url.value = ""
    })

    // append books one at a time to the webpage
    function toWeb(newBook, index){
        console.log(index)
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
        bin.outerHTML = `<svg data-index="${index}" class="bin" style="width:24px;height:24px" viewBox="0 0 24 24"><path data-index="${index}" class="bin" fill="currentColor" d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M9,8H11V17H9V8M13,8H15V17H13V8Z"/></svg>`

        bin.dataset.index = index

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
    document.querySelector(".close").addEventListener('click', () => closePopup())    

    // add existing library to page
    appendBook()

    // check for bin, not intially
    document.addEventListener('click', (event)=>{
        if(event.target.className.baseVal == "bin"){
            library.splice(event.target.dataset.index, 1)
            appendBook(library)
        }
        // else if(){

        //}
    })
})
