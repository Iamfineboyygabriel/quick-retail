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
import { ROUTES } from "./constants/routes";
import AddNewProduct from "./pages/pointOfSales/addNewProduct";
import AddBulkProduct from "./pages/pointOfSales/addBulkProduct";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardPage />} />
          <Route
            path={ROUTES.productManagement}
            element={<ProductManagementPage />}
          />
          <Route path={ROUTES.addNewProduct} element={<AddNewProduct />} />
          <Route path={ROUTES.addBulkProduct} element={<AddBulkProduct />} />
          <Route path={ROUTES.sales} element={<SalesProcessingPage />} />
          <Route path={ROUTES.createOrder} element={<CreateOrderPage />} />
          <Route
            path={ROUTES.inventory}
            element={<InventoryManagementPage />}
          />
          <Route path={ROUTES.category} element={<CategoriesPage />} />
          <Route path={ROUTES.returns} element={<ReturnsPage />} />
          <Route path={ROUTES.customer} element={<CustomerPage />} />
          <Route path={ROUTES.happyTime} element={<HappyTimePage />} />
          <Route path={ROUTES.transaction} element={<TransactionPage />} />
          <Route path={ROUTES.stores} element={<StoresPage />} />
          <Route path={ROUTES.report} element={<ReportsPage />} />
        </Route>
      </Routes>
    </Router>
  );
}
