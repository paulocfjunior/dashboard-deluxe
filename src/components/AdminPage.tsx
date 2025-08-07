import React from "react";
import { keyBy } from "lodash"; // PROBLEM 4: Importing full lodash for one function

const AdminPage = () => {
  const users = [
    { id: "a", name: "Alice" },
    { id: "b", name: "Bob" },
  ];
  const usersById = keyBy(users, "id"); // Using lodash
  console.log(usersById);

  return <h2>Admin Data Section</h2>;
};
export default AdminPage;
