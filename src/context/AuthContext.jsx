import { createContext, useContext } from "react";
import { Navigate } from "react-router-dom";
import { userVerifyIsLogin } from "../react-query/auth";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const { data, isLoading } = userVerifyIsLogin();

  if (isLoading) {
    return <>Loading....</>;
  }

  if (!data.isLogin) {
    return <Navigate to={"/"} />;
  }

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => useContext(AuthContext);
