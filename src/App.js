import Books from "./components/Books";
import BooksByTitle from "./components/BookByTitle";
import BooksByAuthor from "./components/BooksByAuthor";
import AddBookForm from "./components/AddBookForm";

function App() {
  return (
    <div>
      <AddBookForm /> 
      <Books />
      <BooksByTitle title="Shoe Dog" />
      <BooksByAuthor author="Charles Duhigg" />
    </div>
  );
}

export default App;
