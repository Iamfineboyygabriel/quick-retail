import { Button, Text } from "@mantine/core";
import { ChevronRight, Plus } from "lucide-react";
import PageContainer from "../../layout/pageContainer";
import DiscountTable from "../../components/dashboard/pointOfSales/happyTime/discountTable";

const HappyTimePage = () => {
  const subHeaders = [
    <div key="1">
      <div className="flex items-center justify-between">
        <Text fw={500} size="xl" c="black">
          Discount Promotion
        </Text>
        <div className="flex gap-4">
          <Button
            variant="outline-primary"
            className="flex gap-1.5"
            style={{ padding: "0.8rem 1rem" }}
          >
            Discount Analytics
            <ChevronRight />
          </Button>
          <Button
            variant="filled-primary"
            className="flex gap-1.5"
            style={{ padding: "0.8rem 1rem" }}
          >
            Create Discount
            <Plus size={24} />
          </Button>
        </div>
      </div>
    </div>,
  ];

  return (
    <PageContainer subHeaders={subHeaders}>
      <DiscountTable />
    </PageContainer>
  );
};

export default HappyTimePage;
