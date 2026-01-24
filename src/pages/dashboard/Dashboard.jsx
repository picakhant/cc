import { useEffect } from "react";
import { useAuthContext } from "../../context/AuthContext";
import { Navigate } from "react-router-dom";

const Dashboard = () => {
  const { user } = useAuthContext();

  if (user.role) {
    return <Navigate to={"/dashboard/" + user.role.toLowerCase()} />;
  }

  return <div>Dashboard Home</div>;
};

export default Dashboard;
