import {
  InActiveCategory,
  InActiveDashboardIcon,
  InActiveInventory,
  InActiveProductIcon,
  InActiveReturns,
  InActiveSalesIcon,
} from "../assets/svg";
import { ROUTES } from "../constants/routes";

export const PointOfSale = [
  { label: "Dashboard", href: ROUTES.test, icon: InActiveDashboardIcon },
  { label: "Product Management", href: ROUTES.test, icon: InActiveProductIcon },
  { label: "Sale Processing", href: ROUTES.test, icon: InActiveSalesIcon },
  { label: "Categories", href: ROUTES.test, icon: InActiveInventory },
  { label: "Returns and Refunds", href: ROUTES.test, icon: InActiveCategory },
  { label: "Customer", href: ROUTES.test, icon: InActiveReturns },
];

export const FinancialManagement = [
  { label: "Dashboard", href: ROUTES.test, icon: InActiveDashboardIcon },
  { label: "Customer", href: ROUTES.test, icon: InActiveReturns },
];

export const Reports = [
  { label: "Customer", href: ROUTES.test, icon: InActiveReturns },
];

export const Admin = [
  { label: "Customer", href: ROUTES.test, icon: InActiveReturns },
];
