import { Button, Text } from "@mantine/core";
import PageContainer from "../../layout/pageContainer";
import InventoryTable from "../../components/dashboard/pointOfSales/inventoryManagement/inventoryTable";

const InventoryManagementPage = () => {
  const subHeaders = [
    <div key="1">
      <div className="flex items-center justify-between">
        <Text fw={500} size="xl" c="black">
          Inventory
        </Text>
        <Button variant="filled-primary">Update Inventory</Button>
      </div>
    </div>,
  ];

  return (
    <PageContainer subHeaders={subHeaders}>
      <InventoryTable />
    </PageContainer>
  );
};

export default InventoryManagementPage;
