export const DashboardHeader = ({
  toggleSidebar,
}: {
  toggleSidebar: () => void;
}) => {
  console.log("toggle", toggleSidebar);
  return (
    <div className="bg-white text-black px-4 p-4 flex items-center justify-between gap-6">
      dashboardHeader
    </div>
  );
};
