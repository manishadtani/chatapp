import { useEffect, useState } from "react";
import cookies from "js-cookie";
import axios from "axios";

const useGetAllUser = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [loading, setLoading] = useState(true); // Initially true rakhna better hai

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const token = cookies.get("jwt");
      const response = await axios.get("http://localhost:3000/user/alluser", {
        withCredentials: true, // "credentials: include" ka ye sahi tarika hai axios me
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setAllUsers(response.data);
    } catch (error) {
      console.log("Error in useGetAllUser: " + error);
    } finally {
      setLoading(false);
    }
  };

  // ✅ Hook ek array return karega jo directly useState se aaye
  return [allUsers, loading]; 
};

export default useGetAllUser;
