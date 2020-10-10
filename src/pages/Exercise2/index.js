import React from "react";
import Instruction from "../../components/Instruction";
import ColorPicker from "../../components/ColorPicker";

function Exercise2() {
  return (
    <div className="page-container">
      <Instruction
        topic="Color Picker App"
        description="Refactor Color Picker at components/ColorPicker/index.js in Hook fashion"
      />
      <ColorPicker />
    </div>
  );
}

export default Exercise2;
