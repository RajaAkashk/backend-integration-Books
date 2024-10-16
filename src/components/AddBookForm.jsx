import { useState } from "react";

const AddBookForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    publishedYear: "",
    genre: "",
    language: "",
    country: "",
    rating: "",
    summary: "",
    coverImgUrl: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prevValue) => ({
      ...prevValue,
      [name]:
        name === "publishedYear" || name === "rating" ? parseInt(value) : value,
    }));
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        "https://be-4-assignment1.vercel.app/books",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      console.log(response);
      if (!response.ok) {
        throw "Failed to add book.";
      }

      const data = await response.json();
      console.log("Book added successfully:", data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Add Book Form</h1>
      <form onSubmit={submitHandler}>
        <label>Title:</label>
        <br />
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
        <br />
        <br />
        <label>Author Name:</label>
        <br />
        <input
          type="text"
          name="author"
          value={formData.author}
          onChange={handleChange}
        />
        <br />
        <br />
        <label>Year of publication:</label>
        <br />
        <input
          type="number"
          name="publishedYear"
          value={formData.publishedYear}
          onChange={handleChange}
        />
        <br />
        <br />
        <label>Genre:</label>
        <br />
        <input
          type="text"
          name="genre"
          value={formData.genre}
          onChange={handleChange}
        />
        <br />
        <br />
        <label>Language:</label>
        <br />
        <input
          type="text"
          name="language"
          value={formData.language}
          onChange={handleChange}
        />
        <br />
        <br />
        <label>Country:</label>
        <br />
        <input
          type="text"
          name="country"
          value={formData.country}
          onChange={handleChange}
        />
        <br />
        <br />
        <label>Rating:</label>
        <br />
        <input
          type="number"
          name="rating"
          value={formData.rating}
          onChange={handleChange}
        />
        <br />
        <br />
        <label>Summary:</label>
        <br />
        <input
          type="text"
          name="summary"
          value={formData.summary}
          onChange={handleChange}
        />
        <br />
        <br />
        <label>Cover Image Url:</label>
        <br />
        <input
          type="text"
          name="coverImgUrl"
          value={formData.coverImgUrl}
          onChange={handleChange}
        />
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default AddBookForm;
