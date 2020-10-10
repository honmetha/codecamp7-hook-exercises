import React from "react";

import "./index.css";

function PostList(props) {
  return (
    <div className="post-list">
      {props.posts.map((post) => {
        return (
          <Post
            key={post.id}
            title={post.title}
            description={post.description}
            author={post.author}
          />
        );
      })}
    </div>
  );
}

function Post(props) {
  const { title, description, author } = props;
  return (
    <div className="post">
      <h1 className="post-title">{title}</h1>
      <p className="post-description">{description}</p>
      <p className="post-author">Author: {author}</p>
      <ActionMenu />
    </div>
  );
}

function ActionMenu() {
  return (
    <div className="post-actions">
      <span className="post-user">You are ...</span>
      <button className="button post-edit-action-button">Edit</button>
      <button className="button post-delete-action-button">Delete</button>
    </div>
  );
}

export default PostList;
