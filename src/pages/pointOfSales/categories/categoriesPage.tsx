import { Button, Text } from "@mantine/core";
import PageContainer from "../../../layout/pageContainer";
import { Plus } from "lucide-react";
import CategoriesTable from "../../../components/dashboard/pointOfSales/categories/categoriesTable";
import { useState } from "react";
import CreateNewCategory from "../../../components/dashboard/pointOfSales/categories/modals/createNewCategory";

const CategoriesPage = () => {
  const [isCreateCategoryOpen, setIsCreateCategoryOpen] = useState(false);

  const subHeaders = [
    <div key="1">
      <div className="flex items-center justify-between">
        <Text fw={500} size="xl" c="black">
          Categories
        </Text>
        <Button
          variant="filled-primary"
          onClick={() => setIsCreateCategoryOpen(true)}
        >
          Create New
          <Plus className="font-semibold" />
        </Button>
      </div>
    </div>,
  ];
  return (
    <PageContainer subHeaders={subHeaders}>
      <CategoriesTable />
      <CreateNewCategory
        opened={isCreateCategoryOpen}
        onClose={() => setIsCreateCategoryOpen(false)}
      />
    </PageContainer>
  );
};

export default CategoriesPage;
