import React, { useState } from "react";

function Funlifecycle() {
  const [text, settext] = useState("hi");
  return (
    <div>
      <h1>{text}</h1>
    </div>
  );
}
export default Funlifecycle;
