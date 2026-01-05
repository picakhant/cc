import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

const StudentLayout = () => {
  const {user} = useAuthContext();
  if (user.role !== "STUDENT") {
    return <Navigate to={"/dashboard"} />;
  }
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default StudentLayout;
