import { Outlet } from "react-router-dom";
import Navbar from "../ui/Navbar";

const DashboardLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default DashboardLayout;
