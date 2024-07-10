import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      My Favourite Foods
    </h1>
    <div>
      <img
        src="https://images.pexels.com/photos/1927377/pexels-photo-1927377.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="Bacon"
      />

      <img
        src="https://images.pexels.com/photos/4873697/pexels-photo-4873697.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="Jamon"
      />

      <img
        src="https://images.pexels.com/photos/2764905/pexels-photo-2764905.jpeg"
        alt="Noodles"
      />
    </div>
  </div>,
  document.getElementById("root")
);
