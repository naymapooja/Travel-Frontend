
import { useEffect, useState, createContext, useContext } from "react";
import api from "../axiosinstance";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState({});
  const [isLoggedIn, setsLoggedIn] = useState(
    JSON.parse(localStorage.getItem("isLoggedIn")) || false
  );

  // useEffect(() => {
  //   async function fetchUser() {
  //     const hasLogin = JSON.parse(localStorage.getItem("isLoggedIn"));
  //     if (!hasLogin) return;

  //     try {
  //       const res = await api.get("/user/me");
  //       setUser(res.data.user);
  //       setsLoggedIn(true);
  //     } catch (error) {
  //       console.log("Auto-login failed:", error.response?.data || error.message);
  //       setUser({});
  //       setsLoggedIn(false);
  //       localStorage.setItem("isLoggedIn", JSON.stringify(false));
  //     }
  //   }

  //   fetchUser();
  // }, []);

  return (
    <AuthContext.Provider value={{ user, isLoggedIn, setUser, setsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
