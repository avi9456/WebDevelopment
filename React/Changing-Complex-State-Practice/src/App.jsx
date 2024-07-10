import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: "",
  });
  function handlechange(event) {
    const { value, name } = event.target;
    setContact((prevalue) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevalue.lName,
          email: prevalue.email,
        };
      } else if (name === "lName") {
        return {
          fName: prevalue.fName,
          lName: value,
          email: prevalue.email,
        };
      } else {
        return {
          fName: prevalue.fName,
          lName: prevalue.lName,
          email: value,
        };
      }
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handlechange}
          value={contact.fName}
          name="fName"
          placeholder="First Name"
        />
        <input
          onChange={handlechange}
          value={contact.lName}
          name="lName"
          placeholder="Last Name"
        />
        <input
          onChange={handlechange}
          value={contact.email}
          name="email"
          placeholder="Email"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
