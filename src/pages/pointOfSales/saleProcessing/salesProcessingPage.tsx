import { Text } from "@mantine/core";
import PageContainer from "../../../layout/pageContainer";
import CustomerOrdersTable from "../../../components/dashboard/pointOfSales/dashboard/orderTable";
import { ROUTES } from "../../../constants/routes";
import { Link } from "react-router";

const SalesProcessingPage = () => {
  const subHeaders = [
    <div key="1">
      <div className="flex justify-between">
        <Text fw={500} size="xl" c="black">
          Sale Processing
        </Text>
        <Link to={ROUTES.createOrder}>Create Order</Link>
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
