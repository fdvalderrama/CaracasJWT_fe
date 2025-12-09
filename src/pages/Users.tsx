import type { User } from "../types/User";

const Users = () => {
  const users: User[] = [
    { id: 1, name: "Daniel", email: "daniel@example.com", role: "admin" },
    { id: 2, name: "Fernando", email: "fernando@example.com", role: "cajero" },
  ];

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
};

export default Users;
