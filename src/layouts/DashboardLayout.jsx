import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div>
        this is nav bar
      <Outlet />
    </div>
  );
};

export default DashboardLayout;
