import { useState, type FormEvent } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5070/api/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    const data = await response.json();

    console.log(data);
  };

  return (
    <div className="h-screen w-full flex justify-center items-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col py-20 px-20 bg-white rounded-4xl"
      >
        <h3 className="text-2xl font-bold text-center pb-8">Login</h3>
        <input
          type="email"
          placeholder="Email"
          className="bg-gray-50 py-2 px-5 mb-5"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="bg-gray-50  py-2 px-5 mb-8"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="py-2 px-5 bg-blue-400 rounded-4xl text-white font-semibold cursor-pointer active:bg-blue-600"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
