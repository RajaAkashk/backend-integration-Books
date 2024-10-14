import useFetch from "../useFetch";

const BooksByAuthor = ({ author }) => {
  const { data, loading, error } = useFetch(
    `https://be-4-assignment1.vercel.app/books/author/${author}`
  );
  console.log(data);

  const books = data?.Book || [];

  return books ? (
    <div>
      <h1>Books by {books.author}</h1>
      <ul>
        <li>{books.title}</li>
      </ul>
    </div>
  ) : (
    loading && <p>Loading...</p>
  );
};

export default BooksByAuthor;
