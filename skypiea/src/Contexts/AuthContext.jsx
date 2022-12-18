import { createContext, useState } from "react";
export const AuthContext = createContext();
export default function AuthContextprovider({ children }) {
  const [isAuth, setIsAuth] = useState(false);
  const [prompt, setPrompt] = useState(false);
  const login = () => {
    setIsAuth(true);
  };
  const logout = () => {
    setIsAuth(false);
  };
  return (
    <AuthContext.Provider value={{ isAuth, login, logout, prompt, setPrompt }}>
      {children}
    </AuthContext.Provider>
  );
}
