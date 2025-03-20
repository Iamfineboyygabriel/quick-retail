import { Text } from "@mantine/core";
import PageContainer from "../../layout/pageContainer";
import AnalyticsOverview from "../../components/dashboard/pointOfSales/dashboard/analyticsOverview";
import SalesOverview from "../../components/dashboard/pointOfSales/dashboard/salesOverview";
import CustomerOrdersTable from "../../components/dashboard/pointOfSales/dashboard/orderTable";

const DashboardPage = () => {
  const subHeaders = [
    <Text fw={500} c="black">
      Dashboard
    </Text>,
  ];

  return (
    <PageContainer subHeaders={subHeaders}>
      <AnalyticsOverview />
      <SalesOverview />
      <CustomerOrdersTable />
    </PageContainer>
  );
};

export default DashboardPage;
