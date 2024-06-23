import React, { createContext, useReducer,useEffect,useState } from "react";

// Reducer function to handle state updates
const postListReducer = (state, action) => {
  switch (action.type) {
    case "ADD_POST":
      return {
        ...state,
        postList: [action.payload, ...state.postList],
      };
    case "DELETE_POST":
      return {
        ...state,
        postList: state.postList.filter((post) => post.id !== action.payload),
      };
    case "ADD_INITIAL_POSTS":
      return {
        ...state,
        postList: action.payload,
      };
    default:
      return state;
  }
};

// Create context with initial values
const initialState = {
  postList: [
    {
      id: 1,
      title: "Example Post",
      body: "This is an example post.",
      imageUrl: "https://example.com/image.jpg",
      likes: 25,
      tags: ["#mumbai", "#moonsoon"],
      comments: 1,
    },
    {
      id: 2,
      title: "Example Post",
      body: "This is an example post.",
      imageUrl: "https://example.com/image.jpg",
      likes: 14,
      tags: ["#mumbai", "#moonsoon"],
      comments: 1,
    },
    {
      id: 3,
      title: "Example Post",
      body: "This is an example post.",
      imageUrl: "https://example.com/image.jpg",
      likes: 16,
      tags: ["#mumbai", "#moonsoon"],
      comments: 1,
    },
  ],
};

export const PostListContext = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
  addInitialPosts: () => {},
});

// PostListProvider component
const PostListProvider = ({ children }) => {
  const [state, dispatch] = useReducer(postListReducer, initialState);

  const [loading, setLoading] = useState(true);

  // Fetch posts and add initial posts
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetch("https://dummyjson.com/posts", { signal })
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: "ADD_INITIAL_POSTS", payload: data.posts });
        setLoading(false);
      })
      .catch((error) => {
        if (error.name !== "AbortError") {
          console.error("Failed to fetch posts:", error);
        }
      });

    return () => {
      controller.abort();
    };
  }, []);
  // Action functions
  const addPost = (newPost) => {
    dispatch({ type: "ADD_POST", payload: newPost });
  };

  const addInitialPosts = (newPosts) => {
    dispatch({ type: "ADD_INITIAL_POSTS", payload: newPosts });
  };

  const deletePost = (postId) => {
    dispatch({ type: "DELETE_POST", payload: postId });
  };

  return (
    <PostListContext.Provider
      value={{
        postList: state.postList,
        addPost,
        deletePost,
        addInitialPosts,
        loading,
      }}
    >
      {children}
    </PostListContext.Provider>
  );
};

export default PostListProvider;
