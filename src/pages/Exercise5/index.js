import React from "react";
import SignupForm from "../../components/SignupForm";
import Instruction from "../../components/Instruction";
import "./index.css";

function Exercise5() {
  return (
    <div className="page-container">
      <Instruction
        topic="Signup Form App"
        description="Refactor Signup Form at components/SignupForm/index.js List into Hook fashion"
      />
      <div className="exercise-5-content">
        <SignupForm />
      </div>
    </div>
  );
}

export default Exercise5;
