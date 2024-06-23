import React, { useContext } from "react";
import LoadingSpinner from "./LoadingSpinner";
import Post from "./Post";
import { PostListContext } from "../store/post-list-store";

const Postlist = () => {
  const { postList, loading } = useContext(PostListContext);
//   const [loading, setLoading] = useState(true);
// const controller =new AbortController();
// const signal=controller.signal;
//   useEffect(() => {
//     fetch("https://dummyjson.com/posts")
//       .then((response) => response.json())
//       .then((data) => {
//         addInitialPosts(data.posts); // Ensure 'data.posts' matches the structure of the response
//         setLoading(false); // Set loading to false once posts are fetched
//       });
//       return () => {
//         controller.abort();
//       };
//   }, [addInitialPosts]);

  return (
    <div className="post-list">
      {loading ? (
        <LoadingSpinner/>
      ) : (
        postList.map((post) => <Post key={post.id} post={post} />)
      )}
    </div>
  );
};

export default Postlist;
