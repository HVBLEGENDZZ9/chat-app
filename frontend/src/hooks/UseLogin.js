import { useState } from "react";
import { useAuthContext } from "../context/authContext";
import toast from "react-hot-toast";

const UseLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const login = async ({ userName, password }) => {
    const success = handleInputErrors({ userName, password });
    if (!success) return;
    setLoading(true);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userName, password }),
      });

      const data = await res.json();

      if (data.error) {
        throw new Error(data.error);
      }

      localStorage.setItem("user-info", JSON.stringify(data));
      setAuthUser(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, login };
};

export default UseLogin;

const handleInputErrors = ({ userName, password }) => {
  if (!userName || !password) {
    toast.error("Please fill in all the fields");
    return false;
  }
  return true;
};
