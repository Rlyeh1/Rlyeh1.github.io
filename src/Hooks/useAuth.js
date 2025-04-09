// src/hooks/useAuth.js
import { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';

const  useAuth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setUser(decoded);
      } catch (error) {
        console.error("Invalid token:", error);
        localStorage.removeItem('token'); // Clean up invalid token
      }
    }
  }, []);

  return user;
}
export default useAuth;