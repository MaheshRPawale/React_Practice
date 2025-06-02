// ✅ At the top
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [reveCount, ReveSetCount]=useState(20);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleClick}>Increase</button>
      <h2>Count:{reveCount}</h2>
      <button onClick={()=>ReveSetCount(reveCount-1)}>Update Reverse NUmber </button> 
    </div>
  );
}

export default Counter; // ✅ default export required
