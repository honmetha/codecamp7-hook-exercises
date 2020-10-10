import React from "react";
import Counter from "../../components/Counter";
import Instruction from "../../components/Instruction";
import "./index.css";

function Exercise1() {
  return (
    <div className="page-container">
      <Instruction
        topic="Counter App"
        description="Refactor Counter App at components/Counter/index.js in Hook fashion"
      />
      <Counter />
    </div>
  );
}

export default Exercise1;
