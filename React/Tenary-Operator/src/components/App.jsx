import React from "react";
import Login from "./Login";

var isLogged = false;
function renderConditional() {
  if (isLogged) {
    return <h1>Hello</h1>;
  } else {
    return <Login />;
  }
}
function App() {
  // return (
  //   <div className="container">{(isLogged && <h1>Hello</h1> ) || <Login />}</div>
  // );
  return (
      <div className="container">{isLogged? <h1>Hello</h1> : <Login />}</div>
    );
}

export default App;
