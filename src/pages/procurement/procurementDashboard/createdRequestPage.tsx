import { Button, Tabs, Text } from "@mantine/core";
import PageContainer from "../../../layout/pageContainer";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router";
import { ROUTES } from "../../../constants/routes";
import AllRequestTable from "../../../components/dashboard/procurement/dashboard/allRequestTable";
import TotalApproveRequestTable from "../../../components/dashboard/procurement/dashboard/totalApproveRequestTable";
import TotalCancelledRequestTable from "../../../components/dashboard/procurement/dashboard/totalCancelledRequestTable";
import TotalPendingRequestTable from "../../../components/dashboard/procurement/dashboard/totalPendingRequestTable";

const CreatedRequestPage = () => {
  const subHeaders = [
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0">
      <Text fw={500} size="xl" c="black">
        Dashboard
      </Text>
      <div className="flex flex-row gap-2 md:gap-4 items-center">
        <Link to={ROUTES.happyDiscountAnalytics}>
          <Button
            variant="outline-primary"
            className="flex gap-1.5 items-center justify-center"
            style={{ padding: "0.8rem 1rem" }}
          >
            <span className="whitespace-nowrap">Budget Request</span>
          </Button>
        </Link>
        <Link to={ROUTES.newRequest}>
          <Button
            variant="filled-primary"
            className="flex gap-1.5 items-center justify-center"
            style={{ padding: "0.8rem 1rem" }}
          >
            <span className="whitespace-nowrap">Add New Request</span>
            <ChevronRight />
          </Button>
        </Link>
      </div>
    </div>,
  ];

  return (
    <PageContainer subHeaders={subHeaders}>
      <Tabs
        defaultValue="all"
        color="orange"
        className="w-full bg-[#fff] p-[2em]"
        // classNames={{
        //     tab: "px-4 py-2 rounded-md font-medium text-gray-700 data-[active=true]:bg-[#FFECE5] data-[active=true]:text-[#D14900] data-[active=true]:font-semibold",
        //     list: "bg-white p-4 flex gap-2",
        //   }}
      >
        <Tabs.List>
          <Tabs.Tab value="all">All Requests (0)</Tabs.Tab>
          <Tabs.Tab value="approved">Total Approved Requests (0)</Tabs.Tab>
          <Tabs.Tab value="pending">Total Pending Requests (0)</Tabs.Tab>
          <Tabs.Tab value="cancelled">Total Cancelled Requests (0)</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="all" pt="xs">
          <AllRequestTable />
        </Tabs.Panel>

        <Tabs.Panel value="approved" pt="xs">
          <TotalApproveRequestTable />
        </Tabs.Panel>

        <Tabs.Panel value="pending" pt="xs">
          <TotalPendingRequestTable />
        </Tabs.Panel>

        <Tabs.Panel value="cancelled" pt="xs">
          <TotalCancelledRequestTable />
        </Tabs.Panel>
      </Tabs>
    </PageContainer>
  );
};

export default CreatedRequestPage;
