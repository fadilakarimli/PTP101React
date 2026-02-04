import { createContext, useContext, useEffect, useState } from "react";
import { getUsers, registerUser } from "../services/authService";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const register = async (data) => {
    const users = await getUsers();

    const exists = users.find(
      (u) => u.email === data.email || u.username === data.username
    );

    if (exists) {
      throw new Error("Bu email və ya username artıq mövcuddur");
    }

    await registerUser(data);
  };

  const login = async (loginValue, password) => {
    const users = await getUsers();

    const foundUser = users.find(
      (u) =>
        (u.email === loginValue || u.username === loginValue) &&
        u.password === password
    );

    if (!foundUser) {
      throw new Error("Login və ya şifrə yanlışdır");
    }

    setUser(foundUser);
    localStorage.setItem("user", JSON.stringify(foundUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
