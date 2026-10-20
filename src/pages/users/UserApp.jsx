import { useState } from "react";

const baseUrl = "https://jsonplaceholder.typicode.com/users";

export const UserApp = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const res = await fetch(baseUrl);
      const data = await res.json();
      console.log(data);
      setUsers(data);
    } catch (error) {
      console.error(error);
    }

  };
  // fetchUsers();

  return <div>UserApp</div>;
};
