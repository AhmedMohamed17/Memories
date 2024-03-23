import React from "react";
import Post from "./Post/Post.js";
import useStyles from "./styles.js";

const Posts = () => {
  // const classes = useStyles();

  return (
    <React.Fragment>
      <h1>Posts</h1>

      <Post />
      <Post />
    </React.Fragment>
  );
};

export default Posts;