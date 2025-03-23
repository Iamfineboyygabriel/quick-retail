import { Text } from "@mantine/core";
import PageContainer from "../../../layout/pageContainer";
import CustomerOrdersTable from "../../../components/dashboard/pointOfSales/dashboard/orderTable";

const SalesProcessingPage = () => {
  const subHeaders = [
    <div key="1">
      <div className="flex justify-between">
        <Text fw={500} size="xl" c="black">
          Sale Processing
        </Text>
      </div>
    </div>,
  ];

  return (
    <PageContainer subHeaders={subHeaders}>
      <CustomerOrdersTable />
    </PageContainer>
  );
};

export default SalesProcessingPage;
