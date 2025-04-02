import React from "react";
import { Text } from "@mantine/core";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import PageContainer from "../../layout/pageContainer";
import AddProductForm from "./addProductForm";

const AddBulkProduct: React.FC = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const getSubHeaders = () => {
    const backButton = (
      <button
        onClick={handleBack}
        className="flex cursor-pointer gap-2 items-center"
      >
        <ChevronLeft />
        <Text fw={500} c="black">
          Back
        </Text>
      </button>
    );

    const subHeaders = [
      <div key="1" className="py-2.5">
        <div className="flex gap-8 items-center">
          {backButton}
          <div className="flex items-center">
            <Text>In-store management</Text>
              <>
                <span className="mx-2">/</span>
                <Text c="black" fw={500}>
                    Add Product
                </Text>
              </>
          </div>
        </div>
      </div>,
      <div key="2">
        <Text fw={500} size="xl" c="black">
          Add Bulk Products
        </Text>
      </div>,
    ];

    return subHeaders;
  };

  return (
    <PageContainer
      subHeaders={getSubHeaders()}
    >
      <AddProductForm />
    </PageContainer>
  );
};

export default AddBulkProduct;
