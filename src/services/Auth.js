import React, { useState, useEffect } from "react";
import firebaseConfig from "../services/firebaseConfig";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = firebaseConfig.auth().onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe; // Cleanup function to unsubscribe when component unmounts
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
