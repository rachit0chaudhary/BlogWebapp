import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setTest } from "./features/testSlice";

function Input() {
  const dispatched = useDispatch();
  const [input, setinput] = useState("");
  const [output, setoutput] = useState(["test1"]);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatched(setTest(input));
  };
  return (
    <div>
      <h1>give it</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setinput(e.target.value)} />
        <button type="submit">submit</button>
      </form>
      <h2>Display-</h2>
      {output.map((item) => (
        <p>{item}</p>
      ))}
      <Link to="/output" style={{ backgroundColor: "red" }}>
        Output
      </Link>
    </div>
  );
}

export default Input;
