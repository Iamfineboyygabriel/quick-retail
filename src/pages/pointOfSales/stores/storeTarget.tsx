import { Button, Text } from "@mantine/core";
import { ChevronRight, Plus } from "lucide-react";
import PageContainer from "../../../layout/pageContainer";
import { Link } from "react-router";
import { ROUTES } from "../../../constants/routes";
import AnalysisOverview from "../../../components/dashboard/pointOfSales/stores/analysisOverview";
import StoreOverviewTable from "../../../components/dashboard/pointOfSales/stores/storeOverviewTable";
import AddNewStore from "../../../components/dashboard/pointOfSales/stores/modals/addNewStore";
import { useState } from "react";

const StoreTarget = () => {
  const [isAddNewStoreOpen, setIsAddNewStoreOpen] = useState(false);
  
  const subHeaders = [
    <div key="1">
      <div className="flex items-center justify-between">
        <Text fw={500} size="xl" c="black">
          Stores
        </Text>
        <div className="flex gap-4">
          <Button
            variant="filled-primary"
            className="flex gap-1.5"
            style={{ padding: "0.8rem 1rem" }}
            onClick={() => setIsAddNewStoreOpen(true)}
          >
            Add New Store
            <Plus />
          </Button>
          <Link to={ROUTES.storeTarget}>
            <Button
              variant="outline-primary"
              className="flex gap-1.5"
              style={{ padding: "0.8rem 1rem" }}
            >
              Stores Target
              <ChevronRight />
            </Button>
          </Link>
        </div>
      </div>
    </div>,
  ];

  return (
    <PageContainer subHeaders={subHeaders}>
      <AnalysisOverview />
      <StoreOverviewTable />
      <AddNewStore
        opened={isAddNewStoreOpen}
        onClose={() => setIsAddNewStoreOpen(false)}
      />
    </PageContainer>
  );
};

export default StoreTarget;
