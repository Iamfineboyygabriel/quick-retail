import React, { createContext, useState, useContext, ReactNode } from "react";
import { OrderCreationContextType } from "../formTypes";
import { OrderCreationStep } from "../../../utils/orderCreationTypes";

const OrderCreationContext = createContext<
  OrderCreationContextType | undefined
>(undefined);

export const OrderCreationProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [currentStep, setCurrentStep] = useState<OrderCreationStep>(
    OrderCreationStep.SEARCH_PRODUCT
  );

  const nextStep = () => {
    switch (currentStep) {
      case OrderCreationStep.SEARCH_PRODUCT:
        setCurrentStep(OrderCreationStep.CONFIRM_PAYMENT);
        break;
      case OrderCreationStep.CONFIRM_PAYMENT:
        setCurrentStep(OrderCreationStep.CUSTOMER_RECEIPT);
        break;
      default:
        break;
    }
  };

  const prevStep = () => {
    switch (currentStep) {
      case OrderCreationStep.CONFIRM_PAYMENT:
        setCurrentStep(OrderCreationStep.SEARCH_PRODUCT);
        break;
      case OrderCreationStep.CUSTOMER_RECEIPT:
        setCurrentStep(OrderCreationStep.CONFIRM_PAYMENT);
        break;
      default:
        break;
    }
  };

  return (
    <OrderCreationContext.Provider value={{ currentStep, nextStep, prevStep }}>
      {children}
    </OrderCreationContext.Provider>
  );
};

export const useOrderCreation = () => {
  const context = useContext(OrderCreationContext);
  if (context === undefined) {
    throw new Error(
      "useOrderCreation must be used within an OrderCreationProvider"
    );
  }
  return context;
};
