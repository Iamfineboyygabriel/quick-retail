import { ColumnDef } from "@tanstack/react-table";
import { TableRowData } from "../../../../types";
import { Switch, Text } from "@mantine/core";
import TanTable from "../../../General/table";
import {
  storeOverviewData,
  storeTargetOrder,
} from "../../../../utils/mockData";
import { Link } from "react-router";
import { ROUTES } from "../../../../constants/routes";
import { InactiveIcon, PaidDot } from "../../../../assets/svg";
import { useState } from "react";

const StoreOverviewTable = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  const columns: ColumnDef<TableRowData>[] = [
    {
      header: "Store Name",
      accessorKey: "storeName",
      cell: (props) => (
        <div className="flex flex-col">
          <Text fw={500} c="#1D2739">
            {props.row.original.storeName}
          </Text>
          <Text fw={400} className="text-sm">
            Store ID:{" "}
            <span className="text-[#1D2739] font-medium">
              {props.row.original.storeId}
            </span>
          </Text>
        </div>
      ),
    },
    {
      header: "Store Size",
      accessorKey: "store",
      cell: (props) => (
        <div className="flex flex-col">
          <Text>
            GLA:
            <span className="text-[#1D2739] font-medium ml-1">
              {props.row.original.storeSizeA}
            </span>
          </Text>
          <Text>
            GLA:{" "}
            <span className="text-black font-medium">
              {props.row.original.storeSizeA}
            </span>
          </Text>
        </div>
      ),
    },
    {
      header: "Store Location",
      accessorKey: "location",
      cell: (props) => (
        <Text c={"#1D2739"} fw={500}>
          {props.row.original.location}
        </Text>
      ),
    },
    {
      header: "Date Created",
      accessorKey: "dateCreated",
      cell: ({ row }) => (
        <Text className="text-sm font-medium">{row.original.dateCreated}</Text>
      ),
    },
    {
      header: "Total Customers",
      accessorKey: "totalCustomers",
      cell: ({ row }) => (
        <Text className="text-sm font-medium">{row.original.dateCreated}</Text>
      ),
    },
    {
      header: "Status",
      accessorKey: "status",
      cell: (props) => {
        const status = props.row.original.status;
        return (
          <div className="flex items-center gap-6">
            <div
              className={`inline-flex items-center px-3 py-1 rounded-full font-medium text-sm ${
                status === "Active"
                  ? "bg-[#ECFDF3] text-[#027A48]"
                  : "bg-[#F2F4F7] text-[#344054]"
              }`}
            >
              {status === "Active" ? <PaidDot /> : <InactiveIcon />}
              <span className="ml-2">{status}</span>
            </div>
            <Switch
              checked={isEnabled}
              onChange={(event) => setIsEnabled(event.target.checked)}
              className={`${
                isEnabled ? "text-orange-600" : "text-gray-300"
              } relative inline-flex h-6 w-12 items-center rounded-full transition`}
              size="md"
            />
          </div>
        );
      },
    },
    {
      header: "",
      accessorKey: "action",
      cell: () => (
        <Link to={ROUTES.viewStore}>
          <Text fw={600} c="customPrimary.10" className="cursor-pointer">
            View
          </Text>
        </Link>
      ),
    },
  ];
  return (
    <div>
      <main className="w-full h-auto py-6 rounded-lg bg-white">
        <TanTable
          columnData={columns}
          data={storeOverviewData}
          showSearch
          showSortFilter
          searchPlaceholder="Search orders"
          length={5}
          tableTitle={
            <div className="flex gap-2.5">
              <Text fw={500} size="xl" c="textSecondary.9">
                Stores Overview
              </Text>
              <div className="bg-[#FFEADF] rounded-full flex items-center py-0.5 px-3">
                <Text c="customPrimary.10">{storeTargetOrder.length}</Text>
              </div>
            </div>
          }
        />
      </main>
    </div>
  );
};

export default StoreOverviewTable;
