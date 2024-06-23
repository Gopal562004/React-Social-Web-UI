import React, { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostListContext } from "../store/post-list-store";
const Post = ({ post }) => {
const {deletePost}=useContext(PostListContext)



  return (
    <div className="card post-card" style={{ width: "18rem" }}>
      <img src={post.imageUrl} className="card-img-top" alt="Post Image" />
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.body}</p>
        <span
          className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger delete"
          onClick={() => deletePost(post.id)}
        >
          <MdDelete  />
          <span className="visually-hidden">unread messages</span>
        </span>
        {post.tags && (
          <div className="tags">
            {post.tags.map((tags, index) => (
              <span key={index} className="badge text-bg-primary tag">
                {tags}
              </span>
            ))}
          </div>
        )}
        <div className="alert alert-success likes" role="alert">
          This Post has been Likes by {post.likes} people.
        </div>
      </div>
    </div>
  );
};

export default Post;
