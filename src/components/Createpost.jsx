import React, { useContext, useRef } from "react";
import PostListProvider, { PostListContext } from "../store/post-list-store";
import { useNavigate } from "react-router-dom";

const Createpost = () => {
  const { addPost } = useContext(PostListContext);
  const navigate = useNavigate();
  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postContentElement = useRef();
  const likesElement = useRef();
  const tagsElement = useRef();
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const userId = userIdElement.current.value;
  //   const postTitle = postTitleElement.current.value;
  //   const postContent = postContentElement.current.value;
  //   const likes = likesElement.current.value;
  //   const tags = tagsElement.current.value.split(" ");

  //   addPost({
  //     userId,
  //     postContent,
  //     likes,
  //     tags,
  //   });
  //   userIdElement.current.value = "";
  //   postTitleElement.current.value = "";
  //   postContentElement.current.value = "";
  //   likesElement.current.value = "";
  //   tagsElement.current.value = "";
  // };
  //////////////////////
  const handleSubmit = (e) => {
    e.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postContent = postContentElement.current.value;
    const likes = likesElement.current.value;
    const tags = tagsElement.current.value.split(" ");

     const newPost = {
       userId,
       title: postTitle, // Ensure title is included
       body: postContent,
       likes,
       tags,
     };

    // Add the post to the context state
    addPost(newPost);

    // Optionally send the new post to a backend API
    fetch("http://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPost),
    })
      .then((res) => res.json())
      .then(console.log)
      
      .catch(console.error);

    // Clear form fields
    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postContentElement.current.value = "";
    likesElement.current.value = "";
    tagsElement.current.value = "";
    navigate("/");
  };
  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Create a New Post</h5>
          <form className="create-post" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="userId" className="form-label">
                User ID
              </label>
              <input
                type="text"
                className="form-control"
                id="userId"
                ref={userIdElement}
                placeholder="Your User ID"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="postTitle" className="form-label">
                Post Title
              </label>
              <input
                ref={postTitleElement}
                type="text"
                className="form-control"
                id="postTitle"
                placeholder="Enter a catchy title..."
              />
            </div>

            <div className="mb-3">
              <label htmlFor="postContent" className="form-label">
                Post Content
              </label>
              <textarea
                rows="4"
                ref={postContentElement}
                className="form-control"
                id="postContent"
                placeholder="What's on your mind?"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="likes" className="form-label">
                Number of Likes
              </label>
              <input
                type="text"
                ref={likesElement}
                className="form-control"
                id="likes"
                aria-describedby="likesHelp"
                placeholder="How many people have liked it"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="tags" className="form-label">
                Hashtags
              </label>
              <input
                type="text"
                ref={tagsElement}
                className="form-control"
                id="tags"
                placeholder="Add hashtags (e.g., #react #coding)"
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Post
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Createpost;
