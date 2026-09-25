import {
  useState,
  createContext,
  type ReactNode,
} from "react";

import User from "../models/User";

type AuthContextType = {
  user: User | null;
  login: (username: string, password: string) => boolean;
  register: (username:string,password:string) => User | null;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const register = (username: string, password: string) => {
    const newUser = new User({
      username,
      password,
    });
    setUser(newUser);
    return newUser

  }

  const login = (username: string, password: string) => {
    const newUser = new User({
      username,
      password,
    });

    const success = newUser.login(username, password);

    if (success) {
      setUser(newUser);
    }

    return success;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout,register }}>
      {children}
    </AuthContext.Provider>
  );
};