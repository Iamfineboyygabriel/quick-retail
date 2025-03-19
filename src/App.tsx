import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landingPage";
import DashboardLayout from "./layout/layout";
import ProductManagementPage from "./pages/productManagementPage";
import SalesProcessingPage from "./pages/salesProcessingPage";
import InventoryManagementPage from "./pages/inventoryManagementPage";
import CategoriesPage from "./pages/categoriesPage";
import HappyTimePage from "./pages/happyTimePage";
import StoresPage from "./pages/storesPage";
import ReportsPage from "./pages/reportsPage";
import ReturnsPage from "./pages/returnsPage";
import CustomerPage from "./pages/customerPage";
import DashboardPage from "./pages/dashboardPage";
import TransactionPage from "./pages/transactionPage";

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
