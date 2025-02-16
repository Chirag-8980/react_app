import React from "react";
import AuthState from "./state/AuthState";

const MainContextProvider = ({ children }) => {
  return <AuthState>{children}</AuthState>;
};

export default MainContextProvider;
