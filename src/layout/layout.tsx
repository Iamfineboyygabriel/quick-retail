import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import DashboardSidebar from "../components/dashboard/layout/dashboardSidebar";
import { DashboardHeader } from "../components/dashboard/layout/dashboardHeader";

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsSidebarOpen(true);
      } else {
        setIsSidebarOpen(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex h-screen">
      <div
        className={`fixed top-0 left-0 h-full w-[20rem] z-30 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 md:relative md:translate-x-0`}
      >
        <DashboardSidebar toggleSidebar={toggleSidebar} />
      </div>

      <div className="flex-1 flex flex-col w-full md:w-[calc(100%-20rem)]">
        <div className="sticky top-0 z-40 w-full">
          <DashboardHeader toggleSidebar={toggleSidebar} />
        </div>

        <div className="flex-1 p-4 md:p-6 overflow-auto">
          <div className="p-4 md:p-8 bg-[#F2F4F7] min-h-full rounded-lg">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
