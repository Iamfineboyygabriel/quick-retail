import TanTable from "../../../General/table";
import { customerOrders } from "../../../../utils/mockData";
import { ColumnDef } from "@tanstack/react-table";
import { TableRowData } from "../../../../types";
import { Text } from "@mantine/core";
import { PaidDot, UnpaidDot } from "../../../../assets/svg";

const CustomerOrdersTable = () => {
  const columns: ColumnDef<TableRowData>[] = [
    {
      header: "Order ID",
      accessorKey: "id",
      cell: (props) => (
        <div className="flex flex-col">
          <Text fw={500} c="black">
            {props.row.original.id}
          </Text>
          <Text fw={500}>
            Total Items:
            <span className="ml-1 text-black">{props.row.original.items}</span>
          </Text>
        </div>
      ),
    },
    {
      header: "Date & Time",
      accessorKey: "timestamp",
      cell: (props) => (
        <Text c="textSecondary.7">{props.row.original.timestamp}</Text>
      ),
    },
    {
      header: "Customer",
      accessorKey: "customer",
    },
    {
      header: "Amount",
      accessorKey: "amount",
    },
    {
      header: "Status",
      accessorKey: "status",
      cell: (props) => {
        const status = props.row.original.status;
        return (
          <div
            className={`px-2 py-1 flex items-center justify-start w-24 rounded-full font-medium text-sm ${
              status === "Paid"
                ? "bg-[#ECFDF3] text-[#027A48]"
                : "bg-[#FFFAEB] text-[#B54708]"
            }`}
          >
            {status === "Paid" ? <PaidDot /> : <UnpaidDot />}
            <span className="ml-2">{status}</span>
          </div>
        );
      },
    },
    {
      header: "Items",
      accessorKey: "items",
      cell: (props) => (
        <span className="font-medium text-center">
          {props.row.original.items}
        </span>
      ),
    },
    {
      header: "",
      accessorKey: "action",
      cell: () => (
        <Text fw={700} c="customPrimary.10" className="cursor-pointer">
          View Order
        </Text>
      ),
    },
  ];

  return (
    <main className="w-full h-auto px- py-8 rounded-lg bg-white">
      <TanTable
        columnData={columns}
        data={customerOrders}
        showSearch
        showSortFilter
        searchPlaceholder="Search orders"
        length={5}
        tableTitle={
          <div className="flex gap-2.5">
            <Text fw={500} size="xl" c="textSecondary.9">
              Recent Orders
            </Text>
            <div className="bg-[#FFEADF] rounded-full flex items-center py-0.5 px-3">
              <Text c="customPrimary.10">100</Text>
            </div>
          </div>
        }
      />
    </main>
  );
};

export default CustomerOrdersTable;
