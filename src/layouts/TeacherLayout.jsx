import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

const TeacherLayout = () => {
  const { user } = useAuthContext();

  if (user.role !== "TEACHER") {
    return <Navigate to={"/dashboard"} />;
  }
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default TeacherLayout;
