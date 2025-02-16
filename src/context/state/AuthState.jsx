import React from "react";
import { AuthContext } from "../CreateContext";

const AuthState = ({ children }) => {
  return (
    <AuthContext.Provider value={{ name: "Chirag" }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthState;
