import React from "react";
import ReactDOM from "react-dom";

// ReactDOM.render(
//   <h1 style={{ color: "red" }}>Hello World!</h1>,
//   document.getElementById("root")
// );
const costumStyle = {
  color: "red",
  fontSize: "20px",
};
costumStyle.color = "blue";
ReactDOM.render(
  <h1 style={costumStyle}>Hello World!</h1>,
  document.getElementById("root")
);
