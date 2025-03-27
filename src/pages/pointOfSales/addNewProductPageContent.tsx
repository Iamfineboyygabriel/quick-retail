import React from "react";
import { Text } from "@mantine/core";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { OrderCreationStep } from "../../utils/orderCreationTypes";
import PageContainer from "../../layout/pageContainer";
import { useOrderCreation } from "../../components/General/orderContext/orderCreationContext";
import AddProductForm from "./addProductForm";



const AddNewProductPageContent: React.FC = () => {
  const navigate = useNavigate();
  const { currentStep, prevStep } = useOrderCreation();

  const handleBack = () => {
    if (currentStep === OrderCreationStep.SEARCH_PRODUCT) {
      navigate(-1);
    } else {
      prevStep();
    }
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
            <Text>Product Management</Text>
            <span className="mx-2">/</span>
            <Text
              c={
                currentStep === OrderCreationStep.SEARCH_PRODUCT
                  ? "black"
                  : "inherit"
              }
            >
              Add Product
            </Text>
            {(currentStep === OrderCreationStep.CONFIRM_PAYMENT ||
              currentStep === OrderCreationStep.CUSTOMER_RECEIPT) && (
              <>
                <span className="mx-2">/</span>
                <Text c="black" fw={500}>
                  {currentStep === OrderCreationStep.CONFIRM_PAYMENT
                    ? "Confirm Payment"
                    : "Customer Receipt"}
                </Text>
              </>
            )}
          </div>
        </div>
      </div>,
      <div key="2">
        <Text fw={500} size="xl" c="black">
         Add Product
        </Text>
      </div>,
    ];

    return subHeaders;
  };

  return (
    <PageContainer
      subHeaders={getSubHeaders()}
    >
      {/* Add your children components here */}
     <AddProductForm />
    </PageContainer>
  );
};

export default AddNewProductPageContent;