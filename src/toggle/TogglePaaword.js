import { useState } from "react";

function TogglePassword() {
  const [visible, setVisible] = useState(false);

  const togglePassword = () => {
    setVisible(!visible);
  };

  return (
    <div>
      <input type={visible ? "text" : "password"} placeholder="Enter password" />
      <button onClick={togglePassword}>
        {visible ? "Hide" : "Show"}
      </button>
    </div>
  );
}

export default TogglePassword;
