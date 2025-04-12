import TanTable from "../../../General/table";
import { loggedReturn } from "../../../../utils/mockData";
import { ColumnDef } from "@tanstack/react-table";
import { TableRowData } from "../../../../types";
import { Avatar, Text } from "@mantine/core";
import { PaidDot, UnpaidDot } from "../../../../assets/svg";
import imageSrc from "../../../../assets/images/productIMG.png";
import { Link } from "react-router";
import { ROUTES } from "../../../../constants/routes";

const ReturnsRefundsReport = () => {
  const columns: ColumnDef<TableRowData>[] = [
    {
      header: "Name",
      accessorKey: "name",
      cell: ({ row }) => (
        <div className="flex items-center gap-3">
          <Avatar
            src={imageSrc}
            alt={row.original.name as string}
            radius="md"
            size={40}
          />
          <div className="flex flex-col">
            <Text fw={500} c="black">
              {row.original.name}
            </Text>
            <Text fw={500} className="text-sm">
              ID:{" "}
              <span className="text-[#F16722]">{row.original.productCode}</span>
            </Text>
          </div>
        </div>
      ),
    },
    {
      header: "Date Returned",
      accessorKey: "dateReturned",
      cell: ({ row }) => (
        <Text c="textSecondary.7">{row.original.dateReturned}</Text>
      ),
    },
    {
      header: "Order ID",
      accessorKey: "orderId",
    },
    {
      header: "Customer",
      accessorKey: "customer",
      cell: ({ row }) => (
        <span className=" text-gray-900 text-sm font-medium">
          {row.original.customer}
        </span>
      ),
    },
    {
      header: "Returned Reason",
      accessorKey: "returnedReason",
    },
    {
      header: "Complaint Status",
      accessorKey: "complaintStatus",
      cell: ({ row }) => {
        const status = row.original.complaintStatus;
        return (
          <div
            className={`inline-flex items-center px-3 py-1 rounded-full font-medium text-sm ${
              status === "Resolved"
                ? "bg-[#ECFDF3] text-[#027A48]"
                : "bg-[#FFFAEB] text-[#B54708]"
            }`}
          >
            {status === "Resolved" ? <PaidDot /> : <UnpaidDot />}
            <span className="ml-2">{status}</span>
          </div>
        );
      },
    },
    {
      header: "",
      accessorKey: "action",
      cell: () => (
        <Link to={ROUTES.viewReturns}>
          <Text fw={600} c="customPrimary.10" className="cursor-pointer">
            View
          </Text>
        </Link>
      ),
    },
  ];

  return (
    <main className="w-full h-auto py-6 rounded-lg bg-white">
      <TanTable
        columnData={columns}
        data={loggedReturn}
        showSearch={false}
        showSortFilter={false}
        length={5}
        tableTitle={
          <div className="w-full flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            <div className="flex gap-2.5 items-center">
              <Text fw={500} size="xl" c="textSecondary.9">
                Logged Returns
              </Text>
              <div className="bg-[#FFEADF] rounded-full flex items-center py-0.5 px-3">
                <Text c="customPrimary.10">{loggedReturn.length}</Text>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="border border-[#E0E0E0] rounded-lg px-4 py-2 flex items-center text-sm text-[#344054] min-w-[230px]">
                14/01/2025 – 14/02/2025
              </div>
              <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-4 py-2 rounded-md font-medium text-sm">
                Export
              </button>
            </div>
          </div>
        }
      />
    </main>
  );
};

export default ReturnsRefundsReport;
