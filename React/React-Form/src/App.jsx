import React, { useState } from "react";

function App() {
  // const [name, setName] = useState("");
  // const [isSubmit, setIsSubmit] = useState(false);
  // function handleChange(event) {
  //   setName(event.target.value);
  // }
  // function handleClick() {
  //   setIsSubmit(isSubmit ? false : true);
  // }
  const [name, setName] = useState("");
  const [Heading, setHeading] = useState("");
  function handleChange(event) {
    setName(event.target.value);
  }
  function handleClick() {
    setHeading(name);
  }
  return (
    <div className="container">
      <h1>Hello {Heading}</h1>
      <input
        onChange={handleChange}
        type="text"
        placeholder="What's your name?"
        value={name}
      />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}

export default App;
