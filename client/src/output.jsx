import React from "react";
import { useSelector } from "react-redux";

function Output() {
  const out = useSelector((state) => state.test.in);
  console.log(out);
  return (
    <div style={{ backgroundColor: "red" }}>
      <h1>Display</h1>
      {out.map((item) => (
        <p>{item}</p>
      ))}
    </div>
  );
}

export default Output;
