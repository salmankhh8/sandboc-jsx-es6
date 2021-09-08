import React from "react";
import ReactDOM from "react-dom";

const fname = "salman";
const lname = "khan";
const num = 7;

ReactDOM.render(
  <div>
    <h1>Hello {`${fname} ${lname}`}!</h1>
    <p>your lucky number is {num}</p>
  </div>,
  document.getElementById("root")
);
