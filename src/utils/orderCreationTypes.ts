export enum OrderCreationStep {
  SEARCH_PRODUCT = "SEARCH_PRODUCT",
  CONFIRM_PAYMENT = "CONFIRM_PAYMENT",
  CUSTOMER_RECEIPT = "CUSTOMER_RECEIPT",
}

export interface OrderCreationContextType {
  currentStep: OrderCreationStep;
  nextStep: () => void;
  prevStep: () => void;
}
