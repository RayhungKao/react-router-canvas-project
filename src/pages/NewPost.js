import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import PostContext from "./../PostContext";

function NewPost() {
  const { setPosts } = useContext(PostContext);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setPosts((prevPosts) => [...prevPosts, { title, content, image }]);
    navigate("/posts");
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Create a new Post</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            style={{
              width: "30%",
              height: "20px",
              margin: "10px auto",
            }}
          />
        </label>
        <br />
        <label>
          Content
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            style={{
              width: "30%",
              height: "50px",
              margin: "10px auto",
            }}
          />
        </label>
        <br />
        <label>
          Image
          <input
            type="file"
            onChange={handleImageChange}
            required
            style={{
              width: "30%",
              height: "20px",
              margin: "10px auto",
            }}
          />
        </label>
        <br />
        {image ? (
          <img
            src={URL.createObjectURL(image)}
            alt={""}
            style={{
              width: "30%",
              height: "30%",
              margin: "10px auto",
              borderStyle: "dashed",
            }}
          />
        ) : null}
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default NewPost;
