import React from "react";

import Board from "./Board";

function App({knightPosition}) {
  return (
    <div style={{ height: "500px" }}>
      <Board knightPosition={knightPosition} />
    </div>
  );
}

export default App;
