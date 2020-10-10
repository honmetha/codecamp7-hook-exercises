import React from "react";
import Instruction from "../../components/Instruction";
import PostList from "../../components/PostList";
import mockedPosts from "../../mocks/posts";

function Exercise8() {
  return (
    <div className="page-container">
      <Instruction
        topic="Posts App Theme"
        description="Change theme of posts app with Context API"
      />
      <PostList posts={mockedPosts} />
    </div>
  );
}

export default Exercise8;
