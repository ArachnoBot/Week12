import './App.css';

function App() {

  const fetchBooks = () => {
    fetch("/api/getBooks")
    .then(response => response.json())
    .then(data => {
      console.log(data)
    })
  }

  return (
    <div className="App">
      <h1>Books</h1>
      <form method='POST' action='/api/book'>
        <label>Title: </label>
        <input type='text' id="name" name="name"></input>
        <br></br>
        <label>Author: </label>
        <input type='text' id="author" name="author"></input>
        <br></br>
        <label>Number of pages: </label>
        <input type='number' id="pages" name="pages"></input>
        <br></br>
        <input type='submit' id="submit" name="submit"></input>
      </form>
      <input type="button" value="get books" onClick={fetchBooks}></input>
    </div>
  );
}

export default App;
