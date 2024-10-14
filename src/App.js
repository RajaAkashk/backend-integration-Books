import Books from "./components/Books";
import BooksByTitle from "./components/BookByTitle";
import BooksByAuthor from "./components/BooksByAuthor";

function App() {
  return (
    <div>
      <Books />
      <BooksByTitle title="Shoe Dog" />
      <BooksByAuthor author="Charles Duhigg" />
    </div>
  );
}

export default App;
