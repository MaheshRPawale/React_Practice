import React from "react";

function UserInfos(props) {
  const { username, userage, userinfo } = props;

  // Optional: Avoid error if userinfo is missing
  if (!userinfo) {
    return <p>User info is not available</p>;
  }

  return (
    <div>
      <h2>User Info</h2>
      <p>Name: {username}</p>
      <p>Age: {userage}</p>
      <p>Salary: {userinfo.salary}</p>
      <p>Address: {userinfo.address}</p>
      <p>Department: {userinfo.department}</p>
    </div>
  );
}

export default UserInfos;
