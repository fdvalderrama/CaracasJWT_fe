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
        await api.get("/Auth");
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
      <div className="h-screen flex justify-center items-center">
        <h1 className="text-4xl font-bold mb-5">Home</h1>
        <button
          onClick={logout}
          className="bg-gray-400 px-2 py-3 rounded-4xl cursor-pointer active:bg-gray-600"
        >
          Log out
        </button>
      </div>
    );
  }
};

export default Home;
