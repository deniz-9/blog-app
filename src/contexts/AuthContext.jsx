import React, { createContext, useState, useContext } from 'react';
import { loginUser, registerUser } from '../api/blogAPI';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Kullanıcı girişi
  const login = async (email, password) => {
    try {
      const loggedInUser = await loginUser(email, password);
      setUser(loggedInUser);
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  // Yeni kullanıcı kaydı
  const register = async (email, password) => {
    try {
      const newUser = await registerUser({ email, password });
      setUser(newUser);
    } catch (error) {
      console.error('Registration failed', error);
    }
  };

  // Kullanıcı çıkışı
  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
