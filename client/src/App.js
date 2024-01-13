import './App.css';

function App() {

  const fetchBooks = () => {
    fetch("/api/getBooks")
    .then(response => response.json())
    .then(data => {
      console.log(data)
    })
  }

  const addBook = () => {
    const name = document.getElementById("name")
    const author = document.getElementById("author")
    const pages = document.getElementById("pages")

    fetch("/api/book", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name.value,
        author: author.value,
        pages: pages.value
      })
    })
    .then(response => response.json())
    .then(data => {
      console.log(data)
    })
  }

  return (
    <div className="App">
      <h1>Books</h1>

      <label>Title: </label>
      <input type='text' id="name"></input>
      <br></br>
      <label>Author: </label>
      <input type='text' id="author"></input>
      <br></br>
      <label>Number of pages: </label>
      <input type='number' id="pages"></input>
      <br></br>
      <input type='submit' id="submit" onClick={addBook}></input>

      <input type="button" value="get books" onClick={fetchBooks}></input>
    </div>
  );
}

export default App;
