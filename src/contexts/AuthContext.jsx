import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    // Örnek olarak basit bir kullanıcı doğrulama
    if (email === 'test@test.com' && password === 'password') {
      setUser({ email });
    } else {
      throw new Error('Geçersiz kullanıcı bilgileri');
    }
  };

  const register = (email, password) => {
    // Burada kaydolan kullanıcıyı yönetebilirsiniz
    setUser({ email });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
