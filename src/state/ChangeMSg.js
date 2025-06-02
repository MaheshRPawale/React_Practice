import { useState } from "react";

function ChangeMsg() {
  const [msg, setNewMsg] = useState("click here i will show something");

  const handleClick = () => {
    setNewMsg("nothing Go Home"); // only set a string
  };

  return (
    <div>
      <h2>{msg}</h2>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default ChangeMsg;
