import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../components/layout/DashboardLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [],
  },
]);
