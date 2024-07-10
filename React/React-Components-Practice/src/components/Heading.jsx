import React from "react";
import "./Heading.css";

const time = new Date().getHours();
let color = {
  color: "red",
};
let greeting = "Good Morning";
if (time >= 0 && time < 12) {
  greeting = "Good Morning";
  color.color = "red";
} else if (time >= 12 && time < 18) {
  greeting = "Good Afternoon";
  color.color = "green";
} else {
  greeting = "Good Evening";
  color.color = "blue";
}

function Heading(){
    return <h1 className="heading" style={color}>
    {greeting}
  </h1>
}

export default Heading;