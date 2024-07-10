//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
import React from "react";
import ReactDom from "react-dom";

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

ReactDom.render(
  <h1 className="heading" style={color}>
    {greeting}
  </h1>,
  document.getElementById("root")
);
