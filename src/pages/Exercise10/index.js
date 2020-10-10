import React from "react";
import Instruction from "../../components/Instruction";
import PostList from "../../components/PostList";
import mockedPosts from "../../mocks/posts";

function Exercise10() {
  return (
    <div className="page-container">
      <Instruction
        topic="Posts App (useReducer)"
        description="Make Post App be able to Add / Edit / Delete with useReducer"
      />
      <PostList posts={mockedPosts} />
    </div>
  );
}

export default Exercise10;
