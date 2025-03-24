import { Button, Text } from "@mantine/core";
import PageContainer from "../../../layout/pageContainer";
import SearchProduct from "../../../components/dashboard/pointOfSales/salesProcessing/searchProduct";
import { ChevronLeft } from "lucide-react";
import SearchCustomer from "../../../components/dashboard/pointOfSales/salesProcessing/searchCustomer";
import PaymentDetails from "../../../components/dashboard/pointOfSales/salesProcessing/paymentDetails";
import { useNavigate } from "react-router";

const CreateOrderPage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    return navigate(-1);
  };
  const subHeaders = [
    <div key="1" className="py-2.5">
      <div className="flex gap-8 items-center">
        <button
          onClick={handleBack}
          className="flex cursor-pointer gap-2 items-center"
        >
          <ChevronLeft />
          <Text fw={500} c="black">
            Back
          </Text>
        </button>
        <div className="flex items-center">
          <Text>
            Sales processing
            <span className="mx-2">/</span>
          </Text>
          <Text c="black">Create Order</Text>
        </div>
      </div>
    </div>,
    <div key="2">
      <Text fw={500} size="xl" c="black">
        Create Order
      </Text>
    </div>,
  ];

  const bottomButtons = [
    <div className="flex gap-4 justify-end">
      <Button variant="outline-primary">Cancel</Button>
      <Button variant="filled-primary">Create Order</Button>
    </div>,
  ];

  return (
    <PageContainer subHeaders={subHeaders} subHeaderButtom={bottomButtons}>
      <SearchProduct />
      <SearchCustomer />
      <PaymentDetails />
    </PageContainer>
  );
};

export default CreateOrderPage;
