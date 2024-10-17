import { useState } from "react";
import useFetch from "../useFetch";

const Books = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const { data, loading, error } = useFetch(
    "https://be-4-assignment1.vercel.app/"
  );

  console.log(data);

  const handleDelete = async (bookId) => {
    try {
      const response = await fetch(
        `https://be-4-assignment1.vercel.app/books/${bookId}`,
        { method: "DELETE" }
      );

      if (!response.ok) {
        throw "Failed to delete book.";
      }

      const data = await response.json();

      if (data) {
        setSuccessMessage("Book deleted successfully.");
        window.location.reload();
      }
    } catch (error) {
      console.log("Error in deleting:", error);
    }
  };

  const books = data?.AllBooks || [];
  console.log("BOOKS:", books);
  return books ? (
    <div>
      <h1>All Books</h1>
      <ul>
        {books?.map((book) => (
          <li key={book._id}>
            {book.title} {" "}
            <button onClick={() => handleDelete(book._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  ) : (
    loading && <p>Loading...</p>
  );
};

export default Books;
