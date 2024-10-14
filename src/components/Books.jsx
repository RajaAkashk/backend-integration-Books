import useFetch from "../useFetch";

const Books = () => {
  const { data, loading, error } = useFetch(
    "https://be-4-assignment1.vercel.app/"
  );

  console.log(data);
  const books = data?.AllBooks || [];
  return (
    <div>
      <h1>All Books</h1>
      <ul>
        {books?.map((book) => (
          <li key={book.title}>{book.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Books;
