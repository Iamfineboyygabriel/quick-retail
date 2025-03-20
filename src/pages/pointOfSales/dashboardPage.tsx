import { Text } from "@mantine/core";
import PageContainer from "../../layout/pageContainer";
import AnalyticsOverview from "../../components/dashboard/pointOfSales/dashboard/analyticsOverview";

const DashboardPage = () => {
  const subHeaders = [
    <Text fw={500} c="black">
      Dashboard
    </Text>,
  ];

  return (
    <PageContainer subHeaders={subHeaders}>
      <AnalyticsOverview />
    </PageContainer>
  );
};

export default DashboardPage;
