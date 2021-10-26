import React from "react";
import Loader from "react-loader-spinner";

const Posts = ({ posts, loading }) => {
  if (loading) return <Loader type="Circles" color="#00BFFF" height={80} width={80}/>;
  return (
    <ul className="list-group mb-4">
      {posts.map((post) => (
        <li key={post.id} className="list-group-item">
          {post.title}
        </li>
      ))}
    </ul>
  );
};

export default Posts;
