import React from "react";
import MonsterTable from "../../components/MonsterTable";
import Instruction from "../../components/Instruction";
import monsters from "../../mocks/monsters";

function Exercise4() {
  return (
    <div className="page-container">
      <Instruction
        topic="Monster List Table App"
        description="Refactor Monster Table at components/MonsterTable/index.js List into Hook fashion"
      />
      <MonsterTable monsters={monsters} />
    </div>
  );
}

export default Exercise4;
