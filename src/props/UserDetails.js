import React, { useState } from "react";

function UserDetailses({ username, userage, hobbies }) {
  const [showHobbies, setShowHobbies] = useState(false);

  const toggleHobbies = () => {
    setShowHobbies(!showHobbies);
  };

  return (
    <div>
      <h2>Welcome</h2>
      <p>Name: {username}</p>
      <p>Age: {userage}</p>

      <button onClick={toggleHobbies}>
        {showHobbies ? "Hide Hobbies" : "Show Hobbies"}
      </button>

      {showHobbies && (
        <ul>
          {hobbies.map((hobby, index) => (
            <li key={index}>{hobby}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default UserDetailses;
