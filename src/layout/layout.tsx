import { Outlet } from "react-router-dom";
import DashboardSidebar from "../components/dashboard/layout/dashboardSidebar";
import { DashboardHeader } from "../components/dashboard/layout/dashboardHeader";
import { DashboardProvider } from "./dashboardContext";

const DashboardLayout = () => {
  return (
    <DashboardProvider>
      <div className="flex h-screen overflow-hidden">
        <div className="fixed top-0 left-0 h-full w-[20rem] z-30 transform transition-transform duration-300 md:relative md:translate-x-0">
          <DashboardSidebar />
        </div>
        <div className="flex-1 flex flex-col w-full">
          <div className="sticky top-0 z-20 w-full">
            <DashboardHeader />
          </div>
          <div className="flex-1 overflow-auto">
            <Outlet />
          </div>
        </div>
      </div>
    </DashboardProvider>
  );
};

export default DashboardLayout;
