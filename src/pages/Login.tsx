import { useState, type ChangeEvent, type FormEvent } from "react";
import type { LoginRequest } from "../types/LoginRequest";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [loginRequest, setLoginRequest] = useState<LoginRequest>({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, type, value } = e.target;

    setLoginRequest((prev) => ({
      ...prev,
      [name]: type === "number" ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();

      const response = await fetch("http://localhost:5070/api/Auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginRequest),
      });

      if (!response.ok) {
        alert("Credenciales incorrectas");
        return;
      }

      const data = await response.text();
      localStorage.setItem("token", data);
      navigate("/home");
    } catch (e) {
      console.log(e);
    }
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
          name="email"
          placeholder="Email"
          className="bg-gray-50 py-2 px-5 mb-5"
          value={loginRequest.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="bg-gray-50  py-2 px-5 mb-8"
          value={loginRequest.password}
          onChange={handleChange}
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
