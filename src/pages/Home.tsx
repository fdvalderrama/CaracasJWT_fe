import { useEffect, useState } from "react";
import api from "../services/axiosConfig";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const validateToken = async () => {
      try {
        await api.get("validateToken");
        setIsLoading(false);
      } catch (e) {
        console.log(e);
      }
    };

    validateToken();
  }, []);

  const logout = () => {
    localStorage.setItem("token", "");
    navigate("/");
  };

  if (isLoading) {
    return <Loading />;
  } else {
    return (
      <div className="h-screen flex flex-col justify-center items-center">
        <h1 className="text-7xl font-bold mb-8">Home</h1>
        <button
          onClick={logout}
          className="bg-red-400 px-4 py-2 rounded-4xl cursor-pointer active:bg-red-600 font-semibold text-xl"
        >
          Log out
        </button>
      </div>
    );
  }
};

export default Home;
