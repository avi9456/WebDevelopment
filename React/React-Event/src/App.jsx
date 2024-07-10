import React, { useState } from "react";
function App() {
  const [isMouseOver, setColor] = useState(false);
  function setBlack() {
    setColor(true);
  }
  function setWhite() {
    setColor(false);
  }
  return (
    <div className="container">
      <h1>Hello</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: isMouseOver ? "black" : "white" }}
        onMouseOver={setBlack}
        onMouseOut={setWhite}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
