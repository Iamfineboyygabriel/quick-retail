import { Link } from "react-router-dom";
import { QuestionMark, Settings } from "../../../assets/svg";
import { ROUTES } from "../../../constants/routes";
import { useDashboard } from "../../../layout/dashboardContext";

export const DashboardHeader = () => {
  const { activeSection, setActiveSection } = useDashboard();

  type DashboardSection =
    | "Overview"
    | "Point of Sales"
    | "Financial Management"
    | "Reports"
    | "Admin";

  const navLinks = [
    {
      label: "Overview" as DashboardSection,
      to: ROUTES.dashboard,
      active: activeSection === "Overview",
    },
    {
      label: "Point of Sales" as DashboardSection,
      to: ROUTES.dashboard,
      active: activeSection === "Point of Sales",
    },
    {
      label: "Financial Management" as DashboardSection,
      to: ROUTES.dashboard,
      active: activeSection === "Financial Management",
    },
    {
      label: "Reports" as DashboardSection,
      to: ROUTES.dashboard,
      active: activeSection === "Reports",
    },
    {
      label: "Admin" as DashboardSection,
      to: ROUTES.dashboard,
      active: activeSection === "Admin",
    },
  ];

  const handleNavClick = (section: DashboardSection) => {
    setActiveSection(section);
  };

  return (
    <div className="bg-white text-black px-4 p-6 flex items-center justify-between gap-6">
      <nav className="flex justify-between w-full">
        <div className="flex gap-6">
          {navLinks.map((route, index) => (
            <Link
              key={index}
              to={route.to}
              className={`relative group pb-2 ${
                route.active
                  ? "text-orange-500 font-medium"
                  : "text-[#667185] font-normal" 
              }`}
              onClick={() => handleNavClick(route.label)}
            >
              <p className="cursor-pointer">{route.label}</p>
              {route.active ? (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-500"></div>
              ) : (
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></div>
              )}
            </Link>
          ))}
        </div>
        <div className="flex gap-3">
          <Settings />
          <QuestionMark />
        </div>
      </nav>
    </div>
  );
};
