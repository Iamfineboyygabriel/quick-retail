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

          <Menu.Dropdown>
            <Menu.Item onClick={() => console.log("Option 1 clicked")}>
              Option 1
            </Menu.Item>
            <Menu.Item onClick={() => console.log("Option 2 clicked")}>
              Option 2
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
