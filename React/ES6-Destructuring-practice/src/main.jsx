// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import cars from "./Cars";
const [honda, tesla] = cars;
const [{ topSpeed: teslaTopSpeed }, [teslaTopColour]] = [
  tesla.speedStats,
  tesla.coloursByPopularity,
];
const [[hondaTopColour], { topSpeed: hondaTopSpeed }] = [
  honda.coloursByPopularity,
  honda.speedStats,
];
console.log(typeof teslaTopSpeed);
ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
      <th>Top Color</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
