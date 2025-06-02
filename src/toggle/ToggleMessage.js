import { useState } from "react";

function ToggleMessage() {
  const [show, setShow] = useState(true); // true means show first message

  function toggleMsg() {
    setShow(!show); // toggle value on each click
  }

  return (
    <div>
     
      <button onClick={toggleMsg}>Toggle Message</button>
     <h2>{show ? "Hello, Welcome!" : "Goodbye, see you!"}</h2>
    </div>
  );
}

export default ToggleMessage;
