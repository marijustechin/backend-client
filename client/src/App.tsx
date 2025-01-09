import { useEffect, useState } from "react";
import { apiDeleteUser, apiGetAllUsers } from "./api/users";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const allUsers = await apiGetAllUsers();
    setUsers(allUsers);
  };

  return (
    <main>
      <h1>Users</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        {users.map((user) => (
          <tbody key={user.email}>
            <tr>
              <td>{user.first_name}</td>
              <td>{user.email}</td>
              <td>
                <p
                  onClick={() => apiDeleteUser(user.id)}
                  className="p-2 cursor-pointer"
                >
                  Delete ❌
                </p>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </main>
  );
}

export default App;
