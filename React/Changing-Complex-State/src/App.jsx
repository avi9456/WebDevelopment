import React, { useState } from "react";

function App() {
  // const [heading, setHeading] = useState("");
  // const [fname, setFname] = useState("");
  // const [lname, setLname] = useState("");
  // function handelClick(event) {
  //   setHeading(fname + " " + lname);
  //   event.preventDefault();
  // }
  // function handelChange(event) {
  //   if (event.target.name == "fName") {
  //     setFname(event.target.value);
  //   } else {
  //     setLname(event.target.value);
  //   }
  // }

  const [Fullname, setFullname] = useState({
    fname: "",
    lname: "",
  });
  const [heading, setHaeding] = useState("");
  function handelClick(event) {
    setHaeding(Fullname.fname + " " + Fullname.lname);
    event.preventDefault();
  }
  function handelChange(event) {
    const { name, value } = event.target;

    setFullname((preValue) => {
      if (name === "fName") {
        return {
          fname: value,
          lname: preValue.lname,
        };
      } else {
        return { fname: preValue.fname, lname: value };
      }
    });
  }
  return (
    <div className="container">
      <h1>Hello {heading}</h1>
      <form onSubmit={handelClick}>
        <input
          onChange={handelChange}
          name="fName"
          placeholder="First Name"
          value={Fullname.fname}
        />
        <input
          onChange={handelChange}
          name="lName"
          placeholder="Last Name"
          value={Fullname.lname}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
