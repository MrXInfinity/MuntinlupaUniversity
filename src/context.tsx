import { createContext, useContext, useState } from "react";

type AuthContextType = {
  currentUser: string;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  login: (name: string) => void;
  signup: (name: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<React.ReactPortal> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const login = (name: string) => {
    setCurrentUser(name);
  };

  const signup = (name: string) => {
    setCurrentUser(name);
  };

  const logout = async () => {
    setCurrentUser("");
  };

  return (
    <AuthContext.Provider
      value={{ currentUser, login, signup, logout, setIsLoading }}
    >
      {!isLoading && children}
    </AuthContext.Provider>
  );
};

export default useAuth;
