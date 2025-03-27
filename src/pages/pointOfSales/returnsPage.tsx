import { Button, Text } from "@mantine/core";
import PageContainer from "../../layout/pageContainer";
import ReturnsAnlytics from "../../components/dashboard/pointOfSales/returnsRefunds/returnsAnlytics";
import ReturnsTable from "../../components/dashboard/pointOfSales/returnsRefunds/returnsTable";

const ReturnsPage = () => {
  const subHeaders = [
    <div key="1">
      <div className="flex items-center justify-between">
        <Text fw={500} size="xl" c="black">
          Returns and Overview
        </Text>
        <Button variant="filled-primary">New Return Log</Button>
      </div>
    </div>,
  ];

  return (
    <PageContainer subHeaders={subHeaders}>
      <ReturnsAnlytics />
      <ReturnsTable />
    </PageContainer>
  );
};

export default ReturnsPage;
