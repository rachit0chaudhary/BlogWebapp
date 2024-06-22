import React from "react";
import { useSelector } from "react-redux";

function Test() {
  const user = useSelector((state) => {
    return state.test.user;
  });
  const isLoggedIn = useSelector((state) => state.test.isLoggedIn);
  // const user2 = useSelector((state) => state.user.user);
  // const isLoggedIn2 = useSelector((state) => state.user.isLoggedIn);

  console.log("User in Test component:", user);
  console.log("isLoggedIn in Test component:", isLoggedIn);
  // console.log("User in Test component:", user2);
  // console.log("User in Test component:", isLoggedIn2); // Log for verification

  if (!isLoggedIn) {
    return <div>Please log in</div>;
  }

  return (
    <div>
      <h2>User Profile</h2>
      <p style={{ color: "red" }}>Name: {user?.name}</p>
      <p>Email: {user?.email}</p>
      {/* Other profile information */}
    </div>
  );
}

export default Test;
