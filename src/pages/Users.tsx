import { useEffect, useState } from "react";
import type { User } from "../types/User";
import api from "../services/axiosConfig";
import Loading from "../components/Loading";

const Users = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await api.get("users");
        setUsers(response.data);
        setIsLoading(false);
      } catch (e) {
        console.log(e);
      }
    };

    getUsers();
  }, []);

  if (isLoading) {
    return <Loading />;
  } else {
    return (
      <div className="h-screen flex flex-col justify-center items-center">
        <h1 className="text-5xl font-bold mb-10">Users</h1>
        <table>
          <thead>
            <tr className="bg-gray-300">
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr className="text-center" key={user.id}>
                <td className="px-2 py-2">{user.name}</td>
                <td className="px-2 py-2">{user.email}</td>
                <td className="px-2 py-2">{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
};

export default Users;
