import useFetch from "../useFetch";

export default function BooksByTitle({ title }) {
  const { data, loading, error } = useFetch(
    `https://be-4-assignment1.vercel.app/books/${title}`
  );

  console.log(data);
  const books = data?.Book || [];

  return books ? (
    <div>
      <h1>{books.title}</h1>
      <p>
        <strong>Author:</strong> {books.author}
      </p>
      <p>
        <strong>Release Year:</strong> {books.publishedYear}
      </p>
      <p>
        {" "}
        <strong>Genre:</strong>{" "}
        {Array.isArray(books.genre) ? books.genre.join(", ") : "N/A"}
      </p>
    </div>
  ) : (
    loading && <p>Loading...</p>
  );
}
