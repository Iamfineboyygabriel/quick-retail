import { Button, Text } from "@mantine/core";
import { ChevronRight } from "lucide-react";
import PageContainer from "../../../layout/pageContainer";
import { Link } from "react-router";
import { ROUTES } from "../../../constants/routes";
import StoreTargetTable from "../../../components/dashboard/pointOfSales/stores/storeTargetTable";

const StoresPage = () => {
  const subHeaders = [
    <div key="1">
      <div className="flex items-center justify-between">
        <Text fw={500} size="xl" c="black">
          Store Target
        </Text>
        <div className="flex gap-4">
          <Link to={ROUTES.happyDiscountAnalytics}>
            <Button
              variant="filled-primary"
              className="flex gap-1.5"
              style={{ padding: "0.8rem 1rem" }}
            >
              Set New Store Target
              <ChevronRight />
            </Button>
          </Link>
        </div>
      </div>
    </div>,
  ];

  return (
    <PageContainer subHeaders={subHeaders}>
      <StoreTargetTable />
    </PageContainer>
  );
};

export default StoresPage;
