import React from "react";
import { useHistory } from "react-router-dom";

import "./index.css";

function Instruction(props) {
  const history = useHistory();

  function handleGoBackHome() {
    history.push("/");
  }

  return (
    <div className="instruction-container">
      <div className="instruction-go-home-button" onClick={handleGoBackHome}>
        Home
      </div>
      <h1 className="instruction-heading">{props.topic}</h1>
      <p className="instruction-description">{props.description}</p>
    </div>
  );
}

export default Instruction;
