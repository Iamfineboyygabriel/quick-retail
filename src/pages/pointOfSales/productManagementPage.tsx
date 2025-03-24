import PageContainer from "../../layout/pageContainer";
import ProductTable from "../../components/dashboard/pointOfSales/productManagement/productTable";
import { Menu, Button, Text } from "@mantine/core";
// import { IconChevronDown } from "@tabler/icons-react";

const ProductManagementPage = () => {
  const subHeaders = [
    <div className="justify-between flex items-center">
      <Text fw={500} size="xl" c="black">
        Product Management
      </Text>

      <div>
        <Menu>
          <Menu.Target>
            <Button
              size="md"
              className="flex items-center px-4 py-2 rounded-full text-white"
              style={{
                background: "linear-gradient(to bottom, #F97316, #EA580C)", // Orange gradient
              }}
            >
              Add New Product
              {/* <IconChevronDown size={18} className="ml-2" /> */}
            </Button>
          </Menu.Target>

          <Menu.Dropdown
            style={{
              backgroundColor: "white", // White background
              borderRadius: "8px", // Rounded corners
              padding: "10px", // Add spacing inside
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Soft shadow effect
            }}
          >
            <Menu.Item
              style={{
                fontSize: "14px",
                padding: "8px 16px",
                color: "#333",
              }}
              onClick={() => console.log("Add product clicked")}
            >
              Add a product
            </Menu.Item>
            <Menu.Item
              style={{
                fontSize: "14px",
                padding: "8px 16px",
                color: "#333",
              }}
              onClick={() => console.log("Option 2 clicked")}
            >
              Add bulk products
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </div>
    </div>,
  ];
  return (
    <PageContainer subHeaders={subHeaders}>
      <ProductTable />
    </PageContainer>
  );
};

export default ProductManagementPage;
