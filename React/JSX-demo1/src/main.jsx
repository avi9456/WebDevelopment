
import React from "react";
import ReactDom from "react-dom";

// ReactDom.render(<h1>Hello World!</h1>,document.getElementById("root"));
// it only take one element

ReactDom.render(
  <div>
    <h1>Hello World!</h1>
    <p>It's my first react app</p>
  </div>,
  document.getElementById("root")
);