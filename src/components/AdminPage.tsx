import React from "react";
import { keyBy } from "lodash-es";

const AdminPage = () => {
  const users = [
    { id: "a", name: "Alice" },
    { id: "b", name: "Bob" },
  ];
  
  const usersById = keyBy(users, "id");
  console.log(usersById);

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <p>Manage your application settings here.</p>
      <ul>
        {Object.entries(usersById).map(([id, user]) => (
          <li key={id}>
            {user.name} (ID: {user.id})
          </li>
        ))}
      </ul>
    </div>
  );
};
export default AdminPage;
