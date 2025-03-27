import { OrderCreationProvider } from "../../components/General/orderContext/orderCreationContext";
import AddNewProductPageContent from "./addNewProductPageContent";


const AddNewProduct = () => {
  return (
    <OrderCreationProvider>
      <AddNewProductPageContent />
    </OrderCreationProvider>
  );
};
export default AddNewProduct

