import TanTable from "../../../General/table";
import { productTableData } from "../../../../utils/mockData";
import { ColumnDef } from "@tanstack/react-table";
import { TableRowData } from "../../../../types";
import { Dot } from "lucide-react";
import { Text } from "@mantine/core";

const ProductTable = () => {
  const columns: ColumnDef<TableRowData>[] = [
    {
      header: "Name",
      accessorKey: "name",
      cell: (props) => (
        <div className="flex flex-col gap-1">
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
      header: "Product Code",
      accessorKey: "productCode",
      cell: (props) => (
        <Text c="textSecondary.7">{props.row.original.timestamp}</Text>
      ),
    },
    {
      header: "Location",
      accessorKey: "customer",
    },
    {
      header: "Category",
      accessorKey: "category",
    },
    {
      header: "Selling Price",
      accessorKey: "sellingPrice",
      cell: (props) => {
        const status = props.row.original.status;
        return (
          <div
            className={`px-2 py-1 flex w-20  rounded-full font-medium text-sm ${
              status === "Paid"
                ? "bg-[#ECFDF3] text-[#027A48]"
                : "bg-[#FFFAEB] text-[#B54708]"
            }`}
          >
            <Dot />
            {status}
          </div>
        );
      },
    },
    {
      header: "Stock Level",
      accessorKey: "stockLevel",
      cell: (props) => (
        <span className="font-medium text-center">
          {props.row.original.items}
        </span>
      ),
    },
    {
      header: "Discount Status",
      accessorKey: "discountStatus",
      cell: () => (
        <button>
          <Text fw={700} c="customPrimary.10">
            View Order
          </Text>
        </button>
      ),
    },
  ];
  return (
    <main className="w-full h-auto px-4 py-6 rounded-lg bg-white">
      <TanTable
        columnData={columns}
        data={productTableData}
        showSearch
        showSortFilter
        searchPlaceholder="Search by Name, Product code etc."
        length={5}
        tableTitle={
          <div>
            <Text fw={500} size="xl" c="textSecondary.9">
               Products
            </Text>
          </div>
        }
      />
    </main>
  );
};

export default ProductTable;
