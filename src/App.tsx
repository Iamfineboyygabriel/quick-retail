import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/pointOfSales/landingPage";
import DashboardLayout from "./layout/layout";
import ProductManagementPage from "./pages/pointOfSales/productManagementPage";
import SalesProcessingPage from "./pages/pointOfSales/saleProcessing/salesProcessingPage";
import InventoryManagementPage from "./pages/pointOfSales/inventoryManagementPage";
import CategoriesPage from "./pages/pointOfSales/categoriesPage";
import HappyTimePage from "./pages/pointOfSales/happyTimePage";
import StoresPage from "./pages/pointOfSales/storesPage";
import ReportsPage from "./pages/pointOfSales/reportsPage";
import ReturnsPage from "./pages/pointOfSales/returnsPage";
import CustomerPage from "./pages/pointOfSales/customerPage";
import DashboardPage from "./pages/pointOfSales/dashboardPage";
import TransactionPage from "./pages/pointOfSales/transactionPage";
import CreateOrderPage from "./pages/pointOfSales/saleProcessing/createOrderPage";
import ViewOrderPage from "./pages/pointOfSales/saleProcessing/viewOrderPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardPage />} />
          <Route
            path="product-management"
            element={<ProductManagementPage />}
          />
          <Route path="sales" element={<SalesProcessingPage />} />
          <Route path="sales/create_order" element={<CreateOrderPage />} />
          <Route path="sales/view_order" element={<ViewOrderPage />} />
          <Route path="inventory" element={<InventoryManagementPage />} />
          <Route path="categories" element={<CategoriesPage />} />
          <Route path="returns" element={<ReturnsPage />} />
          <Route path="customer" element={<CustomerPage />} />
          <Route path="happy-time" element={<HappyTimePage />} />
          <Route path="transaction" element={<TransactionPage />} />
          <Route path="stores" element={<StoresPage />} />
          <Route path="reports" element={<ReportsPage />} />
        </Route>
      </Routes>
    </Router>
  );
}
