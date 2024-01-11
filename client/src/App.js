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
      <form method='POST' action='/api/book'>
        <input type='text' id="name" name="name"></input>
        <input type='text' id="author" name="author"></input>
        <input type='number' id="pages" name="pages"></input>
        <input type='submit' id="submit" name="submit"></input>
      </form>
      <input type="button" value="do shit" onClick={fetchBooks}></input>
      <h1>Books</h1>
    </div>
  );
}

export default App;
