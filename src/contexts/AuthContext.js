import React, { createContext, useState, useEffect, useContext } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate checking for a token or user session
    const token = localStorage.getItem('authToken');
    if (token) {
      // In a real app, you would validate the token with your backend
      setIsAuthenticated(true);
      setUser({ name: 'Test User' }); // Placeholder user data
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    setLoading(true);
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        if (email === 'test@example.com' && password === 'password') {
          localStorage.setItem('authToken', 'mock-token');
          setIsAuthenticated(true);
          setUser({ name: 'Test User' });
          resolve({ success: true });
        } else {
          resolve({ success: false, message: 'Invalid credentials' });
        }
        setLoading(false);
      }, 1000);
    });
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);